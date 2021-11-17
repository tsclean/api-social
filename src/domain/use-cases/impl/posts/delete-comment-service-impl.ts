import {Adapter, Service} from "@tsclean/core";
import {IDeleteCommentService} from "@/domain/use-cases/posts/delete-comment-service";
import {DELETE_COMMENT_REPOSITORY, IDeleteCommentRepository} from "@/domain/models";

@Service()
export class DeleteCommentServiceImpl implements IDeleteCommentService {
    constructor(
       @Adapter(DELETE_COMMENT_REPOSITORY)
       private readonly deleteCommentRepository: IDeleteCommentRepository
    ) {
    }

    async deleteComment(postId: string | number, commentId: string | number): Promise<any> {
        return await this.deleteCommentRepository.deleteComment(postId, commentId);
    }
}