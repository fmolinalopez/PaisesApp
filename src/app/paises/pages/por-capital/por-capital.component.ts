import { Component, OnInit } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html'
})
export class PorCapitalComponent {

  hayError: boolean = false;
  termino: string = '';
  paises: Pais[] = [];

  constructor( private paisService: PaisService ) { }

  public buscar( termino: string ) {
    this.hayError = false;
    this.termino = termino;

    this.paisService.buscarPorCapital(termino).subscribe( 
    (resp) => {
      this.paises = resp;
    }, (err) => {
      this.hayError = true;
      this.paises = [];
    });
  }

  public sugerencias( termino: string ) {
    this.buscar(termino);
  }
}
