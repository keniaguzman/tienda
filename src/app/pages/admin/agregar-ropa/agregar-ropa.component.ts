import { Component, OnInit } from '@angular/core';
import { RopaService } from '../../../services/ropa.service';
import {NgForm} from '@angular/forms'
import { compileNgModule } from '@angular/compiler';

@Component({
  selector: 'app-agregar-ropa',
  templateUrl: './agregar-ropa.component.html',
  styleUrls: ['./agregar-ropa.component.css']
})
export class AgregarRopaComponent implements OnInit {
  prendas = [];
  estaGuardado:any;
  debeOcultarse:boolean=false;
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
  constructor(private ropa : RopaService) {


  }

  ngOnInit(): void {
    this.estaGuardado=false;
    this.ropa.obtenerRopa("admin")
                .subscribe((prendasRecibidas:any)=>{
                  this.prendas=prendasRecibidas;
                })
  }

  guardaPrenda(fguardaPrenda:NgForm) {
    if (this.formularioValido(fguardaPrenda)) {
      this.ropa.guardarRopa(this.prenda)
      .subscribe((respuesta:any)=>{
        if(respuesta.mensaje == "ok" ) {
          this.estaGuardado=true;
          this.prenda.nombre='';
          this.prenda.talla='';
          this.prenda.precio='';
          this.prenda.imagen='';
          this.prenda.descripcion='';
          setTimeout(() => {
            this.estaGuardado=false;

          },2000);
        }
        console.log(this.estaGuardado);
      })

      console.log("Valido");
    }else{
      console.log("Invalido");
    }
    this.ropa.guardarRopa("mujer")
    .subscribe((prendasRecibidas:any)=>{
      this.prendas=prendasRecibidas
    })

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

  formularioValido(fguardaPrenda:NgForm){
    this.invalido.imagen=false; /*Se vueleve a inicializar en falso para que verifique si es correcto*/
    if (fguardaPrenda.invalid) {
      if (! this.esUnNombreValido(this.prenda.nombre ) ) {
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
      return false;
    }
    return true;
  }
}
