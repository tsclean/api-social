import {AddPostParams, CommentsModel, LikesModel, PostModel} from "@/domain/models/post";
import {PostModelSchema} from "@/infrastructure/driven-adapters/adapters/orm/mongoose/models/post";
import {
    IAddCommentRepository,
    IAddLikeRepository,
    IAddPostRepository, IDeleteCommentRepository, IDeleteLikeRepository,
    IDeletePostRepository,
    ILoadPostByIdRepository,
    ILoadPostsRepository
} from "@/domain/models";
import {ProfileModelSchema} from "@/infrastructure/driven-adapters";
import {ObjectId} from "mongodb";

export class PostMongooseRepositoryAdapter implements IAddPostRepository,
    ILoadPostsRepository,
    ILoadPostByIdRepository,
    IDeletePostRepository,
    IAddLikeRepository,
    IDeleteLikeRepository,
    IAddCommentRepository,
    IDeleteCommentRepository {

    async addPost(data: AddPostParams): Promise<PostModel> {
        return await PostModelSchema.create(data);
    }

    async loadPosts(): Promise<PostModel[]> {
        return await PostModelSchema.find({}).exec();
    }

    async loadPostById(id: string | number): Promise<PostModel> {
        const post = await PostModelSchema.findById(id).exec();
        return post && this.map(post);
    }

    async deletePost(id: string): Promise<any> {
        return PostModelSchema.findByIdAndDelete(id);
    }

    async addLike(data: any): Promise<void> {
        let like;
        data["likes"].map(item => like = item)

        await PostModelSchema.updateOne({
            user: like["user"]
        }, {
            $push: {
                "likes": like
            }
        })
    }

    async deleteLike(postId: string | number, likeId: string | number): Promise<any> {
        await PostModelSchema.updateOne({
            user: postId
        }, {
            $pull: {
                "likes": {_id: likeId}
            }
        })
    }

    async addComment(data: IAddCommentRepository.Params, postId: string | number, user: string | number): Promise<PostModel | any> {
        await PostModelSchema.findByIdAndUpdate({
            _id: postId
        }, {
            $push: {
                "comments": data
            }
        })
    }

    async deleteComment(postId: string | number, commentId: string | number): Promise<any> {
        await PostModelSchema.findByIdAndUpdate({
            _id: postId
        }, {
            $pull: {
                "comments": {_id: commentId}
            }
        })
    }

    map(data: any): any {
        const {_id, ...rest} = data
        return Object.assign({}, rest, {id: _id})
    }


}
