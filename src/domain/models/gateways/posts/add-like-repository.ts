export const ADD_LIKE_REPOSITORY = "ADD_LIKE_REPOSITORY";

export interface IAddLikeRepository {
    addLike: (data: string | number) => Promise<void>
}