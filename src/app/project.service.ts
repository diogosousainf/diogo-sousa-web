import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Project } from './Project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private jsonURL = 'assets/db.json';

  constructor(private http: HttpClient) {}

  getProjects(): Observable<Project[]> {
    return this.http.get<{ projects: Project[] }>(this.jsonURL).pipe(
      map(response => response.projects)
    );
  }
}
