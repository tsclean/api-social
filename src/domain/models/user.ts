export type UserModel = {
    id: string | number;
    name: string;
    email: string;
    password: string;
    avatar: string;
    date: unknown;
}

export type AddUserParams = Omit<UserModel, 'id'>
