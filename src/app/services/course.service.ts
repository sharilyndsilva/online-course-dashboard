import { Injectable } from '@angular/core';
import { Course } from '../models/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private courses: Course[] = [
    {
      id: 1,
      title: 'Angular',
      description: 'Angular basics and components',
      duration: '6 weeks'
    },
    {
      id: 2,
      title: 'TypeScript',
      description: 'TypeScript fundamentals',
      duration: '4 weeks'
    }
  ];

  getCourses(): Course[] {
    return this.courses;
  }
}

