import { Component } from '@angular/core';
import { ProjectService } from '../project.service';
import { Project } from '../Project';
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



}
