import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Student} from '../../models/estudiante';

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
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  estudiantes: Student[] = ESTUDIANTES;

  ngOnInit() {
  }

}
