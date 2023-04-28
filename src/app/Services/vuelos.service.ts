import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { VueloResponse } from '../Interfaces/Responses/VueloResponse';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VuelosService {

  constructor(private httpClient:HttpClient) { }

  getVuelosEspera(setVuelos:(vuelos:VueloResponse[]) => void) {
    this.httpClient.get('http://localhost:8080/api/vuelos?status=En Espera')
      .subscribe({
        next: res => {
          setVuelos(res as VueloResponse[]);
        },
        error: err => {
          setVuelos([] as VueloResponse[]);
        }
      });
  }
}
