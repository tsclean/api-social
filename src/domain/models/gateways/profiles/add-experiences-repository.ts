export const ADD_EXPERIENCE_REPOSITORY = "ADD_EXPERIENCE_REPOSITORY";

export interface IAddExperiencesRepository {
    addExperience: (id: string | number, experiences: []) => Promise<void>
}