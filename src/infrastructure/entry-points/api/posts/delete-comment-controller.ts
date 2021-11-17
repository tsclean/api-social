import {Mapping, Put, NotFoundException, Req, Adapter} from "@tsclean/core";
import {Auth, validateObjectId} from "@/infrastructure/entry-points";
import {ILoadPostByIdRepository, LOAD_POST_BY_ID_REPOSITORY} from "@/domain/models";
import {DELETE_COMMENT_SERVICE, IDeleteCommentService} from "@/domain/use-cases";

@Mapping('api/v1/posts')
export class DeleteCommentController {

    constructor(
        @Adapter(LOAD_POST_BY_ID_REPOSITORY)
        private readonly loadPostByIdRepository: ILoadPostByIdRepository,
        @Adapter(DELETE_COMMENT_SERVICE)
        private readonly deleteCommentService: IDeleteCommentService
    ) {
    }

    @Put(":postId/delete-comment/:commentId")
    @Auth(["admin", "manager"])
    async deleteCommentController(@Req() request): Promise<any> {
        const {postId, commentId} = request["params"];

        // Validation that the parameters are valid
        const params = request["params"];
        for (const item in params) {
            const idx = validateObjectId(params[item]);
            if (idx === false) return new NotFoundException();
        }

        const postRef = await this.loadPostByIdRepository.loadPostById(postId);
        if (!postRef) return new NotFoundException();

        const comment = postRef["_doc"].comments.find((comment) => comment.id === commentId);
        if (!comment) return new NotFoundException("The comment you are trying to delete does not exist")

        await this.deleteCommentService.deleteComment(postRef.id.toString(), commentId)

        return {
            message: "Comment deleted successfully",
            comment: true
        }
    }
}
