import {UserModel} from "@/domain/models/user";

export const CHECK_EMAIL_REPOSITORY = "CHECK_EMAIL_REPOSITORY";

export interface ICheckEmailRepository {
    checkEmail:(email: string) => Promise<UserModel>
}