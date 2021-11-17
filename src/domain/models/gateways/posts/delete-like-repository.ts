export const DELETE_LIKE_REPOSITORY = "DELETE_LIKE_REPOSITORY";

export interface IDeleteLikeRepository {
    deleteLike:(postId: string | number, likeId: string | number) => Promise<unknown>
}