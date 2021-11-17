import {Adapter, Body, Mapping, NotFoundException, Param, Put} from "@tsclean/core";
import {Auth, ValidateFields, validateObjectId} from "@/infrastructure/entry-points";
import {ILoadPostByIdRepository, LOAD_POST_BY_ID_REPOSITORY} from "@/domain/models";
import {ADD_LIKE_SERVICE, IAddLikeService} from "@/domain/use-cases/posts";

@Mapping('api/v1/add-like')
export class AddLikeController {

    constructor(
        @Adapter(LOAD_POST_BY_ID_REPOSITORY)
        private readonly loadPostByIdRepository: ILoadPostByIdRepository,
        @Adapter(ADD_LIKE_SERVICE)
        private readonly addLikeService: IAddLikeService
    ) {
    }

    @Put(":postId")
    @Auth(["admin", "manager"])
    async addLikeController(@Param() postId: string | number, @Body() data: string | number): Promise<any> {
        // Validate that the postId is in a valid format.
        const idx = validateObjectId(postId["postId"]);
        if (!idx) return new NotFoundException();

        // We validate that the data does not arrive empty.
        const {errors, isValid} = ValidateFields.fieldsValidation(data);
        if (!isValid) return {statusCode: 422, body: {"message": errors}}

        // We look for the post to like.
        const postRef = await this.loadPostByIdRepository.loadPostById(postId["postId"]);
        if (!postRef) return new NotFoundException()

        const result = Object.values(data)
        // We validate that the user who is going to like the post, has not done it before.
        for (const like of postRef["_doc"].likes) {
            for (const item of result) {
                for (const value of item) {
                    // We validate that the value["user"] has a valid format, it arrives as a new ObjectId
                    const userId = validateObjectId(value["user"]);
                    if (!userId) return new NotFoundException()

                    let flag: boolean;
                    flag = like["user"].toString() === value["user"].toString();
                    if (flag) return {statusCode: 401, body: {"message": "The user already liked this post"}}
                }
            }
        }

        await this.addLikeService.addLike(data);

        return {
            message: "Like add successfully",
            updated: true
        }
    }
}
