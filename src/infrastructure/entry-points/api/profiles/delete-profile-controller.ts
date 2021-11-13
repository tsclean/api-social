import {Mapping, Adapter, Delete, Param} from "@tsclean/core";
import {DELETE_PROFILE_SERVICE, IDeleteProfileService} from "@/domain/use-cases";

@Mapping('api/v1/delete-profile')
export class DeleteProfileController {

    constructor(
        @Adapter(DELETE_PROFILE_SERVICE) private readonly deleteProfileService: IDeleteProfileService
    ) {
    }

    @Delete(":id")
    async deleteProfileController(@Param() id: string | number): Promise<boolean | unknown> {
        await this.deleteProfileService.deleteProfile(id);
        return {
            message: "Profile deleted successfully",
            profile: true
        }
    }
}
