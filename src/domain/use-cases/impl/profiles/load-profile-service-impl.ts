import {Adapter, Service} from "@tsclean/core";
import {ILoadProfilesService} from "@/domain/use-cases";
import {ILoadProfilesRepository, LOAD_PROFILES_REPOSITORY, ProfileModel} from "@/domain/models";

@Service()
export class LoadProfileServiceImpl implements ILoadProfilesService {
    constructor(
        @Adapter(LOAD_PROFILES_REPOSITORY) private readonly loadProfilesRepository: ILoadProfilesRepository
    ) {
    }

    async load(): Promise<ProfileModel[]> {
        return this.loadProfilesRepository.load();
    }
}