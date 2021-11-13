import {ObjectId} from "mongodb";
import {
    AddProfileParams,
    IAddEducationRepository,
    IAddExperiencesRepository,
    IAddProfileRepository,
    IDeleteEducationRepository,
    IDeleteExperienceRepository,
    IDeleteProfileRepository,
    ILoadProfileByIdRepository,
    ILoadProfileByUserIdRepository,
    ILoadProfilesRepository, ProfileModel
} from "@/domain/models";
import {isObject} from "@/infrastructure/entry-points";
import {ProfileModelSchema} from "@/infrastructure/driven-adapters";

export class ProfileMongooseRepositoryAdapter<T> implements IAddProfileRepository,
    ILoadProfileByUserIdRepository<T>,
    ILoadProfileByIdRepository,
    ILoadProfilesRepository,
    IDeleteProfileRepository,
    IAddExperiencesRepository,
    IDeleteExperienceRepository,
    IAddEducationRepository,
    IDeleteEducationRepository {

    async addProfileRepository(data: AddProfileParams): Promise<ProfileModel> {
        return await ProfileModelSchema.create(data);
    }

    async loadProfileByUserId(id: T): Promise<ProfileModel> {
        return await ProfileModelSchema.findOne({user: id}).exec();
    }

    async loadProfileById(idx: string): Promise<ProfileModel> {
        const id = isObject(idx) ? idx["id"] : idx;

        return await ProfileModelSchema.findById({_id: id}).populate({
            path: 'user',
            select: ['name', 'avatar']
        }).exec();
    }

    async load(): Promise<ProfileModel[]> {
        return await ProfileModelSchema.find().populate({path: 'user', select: ['name', 'avatar']}).exec();
    }

    async deleteProfile(id: string | number): Promise<boolean | unknown> {
        const idx = new ObjectId(id);
        return await ProfileModelSchema.findByIdAndDelete(idx).exec();
    }

    async addExperience(id: string, experiences): Promise<void> {
        let experience: [] = [];
        for (const item in experiences) experience = experiences[item];

        await ProfileModelSchema.updateOne({
            id: id["id"], $push: {
                "experience": experience
            }
        })
    }

    async deleteExperience(profileId: string | number, experienceId: string | number): Promise<unknown | any> {
        await ProfileModelSchema.updateOne({
            id: profileId
        }, {
            $pull: {
                "experience": {_id: experienceId}
            }
        })
    }

    async addEducation(id: string | number, educations: []): Promise<void> {
        let education: [] = [];
        for (const item in educations) education = educations[item];

        await ProfileModelSchema.updateOne({
            id: id["id"], $push: {
                "education": education
            }
        })
    }

    async deleteEducation(profileId: string | number, educationId: string | number): Promise<void> {
        await ProfileModelSchema.updateOne({
            id: profileId
        }, {
            $pull: {
                "education": {_id: educationId}
            }
        })
    }
}
