import {AddUserController} from "@/infrastructure/entry-points/api/users";
import {AuthController} from "@/infrastructure/entry-points/api/auth";
import {
    AddEducationController,
    AddExperiencesController,
    AddProfileController,
    DeleteEducationController,
    DeleteExperienceController,
    DeleteProfileController,
    LoadProfileByIdController,
    LoadProfilesController
} from "@/infrastructure/entry-points/api/profiles";

export const controllers = [
    AddUserController,
    AuthController,
    AddProfileController,
    LoadProfileByIdController,
    LoadProfilesController,
    DeleteProfileController,
    AddExperiencesController,
    DeleteExperienceController,
    AddEducationController,
    DeleteEducationController
];