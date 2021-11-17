import {ProfileModel} from "@/domain/models";

export const LOAD_PROFILE_BY_ID_SERVICE = "LOAD_PROFILE_BY_ID_SERVICE";

export interface ILoadProfileByIdService {
    loadProfileById(id: string| number): Promise<ProfileModel>
}