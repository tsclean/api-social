export const ADD_EDUCATION_SERVICE = "ADD_EDUCATION_SERVICE";

export interface IAddEducationService {
    addEducation: (id: string | number, education: []) => Promise<void | boolean>
}