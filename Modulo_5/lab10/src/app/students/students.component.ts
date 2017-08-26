import { Component, OnInit } from '@angular/core';
import {Student} from '../../models/student';

const ESTUDIANTES: Student[] = [
  {
    name: "Rafael",
  	lastname: "Arrieta",
  	clase: "Programacion",
  	grade: 10,
  	group: 6,
  },
  {
    name: "Juan",
  	lastname: "Perez",
  	clase: "Movilidad",
  	grade: 8,
  	group: 1,
  },
  {
    name: "Andres",
  	lastname: "Hoyos",
  	clase: "Marketing",
  	grade: 11,
  	group: 3,
  }
];

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
title = 'Esta es la pagina de los Estudiantes';
  constructor() { }

  selected_1: Student;

  estudiantes: Student[] = ESTUDIANTES;

  onSelectStudents(estudiante: Student){
    this.selected_1 = estudiante;
  }

  ngOnInit() {
  }

}
