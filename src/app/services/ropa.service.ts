import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RopaService {
  baseUrl:string = "http://127.0.0.1:8000/api/ropa/";

  constructor(private http: HttpClient) { }

   obtenerRopa(tipoRopa:string) {
    try {
      return this.http.get(this.baseUrl+tipoRopa)
    } catch(error) {
      console.error(error);
      console.error(error.error);
      console.error(error.headers);
    }
  }

  guardarRopa(prenda){
    console.log(prenda);
    try {
      return this.http.post(this.baseUrl, prenda)
    } catch(error) {
      console.error(error);
      console.error(error.error);
      console.error(error.headers);
    }
  }
}
