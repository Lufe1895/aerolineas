import { Component, OnInit } from '@angular/core';
import { VueloResponse } from 'src/app/Interfaces/Responses/VueloResponse';
import { VuelosService } from 'src/app/Services/vuelos.service';
import { Converters } from 'src/app/Utils/Converters';

@Component({
  selector: 'app-vuelos-espera',
  templateUrl: './vuelos-espera.component.html',
  styleUrls: ['./vuelos-espera.component.css']
})
export class VuelosEsperaComponent implements OnInit {
  private vuelos:VueloResponse[];

  constructor(private service:VuelosService) {
    this.vuelos = [] as VueloResponse[];
  }

  ngOnInit(): void {
    this.service.getVuelosEspera((res:VueloResponse[]) => {
      this.vuelos = res;
    });
  }

  get Vuelos():VueloResponse[] {
    return this.vuelos;
  }

  get Converter() {
    return Converters;
  }
}
