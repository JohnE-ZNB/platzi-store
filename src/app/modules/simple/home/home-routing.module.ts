import { NgModule } from '@angular/core'
import { Routes, RouterModule} from '@angular/router'

//Importamos el componente para la ruta
import { HomeComponent } from './components/home/home.component'
import { PageNotFoundComponent } from './../../shared/components/page-not-found/page-not-found.component'

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'inicio',
    component: HomeComponent,
  },
];

@NgModule({
  //Lo que estamos diciendo en que el modulo (Home) Toma el mando como "Hijo" y cargara el componente segun sus rutas
  imports: [RouterModule.forChild(routes)],
  //Para que otros modulos lo puedan utilizar debemos exportarlo
  exports: [RouterModule],
})
export class HomeRoutingModule {}