import {Mapping, Put, Body, Param, NotFoundException, Adapter} from "@tsclean/core";
import {ADD_COMMENT_SERVICE, IAddCommentService} from "@/domain/use-cases";
import {Auth, ValidateFields, validateObjectId} from "@/infrastructure/entry-points";
import {ILoadPostByIdRepository, LOAD_POST_BY_ID_REPOSITORY} from "@/domain/models";

@Mapping('api/v1/posts')
export class AddCommentController {

    constructor(
        @Adapter(LOAD_POST_BY_ID_REPOSITORY)
        private readonly loadPostByIdRepository: ILoadPostByIdRepository,
        @Adapter(ADD_COMMENT_SERVICE)
        private readonly addCommentService: IAddCommentService
    ) {
    }

    @Put(":id/add-comment")
    @Auth(["admin", "manager"])
    async addCommentController(@Body() data: any, @Param() id: string | number): Promise<any> {
        const idx = validateObjectId(id["id"]);
        if (!idx) return new NotFoundException();

        for (const item of data["comments"]) {
            const {errors, isValid} = ValidateFields.fieldsValidation(item)
            if (!isValid) return {statusCode: 422, body: {"message": errors}};

            const user = validateObjectId(item.user);
            if (!user) return new NotFoundException("User Not found");
        }

        const postRef = await this.loadPostByIdRepository.loadPostById(id["id"]);
        if (!postRef) return new NotFoundException("Post Not found");

        for (const item of data["comments"]) {
            await this.addCommentService.addComment({
                user: item.user,
                text: item.text,
                name: postRef["_doc"].name,
                avatar: postRef["_doc"].avatar,
                date: new Date()
            }, postRef.id.toString(), item.user)
        }

        return {
            message: "Comment created successfully",
            comment: true
        }
    }
}
