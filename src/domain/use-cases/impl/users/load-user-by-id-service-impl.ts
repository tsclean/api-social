import {Adapter, Service} from "@tsclean/core";
import {ILoadUserByIdService} from "@/domain/use-cases/users/load-user-by-id-service";
import {ILoadUserByIdRepository, LOAD_USER_BY_ID_REPOSITORY, UserModel} from "@/domain/models";

@Service()
export class LoadUserByIdServiceImpl implements ILoadUserByIdService {
    constructor(
        @Adapter(LOAD_USER_BY_ID_REPOSITORY) private readonly loadUserByIdRepository: ILoadUserByIdRepository
    ) {
    }

    async loadUserById(id: string | number): Promise<UserModel> {
        return await this.loadUserByIdRepository.loadUserById(id);
    }
}