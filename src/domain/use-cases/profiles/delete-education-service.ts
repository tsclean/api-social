export const DELETE_EDUCATION_SERVICE = "DELETE_EDUCATION_SERVICE";

export interface IDeleteEducationService {
    deleteEducation: (profileId: string | number, educationId: string | number) => Promise<unknown>
}