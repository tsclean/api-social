import {
    ADD_COMMENT_REPOSITORY,
    ADD_EDUCATION_REPOSITORY,
    ADD_EXPERIENCE_REPOSITORY, ADD_LIKE_REPOSITORY, ADD_POST_REPOSITORY,
    ADD_PROFILE_REPOSITORY,
    ADD_USER_REPOSITORY,
    CHECK_EMAIL_REPOSITORY, DELETE_COMMENT_REPOSITORY,
    DELETE_EDUCATION_REPOSITORY,
    DELETE_EXPERIENCE_REPOSITORY, DELETE_LIKE_REPOSITORY, DELETE_POST_REPOSITORY,
    DELETE_PROFILE_REPOSITORY,
    ENCRYPT_REPOSITORY,
    HASH_COMPARE_REPOSITORY,
    HASH_REPOSITORY, LOAD_POST_BY_ID_REPOSITORY, LOAD_POSTS_REPOSITORY, LOAD_PROFILE_BY_ID_REPOSITORY,
    LOAD_PROFILE_BY_USER_ID_REPOSITORY, LOAD_PROFILES_REPOSITORY,
    LOAD_USER_BY_ID_REPOSITORY
} from "@/domain/models";
import {
    BcryptAdapter,
    JwtAdapter, PostMongooseRepositoryAdapter,
    ProfileMongooseRepositoryAdapter,
    UserMongooseRepositoryAdapter
} from "@/infrastructure/driven-adapters";
import {
    ADD_EDUCATION_SERVICE,
    ADD_EXPERIENCE_SERVICE,
    ADD_PROFILE_SERVICE,
    ADD_USER_SERVICE,
    AddCommentServiceImpl,
    AddEducationServiceImpl,
    AddExperiencesServiceImpl,
    AddLikeServiceImpl,
    AddPostServiceImpl,
    AddProfileServiceImpl,
    AddUserServiceImpl,
    AUTH_SERVICE,
    AuthServiceImpl,
    DELETE_EDUCATION_SERVICE,
    DELETE_EXPERIENCE_SERVICE,
    DELETE_PROFILE_SERVICE,
    DeleteEducationServiceImpl,
    DeleteLikeServiceImpl,
    DeletePostServiceImpl,
    DeleteProfileServiceImpl,
    LOAD_PROFILES_SERVICE,
    LOAD_USER_BY_ID_SERVICE,
    ADD_COMMENT_SERVICE,
    ADD_LIKE_SERVICE,
    ADD_POST_SERVICE,
    DELETE_LIKE_SERVICE,
    DELETE_POST_SERVICE,
    LOAD_POST_BY_ID_SERVICE,
    LOAD_POSTS_SERVICE,
    LoadPostByIdServiceImpl,
    LoadPostsServiceImpl,
    LoadProfileServiceImpl,
    LoadUserByIdServiceImpl,
    DeleteExperienceServiceImpl,
    DELETE_COMMENT_SERVICE,
    DeleteCommentServiceImpl, LOAD_PROFILE_BY_ID_SERVICE, LoadProfileByIdServiceImpl
} from "@/domain/use-cases";

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
        provide: DELETE_PROFILE_REPOSITORY,
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
    },
    {
        provide: ADD_POST_REPOSITORY,
        useClass: PostMongooseRepositoryAdapter
    },
    {
        provide: LOAD_POSTS_REPOSITORY,
        useClass: PostMongooseRepositoryAdapter
    },
    {
        provide: LOAD_POST_BY_ID_REPOSITORY,
        useClass: PostMongooseRepositoryAdapter
    },
    {
        provide: LOAD_POST_BY_ID_REPOSITORY,
        useClass: PostMongooseRepositoryAdapter
    },
    {
        provide: DELETE_POST_REPOSITORY,
        useClass: PostMongooseRepositoryAdapter
    },
    {
        provide: ADD_LIKE_REPOSITORY,
        useClass: PostMongooseRepositoryAdapter
    },
    {
        provide: DELETE_LIKE_REPOSITORY,
        useClass: PostMongooseRepositoryAdapter
    },
    {
        provide: ADD_COMMENT_REPOSITORY,
        useClass: PostMongooseRepositoryAdapter
    },
    {
        provide: DELETE_COMMENT_REPOSITORY,
        useClass: PostMongooseRepositoryAdapter
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
    },
    {
        provide: ADD_POST_SERVICE,
        useClass: AddPostServiceImpl
    },
    {
        provide: LOAD_USER_BY_ID_SERVICE,
        useClass: LoadUserByIdServiceImpl
    },
    {
        provide: LOAD_POSTS_SERVICE,
        useClass: LoadPostsServiceImpl
    },
    {
        provide: DELETE_POST_SERVICE,
        useClass: DeletePostServiceImpl
    },
    {
        provide: LOAD_POST_BY_ID_SERVICE,
        useClass: LoadPostByIdServiceImpl
    },
    {
        provide: ADD_LIKE_SERVICE,
        useClass: AddLikeServiceImpl
    },
    {
        provide: DELETE_LIKE_SERVICE,
        useClass: DeleteLikeServiceImpl
    },
    {
        provide: ADD_COMMENT_SERVICE,
        useClass: AddCommentServiceImpl
    },
    {
        provide: DELETE_COMMENT_SERVICE,
        useClass: DeleteCommentServiceImpl
    },
    {
        provide: LOAD_PROFILE_BY_ID_SERVICE,
        useClass: LoadProfileByIdServiceImpl
    }
];
        