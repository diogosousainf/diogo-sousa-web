import {Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ProjectListComponent} from "./project-list/project-list.component";
import {AddProjectComponent} from "./add-project/add-project.component";
import {HttpClientModule} from "@angular/common/http";
import {Project} from "./project";
import {ProjectService} from "./project.service";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProjectListComponent, AddProjectComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'new-portfolio';
}
