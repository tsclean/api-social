import {AddProfileParams, ProfileModel} from "@/domain/models/profile";

export const ADD_PROFILE_REPOSITORY = "ADD_PROFILE_REPOSITORY";

export interface IAddProfileRepository {
    addProfileRepository:(data: AddProfileParams) => Promise<ProfileModel>
}