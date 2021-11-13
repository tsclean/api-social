import {ProfileModel} from "@/domain/models/profile";

export const LOAD_PROFILES_REPOSITORY = "LOAD_PROFILES_REPOSITORY";

export interface ILoadProfilesRepository {
    load: () => Promise<ProfileModel[]>
}