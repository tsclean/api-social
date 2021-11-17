import {Mapping, Get, Adapter} from "@tsclean/core";
import {ILoadPostsService, LOAD_POSTS_SERVICE} from "@/domain/use-cases/posts";
import {PostModel} from "@/domain/models";
import {Auth} from "@/infrastructure/entry-points";

@Mapping('api/v1/load-posts')
export class LoadPostsController {

    constructor(
        @Adapter(LOAD_POSTS_SERVICE)
        private readonly loadPostsService: ILoadPostsService
    ) {
    }

    @Get()
    @Auth(["admin", "manager"])
    async loadPostsController(): Promise<PostModel[]> {
        return this.loadPostsService.loadPosts();
    }
}
