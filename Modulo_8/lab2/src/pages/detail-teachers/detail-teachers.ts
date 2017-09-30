import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController} from 'ionic-angular';
import { Teacher } from '../../models/teacher';

@IonicPage()
@Component({
  selector: 'page-detail-teachers',
  templateUrl: 'detail-teachers.html',
})
export class DetailTeachersPage {
  public infoTeacher: Teacher;
  
  constructor(public viewCtrl: ViewController, public navCtrl: NavController, public navParams: NavParams) {
  	this.infoTeacher = navParams.get('profesor');
  }

  dismiss(){
  	this.viewCtrl.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailTeachersPage');
  }

}
