import { Injectable } from '@angular/core';
import {Http, Headers} from "@angular/http";
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';
import {Product} from "../models/product";


@Injectable()
export class ProductsService {
  private productsURI = 'http://localhost:3000/api/products';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  getProducts(): Observable<Product[]>{
    return this.http.get(this.productsURI)
      .map(response => response.json().data as Product[])
      
  }

  getProduct(id: number): Observable<Product> {
    return this.getProducts()
      .map(products => products.find(product => product.id === id));
  }

   private handleError(error: any): Observable<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Observable.throw(error.message || error);
  }

}
