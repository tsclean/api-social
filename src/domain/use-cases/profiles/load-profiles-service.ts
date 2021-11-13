import {ProfileModel} from "@/domain/models/profile";

export const LOAD_PROFILES_SERVICE = "LOAD_PROFILES_SERVICE";

export interface ILoadProfilesService {
    load: () => Promise<ProfileModel[]>
}