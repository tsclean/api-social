import { PostModel } from '@/domain/models/post';
import { model, Schema } from "mongoose";

const schema = new Schema<PostModel>({
    id: {
        type: Schema.Types.ObjectId
    },
    user: {
        type: Schema.Types.ObjectId
    },
    text: {
        type: String,
        required: true
    },
    name: {
        type: String
    },
    avatar: {
        type: String
    },
    likes: [
        {
            user: {
                type: Schema.Types.ObjectId
            }
        }
    ],
    comments: [
        {
            user: {
                type: Schema.Types.ObjectId
            },
            text: {
                type: String,
                required: true
            },
            name: {
                type: String
            },
            avatar: {
                type: String
            },
            date: {
                type: Date,
                default: Date.now
            }
        }
    ],
    date: {
        type: String
    }
});

export const PostModelSchema = model<PostModel>('posts', schema);
