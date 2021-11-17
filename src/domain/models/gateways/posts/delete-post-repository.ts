export const DELETE_POST_REPOSITORY = "DELETE_POST_REPOSITORY";

export interface IDeletePostRepository {
    deletePost:(id: string | number) => Promise<void | boolean>
}