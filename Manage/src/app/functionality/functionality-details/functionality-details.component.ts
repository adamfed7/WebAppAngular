import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Functionality, Status } from '../../models/functionality.model';
import { Task } from '../../models/task.model';
import { DataService } from '../../service/data-service.service';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-functionality-details',
  templateUrl: './functionality-details.component.html',
  styleUrls: ['./functionality-details.component.scss']
})
export class FunctionalityDetailsComponent implements OnInit {
  functionality: Functionality | undefined;
  tasks: Task[] = [];
  statusList = [Status.TODO, Status.DOING, Status.DONE];
  Status = Status;
  taskArrays: Task[][] = [];

  constructor(private route: ActivatedRoute, private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    const functionalityName = this.route.snapshot.paramMap.get('functionalityName');
    if (functionalityName !== null) {
      this.functionality = this.dataService.getFunctionality(functionalityName);
      this.tasks = this.dataService.getTasks(functionalityName);
    }

    this.refreshTasks();
  }

  deleteTask(taskName: string) {
    this.dataService.removeTask(taskName);
    const functionalityName = this.route.snapshot.paramMap.get('functionalityName');
    this.functionality = this.dataService.getFunctionality(functionalityName!);
    this.tasks = this.dataService.getTasks(functionalityName!);
  }

  getTaskArray(status: Status): Task[] {
    switch (status) {
      case Status.TODO: return this.taskArrays[0];
      case Status.DOING: return this.taskArrays[1];
      case Status.DONE: return this.taskArrays[2];
      default: return [];
    }
  }
  getConnectedList(): string[] {
    return this.statusList.map((s, index) => s + index);
  }

  drop(event: CdkDragDrop<Task[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );

      const task: Task = event.item.data;
      const newStatus = (event.container.id as string).slice(0, 4) as Status;
      task.status = newStatus;
      this.dataService.updateTask(task.name, task);

      this.refreshTasks();
    }
  }

  refreshTasks(): void {
    if (this.functionality !== undefined) {
      this.taskArrays[0] = this.dataService.getTasksByStatus(this.functionality.name, Status.TODO);
      this.taskArrays[1] = this.dataService.getTasksByStatus(this.functionality.name, Status.DOING);
      this.taskArrays[2] = this.dataService.getTasksByStatus(this.functionality.name, Status.DONE);
    }
  }
}



