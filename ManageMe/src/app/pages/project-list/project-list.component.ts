import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project.model';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {
  projects: Project[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.projects = this.dataService.getProjects();
  }

  onDeleteProject(id: number): void {
    this.dataService.deleteProject(id);
    this.projects = this.dataService.getProjects();
  }
}

