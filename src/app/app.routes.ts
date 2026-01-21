import { Routes } from '@angular/router';
import { CourseListComponent } from './components/course-list/course-list';
import { DashboardComponent } from './components/dashboard/dashboard';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'courses', component: CourseListComponent }
];
