import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProductServiceProvider} from "../../providers/product-service/product-service";

@IonicPage()
@Component({
  selector: 'page-product-detail',
  templateUrl: 'product-detail.html',
})
export class ProductDetailPage {
  myForm_2: FormGroup;

  public product: {name: string, id: number} = {name: '', id: 0};
  private id: number = null;

  constructor(public viewCtrl: ViewController, public navCtrl: NavController, public formBuilder: FormBuilder, public navParams: NavParams, private productServiceProvider: ProductServiceProvider) {
    
    this.myForm_2 = this.createForm2();

    this.id = parseInt(navParams.get('id'));
    if (this.id) {
      this.productServiceProvider.getProduct(this.id)
        .then(result => {
          console.debug(result);
          this.product = result;
        })
        .catch(err=>console.error("error create product: ", err));
    }
  }

  private createForm2() {
    return this.formBuilder.group({
      name: ['', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(10)])],
    });
  }

  public saveForm2() {
    this.product.name=this.myForm_2.value.name;

    this.productServiceProvider.updateProduct(this.product)
      .then(result => {
        console.debug(result);
        this.dismiss();
      })
      .catch(err=>console.error("error create product: ", err));
  }

  public dismiss() {
    let data = {};
    this.viewCtrl.dismiss(data);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductDetailPage');
  }



}
