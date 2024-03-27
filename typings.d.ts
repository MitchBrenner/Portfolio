interface SanityBody {
    _createdAt: string;
    _id: string;
    _rev: string;
    _updatedAt: string;
}

interface Image {
    _type: string;
    asset: {
        _ref: string;
        _type: "reference";
    }
}

export interface Experience extends SanityBody {
    _type: "experience";
    company: string;
    companyImage: Image;
    dateStarted: date;
    dateEnded: date;
    isCurrentlyWorkingHere: boolean;
    jobTitle: string;
    points: string[];
    technologies: Technology[];
}

export interface PageInfo extends SanityBody {
    _type: "pageInfo";
    address: string;
    backgroundInformation: string;
    email: string;
    role: string;
    heroImage: Image;
    name: string;
    phoneNumber: string;
    profilePic: Image;
}

export interface Technology extends SanityBody {
    _type: "skill";
    title: string;
    image: Image;
    progress: number;

}

export interface Social extends SanityBody {
    _type: "social";
    title: string;
    url: string;
}

export interface Project extends SanityBody {
    _type: "project";
    name: string;
    summary: string;
    image: Image;
    linkToBuild: string;
    technologies: Technology[];
}

