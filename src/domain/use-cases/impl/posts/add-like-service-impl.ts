import {Adapter, Service} from "@tsclean/core";
import {IAddLikeService} from "@/domain/use-cases/posts/add-like-service";
import {ADD_LIKE_REPOSITORY, IAddLikeRepository} from "@/domain/models";

@Service()
export class AddLikeServiceImpl implements IAddLikeService {
    constructor(
       @Adapter(ADD_LIKE_REPOSITORY)
       private readonly addLikeRepository: IAddLikeRepository
    ) {
    }

    async addLike(data: string | number): Promise<void> {
        await this.addLikeRepository.addLike(data);
    }
}