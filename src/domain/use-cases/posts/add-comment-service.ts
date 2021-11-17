import {PostModel} from "@/domain/models";

export const ADD_COMMENT_SERVICE = "ADD_COMMENT_SERVICE";

export interface IAddCommentService {
    addComment:(data: IAddCommentService.Params, postId: string | number, user: string | number) => Promise<PostModel>
}

export namespace IAddCommentService {
    export type Params = {
        user: string | number
        text: string;
        name: string;
        avatar: string
        date: Date;
    }
}