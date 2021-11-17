import {PostModel} from "@/domain/models";

export const LOAD_POSTS_REPOSITORY = "LOAD_POSTS_REPOSITORY";

export interface ILoadPostsRepository {
    loadPosts: () => Promise<PostModel[]>
}