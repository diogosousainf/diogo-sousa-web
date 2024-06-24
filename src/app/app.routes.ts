import { Routes } from '@angular/router';
import {ProjectListComponent} from "./project-list/project-list.component";
import {AboutComponent} from "./about/about.component";

export const routes: Routes = [
  { path: 'projects',  component: ProjectListComponent },
  { path: 'about',  component: AboutComponent },

];
