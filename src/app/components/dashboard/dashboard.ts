import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseService } from '../../services/course.service';
import { StudentService } from '../../services/student.service';
import { EnrollmentService } from '../../services/enrollment.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class DashboardComponent implements OnInit {

  totalCourses = 0;
  totalStudents = 0;
  totalEnrollments = 0;

  constructor(
    private courseService: CourseService,
    private studentService: StudentService,
    private enrollmentService: EnrollmentService
  ) {}

  ngOnInit(): void {
    this.totalCourses = this.courseService.getCourses().length;
    this.totalStudents = this.studentService.getStudents().length;
    this.totalEnrollments = this.enrollmentService.getEnrollments().length;
  }
}
