import { Component } from '@angular/core';

interface Vehicle {
	brand: string;
	model: string;
	color: string;
	plate: string;

}

export class Car implements Vehicle {
	brand: string;
	model: string;
	color: string;
	plate: string;
	capacity: string;
	build_year: number;

	constructor(brand: string, model: string, color: string, plate:string, capacity:string, build_year:number){
		this.brand =brand;
		this.model= model;
		this.color= color;
		this.plate= plate;
		this.capacity = capacity;
		this.build_year = build_year;
		
	}
}


export class Propietario  {
	id: number;
	licencia: number;
	first_name: string;
	last_name: string;
	age: number;

	constructor(id: number, licencia: number, first_name: string, last_name:string, age:number){
		this.id =id;
		this.licencia= licencia;
		this.first_name= first_name;
		this.last_name= last_name;
		this.age = age;
		
		
	}
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = "Los Carros de Lujo";

   carros: Car[] = CARROS;
   propietarios: Propietario[] = DRIVER;

  }
const CARROS: Car[] = [
  {
    brand:"Toyota",
	model: "Hilux",
	color: "Blanco",
	plate: "UEP 234",
	capacity: "5 Personas",
	build_year: 2017
  },

  {
    brand:"Renault",
	model: "Duster",
	color: "Gris",
	plate: "UEP 514",
	capacity: "6 Personas",
	build_year: 2016
  },

  {
    brand:"Chevrolet",
	model: "Sail",
	color: "Azul",
	plate: "WMM 454",
	capacity: "4 Personas",
	build_year: 2014
  }
  
];


const DRIVER: Propietario[] = [
  {
    id: 1,
	licencia: 51,
	first_name: "Rafael",
	last_name: "Arrieta",
	age: 25
  }

  
  
];
