import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';
import { Feature } from '../models/feature.model';
import { Task } from '../models/task.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  projects: Project[] = [];
  features: Feature[] = [];
  tasks: Task[] = [];
  users: User[] = [];

  constructor() { }

  // Metody dla projektów
  getProjects(): Project[] {
    return this.projects;
  }

  addProject(project: Project): void {
    this.projects.push(project);
  }

  deleteProject(projectId: number): void {
    this.projects = this.projects.filter(project => project.id !== projectId);
  }

  // Metody dla funkcjonalności
  getFeatures(): Feature[] {
    return this.features;
  }

  addFeature(feature: Feature): void {
    this.features.push(feature);
  }

  deleteFeature(featureId: number): void {
    this.features = this.features.filter(feature => feature.id !== featureId);
  }

  // Metody dla zadań
  getTasks(): Task[] {
    return this.tasks;
  }

  addTask(task: Task): void {
    this.tasks.push(task);
  }

  deleteTask(taskId: number): void {
    this.tasks = this.tasks.filter(task => task.id !== taskId);
  }

  // Metody dla użytkowników
  getUsers(): User[] {
    return this.users;
  }

  addUser(user: User): void {
    this.users.push(user);
  }

  deleteUser(userId: number): void {
    this.users = this.users.filter(user => user.id !== userId);
  }
}


