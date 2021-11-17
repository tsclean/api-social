import {Mapping, Post, Body, NotFoundException, BadRequestException, Adapter} from "@tsclean/core";
import {ADD_PROFILE_SERVICE, IAddProfileService} from "@/domain/use-cases";
import {AddProfileParams, ProfileModel} from "@/domain/models";
import {Auth, ValidateFields, validateObjectId} from "@/infrastructure/entry-points";

@Mapping('api/v1/add-profile')
export class AddProfileController {

    constructor(
        @Adapter(ADD_PROFILE_SERVICE) private readonly addProfile: IAddProfileService
    ) {
    }

    @Post()
    @Auth(["admin", "manager"])
    async addProfileController(@Body() data: AddProfileParams): Promise<ProfileModel | unknown> {

        const {skills, status, user} = data;

        const idx = validateObjectId(user);

        if (idx === false) return new NotFoundException();

        const {errors, isValid} = ValidateFields.fieldsValidation({skills, status, user})

        if (!isValid) return {statusCode: 422, body: {"message": errors}}

        const profile = await this.addProfile.addProfileService({
            ...data,
            skills,
            date: new Date()
        })

        if (profile === null) return new NotFoundException();

        if (profile === false) return new BadRequestException("The user is already linked to a profile in the system.");

        return {
            message: "Profile successfully created",
            profile
        }
    }
}
