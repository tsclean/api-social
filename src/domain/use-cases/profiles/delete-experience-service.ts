export const DELETE_EXPERIENCE_SERVICE = "DELETE_EXPERIENCE_SERVICE";

export interface IDeleteExperienceService {
    deleteExperience: (profileId: string | number, experienceId: string | number) => Promise<unknown>
}