import { Component } from '@angular/core';

interface Person {
	id: number;
	age: number;
	name: string;
	lastname: string;

}

export class Teacher implements Person {
	id: number;
	age: number;
	name: string;
	lastname: string;
	profession:string;
	grade:number;
	group:number;

	constructor(id: number, age: number, name: string, lastname:string, profession:string, grade:number, group:number){
		this.id =id;
		this.age= age;
		this.name= name;
		this.lastname= lastname;
		this.profession = profession;
		this.grade = grade;
		this.group = group;
	}
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = "Los Profesores del Año";

  selected: Teacher;

  profesores: Teacher[] = TEACHERS;

  onSelect(profesor: Teacher){
    this.selected = profesor;
  }
}

const TEACHERS: Teacher[] = [
  {
    id: 1,
	age: 30,
	name: "Alejandro",
	lastname: "Romero",
	profession: "Ingeniero de Sistemas",
	grade: 10,
	group: 6,
  },
  {
    id: 2,
	age: 45,
	name: "Elmer",
	lastname: "Escudero",
	profession: "Matematico",
	grade: 7,
	group: 1,
  },
  {
    id: 3,
	age: 50,
	name: "Luis",
	lastname: "Marrugo",
	profession: "Licenciado Matematicas y Fisicas",
	grade: 11,
	group: 3,
  }
];