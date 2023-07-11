import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { FunctionalityDetailsComponent } from './functionality-details/functionality-details.component';
import { TaskDetailsComponent } from './task-details/task-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/projects', pathMatch: 'full' },
  { path: 'projects', component: ProjectsComponent },
  { path: 'projects/:projectName', component: ProjectDetailsComponent },
  { path: 'projects/:projectName/functionalities/:functionalityName', component: FunctionalityDetailsComponent },
  { path: 'projects/:projectName/functionalities/:functionalityName/tasks/:taskName', component: TaskDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

