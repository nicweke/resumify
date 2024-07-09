export interface ResumeProfile {
  name: string;
  email: string;
  phone: string;
  url: string;
  summary: string;
  location: string;
}

export interface ResumeWorkExperience {
  company: string;
  jobTitle: string;
  date: string;
  description: string[];
}

export interface ResumeEducation {
  school: string;
  degree: string;
  gpa: string;
  date: string;
  description: string[];
}

export interface ResumeProject {
  project: string;
  date: string;
  description: string[];
}

export interface FeaturedSkill {
  skill: string;
  rating: number;
}

export interface ResumeSkills {
  featuredSkill: FeaturedSkill[];
}

export interface ResumeCustom {
  description: string[];
}

export interface ResumeReferees {
  name: string;
  company: string;
  email: string;
  phone: string;
  title: string;
}

export interface Resume {
  profile: ResumeProfile;
  workExperience: ResumeWorkExperience[];
  educations: ResumeEducation[];
  projects: ResumeProject[];
  skills: ResumeSkills;
  custom: ResumeCustom;
  referees: ResumeReferees[];
}

export type ResumeKey = keyof Resume;
