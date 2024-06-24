import { Component } from '@angular/core';
import { ProjectService } from '../project.service';
import { Project } from '../project';
import { Router } from '@angular/router';
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  standalone: true,
  imports: [
    FormsModule,
    NgIf
  ],
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent {
  name = '';
  description = '';
  image = '';
  link = '';
  successMessage = '';


  constructor(private projectService: ProjectService, private router: Router) {}

  addProject(): void {
    const newProject: Project = {
      id: 0,
      name: this.name,
      description: this.description,
      image: this.image,
      link: this.link,
      created_at: '',
      updated_at: ''
    };
    this.projectService.addProject(newProject).subscribe(() => {
      this.successMessage = 'Project added successfully!';
      this.clearFields();
      setTimeout(() => {
        this.successMessage = '';
      }, 3000);
    });
  }

  clearFields(): void {
    this.name = '';
    this.description = '';
    this.image = '';
    this.link = '';
  }


}
