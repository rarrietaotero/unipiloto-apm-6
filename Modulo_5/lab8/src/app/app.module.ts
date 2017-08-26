import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import {StudentDetailComponent} from '../pages/detail.component';
import {TeacherDetailComponent} from '../pages/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentDetailComponent,
    TeacherDetailComponent
    ],
 
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }