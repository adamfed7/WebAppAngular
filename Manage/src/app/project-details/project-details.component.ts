import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data-service.service';
import { Project } from '../models/project.model';
import { Functionality } from '../models/functionality.model';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {
  project: Project | undefined;
  functionalities: Functionality[] | undefined;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    
  ) {}

  ngOnInit(): void {
    const projectName = this.route.snapshot.paramMap.get('projectName');
    if (projectName !== null) {
      this.project = this.dataService.getProject(projectName);
      this.functionalities = this.dataService.getFunctionalities(projectName);
      console.log(this.project, this.functionalities);
    }
  }
}
