import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailTeachersPage } from './detail-teachers';

@NgModule({
  declarations: [
    DetailTeachersPage,
  ],
  imports: [
    IonicPageModule.forChild(DetailTeachersPage),
  ],
})
export class DetailTeachersPageModule {}
