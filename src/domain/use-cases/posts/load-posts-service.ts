import {PostModel} from "@/domain/models";

export const LOAD_POSTS_SERVICE = "LOAD_POSTS_SERVICE";

export interface ILoadPostsService {
    loadPosts: () => Promise<PostModel[]>
}