import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

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
  
  ramos=[]

  

  constructor(private router: Router, private api: ApiService) {

    //Se consume desde la ruta Login los parametros y se guardan en las variables para ser mostradas
    this.usuario = this.router.getCurrentNavigation()?.extras.state?.['usuario'];

    this.api.getRamos(this.usuario.nombre_usuario).subscribe(res=>{
      console.log(res);
      this.ramos=res["items"];
    },(error)=>{
      console.log(error);
    })
  }

  verAsistencia(){
    if(this.usuario.tipo=='Profesor'){
      this.router.navigate(['/ramos'], {state:{ usuario: this.usuario, ramos: this.ramos}});
    }else{
      if (this.usuario.tipo=='Alumno'){
        this.router.navigate(['/asistencia'], {state:{ usuario: this.usuario}});
      }
    }
  }
}
