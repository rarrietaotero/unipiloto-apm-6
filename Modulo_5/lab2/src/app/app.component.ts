import { Component } from '@angular/core';

interface Person {
	id: number;
	age: number;
	name: string;
	lastname: string;

}

export class Student implements Person {
	id: number;
	age: number;
	name: string;
	lastname: string;
	classes:string;
	grade:number;
	group:number;

	constructor(id: number, age: number, name: string, lastname:string, classes:string, grade:number, group:number){
		this.id =id;
		this.age= age;
		this.name= name;
		this.lastname= lastname;
		this.classes = classes;
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
  title:string = "Estudiantes";

  estudiante1: Student = {
    id: 1,
    age: 25,
    name: "Rafael",
    lastname: "Arrieta",
    classes: "Programacion",
    grade: 1,
    group:2,
  }; 
}
