import { Component } from '@angular/core';
import {ProductService} from './service/product.service';
import  {Product} from './models/product';
import {TeacherService} from './service/teacher.service';
import  {Teacher} from './models/teacher';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 	title: string = "Los Productos del Año";
    title_1: string = "Los Profesores del Año";

    selected: Product;

    products: Product[];

    selected_1: Teacher;

    profesores: Teacher[];


    constructor(private productService: ProductService, private teacherService: TeacherService) {

    }

    getProducts() {
        this.productService.getProducts().then(products => this.products = products);
    }

    getTeachers() {
        this.teacherService.getTeachers().then(profesores => this.profesores = profesores);
    }

    ngOnInit(): void {
        this.getProducts();
        this.getTeachers();
    }

    onSelect(product: Product) {
        this.selected = product;
    }

    onSelectTeacher(profesor: Teacher) {
        this.selected_1 = profesor;
    }
}


