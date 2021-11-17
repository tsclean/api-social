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
        private readonly deleteExperienceRepository: IDeleteExperienceRepository
    ) {
    }

    async deleteExperience(profileId: string, experienceId: string | number): Promise<unknown> {
       return await this.deleteExperienceRepository.deleteExperience(profileId, experienceId);
    }
}