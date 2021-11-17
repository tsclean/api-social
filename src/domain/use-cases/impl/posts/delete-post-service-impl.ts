import {Adapter, Service} from "@tsclean/core";
import {IDeletePostService} from "@/domain/use-cases/posts/delete-post-service";
import {DELETE_POST_REPOSITORY, IDeletePostRepository} from "@/domain/models";

@Service()
export class DeletePostServiceImpl implements IDeletePostService {
    constructor(
        @Adapter(DELETE_POST_REPOSITORY) private readonly deletePostRepository: IDeletePostRepository
    ) {
    }

    async deletePost(id: string | number): Promise<void | boolean> {
        return await this.deletePostRepository.deletePost(id);
    }
}