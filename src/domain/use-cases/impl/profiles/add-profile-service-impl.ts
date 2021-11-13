import {Adapter, Service} from "@tsclean/core";
import {IAddProfileService} from "@/domain/use-cases";
import {
    ADD_PROFILE_REPOSITORY, AddProfileParams,
    IAddProfileRepository, ILoadProfileByUserIdRepository, ILoadUserByIdRepository,
    LOAD_PROFILE_BY_USER_ID_REPOSITORY,
    LOAD_USER_BY_ID_REPOSITORY, ProfileModel
} from "@/domain/models";

@Service()
export class AddProfileServiceImpl implements IAddProfileService {
    constructor(
       @Adapter(ADD_PROFILE_REPOSITORY) private readonly addProfile: IAddProfileRepository,
       @Adapter(LOAD_USER_BY_ID_REPOSITORY) private readonly loadById: ILoadUserByIdRepository,
       @Adapter(LOAD_PROFILE_BY_USER_ID_REPOSITORY) private readonly loadProfileByUser: ILoadProfileByUserIdRepository<string>
    ) {
    }

    async addProfileService(data: AddProfileParams): Promise<ProfileModel | boolean> {
        const userExit = await this.loadById.loadUserById(data.user);
        const profileExist = await this.loadProfileByUser.loadProfileByUserId(data.user);

        if (profileExist) return false;

        if (userExit && !profileExist) {
            return await this.addProfile.addProfileRepository({...data})
        }
    }
}