export const DELETE_COMMENT_SERVICE = "DELETE_COMMENT_SERVICE";

export interface IDeleteCommentService {
    deleteComment: (postId: string | number, commentId: string | number) => Promise<any>
}