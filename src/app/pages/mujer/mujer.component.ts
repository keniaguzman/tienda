import { Component, OnInit } from '@angular/core';
import { RopaService } from '../../services/ropa.service';
import {NgForm} from '@angular/forms'
@Component({
  selector: 'app-mujer',
  templateUrl: './mujer.component.html',
  styleUrls: ['./mujer.component.css']
})
export class MujerComponent implements OnInit {
  prendas=[];
  prenda= {
    nombre:"",
    talla:"",
    precio:"",
    descripcion:"",
    imagen:""
  }
  constructor(private ropa : RopaService) { }

  ngOnInit(): void {
    this.ropa.obtenerRopa("mujer")
                .subscribe((prendasRecibidas:any)=>{
                  this.prendas=prendasRecibidas
                })
  }

  guardaPrenda(fguardaPrenda:NgForm) {
    if (fguardaPrenda.invalid) {
      if (! this.esUnNombreValido(this.prenda.nombre)) {
        console.log("Nombre invalido");
      }
      if (! this.esTallaValida(this.prenda.talla)) {
        console.log("Talla invalido");
      }
      if (! this.esPrecioValida(this.prenda.precio)) {
        console.log("Precio invalido");
      }
      if (! this.esImagenValida(this.prenda.imagen)) {
        console.log("URL imagen invalida");
      }
      console.log("valido");
      return;
    }
    console.log('valido');
  }
  esUnNombreValido(nombre){
    const regex = /^[A-Z]|[a-z]$/;
    return regex.test(nombre);
  }

  esTallaValida(talla){
    const regex = /^[SMG]$/;
    return regex.test(talla);
  }

  esPrecioValida(precio){
    const regex = /^[0-9]+(\.[0-9][0-9]?)?$/;
    return regex.test(precio);
  }

  esImagenValida(imagen){
    const regex = /^((http[s]?|ftp):\/)?\/?([^:\/\s]+)((\/\w+)*\/)([\w\-\.]+[^#?\s]+)(.*)?(#[\w\-]+)?$/;
    return regex.test(imagen);
  }
}

