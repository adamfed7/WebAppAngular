import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './project/projects-list/projects.component';
import { ProjectDetailsComponent } from './project/project-details/project-details.component';
import { FunctionalityDetailsComponent } from './functionality/functionality-details/functionality-details.component';
import { TaskDetailsComponent } from './task/task-details/task-details.component';
import { AddTaskComponent } from './task/add-task/add-task.component';
import { EditTaskComponent } from './task/edit-task/edit-task.component';
import { AddFunctionalityComponent } from './functionality/add-functionality/add-functionality.component';
import { EditFunctionalityComponent } from './functionality/edit-functionality/edit-functionality.component';

const routes: Routes = [
  { path: '', redirectTo: '/projects', pathMatch: 'full' },
  { path: 'projects', component: ProjectsComponent },
  { path: 'projects/:projectName', component: ProjectDetailsComponent },
  { path: 'projects/:projectName/add-functionality', component: AddFunctionalityComponent },
  { path: 'projects/:projectName/functionalities/:functionalityName', component: FunctionalityDetailsComponent },
  { path: 'projects/:projectName/functionalities/:functionalityName/edit-functionality', component: EditFunctionalityComponent },
  { path: 'projects/:projectName/functionalities/:functionalityName/add-task', component: AddTaskComponent },
  { path: 'projects/:projectName/functionalities/:functionalityName/tasks/:taskName', component: TaskDetailsComponent },
  { path: 'projects/:projectName/functionalities/:functionalityName/tasks/:taskName/edit-task', component: EditTaskComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

