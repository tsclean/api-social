import {Adapter, Service} from "@tsclean/core";
import {IAddPostService} from "@/domain/use-cases/posts/add-post-service";
import {ADD_POST_REPOSITORY, AddPostParams, IAddPostRepository, PostModel} from "@/domain/models";

@Service()
export class AddPostServiceImpl implements IAddPostService {
    constructor(
        @Adapter(ADD_POST_REPOSITORY) private readonly addPostRepository: IAddPostRepository
     ) {
    }

    async addPost(data: AddPostParams): Promise<PostModel> {
        return await this.addPostRepository.addPost(data);
    }
}