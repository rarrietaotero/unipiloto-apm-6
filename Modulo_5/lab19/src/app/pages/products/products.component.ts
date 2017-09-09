import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Product} from "../../models/product";
import {ProductsService} from "../../services/products.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
title: string = "Los Productos del Año";

  selected: Product;

  products: Product[];

  constructor(private router: Router, private productsService: ProductsService) {

  }

  getProducts() {
    this.productsService.getProducts().subscribe(products => {
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

  gotoDetail(): void {
    this.router.navigate(['product/detail/', this.selected.id]);
  }

}