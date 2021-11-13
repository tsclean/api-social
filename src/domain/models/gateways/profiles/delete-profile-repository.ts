export const DELETE_PROFILE_REPOSITORY = "DELETE_PROFILE_REPOSITORY";

export interface IDeleteProfileRepository {
    deleteProfile: (id: string | number) => Promise<boolean | unknown>
}