import {Adapter, Service} from "@tsclean/core";
import {ILoadProfileByIdService} from "@/domain/use-cases/profiles/load-profile-by-id-service";
import {ILoadProfileByIdRepository, LOAD_PROFILE_BY_ID_REPOSITORY, ProfileModel} from "@/domain/models";

@Service()
export class LoadProfileByIdServiceImpl implements ILoadProfileByIdService {
    constructor(
        @Adapter(LOAD_PROFILE_BY_ID_REPOSITORY)
        private readonly loadProfileByIdRepository: ILoadProfileByIdRepository
    ) {
    }

    async loadProfileById(id: string): Promise<ProfileModel> {
        return await this.loadProfileByIdRepository.loadProfileById(id);
    }
}