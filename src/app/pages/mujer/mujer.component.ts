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

  constructor(private ropa : RopaService) { }

  ngOnInit(): void {
    this.ropa.obtenerRopa("mujer")
                .subscribe((prendasRecibidas:any)=>{
                  this.prendas=prendasRecibidas
                })
  }
}

