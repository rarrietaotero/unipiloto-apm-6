import { Component, OnInit } from '@angular/core';
import {Teacher} from '../../models/teacher';

const PROFESORES: Teacher[] = [
  {
    name: "Alejandro",
  	lastname: "Romero",
  	profession: "Ingeniero de Sistemas",
  	grade: 10,
  	group: 6,
  },
  {
    name: "Elmer",
  	lastname: "Escudero",
  	profession: "Licenciado",
  	grade: 8,
  	group: 1,
  },
  {
    name: "Luis",
  	lastname: "Marrugo",
  	profession: "Matematico",
  	grade: 11,
  	group: 3,
  }
];

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {
 title = 'Esta es la pagina de los profesores';

 constructor() { }

	selected: Teacher;

  profesores: Teacher[] = PROFESORES;

  onSelectTeachers(profesor: Teacher){
    this.selected = profesor;
  }

  ngOnInit() {
  }



}



