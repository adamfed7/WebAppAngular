import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';
import { Functionality, Status } from '../models/functionality.model';
import { Task } from '../models/task.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private user: User = { firstName: 'John', lastName: 'Doe' };

  private projects: Project[] = [
    {
      name: 'Projekt Angular',
      description: 'To bedzie projekt na zaliczenie',
    },
  ];

  private functionalities: Functionality[] = [
    {
      name: 'Rejestracja użytkowników',
      description:
        'Umożliwia nowym użytkownikom tworzenie konta w naszym systemie',
      priority: 'Wysoki',
      project: this.projects[0],
      user: this.user,
      status: Status.TODO,
    },
    {
      name: 'Logowanie',
      description: 'Umożliwia użytkownikom logowanie do systemu',
      priority: 'Wysoki',
      project: this.projects[0],
      user: this.user,
      status: Status.TODO,
    },
    {
      name: 'Zarządzanie zadaniami',
      description: 'Umożliwia użytkownikom dodawanie, edycję i usuwanie zadań',
      priority: 'Średni',
      project: this.projects[0],
      user: this.user,
      status: Status.TODO,
    },
  ];

  private tasks: Task[] = [
    {
      name: 'Stworzyć formularz rejestracji',
      description:
        'Formularz powinien zawierać pola: imię, nazwisko, email i hasło',
      priority: 'Wysoki',
      functionality: this.functionalities[0],
      estimatedTime: '2',
      status: Status.TODO,
      addedAt: new Date(),
      user: this.user,
    },
    {
      name: 'Implementacja walidacji formularza',
      description:
        'Wszystkie pola w formularzu rejestracji powinny być walidowane',
      priority: 'Wysoki',
      functionality: this.functionalities[0],
      estimatedTime: '3',
      status: Status.TODO,
      addedAt: new Date(),
      user: this.user,
    },
    {
      name: 'Połączenie formularza logowania z backendem',
      description:
        'Formularz logowania powinien być połączony z backendem, aby umożliwić użytkownikom logowanie',
      priority: 'Wysoki',
      functionality: this.functionalities[1],
      estimatedTime: '1',
      status: Status.TODO,
      addedAt: new Date(),
      user: this.user,
    },
    {
      name: 'Stworzenie interfejsu dla formularza logowania',
      description:
        'Interfejs formularza logowania powinien być przyjazny dla użytkownika',
      priority: 'Średni',
      functionality: this.functionalities[1],
      estimatedTime: '2',
      status: Status.TODO,
      addedAt: new Date(),
      user: this.user,
    },
    {
      name: 'Dodawanie zadań',
      description:
        'Użytkownicy powinni być w stanie dodawać nowe zadania do systemu',
      priority: 'Średni',
      functionality: this.functionalities[2],
      estimatedTime: '1.5',
      status: Status.TODO,
      addedAt: new Date(),
      user: this.user,
    },
    {
      name: 'Usuwanie zadań',
      description: 'Użytkownicy powinni być w stanie usuwać zadania',
      priority: 'Średni',
      functionality: this.functionalities[2],
      estimatedTime: '1',
      status: Status.TODO,
      addedAt: new Date(),
      user: this.user,
    },
    {
      name: 'Aktualizacja zadań',
      description:
        'Użytkownicy powinni być w stanie aktualizować istniejące zadania',
      priority: 'Średni',
      functionality: this.functionalities[2],
      estimatedTime: '1.5',
      status: Status.TODO,
      addedAt: new Date(),
      user: this.user,
    },
  ];

  constructor() { }

  getUser(): User {
    return this.user;
  }

  getProjects(): Project[] {
    return this.projects;
  }

  getProject(name: string): Project | undefined {
    return this.projects.find((project) => project.name === name);
  }

  getFunctionalities(projectName: string): Functionality[] {
    return this.functionalities.filter(
      (func) => func.project.name === projectName
    );
  }

  getFunctionality(name: string): Functionality | undefined {
    return this.functionalities.find(
      (functionality) => functionality.name === name
    );
  }

  updateFunctionality(name: string, updatedFunctionality: Functionality): void {
    const index = this.functionalities.findIndex(
      (functionality) => functionality.name === name
    );

    if (index !== -1) {
      this.functionalities[index] = updatedFunctionality;
    } else {
      console.error(`Functionality with name ${name} not found`);
    }
  }

  getTask(name: string): Task | undefined {
    return this.tasks.find((task) => task.name === name);
  }

  getTasks(functionalityName: string): Task[] {
    return this.tasks.filter(
      (task) => task.functionality.name === functionalityName
    );
  }

  addTask(task: Task): void {
    this.tasks.push(task);
  }

  updateTask(taskName: string, updatedTask: Partial<Task>) {

    const taskIndex = this.tasks.findIndex((t) => t.name === taskName);
    if (taskIndex > -1) {
      const task = this.tasks[taskIndex];
      if (task) {
        task.status = updatedTask.status!;
        task.description = updatedTask.description!;
        task.estimatedTime = updatedTask.estimatedTime!;
        task.priority = updatedTask.priority!;

        if (updatedTask.status === Status.DONE) {
          let allTasksDone = true;
          for (const task of this.tasks) {
            if (task.status !== Status.DONE) {
              allTasksDone = false;
              break;
            }
          }
          if (allTasksDone) {
            task.functionality.status = Status.DONE;
          }
        } else {
          task.functionality.status = Status.DOING;
        }
      }

    }
  }
  removeTask(taskName: string): void {
    const index = this.tasks.findIndex((t) => t.name === taskName);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
  }

}
