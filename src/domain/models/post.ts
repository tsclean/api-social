export type PostModel = {
    id: string | number;
    user: string | number;
    text: string;
    name: string;
    avatar: string;
    likes: LikesModel[];
    comments: CommentsModel[],
    date: Date;
}

export type LikesModel = [
    {
        user: string | number;
    }
]

export type CommentsModel = [
    {
        user: string | number
        text: string;
        name: string;
        avatar: string
        date: Date;
    }
]


export type AddPostParams = Omit<PostModel, 'id'>
