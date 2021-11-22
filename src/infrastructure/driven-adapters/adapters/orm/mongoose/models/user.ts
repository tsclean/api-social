import { UserModel } from '@/domain/models/user';
import { model, Schema } from "mongoose";

const schema = new Schema<UserModel>({
    id: {
        type: String
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String
    },
    date: {
        type: String
    },
    roles: [{ role: String }]
});

export const UserModelSchema = model<UserModel>('users', schema);
