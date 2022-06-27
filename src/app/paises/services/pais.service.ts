import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';

import { Pais } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private _apiUrl: string = "https://restcountries.com/v3.1"
  private params: HttpParams 
    = new HttpParams().set('fields', 'name,capital,population,cca2,flags,flag');

  constructor( private http: HttpClient ) { }

  buscarPorNombre( termino: string ): Observable<Pais[]> {

    const url = `${this._apiUrl}/name/${termino}`;

    return this.http.get<Pais[]>(url, {params: this.params});
  }
  
  buscarPorCapital( termino: string ): Observable<Pais[]> {
    
    const url = `${this._apiUrl}/capital/${termino}`
    
    return this.http.get<Pais[]>(url, {params: this.params});
  }

  buscarPorRegion( termino: string ): Observable<Pais[]> {
    
    const url = `${this._apiUrl}/region/${termino}`
    
    return this.http.get<Pais[]>(url, {params: this.params});
  }

  buscarPorCodigo( codigo: string ): Observable<Pais[]> {
    const url = `${this._apiUrl}/alpha/${codigo}`

    return this.http.get<Pais[]>(url);
  }
}
