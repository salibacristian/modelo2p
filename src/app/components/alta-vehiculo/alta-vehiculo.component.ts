import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FirebaseService} from "../../services/firebase.service";
import { Vehiculo } from "../../model/Vehiculo";

@Component({
  selector: 'app-alta-vehiculo',
  templateUrl: './alta-vehiculo.component.html',
  styleUrls: ['./alta-vehiculo.component.css']
})
export class AltaVehiculoComponent implements OnInit {

  constructor( private firebaseService: FirebaseService) { }

  vehiculo: Vehiculo = new Vehiculo('','',2019,0,1,'');

  ngOnInit() {
  }

  Register(){
    this.firebaseService.agregarVehiculo(this.vehiculo);
  }

}



