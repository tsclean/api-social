import {ObjectId} from "mongodb";
import {
    AddUserParams,
    IAddUserRepository,
    ICheckEmailRepository,
    ILoadUserByIdRepository,
    UserModel
} from "@/domain/models";
import {UserModelSchema} from "@/infrastructure/driven-adapters";

export class UserMongooseRepositoryAdapter implements IAddUserRepository,
    ICheckEmailRepository, ILoadUserByIdRepository {

    async addUserRepository(data: AddUserParams): Promise<UserModel> {
        return await UserModelSchema.create(data);
    }

    async checkEmail(email: string): Promise<UserModel> {
        return await UserModelSchema.findOne({email}).exec();
    }

    async loadUserById(id: string | number): Promise<UserModel> {
        const idx = new ObjectId(id);
        return await UserModelSchema.findById({_id: idx}).exec();
    }
}
