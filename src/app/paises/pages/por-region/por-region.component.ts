import { Component, OnInit } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html'
})
export class PorRegionComponent {

  termino: string = '';
  paises: Pais[] = [];
  hayError: boolean = false;

  constructor( private paisService: PaisService ) { }

  public buscar( termino:string ): void{
    this.hayError = false;
    this.termino = termino;

    this.paisService.buscarPorRegion(termino).subscribe(
      (resp) => {
        this.paises = resp;
      },
      (err) => {
        this.hayError = true;
        this.paises = [];
      }
    )
  }

  public sugerencias( termino: string ): void{
    this.buscar(termino);
  }
}
