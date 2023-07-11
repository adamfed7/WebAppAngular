export enum Status {
    TODO = 'todo',
    DOING = 'doing',
    DONE = 'done',
  }
  
  export interface Functionality {
    name: string;
    description: string;
    priority: number;
    project: Project;
    user: User;
    status: Status;
  }
  