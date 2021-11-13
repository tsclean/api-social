import {Mapping, Put, Body, Param, Adapter, NotFoundException} from "@tsclean/core";
import {ADD_EDUCATION_SERVICE, IAddEducationService} from "@/domain/use-cases";
import {ValidateFields, validateObjectId} from "@/infrastructure/entry-points";

@Mapping('api/v1/add-education')
export class AddEducationController {

    constructor(
       @Adapter(ADD_EDUCATION_SERVICE) private readonly addEducationService: IAddEducationService
    ) {
    }

    @Put(":id")
    async addEducationController(@Body() educations: [], @Param() id: string): Promise<any> {

        const param = validateObjectId(id["id"]);
        if (param === false) return new NotFoundException();

        const {errors, isValid} = ValidateFields.fieldsValidation(educations)
        if (!isValid) return {statusCode: 422, body: {"message": errors}}

        const result  = Object.values(educations)

        for (const item of result) {
            const items = Object.values(item)
            for (const value of items) {
                const {errors, isValid} = ValidateFields.fieldsValidation(value)
                if (!isValid) return {statusCode: 422, body: {"message": errors}}
            }
        }

        await this.addEducationService.addEducation(id, educations);

        return {
            message: "Education add successfully",
            updated: true
        }
    }
}
