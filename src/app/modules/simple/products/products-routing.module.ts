import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Importamos el componente para la ruta
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailComponent} from './components/product-detail/product-detail.component'

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
  },
  {
    path: ':id',
    component: ProductDetailComponent,
  },
];

@NgModule({
  //Lo que estamos diciendo en que el modulo (Home) Toma el mando como "Hijo" y cargara el componente segun sus rutas
  imports: [RouterModule.forChild(routes)],
  //Para que otros modulos lo puedan utilizar debemos exportarlo
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
