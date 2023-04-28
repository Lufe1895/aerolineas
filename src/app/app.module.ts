import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { VuelosEsperaComponent } from './Components/Vuelos/vuelos-espera/vuelos-espera.component';
import { VuelosVueloComponent } from './Components/Vuelos/vuelos-vuelo/vuelos-vuelo.component';
import { VuelosFinalizadosComponent } from './Components/Vuelos/vuelos-finalizados/vuelos-finalizados.component';
import { VuelosCanceladosComponent } from './Components/Vuelos/vuelos-cancelados/vuelos-cancelados.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    VuelosEsperaComponent,
    VuelosVueloComponent,
    VuelosFinalizadosComponent,
    VuelosCanceladosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
