import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//todo modulo debe tener su sistema de rutas y por eso se debe IMPORTAR
import { ProductsRoutingModule } from './products-routing.module'



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
