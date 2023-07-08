import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task.model';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.tasks = this.dataService.getTasks();
  }

  onDeleteTask(id: number): void {
    this.dataService.deleteTask(id);
    this.tasks = this.dataService.getTasks();
  }
}

