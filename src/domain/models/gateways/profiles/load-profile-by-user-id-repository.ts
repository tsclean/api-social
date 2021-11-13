import {ProfileModel} from "@/domain/models/profile";

export const LOAD_PROFILE_BY_USER_ID_REPOSITORY = "LOAD_PROFILE_BY_USER_ID_REPOSITORY";

export interface ILoadProfileByUserIdRepository<T = any> {
    loadProfileByUserId: (id: T) => Promise<ProfileModel>
}