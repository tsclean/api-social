import {
    ADD_EDUCATION_REPOSITORY,
    ADD_EXPERIENCE_REPOSITORY,
    ADD_PROFILE_REPOSITORY,
    ADD_USER_REPOSITORY,
    CHECK_EMAIL_REPOSITORY,
    DELETE_EDUCATION_REPOSITORY,
    DELETE_EXPERIENCE_REPOSITORY,
    DELETE_PROFILE_REPOSITORY,
    ENCRYPT_REPOSITORY,
    HASH_COMPARE_REPOSITORY,
    HASH_REPOSITORY, LOAD_PROFILE_BY_ID_REPOSITORY,
    LOAD_PROFILE_BY_USER_ID_REPOSITORY, LOAD_PROFILES_REPOSITORY,
    LOAD_USER_BY_ID_REPOSITORY
} from "@/domain/models";
import {
    BcryptAdapter,
    JwtAdapter,
    ProfileMongooseRepositoryAdapter,
    UserMongooseRepositoryAdapter
} from "@/infrastructure/driven-adapters";
import {
    ADD_EDUCATION_SERVICE,
    ADD_EXPERIENCE_SERVICE,
    ADD_PROFILE_SERVICE,
    ADD_USER_SERVICE,
    AddEducationServiceImpl,
    AddExperiencesServiceImpl,
    AddProfileServiceImpl,
    AddUserServiceImpl,
    AUTH_SERVICE,
    AuthServiceImpl,
    DELETE_EDUCATION_SERVICE,
    DELETE_EXPERIENCE_SERVICE,
    DELETE_PROFILE_SERVICE,
    DeleteEducationServiceImpl,
    DeleteProfileServiceImpl,
    LOAD_PROFILE_BY_ID_SERVICE,
    LOAD_PROFILES_SERVICE,
    LoadProfileByIdServiceImpl,
    LoadProfileServiceImpl
} from "@/domain/use-cases";
import {DeleteExperienceServiceImpl} from "@/domain/use-cases/impl/profiles/delete-experience-service-impl";

export const adapters = [
    {
        provide: ADD_PROFILE_REPOSITORY,
        useClass: ProfileMongooseRepositoryAdapter
    },
    {
        provide: ADD_USER_REPOSITORY,
        useClass: UserMongooseRepositoryAdapter
    },
    {
        provide: LOAD_USER_BY_ID_REPOSITORY,
        useClass: UserMongooseRepositoryAdapter
    },
    {
        provide: CHECK_EMAIL_REPOSITORY,
        useClass: UserMongooseRepositoryAdapter
    },
    {
        provide: ENCRYPT_REPOSITORY,
        useClass: JwtAdapter
    },
    {
        provide: HASH_REPOSITORY,
        useClass: BcryptAdapter
    },
    {
        provide: HASH_COMPARE_REPOSITORY,
        useClass: BcryptAdapter
    },
    {
        provide: LOAD_PROFILE_BY_USER_ID_REPOSITORY,
        useClass: ProfileMongooseRepositoryAdapter
    },
    {
        provide: LOAD_PROFILE_BY_ID_REPOSITORY,
        useClass: ProfileMongooseRepositoryAdapter
    },
    {
        provide: LOAD_PROFILES_REPOSITORY,
        useClass: ProfileMongooseRepositoryAdapter
    },
    {
        provide:DELETE_PROFILE_REPOSITORY,
        useClass: ProfileMongooseRepositoryAdapter
    },
    {
        provide: ADD_EXPERIENCE_REPOSITORY,
        useClass: ProfileMongooseRepositoryAdapter
    },
    {
        provide: DELETE_EXPERIENCE_REPOSITORY,
        useClass: ProfileMongooseRepositoryAdapter
    },
    {
        provide: ADD_EDUCATION_REPOSITORY,
        useClass: ProfileMongooseRepositoryAdapter
    },
    {
        provide: DELETE_EDUCATION_REPOSITORY,
        useClass: ProfileMongooseRepositoryAdapter
    }
];

export const services = [
    {
        provide: ADD_USER_SERVICE,
        useClass: AddUserServiceImpl
    },
    {
        provide: ADD_PROFILE_SERVICE,
        useClass: AddProfileServiceImpl
    },
    {
        provide: AUTH_SERVICE,
        useClass: AuthServiceImpl
    },
    {
        provide: LOAD_PROFILE_BY_ID_SERVICE,
        useClass: LoadProfileByIdServiceImpl
    },
    {
        provide: LOAD_PROFILES_SERVICE,
        useClass: LoadProfileServiceImpl
    },
    {
        provide: DELETE_PROFILE_SERVICE,
        useClass: DeleteProfileServiceImpl
    },
    {
        provide: ADD_EXPERIENCE_SERVICE,
        useClass: AddExperiencesServiceImpl
    },
    {
        provide: DELETE_EXPERIENCE_SERVICE,
        useClass: DeleteExperienceServiceImpl
    },
    {
        provide: ADD_EDUCATION_SERVICE,
        useClass: AddEducationServiceImpl
    },
    {
        provide: DELETE_EDUCATION_SERVICE,
        useClass: DeleteEducationServiceImpl
    }
];
        