import {Mapping, Adapter, Post, Body} from "@tsclean/core";
import {AUTH_SERVICE, IAuthService} from "@/domain/use-cases";
import {ValidateFields} from "@/infrastructure/entry-points";

@Mapping('api/v1/auth')
export class AuthController {

    constructor(
       @Adapter(AUTH_SERVICE) private readonly authService: IAuthService
    ) {
    }

    @Post()
    async authController(@Body() data: IAuthService.Params): Promise<IAuthService.Result | unknown> {
        const {errors, isValid} = ValidateFields.fieldsValidation(data);

        if (!isValid) return {statusCode: 422, body: {"message": errors}}

        const result = await this.authService.auth(data);

        if (result === null) return {statusCode: 401, body: {"message": "Invalid credentials"}}

        return {
            accessToken: result.accessToken,
            name: result.name
        }
    }
}
