import {PostModel} from "@/domain/models";

export const LOAD_POST_BY_ID_REPOSITORY = "LOAD_POST_BY_ID_REPOSITORY";

export interface ILoadPostByIdRepository {
    loadPostById:(id: string | number) => Promise<PostModel>
}