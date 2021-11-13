import {ProfileModel} from "@/domain/models/profile";

export const LOAD_PROFILE_BY_ID_SERVICE = "LOAD_PROFILE_BY_ID_SERVICE";

export interface ILoadProfileByIdService {
    loadProfileByIdService: (id: string) => Promise<ProfileModel>
}