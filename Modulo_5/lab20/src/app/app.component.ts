import { Component } from '@angular/core';
import {ProductService} from './service/product.service';
import  {Product} from './models/product';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = "Los Productos del Año";

  selected: Product;

  products: Product[];

  constructor(private productService: ProductService) {

  }

  getProducts() {
    this.productService.getProducts().subscribe(products => {
          this.products = products;
        },

        error => {
          console.log(error);
        }
      );
  }

  ngOnInit(): void {
    this.getProducts();
  }

  onSelect(product: Product){
    this.selected = product;
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.productService.create(name)
      .subscribe(product => {
        this.products.push(product);
        this.selected = null;
      })
      
  }
}
