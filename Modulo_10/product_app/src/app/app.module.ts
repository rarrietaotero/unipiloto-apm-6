import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PerfilPage } from '../pages/perfil/perfil';
import { CerrarSesionPage } from '../pages/cerrar-sesion/cerrar-sesion';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DbServiceProvider } from '../providers/db-service/db-service';
import { ProductServiceProvider } from '../providers/product-service/product-service';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PerfilPage,
    CerrarSesionPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PerfilPage,
    CerrarSesionPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SQLite,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DbServiceProvider,
    ProductServiceProvider
  ]
})
export class AppModule {}
