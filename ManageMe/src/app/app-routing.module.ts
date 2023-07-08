import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectListComponent } from './pages/project-list/project-list.component';
import { FeatureListComponent } from './pages/feature-list/feature-list.component';
import { TaskListComponent } from './pages/task-list/task-list.component';
import { UserListComponent } from './pages/user-list/user-list.component';

const routes: Routes = [
  { path: 'projects', component: ProjectListComponent },
  { path: 'features', component: FeatureListComponent },
  { path: 'tasks', component: TaskListComponent },
  { path: 'users', component: UserListComponent },
  { path: '', redirectTo: '/projects', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
