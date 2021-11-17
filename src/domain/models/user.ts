export type UserModel = {
    id: string | number;
    name: string;
    email: string;
    password: string;
    avatar: string;
    date: unknown;
    roles?: RolesModel[]
}

export type RolesModel = [
    {
        role: string
    }
];

export type AddUserParams = Omit<UserModel, 'id'>
