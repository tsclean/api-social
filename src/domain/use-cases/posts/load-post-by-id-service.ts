import {PostModel} from "@/domain/models";

export const LOAD_POST_BY_ID_SERVICE = "LOAD_POST_BY_ID_SERVICE";

export interface ILoadPostByIdService {
    loadPostById:(id: string | number) => Promise<PostModel>
}