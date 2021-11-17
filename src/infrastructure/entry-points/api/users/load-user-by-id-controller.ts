import {Adapter, Get, Mapping, NotFoundException, Param} from "@tsclean/core";
import {ILoadUserByIdService, LOAD_USER_BY_ID_SERVICE} from "@/domain/use-cases";
import {UserModel} from "@/domain/models";
import {Auth, validateObjectId} from "@/infrastructure/entry-points";

@Mapping('api/v1/load-user-by-id')
export class LoadUserByIdController {

    constructor(
        @Adapter(LOAD_USER_BY_ID_SERVICE) private readonly loadUserByIdService: ILoadUserByIdService
    ) {
    }

    @Get(":id")
    @Auth(["admin", "manager"])
    async loadUserByIdController(@Param() id: string | number): Promise<UserModel | unknown> {
        const idx = validateObjectId(id["id"]);
        if (!idx) return new NotFoundException();

        return await this.loadUserByIdService.loadUserById(id);

    }
}
