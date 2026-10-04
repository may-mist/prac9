import { Component, inject } from '@angular/core';
import { StudentService } from './services/student';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.html'
})
export class App {
  private studentService = inject(StudentService);
  students: any[] = [];

  loadStudents() {
    this.studentService.getStudents().subscribe((data: any) => {
      this.students = data;
    });
  }
}