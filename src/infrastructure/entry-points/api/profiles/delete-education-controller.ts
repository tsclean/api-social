import {Mapping, Put, Adapter, NotFoundException, Req} from "@tsclean/core";
import {ILoadProfileByIdRepository, LOAD_PROFILE_BY_ID_REPOSITORY} from "@/domain/models";
import {DELETE_EDUCATION_SERVICE, IDeleteEducationService} from "@/domain/use-cases";
import {Auth, validateObjectId} from "@/infrastructure/entry-points";

@Mapping('api/v1/profiles')
export class DeleteEducationController {

    constructor(
        @Adapter(LOAD_PROFILE_BY_ID_REPOSITORY)
        private readonly loadProfileByIdRepository: ILoadProfileByIdRepository,
        @Adapter(DELETE_EDUCATION_SERVICE)
        private readonly deleteEducationService: IDeleteEducationService
    ) {
    }
    

    @Put(":profileId/delete-education/:educationId")
    @Auth(["admin", "manager"])
    async deleteEducationController(@Req() request): Promise<any> {
        // Destructuring params
        const {profileId, educationId} = request["params"];

        // Validation that the parameters are valid
        const params = request["params"];
        for (const item in params) {
            const idx = validateObjectId(params[item]);
            if (idx === false) return new NotFoundException();
        }

        // Profile exist
        const profileRef = await this.loadProfileByIdRepository.loadProfileById(profileId);

        // Validate that the education is successful in order to eliminate it.
        const validateEducation = profileRef.education.find(item => item["_id"].toString() === educationId);
        if (!validateEducation) return new NotFoundException();

        const educationRef = await this.deleteEducationService.deleteEducation(profileId, educationId);

        if (educationRef === false) return new NotFoundException();

        return {
            message: "Education deleted successfully",
            education: true
        }
    }
}
