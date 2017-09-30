import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { List2Page } from '../pages/list2/list2';
import {ModalProfilePage} from "../pages/modal-profile/modal-profile";
import {ModalProfile2Page} from "../pages/modal-profile2/modal-profile2";
import {InfoStudentPage} from "../pages/info-student/info-student";
import {DetailTeachersPage} from "../pages/detail-teachers/detail-teachers";


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    List2Page,
    ModalProfilePage,
    InfoStudentPage,
    DetailTeachersPage,
    ModalProfile2Page
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot({
      name: '__my_form_db',
         driverOrder: ['websql','indexeddb', 'sqlite']
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    List2Page,
    ModalProfilePage,
    InfoStudentPage,
    DetailTeachersPage,
    ModalProfile2Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
