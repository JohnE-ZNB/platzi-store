import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//todo modulo debe tener su sistema de rutas y por eso se debe IMPORTAR
import { ContactRoutingModules } from './contact-routing.module'
import { ContactComponent } from './components/contact/contact.component';


@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModules,
  ]
})
export class ContactModule { }
