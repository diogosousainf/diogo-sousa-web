import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Project } from './project';


@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private apiURL = 'http://13.38.227.173/api/projects';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {}

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.apiURL);
  }

  addProject(project: Project): Observable<Project> {
    return this.http.post<Project>(this.apiURL, project, this.httpOptions);
  }
}
