import {PostModel} from "@/domain/models";

export const ADD_COMMENT_REPOSITORY = "ADD_COMMENT_REPOSITORY";

export interface IAddCommentRepository {
    addComment:(data: IAddCommentRepository.Params, postId: string | number, user: string | number) => Promise<PostModel>
}

export namespace IAddCommentRepository {
    export type Params = {
        user: string | number
        text: string;
        name: string;
        avatar: string
        date: Date;
    }
}