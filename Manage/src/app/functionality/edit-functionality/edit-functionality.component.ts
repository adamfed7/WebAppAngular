import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Functionality } from 'src/app/models/functionality.model';
import { User } from 'src/app/models/user.model';
import { DataService } from 'src/app/service/data-service.service';
import { Status } from 'src/app/models/functionality.model';

@Component({
  selector: 'app-edit-functionality',
  templateUrl: './edit-functionality.component.html',
  styleUrls: ['./edit-functionality.component.scss']
})
export class EditFunctionalityComponent implements OnInit {
  functionalityForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    priority: new FormControl(''),
    status: new FormControl(''),
  });

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  functionalityName = this.route.snapshot.paramMap.get('functionalityName');
  functionality = this.dataService.getFunctionality(this.functionalityName!);

  project = this.functionality?.project;
  functionalities = this.dataService.getFunctionalities(this.project!.name!);

  ngOnInit(): void {
    this.functionalityForm.setValue({
      name: this.functionality!.name,
      description: this.functionality!.description,
      priority: this.functionality!.priority,
      status: this.functionality!.status,
    });
  }

  onSubmit(): void {
    if (this.functionalityForm.value.status === 'DONE') {
      var status = Status.DONE;
    } else if (this.functionalityForm.value.status === 'DOING') {
      var status = Status.DOING;
    } else {
      var status = Status.TODO;
    }

    const updatedFunctionality: Functionality = {
      name: this.functionalityForm.value.name as string,
      description: this.functionalityForm.value.description as string,
      priority: this.functionalityForm.value.priority as string,
      status: status,
      project: this.project!,
      user: this.functionality?.user as User,
    };

    if (this.functionality?.name !== updatedFunctionality.name) {
      const tasks = this.dataService.getTasks(this.functionality!.name);
      tasks.forEach(task => {
        task.functionality.name = updatedFunctionality.name;
        this.dataService.updateTask(task.name, task);
      });
    }

    this.dataService.updateFunctionality(this.functionality!.name, updatedFunctionality);
    this.router.navigate([
      '/projects',
      this.functionality?.project?.name
    ]);
  }
}

