import { Component, OnInit } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `
      button {
        margin-right: 5px;
      }
    `
  ]
})
export class PorRegionComponent {

  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania']
  regionActiva: string = '';
  paises: Pais[] = [];

  constructor( private paisService: PaisService ) { }

  getClaseCssRegionActiva( region: string ): string {
    return (region === this.regionActiva) ? 'btn btn-primary' : 'btn btn-outline-primary';
  }

  public activarRegion( region: string ) {
    this.regionActiva = region;

    this.paisService.buscarPorRegion(region)
      .subscribe( resp => {
        this.paises = resp;
      })
  }
}
