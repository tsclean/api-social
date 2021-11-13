export const DELETE_PROFILE_SERVICE = "DELETE_PROFILE_SERVICE";

export interface IDeleteProfileService {
    deleteProfile: (id: string | number) => Promise<boolean | unknown>;
}