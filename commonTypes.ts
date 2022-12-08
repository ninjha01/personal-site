import { StaticImageData } from "next/image";
import { ReactNode } from "react";

export interface PersonalType {
  firstname: string;
  lastname: string;
  profile: StaticImageData;
  headline: string;
  bio: string;
  github: string;
  email: string;
}

export interface EssayType {
  title: string;
  description: string;
  img: StaticImageData;
  url: string;
}

export interface ProjectType {
  title: string;
  url: string;
  img: StaticImageData;
  description: string;
}

export interface MockupType {
  title: string;
  url: string;
  description: string;
}
export interface ArchitectureType {
  title: string;
  url: string;
  description: string;
}

export interface ClientType {
  name: string;
  subtitle: string;
  url: string;
  description: string | null;
  logo: StaticImageData;
  bg_img: StaticImageData;
}

export interface NavLink {
  href: string;
  label: ReactNode;
  className?: string;
}

export interface UsesItem {
  title: string;
  url: string;
  description: string;
}

export interface LocalToolsType {
  title: string;
  url: string;
  description: string;
}
