export const ADD_EXPERIENCE_SERVICE = "ADD_EXPERIENCE_SERVICE";

export interface IAddExperiencesService {
    addExperience: (id: string | number, experiences: []) => Promise<void | boolean>
}