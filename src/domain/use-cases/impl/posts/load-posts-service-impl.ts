import {Adapter, Service} from "@tsclean/core";
import {ILoadPostsService} from "@/domain/use-cases/posts/load-posts-service";
import {ILoadPostsRepository, LOAD_POSTS_REPOSITORY, PostModel} from "@/domain/models";

@Service()
export class LoadPostsServiceImpl implements ILoadPostsService {
    constructor(
        @Adapter(LOAD_POSTS_REPOSITORY) private readonly loadPostsRepository: ILoadPostsRepository
    ) {
    }

    async loadPosts(): Promise<PostModel[]> {
        return await this.loadPostsRepository.loadPosts();
    }
}