import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController} from 'ionic-angular';
import {Student} from '../../models/students';

@IonicPage()
@Component({
  selector: 'page-info-student',
  templateUrl: 'info-student.html',
})
export class InfoStudentPage {
	public infoStudent: Student;

  constructor(public viewCtrl: ViewController, public navCtrl: NavController, public navParams: NavParams) {
  	this.infoStudent = JSON.parse(navParams.get('estudiante'));
  }

  dismiss(){
  	this.viewCtrl.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoStudentPage');
  }

}
