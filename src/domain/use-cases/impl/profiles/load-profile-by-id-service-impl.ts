import {Adapter, Service} from "@tsclean/core";
import {ILoadProfileByIdService} from "@/domain/use-cases";
import {ILoadProfileByIdRepository, LOAD_PROFILE_BY_ID_REPOSITORY, ProfileModel} from "@/domain/models";

@Service()
export class LoadProfileByIdServiceImpl implements ILoadProfileByIdService {
    constructor(
        @Adapter(LOAD_PROFILE_BY_ID_REPOSITORY) private readonly loadProfile: ILoadProfileByIdRepository
    ) {
    }

    async loadProfileByIdService(id: string): Promise<ProfileModel> {
        return await this.loadProfile.loadProfileById(id);
    }
}