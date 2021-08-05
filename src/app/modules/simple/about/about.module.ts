import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRountingModule } from './about-routing.module'

import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    CommonModule,
    AboutRountingModule,
  ]
})
export class AboutModule { }
