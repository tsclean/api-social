import {Adapter, Body, Mapping, NotFoundException, Post} from "@tsclean/core";
import {ADD_POST_SERVICE, IAddPostService} from "@/domain/use-cases/posts";
import {AddPostParams, ILoadUserByIdRepository, LOAD_USER_BY_ID_REPOSITORY, PostModel} from "@/domain/models";
import {Auth, ValidateFields, validateObjectId} from "@/infrastructure/entry-points";

@Mapping('api/v1/add-post')
export class AddPostController {
    constructor(
        @Adapter(LOAD_USER_BY_ID_REPOSITORY) private readonly loadUserByIdRepository: ILoadUserByIdRepository,
        @Adapter(ADD_POST_SERVICE) private readonly addPostService: IAddPostService
    ) {
    }

    @Post()
    @Auth(["admin", "manager"])
    async addPostController(@Body() data: AddPostParams): Promise<PostModel | any> {

        const {text, user} = data;

        const idx = validateObjectId(user);
        if (!idx) return new NotFoundException();

        const {errors, isValid} = ValidateFields.fieldsValidation({text, user})
        if (!isValid) return {statusCode: 422, body: {"message": errors}}

        const userRef = await this.loadUserByIdRepository.loadUserById(user)
        const {name, avatar} = userRef;

        if (!userRef) return new NotFoundException();

        return await this.addPostService.addPost({
            text,
            user,
            avatar,
            name,
            likes: data.likes,
            comments: data.comments,
            date: new Date()
        })
    }
}
