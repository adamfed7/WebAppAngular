import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Functionality, Status } from 'src/app/models/functionality.model';
import { DataService } from 'src/app/service/data-service.service';
import { Project } from 'src/app/models/project.model';

@Component({
  selector: 'app-add-functionality',
  templateUrl: './add-functionality.component.html',
  styleUrls: ['./add-functionality.component.scss']
})
export class AddFunctionalityComponent implements OnInit {
  project: Project | undefined;
  user = this.dataService.getUser();

  functionalityForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    priority: new FormControl(''),
    status: new FormControl(''),
  });

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private router: Router,
  ) { }


  ngOnInit(): void {
    const projectName = this.route.snapshot.paramMap.get('projectName');
    if (projectName) {
      this.project = this.dataService.getProject(projectName);
    }
  }

  onSubmit(): void {
    const functionalityData = this.functionalityForm.value;
    const sanitizedData: Partial<Functionality> = {
      name: functionalityData.name || '',
      description: functionalityData.description || '',
      priority: functionalityData.priority || '',
      status: Status.TODO,
      project: this.project!,
      user: this.dataService.getUser(),
    };

    this.dataService.addFunctionality(sanitizedData as Functionality);
    this.functionalityForm.reset();
    this.router.navigate(['/projects', this.project!.name]);
  }
}

