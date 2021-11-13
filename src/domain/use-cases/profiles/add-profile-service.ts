import {AddProfileParams, ProfileModel} from "@/domain/models/profile";

export const ADD_PROFILE_SERVICE = "ADD_PROFILE_SERVICE";

export interface IAddProfileService {
    addProfileService:(data: AddProfileParams) => Promise<ProfileModel | boolean>
}