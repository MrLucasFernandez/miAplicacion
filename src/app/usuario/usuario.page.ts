import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
})
export class UsuarioPage{

  usuario:{
    apellido: string,
    contrasena: string,
    correo: string,
    carrera: string,
    nombre: string,
    nombre_usuario: string,
    tipo: string
  };
  

  constructor(private router: Router) { 
    //Se consume desde la ruta Login los parametros y se guardan en las variables para ser mostradas
    this.usuario = this.router.getCurrentNavigation()?.extras.state?.['usuario'];
    
  }

  verAsistencia(){
    if(this.usuario.tipo=='Profesor'){
      this.router.navigate(['/ramos']);
    }else{
      if (this.usuario.tipo=='Alumno'){
        this.router.navigate(['/asistencia']);
      }
    }
  }
}
