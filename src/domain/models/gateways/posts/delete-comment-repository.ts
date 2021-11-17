export const DELETE_COMMENT_REPOSITORY = "DELETE_COMMENT_REPOSITORY";

export interface IDeleteCommentRepository {
    deleteComment: (postId: string | number, commentId: string | number) => Promise<any>
}