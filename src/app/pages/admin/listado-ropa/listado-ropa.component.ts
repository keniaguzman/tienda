import { Component, OnInit } from '@angular/core';
import { RopaService } from '../../../services/ropa.service';

@Component({
  selector: 'app-listado-ropa',
  templateUrl: './listado-ropa.component.html',
  styleUrls: ['./listado-ropa.component.css']
})
export class ListadoRopaComponent implements OnInit {
  prendas=[];

  constructor(private ropa : RopaService) { }

  ngOnInit(): void {
    this.ropa.obtenerRopa("hombre")
                .subscribe((prendasRecibidas:any)=>{
                  this.prendas=prendasRecibidas
                })
  }




}
