import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RopaService {
  baseUrl:string = "/assets/mujer.json"
  constructor(private http: HttpClient) { }

   obtenerRopa(tipoRopa:string) {
    try {
      return this.http.get(this.baseUrl)
    } catch(error) {
      console.error(error);
      console.error(error.error);
      console.error(error.headers);
    }
  }
}
