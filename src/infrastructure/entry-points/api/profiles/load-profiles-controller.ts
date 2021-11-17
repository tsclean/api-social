import {Adapter, Get, Mapping} from "@tsclean/core";
import {ILoadProfilesService, LOAD_PROFILES_SERVICE} from "@/domain/use-cases";
import {ProfileModel} from "@/domain/models";
import {Auth} from "@/infrastructure/entry-points";

@Mapping('api/v1/load-profiles')
export class LoadProfilesController {
    constructor(
        @Adapter(LOAD_PROFILES_SERVICE) private readonly loadProfileService: ILoadProfilesService
    ) {
    }

    @Get()
    @Auth(["admin", "manager"])
    async getProfileController(): Promise<ProfileModel[] | unknown> {
        const profiles = await this.loadProfileService.load();
        return {
            message: "Profiles successfully",
            profiles
        }
    }
}
