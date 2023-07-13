import { Component } from '@angular/core';
import { Task } from '../models/task.model';
import { DataService } from '../data-service.service';
import { ActivatedRoute, Route } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Status } from '../models/functionality.model';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss'],
})
export class TaskDetailsComponent {
  task: Task | undefined;
  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  taskForm = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    priority: new FormControl('', Validators.required),
    estimatedTime: new FormControl(''),
    status: new FormControl(''),
  });

  ngOnInit(): void {
    const taskName = this.route.snapshot.paramMap.get('taskName');

    this.task = this.dataService.getTask(taskName!);

    const functionalityName =
      this.route.snapshot.paramMap.get('functionalityName');
    const functionality = this.dataService.getFunctionality(functionalityName!);

    if (taskName !== null) {
      this.task = this.dataService.getTask(taskName);
    }

    this.taskForm.patchValue({
      name: this.task?.name,
      description: this.task?.description,
      priority: this.task?.priority,
      estimatedTime: this.task?.estimatedTime,
      status: this.task?.status,
    });
  }

  
  deleteTask(): void {
    if (this.task) {
      this.dataService.removeTask(this.task.name);
      this.router.navigate([
        '/projects',
        this.task.functionality.project.name,
        'functionalities',
        this.task.functionality.name,
      ]);
    }
  }
}
