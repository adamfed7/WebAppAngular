import { Functionality, Status } from "./functionality.model";
import { User } from "./user.model";

export interface Task {
    name: string;
    description: string;
    priority: string;
    functionality: Functionality;
    estimatedTime?: string;
    status: Status;
    addedAt: Date;
    startedAt?: Date;
    finishedAt?: Date;
    user: User;
  }
  