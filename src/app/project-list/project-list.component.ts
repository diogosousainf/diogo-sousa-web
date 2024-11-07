import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjectService } from '../project.service';
import { Project } from '../Project';
import {NgForOf, AsyncPipe, NgClass, NgIf, SlicePipe, CommonModule} from "@angular/common";
import {RouterOutlet} from "@angular/router";

import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatRow, MatRowDef,
  MatTable
} from "@angular/material/table";


@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  standalone: true,
  imports: [
    NgForOf,
    RouterOutlet,
    NgClass,
    MatTable,
    MatHeaderCell,
    MatCell,
    MatRow,
    MatColumnDef,
    MatHeaderCellDef,
    MatCellDef,
    MatRowDef,
    NgIf,
    SlicePipe,
    CommonModule
  ],
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  projects: Project[] = [];
  displayedColumns: string[] = ['name', 'link'];
  selectedProject: Project | null = null;

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.projectService.getProjects().subscribe(data => {
      this.projects = data;
    });
  }

  openModal(project: Project): void {
    this.selectedProject = project;
  }

  closeModal(): void {
    this.selectedProject = null;
  }
}
