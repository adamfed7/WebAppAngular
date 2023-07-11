import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects: Project[] = [{
    name: 'Default Project',
    description: 'This is a default project'
  }];

  constructor() { }

  ngOnInit(): void {
  }

}

