import {AddUserController, LoadUserByIdController} from "@/infrastructure/entry-points/api/users";
import {AuthController} from "@/infrastructure/entry-points/api/auth";
import {
    AddEducationController,
    AddExperiencesController,
    AddProfileController,
    DeleteEducationController,
    DeleteExperienceController,
    DeleteProfileController, LoadProfileByIdController,
    LoadProfilesController
} from "@/infrastructure/entry-points/api/profiles";
import {
    AddCommentController,
    AddLikeController,
    AddPostController, DeleteCommentController, DeleteLikeController,
    DeletePostController,
    LoadPostByIdController,
    LoadPostsController
} from "@/infrastructure/entry-points/api/posts";

export const controllers = [
    AddUserController,
    AuthController,
    AddProfileController,
    LoadProfilesController,
    DeleteProfileController,
    AddExperiencesController,
    DeleteExperienceController,
    AddEducationController,
    DeleteEducationController,
    AddPostController,
    LoadUserByIdController,
    LoadPostsController,
    LoadPostByIdController,
    DeletePostController,
    AddLikeController,
    DeleteLikeController,
    AddCommentController,
    DeleteCommentController,
    LoadProfileByIdController
];