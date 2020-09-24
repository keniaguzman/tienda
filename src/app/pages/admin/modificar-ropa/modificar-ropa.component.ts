import { Component, OnInit } from '@angular/core';
import { RopaService } from '../../../services/ropa.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {NgForm} from '@angular/forms'




@Component({
  selector: 'app-modificar-ropa',
  templateUrl: './modificar-ropa.component.html',
  styleUrls: ['./modificar-ropa.component.css']
})


export class ModificarRopaComponent implements OnInit {
  prendas=[];
  estaGuardado:any;
  debeOcultarse:boolean=false;
  prenda:{
    id:"",
    nombre:"",
    talla:"",
    precio:"",
    descripcion:"",
    imagen:""
  };
  id;
  invalido= {
    nombre:false,
    talla:false,
    precio:false,
    descripcion:false,
    imagen:false
  }
  constructor(private ropa : RopaService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.ropa.obtenerPrenda(this.obtenerRuta())
    .subscribe((prendaRecibidas:any)=>{
      console.log(prendaRecibidas);
      this.prenda=prendaRecibidas;
    })
  }

  obtenerRuta(){
    this.route.params.subscribe(params => {
      this.id= params['ropa_id'];
      return this.id;
    });
    return this.id;
  }

  modificaPrenda(fmodificaPrenda:NgForm) {
    if (this.formularioValido(fmodificaPrenda)) {
      this.ropa.modificasPrenda(this.prenda,this.id)
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
