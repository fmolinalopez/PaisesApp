import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Observable } from 'rxjs';
import { Pais } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `
  ]
  
})
export class PorPaisComponent {

  constructor( private paisService: PaisService ) { }

  termino: string = '';
  hayError: boolean = false;
  mostrarSugerencias: boolean = false;
  paises: Pais[] = [];
  paisesSugeridos: Pais[] = [];

  public buscar( termino: string ): void {
    this.mostrarSugerencias = false;
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

  public sugerencias( termino: string ): void {
    this.mostrarSugerencias = true;
    this.hayError = false;
    this.termino = termino;

    this.paisService.buscarPorNombre(termino)
      .subscribe( 
        (paises) => this.paisesSugeridos = paises.splice(0, 5),
        (err) => this.paisesSugeridos = []);
  }

  public buscarSugerido( termino: string ): void {
    this.buscar(termino);
  }
}
