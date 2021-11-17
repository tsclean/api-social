export const DELETE_POST_SERVICE = "DELETE_POST_SERVICE";

export interface IDeletePostService {
    deletePost: (id: string | number) => Promise<void | boolean>;
}