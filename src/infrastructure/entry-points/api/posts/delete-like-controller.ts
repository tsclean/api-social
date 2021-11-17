import {Adapter, Mapping, NotFoundException, Put, Req} from "@tsclean/core";
import {Auth, validateObjectId} from "@/infrastructure/entry-points";
import {ILoadPostByIdRepository, LOAD_POST_BY_ID_REPOSITORY, LOAD_PROFILE_BY_ID_REPOSITORY} from "@/domain/models";
import {DELETE_LIKE_SERVICE, IDeleteLikeService} from "@/domain/use-cases/posts";

@Mapping('api/v1/posts')
export class DeleteLikeController {
    constructor(
      @Adapter(LOAD_POST_BY_ID_REPOSITORY)
      private readonly loadPostByIdRepository: ILoadPostByIdRepository,
      @Adapter(DELETE_LIKE_SERVICE)
      private readonly deleteLikeService: IDeleteLikeService
    ) {
    }
    @Put(":postId/un-like/:likeId")
    @Auth(["admin", "manager"])
    async deleteLikeController(@Req() request): Promise<any> {
        const {postId, likeId} = request["params"];

        // Validation that the parameters are valid
        const params = request["params"];
        for (const item in params) {
            const idx = validateObjectId(params[item]);
            if (idx === false) return new NotFoundException();
        }

        // Check if the post exist
        const postRef = await this.loadPostByIdRepository.loadPostById(postId);
        if (!postRef) return new NotFoundException();

        // Check if the post has not yet been liked
        if (!postRef["_doc"].likes.some((like) => like["user"].toString() === postRef["_doc"].user.toString())) {
            return {statusCode: 401, message: 'Post has not yet been liked'};
        }

        // The service asks us as parameters the postId and likeId that we are going to delete.
        // but as mongo puts the underscore to the id (_id) and the model is with the normal id,
        // we have to adapt a valid parameter to send to the adapter, in this case the
        // user that is in the model and thus to be able to look for the collection.
        // Always the external layers must be adapted to the internal layers.
        await this.deleteLikeService.deleteLike(postRef["_doc"].user.toString(), likeId);

        return {
            message: "Like deleted successfully",
            like: true
        }
    }
}
