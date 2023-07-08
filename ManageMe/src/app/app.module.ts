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
    UserFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
