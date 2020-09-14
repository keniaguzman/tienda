import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RopaService {
  baseUrlMujer:string = "/assets/mujer.json"
  baseUrlHombre:string = "/assets/hombre.json"

  constructor(private http: HttpClient) { }

   obtenerRopa(tipoRopa:string) {
      if (tipoRopa == "mujer"){
        try {
          return this.http.get(this.baseUrlMujer)
        } catch(error) {
          console.error(error);
          console.error(error.error);
          console.error(error.headers);
        }
      }else{
        try {
          return this.http.get(this.baseUrlHombre)
        } catch(error) {
          console.error(error);
          console.error(error.error);
          console.error(error.headers);
        }
      }


  }
}
