export const ADD_LIKE_SERVICE = "ADD_LIKE_SERVICE";

export interface IAddLikeService {
    addLike:(data: string | number, postId?: string | number) => Promise<void>
}