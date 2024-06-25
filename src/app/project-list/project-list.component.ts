import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjectService } from '../project.service';
import { Project } from '../project';
import {NgForOf, AsyncPipe, NgClass} from "@angular/common";
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
    MatRowDef
  ],
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  projects: Project[] = [];
  displayedColumns: string[] = ['name', 'description', 'link'];


  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.projectService.getProjects().subscribe(data => {
      this.projects = data;
    });
  }

  zoomIn(project: Project): void {
    project.zoomed = true;
  }

  zoomOut(project: Project): void {
    project.zoomed = false;
  }
}
