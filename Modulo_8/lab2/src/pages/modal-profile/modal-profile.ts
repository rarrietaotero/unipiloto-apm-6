import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ViewController, NavParams  } from 'ionic-angular';

/**
 * Generated class for the ModalProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-profile',
  templateUrl: 'modal-profile.html',
})
export class ModalProfilePage {

	myForm: FormGroup;

  constructor(public viewCtrl: ViewController, public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder) {
  	    this.myForm = this.createForm();
  }

  private createForm() {
    return this.formBuilder.group({
      name: ['', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(10)])],
      lastname: ['', Validators.required],
      clase: ['', Validators.required],
      grade: ['', Validators.required],
      group: ['', Validators.required],
    });
  }

  dismiss() {
    this.viewCtrl.dismiss(this.myForm.value);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalProfilePage');
  }

}
