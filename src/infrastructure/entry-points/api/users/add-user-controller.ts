import gravatar from "gravatar"
import {Mapping, Adapter, Post, Body} from "@tsclean/core";
import {ADD_USER_SERVICE, IAddUserService} from "@/domain/use-cases";
import {AddUserParams, UserModel} from "@/domain/models";
import {ValidateFields} from "@/infrastructure/entry-points";

@Mapping('api/v1/add-user')
export class AddUserController {

    constructor(
        @Adapter(ADD_USER_SERVICE) private readonly addUserService: IAddUserService
    ) {
    }

    @Post()
    async addUserController(@Body() data: AddUserParams): Promise<UserModel | any> {
        const {errors, isValid} = ValidateFields.fieldsValidation(data);

        if (!isValid) return {statusCode: 422, body: {"message": errors}}

        const avatar = gravatar.url(data.email, {s: '200', r: 'pg', d: 'mm'})

        const account = await this.addUserService.addUserService({...data, avatar: avatar, date: Date.now()});

        if (account === true) return {statusCode: 400, body: {"message": "Email is already in use"}}

        return account;

    }
}
