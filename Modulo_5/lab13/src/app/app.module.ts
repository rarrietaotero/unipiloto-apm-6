import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule} from "@angular/http";
import {InMemoryWebApiModule} from "angular2-in-memory-web-api";
import { InMemoryProductService } from './mock/in-memory-product.service';
import { InMemoryTeacherService } from './mock/in-memory-teacher.service';
import { AppComponent } from './app.component';
import { DetailComponent } from './detail/detail.component';

import { ProductService } from './service/product.service';
import { TeacherService } from './service/teacher.service';

@NgModule({
  declarations: [
    AppComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryProductService),
    InMemoryWebApiModule.forRoot(InMemoryTeacherService),
  ],
  providers: [ProductService,
              TeacherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
