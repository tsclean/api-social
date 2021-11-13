export const DELETE_EXPERIENCE_REPOSITORY = "DELETE_EXPERIENCE_REPOSITORY";

export interface IDeleteExperienceRepository {
    deleteExperience: (profileId: string | number, experienceId: string | number) => Promise<unknown>
}