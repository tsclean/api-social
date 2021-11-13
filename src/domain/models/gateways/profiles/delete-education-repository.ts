export const DELETE_EDUCATION_REPOSITORY = "DELETE_EDUCATION_REPOSITORY";

export interface IDeleteEducationRepository {
    deleteEducation: (profileId: string | number, educationId: string | number) => Promise<unknown>
}