import {UserModel} from "@/domain/models";

export const LOAD_USER_BY_ID_SERVICE = "LOAD_USER_BY_ID_SERVICE"

export interface ILoadUserByIdService {
    loadUserById:(id: string | number) => Promise<UserModel>
}