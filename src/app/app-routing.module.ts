import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './modules/shared/components/page-not-found/page-not-found.component'

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/simple/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'productos',
    loadChildren: () => import('./modules/simple/products/products.module').then((m) => m.ProductsModule),
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
