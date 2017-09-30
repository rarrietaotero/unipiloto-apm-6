import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ViewController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-modal-profile2',
  templateUrl: 'modal-profile2.html',
})
export class ModalProfile2Page {

  myForm_2: FormGroup;
  
  constructor(public viewCtrl: ViewController, public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder) {
  	this.myForm_2 = this.createForm();
  }

  private createForm() {
    return this.formBuilder.group({
      name: ['', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(10)])],
      lastname: ['', Validators.required],
      cedula: ['', Validators.required],
      profession: ['', Validators.required],
     });
  }

  dismiss() {
    this.viewCtrl.dismiss(this.myForm_2.value);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalProfile2Page');
  }

}
