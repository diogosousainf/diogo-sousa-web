import {Component} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {ProjectListComponent} from "./project-list/project-list.component";
import {AddProjectComponent} from "./add-project/add-project.component";
import {HttpClientModule} from "@angular/common/http";
import {Project} from "./project";
import {ProjectService} from "./project.service";
import {WelcomeComponent} from "./welcome/welcome.component";
import {AboutComponent} from "./about/about.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProjectListComponent, AddProjectComponent, HttpClientModule, RouterLink, WelcomeComponent, AboutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'new-portfolio';
}
