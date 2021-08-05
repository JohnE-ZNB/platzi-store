import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './modules/shared/components/page-not-found/page-not-found.component'
import { PublicComponent } from './layout/public/public.component'

const routes: Routes = [
  {
    path: '',
    component: PublicComponent,
    //Adicional al componente puede haber hijos por tal razon se activaran segun la ruta escrita
    children: [
      {
        path: '', //localhost:4200/    <- esta en blanco entonces lo redirecciona a inicio
        redirectTo: 'inicio',
        pathMatch: 'full',
      },
      {
        path: 'inicio',
        loadChildren: () =>
          import('./modules/simple/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'productos',
        loadChildren: () =>
          import('./modules/simple/products/products.module').then(
            (m) => m.ProductsModule
          ),
      },
      {
        path: 'contacto',
        loadChildren: () =>
          import('./modules/simple/contact/contact.module').then(
            (m) => m.ContactModule
          ),
      },
      {
        path: 'acerca',
        loadChildren: () =>
          import('./modules/simple/about/about.module').then(
            (m) => m.AboutModule
          ),
      },
    ],
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

//Important! -> Esto es antes de que se utilice el LAYOUT
/*const routes: Routes = [
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
    path: 'contacto',
    loadChildren: () => import('./modules/simple/contact/contact.module').then((m) => m.ContactModule)
  },
  {
    path: 'acerca',
    loadChildren: () => import('./modules/simple/about/about.module').then((m) => m.AboutModule)
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];*/

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
