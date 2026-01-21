import { Injectable } from '@angular/core';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private students: Student[] = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com'
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com'
    }
  ];

  getStudents(): Student[] {
    return this.students;
  }
}
