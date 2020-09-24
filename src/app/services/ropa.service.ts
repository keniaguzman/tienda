import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RopaService {
  baseUrl:string = environment.baseUrl;
  ruta:string = environment.ruta;

  constructor(private http: HttpClient,
   ) { }

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
    try {
      return this.http.post(this.baseUrl, prenda)
    } catch(error) {
      console.error(error);
      console.error(error.error);
      console.error(error.headers);
    }
  }

  obtenerPrenda(ropaId){
    try {
      return this.http.get(this.baseUrl+ropaId)
    } catch(error) {
      console.error(error);
      console.error(error.error);
      console.error(error.headers);
    }
  }

  modificarprenda(ropaId){
    try {
      return this.http.get(this.baseUrl+ropaId)
    } catch(error) {
      console.error(error);
      console.error(error.error);
      console.error(error.headers);
    }
  }

  modificasPrenda(prenda,ropaId){
    console.log(ropaId);
    try {
      return this.http.post(this.ruta+ropaId, prenda)
    } catch(error) {
      console.error(error);
      console.error(error.error);
      console.error(error.headers);
    }
  }

}


