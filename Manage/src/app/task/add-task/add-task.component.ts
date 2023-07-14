import { Component, OnInit, Input } from '@angular/core';
import { Functionality, Status } from '../../models/functionality.model';
import { DataService } from '../../service/data-service.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Task } from '../../models/task.model';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent implements OnInit {
  @Input() functionality: Functionality | undefined;
  user = this.dataService.getUser();

  taskForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    priority: new FormControl(''),
    estimatedTime: new FormControl(''),
    status: new FormControl(''),
  });

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private router: Router,
  ) { }



  ngOnInit(): void {

    const projectName = this.route.snapshot.paramMap.get('projectName');
    const functionalityName =
      this.route.snapshot.paramMap.get('functionalityName');
    if (projectName && functionalityName) {
      const project = this.dataService.getProject(projectName);
      if (project) {
        this.functionality = this.dataService.getFunctionality(
          functionalityName
        );
      }
    }
  }

  onSubmit(): void {
    const taskData = this.taskForm.value;
    const sanitizedData: Partial<Task> = {
      name: taskData.name || '',
      description: taskData.description || '',
      priority: taskData.priority || '',
      estimatedTime: taskData.estimatedTime || '',
      functionality: this.functionality!,
      status: Status.TODO,
      user: this.dataService.getUser(),
      addedAt: new Date(),
    };

    this.dataService.addTask(sanitizedData as Task);
    this.taskForm.reset();
    this.router.navigate(['/projects', this.functionality!.project.name, 'functionalities', this.functionality!.name]);


  }
}
