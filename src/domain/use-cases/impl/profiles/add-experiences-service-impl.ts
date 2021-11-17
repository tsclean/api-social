import {Adapter, Service} from "@tsclean/core";
import {IAddExperiencesService} from "@/domain/use-cases";
import {
    ADD_EXPERIENCE_REPOSITORY,
    IAddExperiencesRepository,
    ILoadProfileByIdRepository,
    LOAD_PROFILE_BY_ID_REPOSITORY
} from "@/domain/models";

@Service()
export class AddExperiencesServiceImpl implements IAddExperiencesService {
    constructor(
        @Adapter(ADD_EXPERIENCE_REPOSITORY) private readonly addExperiencesRepository: IAddExperiencesRepository
    ) {
    }

    async addExperience(id: string, experiences: []): Promise<void | boolean> {
        return this.addExperiencesRepository.addExperience(id, experiences);
    }
}