export interface Task {
    name: string;
    description: string;
    priority: number;
    functionality: Functionality;
    estimatedTime: number;
    status: Status;
    addedAt: Date;
    startedAt: Date;
    finishedAt: Date;
    user: User;
  }
  