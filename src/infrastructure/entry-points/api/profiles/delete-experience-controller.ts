import {Adapter, Mapping, NotFoundException, Put, Req} from "@tsclean/core";
import {DELETE_EXPERIENCE_SERVICE, IDeleteExperienceService} from "@/domain/use-cases";
import {ILoadProfileByIdRepository, LOAD_PROFILE_BY_ID_REPOSITORY} from "@/domain/models";
import {validateObjectId} from "@/infrastructure/entry-points";

@Mapping('api/v1/profiles')
export class DeleteExperienceController {

    constructor(
        @Adapter(DELETE_EXPERIENCE_SERVICE)
        private readonly deleteExperienceService: IDeleteExperienceService,
        @Adapter(LOAD_PROFILE_BY_ID_REPOSITORY)
        private readonly loadProfileByIdRepository: ILoadProfileByIdRepository
    ) {
    }

    @Put(":profileId/delete-experience/:experienceId")
    async deleteExperienceController(@Req() request): Promise<unknown> {
        // Destructuring params
        const {profileId, experienceId} = request["params"];

        // Validation that the parameters are valid
        const params = request["params"];
        for (const item in params) {
            const idx = validateObjectId(params[item]);
            if (idx === false) return new NotFoundException();
        }

        // Profile exist
        const profileRef = await this.loadProfileByIdRepository.loadProfileById(profileId);

        // Validate that the experience is successful in order to eliminate it.
        let experience: boolean;
        for (const item of profileRef.experience) {
            experience = item["_id"].toString() === experienceId
        }

        if (experience === false) return new NotFoundException();

        const profile = await this.deleteExperienceService.deleteExperience(profileId, experienceId);

        if (profile === false) return new NotFoundException();

        return {
            message: "Experience deleted successfully",
            experience: true
        }
    }
}
