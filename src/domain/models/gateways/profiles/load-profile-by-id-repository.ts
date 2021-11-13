import {ProfileModel} from "@/domain/models/profile";

export const LOAD_PROFILE_BY_ID_REPOSITORY = "LOAD_PROFILE_BY_ID_REPOSITORY";

export interface ILoadProfileByIdRepository {
    loadProfileById: (id: string) => Promise<ProfileModel>
}