import {Adapter, Service} from "@tsclean/core";
import {IAuthService} from "@/domain/use-cases";
import {
    CHECK_EMAIL_REPOSITORY,
    ENCRYPT_REPOSITORY,
    HASH_COMPARE_REPOSITORY, ICheckEmailRepository,
    IEncryptRepository,
    IHashCompareRepository
} from "@/domain/models";

@Service()
export class AuthServiceImpl implements IAuthService {
    constructor(
        @Adapter(ENCRYPT_REPOSITORY) private readonly encryptRepository: IEncryptRepository,
        @Adapter(HASH_COMPARE_REPOSITORY) private readonly hashCompareRepository: IHashCompareRepository,
        @Adapter(CHECK_EMAIL_REPOSITORY) private readonly checkEmailRepository: ICheckEmailRepository
    ) {
    }

    async auth(data: IAuthService.Params): Promise<IAuthService.Result> {
        const account = await this.checkEmailRepository.checkEmail(data.email);
        const isValid = await this.hashCompareRepository.compareRepository(data.password, account.password);
        if (isValid) {
            const token = await this.encryptRepository.encryptRepository(account.id);

            return  {
                accessToken: token,
                name: account.name
            }
        }
    }
}