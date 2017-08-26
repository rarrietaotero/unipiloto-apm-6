import { Component, OnInit } from '@angular/core';
import {Vehicles} from '../../models/vehicle';

const VEHICULOS: Vehicles[] = [
  {
    marca: "Toyota",
  	referencia: "Hilux",
  	color: "Blanca",
  	capacidad: "5 pasajeros",
  	modelo: 2017,
  },
  {
    marca: "Renault",
  	referencia: "Sandero",
  	color: "Azul",
  	capacidad: "4 pasajeros",
  	modelo: 2015,
  },
  {
    marca: "Mazda",
  	referencia: "3",
  	color: "Gris Galapago",
  	capacidad: "5 pasajeros",
  	modelo: 2014,
  }
];

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {
title = 'Esta es la pagina de los Vehiculos';
  constructor() { }

  selected_3: Vehicles;

  vehiculos: Vehicles[] = VEHICULOS;

  onSelectVehicles(vehiculo: Vehicles){
    this.selected_3 = vehiculo;
  }
  ngOnInit() {
  }

}
