import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Student} from '../../models/students';
import { ModalController } from 'ionic-angular';
import {ModalProfilePage} from "../modal-profile/modal-profile";
import {InfoStudentPage} from "../info-student/info-student";

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
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  icons: string[];
    

  estudiantes: Student[] = ESTUDIANTES;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    this.selectedItem = navParams.get('estudiante');
   }

  
   
  presentProfileModal() {
    let profileModal = this.modalCtrl.create(ModalProfilePage);
    profileModal.onDidDismiss(data => {
     console.log(data);
     this.estudiantes.push(data);
   });
    profileModal.present();
  }

  selectedStudent(_estudiante: Student) {
    let infoStudent = this.modalCtrl.create(InfoStudentPage, {estudiante: JSON.stringify(_estudiante)});
    infoStudent.present();
    }

  itemTapped(event, estudiante) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ListPage, {
      estudiante: estudiante
    });
  }
}
