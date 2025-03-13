import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';  
import { LandingPage } from './landing.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,  
  ],
  declarations: [LandingPage]
})
export class LandingPageModule {}
