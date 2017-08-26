import { Component, OnInit } from '@angular/core';
import {Driver} from '../../models/driver';

const CONDUCTORES: Driver[] = [
  {
    name: "Pedro",
  	lastname: "Martinez",
  	age: 45,
  	license: 5140,
  	nacionalidad: "Colombia",
  },
  {
    name: "Gervy",
  	lastname: "Jobs",
  	age: 48,
  	license: 2530,
  	nacionalidad: "USA",
  },
  {
    name: "Carlos",
  	lastname: "Correa",
  	age: 57,
  	license: 3548,
  	nacionalidad: "Ecuador",
  }
];

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.css']
})
export class DriversComponent implements OnInit {
title = 'Esta es la pagina de los Conductores';
  constructor() { }

  selected_2: Driver;

  conductores: Driver[] = CONDUCTORES;

  onSelectDrivers(conductor: Driver){
    this.selected_2 = conductor;
  }

  ngOnInit() {
  }

}
