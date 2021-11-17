import {AddPostParams, PostModel} from "@/domain/models";

export const ADD_POST_REPOSITORY = "ADD_POST_REPOSITORY";

export interface IAddPostRepository {
    addPost:(data: AddPostParams) => Promise<PostModel>
}