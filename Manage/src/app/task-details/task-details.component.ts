import { Component } from '@angular/core';
import { Task } from '../models/task.model';
import { DataService } from '../data-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss']
})
export class TaskDetailsComponent {
  task: Task | undefined;
  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const taskName = this.route.snapshot.paramMap.get('taskName');
    if(taskName !== null){
      this.task = this.dataService.getTask(taskName);
    }
    
  }

}
