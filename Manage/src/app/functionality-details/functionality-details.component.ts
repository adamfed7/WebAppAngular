import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Functionality } from '../models/functionality.model';
import { Task } from '../models/task.model';
import { DataService } from '../data-service.service';

@Component({
  selector: 'app-functionality-details',
  templateUrl: './functionality-details.component.html',
  styleUrls: ['./functionality-details.component.scss']
})
export class FunctionalityDetailsComponent implements OnInit {
  functionality: Functionality | undefined;
  tasks: Task[] = [];

  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit(): void {
    const functionalityName = this.route.snapshot.paramMap.get('functionalityName');
    if (functionalityName !== null) {
      this.functionality = this.dataService.getFunctionality(functionalityName);
      this.tasks = this.dataService.getTasks(functionalityName);
    }
  }
}

