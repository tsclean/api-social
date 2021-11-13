import {Adapter, Service} from "@tsclean/core";
import {IAddUserService} from "@/domain/use-cases";
import {
    ADD_USER_REPOSITORY, AddUserParams,
    CHECK_EMAIL_REPOSITORY,
    HASH_REPOSITORY,
    IAddUserRepository, ICheckEmailRepository,
    IHashRepository, UserModel
} from "@/domain/models";

@Service()
export class AddUserServiceImpl implements IAddUserService {
    constructor(
        @Adapter(HASH_REPOSITORY) private readonly hash: IHashRepository,
        @Adapter(ADD_USER_REPOSITORY) private readonly addUser: IAddUserRepository,
        @Adapter(CHECK_EMAIL_REPOSITORY) private readonly checkUser: ICheckEmailRepository
    ) {
    }

    async addUserService(data: AddUserParams): Promise<UserModel | boolean> {
        const account = await this.checkUser.checkEmail(data.email);
        if (account) return true;

        const hashPassword = await this.hash.hashRepository(data.password);
        const user = await this.addUser.addUserRepository({...data, password: hashPassword})
        if (user) return user;
    }
}