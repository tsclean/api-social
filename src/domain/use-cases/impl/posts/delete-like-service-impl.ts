import {Adapter, Service} from "@tsclean/core";
import {IDeleteLikeService} from "@/domain/use-cases/posts/delete-like-service";
import {DELETE_LIKE_REPOSITORY, IDeleteLikeRepository} from "@/domain/models";

@Service()
export class DeleteLikeServiceImpl implements IDeleteLikeService {
    constructor(
        @Adapter(DELETE_LIKE_REPOSITORY) private readonly deleteLikeRepository: IDeleteLikeRepository
    ) {
    }

    async deleteLike(postId: string | number, likeId: string | number): Promise<unknown> {
        return await this.deleteLikeRepository.deleteLike(postId, likeId);
    }
}