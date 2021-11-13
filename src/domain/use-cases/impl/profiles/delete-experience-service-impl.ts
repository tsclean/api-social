import {Adapter, Service} from "@tsclean/core";
import {IDeleteExperienceService} from "@/domain/use-cases";
import {
    DELETE_EXPERIENCE_REPOSITORY,
    IDeleteExperienceRepository, ILoadProfileByIdRepository,
    LOAD_PROFILE_BY_ID_REPOSITORY
} from "@/domain/models";

@Service()
export class DeleteExperienceServiceImpl implements IDeleteExperienceService {
    constructor(
        @Adapter(DELETE_EXPERIENCE_REPOSITORY)
        private readonly deleteExperienceRepository: IDeleteExperienceRepository,
        @Adapter(LOAD_PROFILE_BY_ID_REPOSITORY)
        private readonly loadProfileByIdRepository: ILoadProfileByIdRepository
    ) {
    }

    async deleteExperience(profileId: string, experienceId: string | number): Promise<unknown> {
        const profile = await this.loadProfileByIdRepository.loadProfileById(profileId);
        if (!profile) return false;

        await this.deleteExperienceRepository.deleteExperience(profileId, experienceId);
    }
}