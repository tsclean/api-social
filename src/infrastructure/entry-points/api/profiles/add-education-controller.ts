import {Mapping, Put, Body, Param, Adapter, NotFoundException} from "@tsclean/core";
import {ADD_EDUCATION_SERVICE, IAddEducationService} from "@/domain/use-cases";
import {Auth, ValidateFields, validateObjectId} from "@/infrastructure/entry-points";
import {ILoadProfileByIdRepository, LOAD_PROFILE_BY_ID_REPOSITORY} from "@/domain/models";

@Mapping('api/v1/profiles')
export class AddEducationController {

    constructor(
        @Adapter(LOAD_PROFILE_BY_ID_REPOSITORY)
        private readonly loadProfileByIdRepository: ILoadProfileByIdRepository,
        @Adapter(ADD_EDUCATION_SERVICE)
        private readonly addEducationService: IAddEducationService
    ) {
    }

    @Put(":id/add-education")
    @Auth(["admin", "manager"])
    async addEducationController(@Body() educations: [], @Param() id: string): Promise<any> {

        const param = validateObjectId(id["id"]);
        if (param === false) return new NotFoundException();

        const {errors, isValid} = ValidateFields.fieldsValidation(educations)
        if (!isValid) return {statusCode: 422, body: {"message": errors}}

        for (const item of educations) {
            const {errors, isValid} = ValidateFields.fieldsValidation(item)
            if (!isValid) return {statusCode: 422, body: {"message": errors}}
        }

        const profileRef = await this.loadProfileByIdRepository.loadProfileById(id["id"]);
        if (!profileRef) return new NotFoundException("The profile you are not exist")

        await this.addEducationService.addEducation(profileRef.user["_id"].toString(), educations);

        return {
            message: "Education add successfully",
            updated: true
        }
    }
}
