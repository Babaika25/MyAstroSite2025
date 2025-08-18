export type ExperiencePosition = {
    title: string;
    year: string;
    description: string;
    skills: string[];
};

export type Experience = {
    company: string;
    positions: ExperiencePosition[];
};

export type EducationPosition = {
    title: string;
    year: string;
    description: string;
    skills: string[];
};

export type Education = {
    company: string;
    positions: ExperiencePosition[];
};