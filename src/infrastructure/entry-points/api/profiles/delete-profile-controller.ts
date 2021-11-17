import {Mapping, Adapter, Delete, Param, NotFoundException} from "@tsclean/core";
import {DELETE_PROFILE_SERVICE, IDeleteProfileService} from "@/domain/use-cases";
import {Auth, validateObjectId} from "@/infrastructure/entry-points";
import {ILoadProfileByIdRepository, LOAD_PROFILE_BY_ID_REPOSITORY} from "@/domain/models";

@Mapping('api/v1/delete-profile')
export class DeleteProfileController {

    constructor(
        @Adapter(LOAD_PROFILE_BY_ID_REPOSITORY) private readonly loadProfileByIdRepository: ILoadProfileByIdRepository,
        @Adapter(DELETE_PROFILE_SERVICE) private readonly deleteProfileService: IDeleteProfileService
    ) {
    }

    @Delete(":id")
    @Auth(["admin", "manager"])
    async deleteProfileController(@Param() id: string | number): Promise<boolean | unknown> {
        const idx = validateObjectId(id["id"]);
        if (!idx) return new NotFoundException("The profile you are trying to delete does not exist.")

        const profileRef = await this.loadProfileByIdRepository.loadProfileById(id["id"])
        if (!profileRef) return new NotFoundException("The profile you are trying to delete does not exist.")

        await this.deleteProfileService.deleteProfile(id["id"]);

        return {
            message: "Profile deleted successfully",
            profile: true
        }
    }
}
