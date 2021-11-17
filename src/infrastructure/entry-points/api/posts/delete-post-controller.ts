import {Mapping, Get, Adapter, Delete, Param, NotFoundException} from "@tsclean/core";
import {DELETE_POST_SERVICE, IDeletePostService} from "@/domain/use-cases/posts";
import {Auth, validateObjectId} from "@/infrastructure/entry-points";
import {ILoadPostByIdRepository, LOAD_POST_BY_ID_REPOSITORY} from "@/domain/models";

@Mapping('api/v1/delete-post')
export class DeletePostController {

    constructor(
        @Adapter(LOAD_POST_BY_ID_REPOSITORY) private readonly loadPostByIdRepository: ILoadPostByIdRepository,
        @Adapter(DELETE_POST_SERVICE) private readonly deletePostService: IDeletePostService
    ) {
    }

    @Delete(":id")
    @Auth(["admin", "manager"])
    async deletePostController(@Param() id: string | number): Promise<any> {
        const idx = validateObjectId(id);
        if (!idx) return new NotFoundException()

        const postRef = await this.loadPostByIdRepository.loadPostById(id);
        if (!postRef) return new NotFoundException()

        return await this.deletePostService.deletePost(id);
    }
}
