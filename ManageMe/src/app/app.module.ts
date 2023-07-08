import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectListComponent } from './pages/project-list/project-list.component';
import { FeatureListComponent } from './pages/feature-list/feature-list.component';
import { TaskListComponent } from './pages/task-list/task-list.component';
import { UserListComponent } from './pages/user-list/user-list.component';
import { ProjectFormComponent } from './pages/forms/project-form/project-form.component';
import { FeatureFormComponent } from './pages/forms/feature-form/feature-form.component';
import { TaskFormComponent } from './pages/forms/task-form/task-form.component';
import { UserFormComponent } from './pages/forms/user-form/user-form.component';
import { FeatureCreateComponent } from './features/feature-create/feature-create.component';
import { FeatureEditComponent } from './features/feature-edit/feature-edit.component';
import { FeatureDetailComponent } from './features/feature-detail/feature-detail.component';
import { ProjectCreateComponent } from './projects/project-create/project-create.component';
import { ProjectEditComponent } from './projects/project-edit/project-edit.component';
import { ProjectDetailComponent } from './projects/project-detail/project-detail.component';
import { TaskCreateComponent } from './tasks/task-create/task-create.component';
import { TaskEditComponent } from './tasks/task-edit/task-edit.component';
import { TaskDetailComponent } from './tasks/task-detail/task-detail.component';
import { UserCreateComponent } from './users/user-create/user-create.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectListComponent,
    FeatureListComponent,
    TaskListComponent,
    UserListComponent,
    ProjectFormComponent,
    FeatureFormComponent,
    TaskFormComponent,
    UserFormComponent,
    FeatureCreateComponent,
    FeatureEditComponent,
    FeatureDetailComponent,
    ProjectCreateComponent,
    ProjectEditComponent,
    ProjectDetailComponent,
    TaskCreateComponent,
    TaskEditComponent,
    TaskDetailComponent,
    UserCreateComponent,
    UserEditComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
