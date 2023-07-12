import { Project } from "./project.model";
import { User } from "./user.model";

export enum Status {
    TODO = 'TODO',
    DOING = 'DOING',
    DONE = 'DONE',
  }
  
  export interface Functionality {
    name: string;
    description: string;
    priority: string;
    project: Project;
    user: User;
    status: Status;
  }
  