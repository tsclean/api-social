import {Adapter, Body, Mapping, NotFoundException, Param, Put} from "@tsclean/core";
import {ADD_EXPERIENCE_SERVICE, IAddExperiencesService} from "@/domain/use-cases";
import {ValidateFields, validateObjectId} from "@/infrastructure/entry-points";

@Mapping('api/v1/update-experiences')
export class AddExperiencesController {

    constructor(
        @Adapter(ADD_EXPERIENCE_SERVICE) private readonly addExperiencesService: IAddExperiencesService
    ) {
    }

    @Put(":id")
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

        await this.addExperiencesService.addExperience(id, experiences);

        return {
            message: "Experiences updated successfully",
            updated: true
        }
    }
}
