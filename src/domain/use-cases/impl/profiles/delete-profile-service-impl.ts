import {Adapter, Service} from "@tsclean/core";
import {IDeleteProfileService} from "@/domain/use-cases";
import {DELETE_PROFILE_REPOSITORY, IDeleteProfileRepository} from "@/domain/models";

@Service()
export class DeleteProfileServiceImpl implements IDeleteProfileService {
    constructor(
       @Adapter(DELETE_PROFILE_REPOSITORY) private readonly deleteProfileRepository: IDeleteProfileRepository
    ) {
    }

    async deleteProfile(id: string | number): Promise<boolean | unknown> {
        return await this.deleteProfileRepository.deleteProfile(id);
    }
}