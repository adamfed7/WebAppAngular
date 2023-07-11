import { Component, OnInit } from '@angular/core';
import { DataService } from '../data-service.service';
import { Project } from '../models/project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.projects = this.dataService.getProjects();
  }
}


