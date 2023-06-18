export interface Skill {
	name: string;
	experienceYears: number;
}

export interface ImageSrc {
	small: string;
	large: string;
}

export interface Project {
	imageSource: ImageSrc;
	name: string;
	tags: string[];
	liveLink?: string;
	codeLink?: string;
}
