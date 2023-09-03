import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  username = '';
  nombre= '';
  apellido= '';
  email= '';
  tipo= '';
  carrera= '';
  ramos= [];

  

  constructor(private route: ActivatedRoute) { // Agrega Router en el constructor
    this.route.params.subscribe(params => {
      this.username = params['username'];
      this.nombre = params['nombre'];
      this.apellido = params['apellido'];
      this.email = params['email'];
      this.tipo = params['tipo'];
      this.carrera = params['carrera'];
      this.ramos = params['ramos'].split(',');
    });
    
  }
  

}
