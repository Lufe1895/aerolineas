import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VuelosEsperaComponent } from './Components/Vuelos/vuelos-espera/vuelos-espera.component';

const routes: Routes = [
  { path: '', component: VuelosEsperaComponent },
  { path: 'espera', component: VuelosEsperaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
