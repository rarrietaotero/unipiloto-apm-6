import { Component } from '@angular/core';

export class Person {
  id: number;
  name: string;
  description: string;
  type: string;
  price: number;
  quantity: number;
}
class Student extends Person {
	classes:Array<string>;
	grade:number;
	group:number;

	constructor(id: number, age: number, name: string, lastname:string, classes:Array<string>, grade:number, group:number){
		super(id, age, name, lastname);
		this.classes = classes;
		this.grade = grade;
		this.group = group;
	}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   title: string = "El producto del Año";

  product: Product = {
    id: 2,
    name: "Samsung galaxy 7",
    description: "telefono que explota",
    type: "smartphone",
    price: 1500000,
    quantity: 20,
  };
}
