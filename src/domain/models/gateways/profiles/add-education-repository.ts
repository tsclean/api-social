export const ADD_EDUCATION_REPOSITORY = "ADD_EDUCATION_REPOSITORY";

export interface IAddEducationRepository {
    addEducation: (id: string | number, education: []) => Promise<void>
}