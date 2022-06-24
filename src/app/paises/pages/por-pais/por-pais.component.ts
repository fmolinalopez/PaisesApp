import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Observable } from 'rxjs';
import { Pais } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html'
})
export class PorPaisComponent {

  constructor( private paisService: PaisService ) { }

  termino: string = '';
  hayError: boolean = false;
  paises: Pais[] = [];

  public buscar( termino: string ): void {
    this.termino = termino;
    this.hayError = false;
    const resultado: Observable<Pais[]> = this.paisService.buscarPorNombre(this.termino);

    resultado.subscribe( (resp) => {
      console.log(resp);
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
