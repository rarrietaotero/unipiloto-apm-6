import { Injectable } from '@angular/core';
import {Product} from "../models/product";
import {Http, Headers} from "@angular/http";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ProductsService {

  private productsURI = 'http://localhost:3000/api/products';
  private headers = new Headers({'Content-Type': 'application/json'});
 
  constructor(private http: Http) { }
  
  getProducts(): Promise<Product[]>{
    return this.http.get(this.productsURI)
      .toPromise()
      .then(response => response.json().data as Product[])
      .catch(this.handleError);
  }

  getProduct(id: number): Promise<Product> {
    return this.getProducts()
      .then(products => products.find(product => product.id === id));
  }

  private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
