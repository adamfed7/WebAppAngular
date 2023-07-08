import { Project } from "./project.model";
import { User } from "./user.model";

export class Feature {
    constructor(
      public id: number,
      public name: string,
      public description: string,
      public priority: number,
      public project: Project,
      public owner: User,
      public status: 'todo' | 'doing' | 'done',
    ) {}
  }