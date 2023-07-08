export class Task {
    constructor(
      public id: number,
      public name: string,
      public description: string,
      public priority: number,
      public feature: Feature,
      public expectedTime: Date,
      public status: 'todo' | 'doing' | 'done',
      public dateAdded: Date,
      public dateStarted: Date,
      public dateFinished: Date,
      public user: User,
    ) {}
  }