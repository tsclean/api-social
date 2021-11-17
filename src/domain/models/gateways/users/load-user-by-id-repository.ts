import {UserModel} from "@/domain/models/user";

export const LOAD_USER_BY_ID_REPOSITORY = "LOAD_USER_BY_ID_REPOSITORY";

export interface ILoadUserByIdRepository {
    loadUserById:(id: string | number) => Promise<UserModel>
}