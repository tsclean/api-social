import {Adapter, Service} from "@tsclean/core";
import {IAddCommentService} from "@/domain/use-cases/posts/add-comment-service";
import {ADD_COMMENT_REPOSITORY, IAddCommentRepository, PostModel} from "@/domain/models";

@Service()
export class AddCommentServiceImpl implements IAddCommentService {
    constructor(
        @Adapter(ADD_COMMENT_REPOSITORY) private readonly addCommentRepository: IAddCommentRepository
    ) {
    }

    async addComment(data: IAddCommentService.Params, postId: string | number, user: string | number): Promise<PostModel> {
        return await this.addCommentRepository.addComment(data, postId, user);
    }
}