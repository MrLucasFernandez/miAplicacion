import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.page.html',
  styleUrls: ['./asistencia.page.scss'],
})
export class AsistenciaPage implements OnInit {

  asistencias=[]

  usuario:{
    apellido: string,
    contrasena: string,
    correo: string,
    carrera: string,
    nombre: string,
    nombre_usuario: string,
    tipo: string
  };

  
  constructor(private api:ApiService, private router: Router) { 
    this.usuario = this.router.getCurrentNavigation()?.extras.state?.['usuario'];

    this.api.getAsistencias(this.usuario.nombre_usuario).subscribe(res=>{
      console.log(res);
      this.asistencias=res["items"];
    },(error)=>{
      console.log(error);
    })

    
  }

  ngOnInit() {
  }

}
