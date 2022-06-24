import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';

import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html'
})
export class VerPaisComponent implements OnInit {

  public pais!: Pais;

  constructor( private activatedRoute: ActivatedRoute,
     private paisService: PaisService ) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap( ({id}) => this.paisService.buscarPorCodigo(id)),
        tap( console.log )
      )
      .subscribe( resp => {
        this.pais = resp[0]
      })

    // this.activatedRoute.params
    // .subscribe( ({id}) => {
    //   console.log(id);
    //   this.buscarPaisPorCodigo(id);
    // })
  }

  // private buscarPaisPorCodigo( codigo: string ): void {
  //   this.paisService.buscarPorCodigo(codigo)
  //     .subscribe( (resp) => {
  //       console.log(resp);
  //       this.pais = resp[0];
  //     })
  // }
}
