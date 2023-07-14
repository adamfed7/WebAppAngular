import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DataService } from '../../service/data-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from '../../models/task.model';
import { Status } from '../../models/functionality.model';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss'],
})
export class EditTaskComponent implements OnInit {
  taskForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    priority: new FormControl(''),
    estimatedTime: new FormControl(''),
    status: new FormControl(''),
  });

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  taskName = this.route.snapshot.paramMap.get('taskName');
  task = this.dataService.getTask(this.taskName!);

  functionalityName = this.task?.functionality.name;
  functionality = this.task?.functionality;
  tasks = this.dataService.getTasks(this.functionalityName!);

  ngOnInit(): void {
    this.taskForm.setValue({
      name: this.task!.name,
      description: this.task!.description,
      priority: this.task!.priority,
      estimatedTime: this.task!.estimatedTime as string,
      status: this.task!.status,
    });
  }

  onSubmit(): void {
    if (this.taskForm.value.status === 'DONE') {
      var status = Status.DONE;
    } else if (this.taskForm.value.status === 'DOING') {
      var status = Status.DOING;
    } else {
      var status = Status.TODO;
    }

    const updatedTask: Task = {
      name: this.taskForm.value.name as string,
      description: this.taskForm.value.description as string,
      priority: this.taskForm.value.priority as string,
      estimatedTime: this.taskForm.value.estimatedTime as string,
      status: status,
      functionality: this.functionality!,
      addedAt: this.task?.addedAt as Date,
      user: this.task?.user as User,
    };

    this.dataService.updateTask(this.task!.name, updatedTask);
    this.router.navigate([
      '/projects',
      this.task?.functionality?.project?.name,
      'functionalities',
      this.task?.functionality?.name,
      'tasks',
      this.task?.name,
    ]);

    if (!this.tasks.length) {
      this.functionality!.status = Status.TODO;
    } else if (this.tasks.every(task => task.status === Status.DONE)) {
      this.functionality!.status = Status.DONE;
    } else if (this.tasks.some(task => task.status === Status.DOING || task.status === Status.DONE)) {
      this.functionality!.status = Status.DOING;
    } else {
      this.functionality!.status = Status.TODO;
    }

    this.dataService.updateFunctionality(
      this.functionalityName!,
      this.functionality!
    );
  }
}
