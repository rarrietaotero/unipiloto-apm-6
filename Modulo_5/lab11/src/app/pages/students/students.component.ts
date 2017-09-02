import { Component, OnInit } from '@angular/core';
import { Student } from '../../models/student';
import {StudentsService} from "../../service/students.service";


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
	title: string = "Los Estudiantes del Año";

  selected_1: Student;

  estudiantes: Student[];
  constructor(private studentsService: StudentsService) { 
  }

  getStudents() {
    this.studentsService.getStudents().then(estudiantes => this.estudiantes = estudiantes);
  }

  ngOnInit(): void {
    this.getStudents();
  }

  onSelectStudents(estudiante: Student){
    this.selected_1 = estudiante;
  }
}
