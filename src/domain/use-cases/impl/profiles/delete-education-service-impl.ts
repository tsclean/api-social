import {Adapter, Service} from "@tsclean/core";
import {IDeleteEducationService} from "@/domain/use-cases";
import {
    DELETE_EDUCATION_REPOSITORY,
    IDeleteEducationRepository,
    ILoadProfileByIdRepository,
    LOAD_PROFILE_BY_ID_REPOSITORY
} from "@/domain/models";

@Service()
export class DeleteEducationServiceImpl implements IDeleteEducationService {
    constructor(
        @Adapter(DELETE_EDUCATION_REPOSITORY)
        private readonly deleteEducationRepository: IDeleteEducationRepository
    ) {
    }

    async deleteEducation(profileId: string, educationId: string | number): Promise<unknown> {
        return await this.deleteEducationRepository.deleteEducation(profileId, educationId);
    }
}