import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http' //Nos permite el modulo para hacer peticiones http

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


//Incorporamos los modulos en el modulo principal
import { CoreModule } from './modules/core/core.module';
import { SharedModule } from './modules/shared/shared.module';

//important! Layouts
import { PublicComponent } from './layout/public/public.component';
import { AdminComponent } from './layout/admin/admin.component'

@NgModule({
  declarations: [
    AppComponent,
    PublicComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}