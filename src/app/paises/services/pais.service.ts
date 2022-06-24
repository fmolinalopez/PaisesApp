import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';

import { Pais } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private _apiUrl: string = "https://restcountries.com/v3.1"

  constructor( private http: HttpClient ) { }

  buscarPorNombre( termino: string ): Observable<Pais[]> {

    const url = `${this._apiUrl}/name/${termino}`;

    return this.http.get<Pais[]>(url);
  }
  
  buscarPorCapital( termino: string ): Observable<Pais[]> {
    
    const url = `${this._apiUrl}/capital/${termino}`
    
    return this.http.get<Pais[]>(url);
  }

  buscarPorRegion( termino: string ): Observable<Pais[]> {
    
    const url = `${this._apiUrl}/region/${termino}`
    
    return this.http.get<Pais[]>(url);
  }

  buscarPorCodigo( codigo: string ): Observable<Pais[]> {
    const url = `${this._apiUrl}/alpha/${codigo}`

    return this.http.get<Pais[]>(url);
  }
}
