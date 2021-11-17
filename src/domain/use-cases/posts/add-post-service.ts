import {AddPostParams, PostModel} from "@/domain/models";

export const ADD_POST_SERVICE = "ADD_POST_SERVICE";

export interface IAddPostService {
    addPost: (data: AddPostParams) => Promise<PostModel>
}