import { Injectable } from '@angular/core';
import { Enrollment } from '../models/enrollment';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  private enrollments: Enrollment[] = [
    {
      id: 1,
      studentId: 1,
      courseId: 1
    },
    {
      id: 2,
      studentId: 2,
      courseId: 2
    }
  ];

  getEnrollments(): Enrollment[] {
    return this.enrollments;
  }
}
