import {Adapter, Service} from "@tsclean/core";
import {ILoadPostByIdService} from "@/domain/use-cases/posts/load-post-by-id-service";
import {ILoadPostByIdRepository, LOAD_POST_BY_ID_REPOSITORY, PostModel} from "@/domain/models";

@Service()
export class LoadPostByIdServiceImpl implements ILoadPostByIdService {
    constructor(
        @Adapter(LOAD_POST_BY_ID_REPOSITORY) private readonly loadPostByIdRepository: ILoadPostByIdRepository
    ) {
    }

    async loadPostById(id: string | number): Promise<PostModel> {
        return await this.loadPostByIdRepository.loadPostById(id);
    }
}