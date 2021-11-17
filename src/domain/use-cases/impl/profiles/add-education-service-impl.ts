import {Adapter, Service} from "@tsclean/core";
import {IAddEducationService} from "@/domain/use-cases";
import {
    ADD_EDUCATION_REPOSITORY,
    IAddEducationRepository,
    ILoadProfileByIdRepository,
    LOAD_PROFILE_BY_ID_REPOSITORY
} from "@/domain/models";

@Service()
export class AddEducationServiceImpl implements IAddEducationService {
    constructor(
        @Adapter(ADD_EDUCATION_REPOSITORY)
        private readonly addEducationRepository: IAddEducationRepository
    ) {
    }

    async addEducation(id: string, education: []): Promise<void | boolean> {
        return this.addEducationRepository.addEducation(id, education);
    }
}