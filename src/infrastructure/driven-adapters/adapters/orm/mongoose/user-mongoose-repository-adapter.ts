import {ObjectId} from "mongodb";
import {
    AddUserParams,
    IAddUserRepository,
    ICheckEmailRepository,
    ILoadUserByIdRepository, RolesModel,
    UserModel
} from "@/domain/models";
import {UserModelSchema} from "@/infrastructure/driven-adapters";

export class UserMongooseRepositoryAdapter implements IAddUserRepository,
    ICheckEmailRepository, ILoadUserByIdRepository {

    async addUserRepository(data: AddUserParams): Promise<UserModel> {
        return await UserModelSchema.create(data);
    }

    async checkEmail(email: string): Promise<UserModel> {
        const user = await UserModelSchema.findOne({email}).exec();
        return user && this.map(user);
    }

    async loadUserById(id: string | number): Promise<UserModel> {
        const idx = new ObjectId(id);
        return await UserModelSchema.findById({_id: idx}).exec();
    }

    map(data: any): any {
        const {
            _id,
            name,
            email,
            password,
            avatar,
            date,
            roles
        } = data
        return Object.assign({}, {
            id: _id.toString(), name,
            email,
            password,
            avatar,
            date,
            roles
        })
    }
}
