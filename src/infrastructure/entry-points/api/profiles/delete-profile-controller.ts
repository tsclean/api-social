import {Mapping, Adapter, Delete, Param, NotFoundException} from "@tsclean/core";
import {DELETE_PROFILE_SERVICE, IDeleteProfileService} from "@/domain/use-cases";
import {Auth, validateObjectId} from "@/infrastructure/entry-points";
import {
    ILoadProfileByIdRepository,
    ILoadProfileByUserIdRepository,
    LOAD_PROFILE_BY_ID_REPOSITORY, LOAD_PROFILE_BY_USER_ID_REPOSITORY
} from "@/domain/models";

@Mapping('api/v1/delete-profile')
export class DeleteProfileController {

    constructor(
        @Adapter(LOAD_PROFILE_BY_USER_ID_REPOSITORY)
        private readonly loadProfileUserByIdRepository: ILoadProfileByUserIdRepository,
        @Adapter(DELETE_PROFILE_SERVICE) private readonly deleteProfileService: IDeleteProfileService
    ) {
    }

    @Delete(":userId")
    @Auth(["admin", "manager"])
    async deleteProfileController(@Param() userId: string | number): Promise<boolean | unknown> {
        const idx = validateObjectId(userId["userId"]);
        if (!idx) return new NotFoundException("The profile you are trying to delete does not exist.")

        const profileRef = await this.loadProfileUserByIdRepository.loadProfileByUserId(userId["userId"])
        if (!profileRef) return new NotFoundException("The profile you are trying to delete does not exist.")

        await this.deleteProfileService.deleteProfile(userId["userId"]);

        return {
            message: "Profile deleted successfully",
            profile: true
        }
    }
}
