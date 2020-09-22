import { Component, OnInit } from '@angular/core';
import { RopaService } from '../../services/ropa.service';
import {NgForm} from '@angular/forms'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit {
  prendas = [];
  prenda= {
    nombre:"",
    talla:"",
    precio:"",
    descripcion:"",
    imagen:""
  }
  invalido= {
    nombre:false,
    talla:false,
    precio:false,
    descripcion:false,
    imagen:false
  }
  constructor(private ropa : RopaService) { }

  ngOnInit(): void {
    this.ropa.obtenerRopa("admin")
                .subscribe((prendasRecibidas:any)=>{
                  this.prendas=prendasRecibidas;
                })
  }

  guardaPrenda(fguardaPrenda:NgForm) {
    this.invalido.imagen=false;
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
        this.invalido.imagen=true;
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


