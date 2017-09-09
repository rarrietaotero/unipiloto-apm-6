import { Component } from '@angular/core';
import {StudentService} from './service/student.service';
import  {Student} from './models/student';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = "Los Estudiantes del Año";

  selected: Student;

  estudiantes: Student[];

  constructor(private studentService: StudentService) {

  }

  getStudents() {
    this.studentService.getStudents().then(estudiantes => this.estudiantes = estudiantes);
  }

  ngOnInit(): void {
    this.getStudents();
  }

  onSelect(estudiante: Student){
    this.selected = estudiante;
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.studentService.create(name)
      .then(estudiante => {
        this.estudiantes.push(estudiante);
        this.selected = null;
      })
      .catch(error => console.error(error));
  }
}
