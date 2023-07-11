import { Project } from "./project.model";
import { User } from "./user.model";

export enum Status {
    TODO = 'todo',
    DOING = 'doing',
    DONE = 'done',
  }
  
  export interface Functionality {
    name: string;
    description: string;
    priority: string;
    project: Project;
    user: User;
    status: Status;
  }
  