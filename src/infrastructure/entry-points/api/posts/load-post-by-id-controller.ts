import {Mapping, Get, Param, NotFoundException, Adapter} from "@tsclean/core";
import {PostModel} from "@/domain/models";
import {Auth, validateObjectId} from "@/infrastructure/entry-points";
import {ILoadPostByIdService, LOAD_POST_BY_ID_SERVICE} from "@/domain/use-cases/posts";

@Mapping('api/v1/load-post-by-id')
export class LoadPostByIdController {

    constructor(
        @Adapter(LOAD_POST_BY_ID_SERVICE) private readonly loadPostByIdService: ILoadPostByIdService
    ) {
    }

    @Get(":id")
    @Auth(["admin", "manager"])
    async loadPostByIdController(@Param() id: string | number): Promise<PostModel | unknown> {

        const idx = validateObjectId(id["id"]);
        if (!idx) return new NotFoundException()

        const postRef = await this.loadPostByIdService.loadPostById(id["id"]);
        if (!postRef) return new NotFoundException()

        return postRef["_doc"];
    }
}
