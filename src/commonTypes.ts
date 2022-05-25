export interface PersonalType {
  firstname: string;
  lastname: string;
  headline: string;
  bio: string;
  linkedin: string;
  github: string;
  email: string;
}

export interface EssayType {
  title: string;
  description: string;
  img: string;
  id: string;
}

export interface ProjectType {
  title: string;
  url: string;
  img: string;
  description: string;
}

export interface ClientType {
  name: string;
  subtitle: string;
  url: string;
  description: string | null;
  logo: string;
}
