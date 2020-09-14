import { Component, OnInit } from '@angular/core';
import { RopaService } from '../../services/ropa.service';


@Component({
  selector: 'app-hombre',
  templateUrl: './hombre.component.html',
  styleUrls: ['./hombre.component.css']
})
export class HombreComponent implements OnInit {
  prendas = [];
  constructor(private ropa : RopaService) { }

  ngOnInit(): void {
    this.ropa.obtenerRopa("hombre")
                .subscribe((prendasRecibidas:any)=>{
                  this.prendas=prendasRecibidas
                })
  }

}
