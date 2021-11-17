import {Adapter, Get, Mapping, NotFoundException, Param} from "@tsclean/core";
import {Auth, validateObjectId} from "@/infrastructure/entry-points";
import {ILoadProfileByIdService, LOAD_PROFILE_BY_ID_SERVICE} from "@/domain/use-cases";
import {ProfileModel} from "@/domain/models";

@Mapping('api/v1/profile-by-id')
export class LoadProfileByIdController {
    constructor(
        @Adapter(LOAD_PROFILE_BY_ID_SERVICE)
        private readonly loadProfileByIdService: ILoadProfileByIdService
    ) {
    }

    @Get(":id")
    @Auth(["admin", "manager"])
    async loadProfileByIdController(@Param() id: string): Promise<ProfileModel | any> {
        const idx = validateObjectId(id["id"]);
        if (idx === false) return new NotFoundException()

        const profile = await this.loadProfileByIdService.loadProfileById(id["id"]);
        if (!profile) return new NotFoundException("Profile not found");

        return {
            message: "Profile detail successfully",
            profile
        }
    }
}
