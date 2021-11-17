import {Adapter, Body, Mapping, NotFoundException, Param, Put} from "@tsclean/core";
import {ADD_EXPERIENCE_SERVICE, IAddExperiencesService} from "@/domain/use-cases";
import {Auth, ValidateFields, validateObjectId} from "@/infrastructure/entry-points";
import {ILoadProfileByIdRepository, LOAD_PROFILE_BY_ID_REPOSITORY} from "@/domain/models";

@Mapping('api/v1/profiles')
export class AddExperiencesController {

    constructor(
        @Adapter(LOAD_PROFILE_BY_ID_REPOSITORY) private readonly loadProfileByIdRepository: ILoadProfileByIdRepository,
        @Adapter(ADD_EXPERIENCE_SERVICE) private readonly addExperiencesService: IAddExperiencesService
    ) {
    }

    @Put(":id/add-experience")
    @Auth(["admin", "manager"])
    async updateExperiencesController(@Body() experiences: [], @Param() id): Promise<void | unknown> {

        const idx = validateObjectId(id["id"]);

        if (idx === false) return new NotFoundException();

        const {errors, isValid} = ValidateFields.fieldsValidation(experiences)

        if (!isValid) return {statusCode: 422, body: {"message": errors}}

        const result  = Object.values(experiences)

        for (const item of result) {
            const items = Object.values(item)
            for (const value of items) {
                const {errors, isValid} = ValidateFields.fieldsValidation(value)
                if (!isValid) return {statusCode: 422, body: {"message": errors}}
            }
        }

        const profileRef = await this.loadProfileByIdRepository.loadProfileById(id["id"]);
        if (!profileRef) return new NotFoundException("Profile not found");

        await this.addExperiencesService.addExperience(profileRef.user["_id"].toString(), result[0]);

        return {
            message: "Experiences created successfully",
            created: true
        }
    }
}
