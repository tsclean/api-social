import {Mapping, Get, Param, Adapter, NotFoundException} from "@tsclean/core";
import {ILoadProfileByIdService, LOAD_PROFILE_BY_ID_SERVICE} from "@/domain/use-cases";
import {validateObjectId} from "@/infrastructure/entry-points";

@Mapping('api/v1/load-profile-by-id')
export class LoadProfileByIdController {

    constructor(
        @Adapter(LOAD_PROFILE_BY_ID_SERVICE) private readonly loadProfileService: ILoadProfileByIdService
    ) {
    }

    @Get(":id")
    async loadProfileByIdController(@Param() id: string): Promise<any> {

        const idx = validateObjectId(id["id"])

        if (idx === false) return new NotFoundException();

        const profile = await this.loadProfileService.loadProfileByIdService(id);
        return {
            message: "Profile detail successfully",
            profile
        }
    }
}
