import {Component, OnInit} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {ProjectListComponent} from "./project-list/project-list.component";
import {AddProjectComponent} from "./add-project/add-project.component";
import {HttpClientModule} from "@angular/common/http";
import {Project} from "./Project";
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

export class AppComponent implements OnInit {

  ngOnInit(): void {
    this.smoothScroll();
  }

  private smoothScroll(): void {
    document.querySelectorAll('a[href^="#"]').forEach((anchor: Element) => {
      anchor.addEventListener('click', (e: Event) => {
        e.preventDefault();
        const targetId = (e.target as HTMLElement).getAttribute('href');
        if (targetId && targetId.startsWith('#')) {
          const id = targetId.slice(1);
          const target = document.getElementById(id);
          if (target) {
            window.scrollTo({
              top: target.offsetTop,
              behavior: 'smooth'
            });
          }
        }
      });
    });
  }

}
