import { Component } from '@angular/core';
import { ProjectService } from '../project.service';
import { Project } from '../project';  // Importando a interface Project
import { Router } from '@angular/router';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  standalone: true,
  imports: [
    FormsModule
  ],
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent {
  name = '';
  description = '';
  image = '';
  link = '';

  constructor(private projectService: ProjectService, private router: Router) {}

  addProject(): void {
    const newProject: Project = {
      id: 0, // ID pode ser 0 ou pode ser gerado pela API
      name: this.name,
      description: this.description,
      image: this.image,
      link: this.link,
      created_at: '',
      updated_at: ''
    };
    this.projectService.addProject(newProject).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
