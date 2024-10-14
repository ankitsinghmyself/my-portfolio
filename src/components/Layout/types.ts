export interface Project {
    title: string;
    description: string;
    image: string;
    techstack: TechStack[];
    githubUrl: string;
    requiresMobileView: boolean;
    isDownload: boolean;
    demoUrl: string;
  }
  export interface TechStack {
    label: string;
    color: string;
  }