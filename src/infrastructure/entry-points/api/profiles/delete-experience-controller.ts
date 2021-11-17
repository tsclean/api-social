import {Adapter, Mapping, NotFoundException, Put, Req} from "@tsclean/core";
import {DELETE_EXPERIENCE_SERVICE, IDeleteExperienceService} from "@/domain/use-cases";
import {ILoadProfileByIdRepository, LOAD_PROFILE_BY_ID_REPOSITORY} from "@/domain/models";
import {Auth, validateObjectId} from "@/infrastructure/entry-points";

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
    @Auth(["admin", "manager"])
    async deleteExperienceController(@Req() request): Promise<unknown> {
        // Destructuring params
        const {profileId, experienceId} = request["params"];

        // Validation that the parameters are valid
        const params = request["params"];
        for (const item in params) {
            const idx = validateObjectId(params[item]);
            if (!idx) return new NotFoundException();
        }

        // Profile exist
        const profileRef = await this.loadProfileByIdRepository.loadProfileById(profileId);
        if (!profileRef) return new NotFoundException();

        // Validate that the experience is successful in order to eliminate it.
        const validateExperience = profileRef.experience.find(item => item["_id"].toString() === experienceId);
        if (!validateExperience) return new NotFoundException();

        await this.deleteExperienceService.deleteExperience(profileId, experienceId);

        return {
            message: "Experience deleted successfully",
            experience: true
        }
    }
}
