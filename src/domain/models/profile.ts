export type ProfileModel<T = any> = {
    id: unknown;
    user: any;
    company: string;
    website: string;
    location: string;
    status: string;
    skills: Array<T>,
    bio: string;
    gitHubUsername: string;
    experience: ExperienceModel[];
    education: EducationModel[]
    social: SocialModel;
    date: unknown
}

export type ExperienceModel = [
    {
        title: string;
        company: string;
        location: string;
        from: string;
        to: string
        current: boolean;
        description: string;
    }
]

export type EducationModel = [
    {
        school: string;
        degree: string;
        fieldOfStudy: string;
        from: Date;
        to: Date;
        current: boolean;
        description: string;
    }
];

export type SocialModel = {
    youtube: string;
    twitter: string;
    facebook: string;
    linkedin: string;
    instagram: string;
}

export type AddProfileParams = Omit<ProfileModel, 'id'>
