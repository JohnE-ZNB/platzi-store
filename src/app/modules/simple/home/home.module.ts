import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//todo modulo debe tener su sistema de rutas y por eso se debe IMPORTAR
import { HomeRoutingModule } from './home-routing.module'

import { HomeComponent } from './components/home/home.component';

//shared module 
import { SharedModule } from './../../shared/shared.module'

//component Banner
import { BannerComponent } from './components/banner/banner.component';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SwiperModule,
    HomeRoutingModule,
  ],
  exports:[
    HomeComponent
  ]
})
export class HomeModule { }
