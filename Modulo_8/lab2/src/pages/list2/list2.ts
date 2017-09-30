import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Teacher} from '../../models/teacher';
import { ModalController } from 'ionic-angular';
import {ModalProfile2Page} from "../modal-profile2/modal-profile2";
import {DetailTeachersPage} from "../detail-teachers/detail-teachers";

const PROFESORES: Teacher[] = [
  {
    name: "Alejandro",
    lastname: "Romero",
    cedula: 1003156764,
    profession: "Ingeniero de Sistemas"
  },

  {
    name: "Luis",
    lastname: "Marrugo",
    cedula: 3156764,
    profession: "Ingeniero de Software"
  },
  {
    name: "Elmer",
    lastname: "Escudero",
    cedula: 1556764,
    profession: "Licenciado en Matematicas"
  }
];

@Component({
  selector: 'page-list2',
  templateUrl: 'list2.html'
})
export class List2Page {
  selectedItem_1: any;
  icons: string[];
    

  profesores: Teacher[] = PROFESORES;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
     this.selectedItem_1 = navParams.get('profesor');

    }

    presentProfileModal2() {
    let profileModal2 = this.modalCtrl.create(ModalProfile2Page);
    profileModal2.onDidDismiss(data => {
     console.log(data);
     this.profesores.push(data);
   });
    profileModal2.present();
  }

   selectedTeacher(_profesor: Teacher) {
    let infoTeacher = this.modalCtrl.create(DetailTeachersPage, {profesor: _profesor});
    infoTeacher.present();
    }

 }
