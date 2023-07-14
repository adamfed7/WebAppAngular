import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './project/projects-list/projects.component';
import { ProjectDetailsComponent } from './project/project-details/project-details.component';
import { FunctionalityDetailsComponent } from './functionality/functionality-details/functionality-details.component';
import { TaskDetailsComponent } from './task/task-details/task-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddTaskComponent } from './task/add-task/add-task.component';
import { EditTaskComponent } from './task/edit-task/edit-task.component';
import { AddFunctionalityComponent } from './functionality/add-functionality/add-functionality.component';
import { EditFunctionalityComponent } from './functionality/edit-functionality/edit-functionality.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    ProjectDetailsComponent,
    FunctionalityDetailsComponent,
    TaskDetailsComponent,
    AddTaskComponent,
    EditTaskComponent,
    AddFunctionalityComponent,
    EditFunctionalityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    DragDropModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
