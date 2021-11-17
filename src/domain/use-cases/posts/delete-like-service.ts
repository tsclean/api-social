export const DELETE_LIKE_SERVICE = "DELETE_LIKE_SERVICE"

export interface IDeleteLikeService {
    deleteLike: (postId: string | number, likeId: string | number) => Promise<unknown>
}