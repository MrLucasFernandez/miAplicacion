import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-ramos',
  templateUrl: './ramos.page.html',
  styleUrls: ['./ramos.page.scss'],
})
export class RamosPage implements OnInit {
  
  alumnos=[]
  ramos=[]

  ramo:{
    id_ramo: string,
    descripcion: string,
    clases_reg: string,
    profesor: string,
    siglas: string
  }

  usuario:{
    apellido: string,
    contrasena: string,
    correo: string,
    carrera: string,
    nombre: string,
    nombre_usuario: string,
    tipo: string
  };

  ramosShown = false;
  constructor(private api:ApiService, private router: Router) { 
    this.usuario = this.router.getCurrentNavigation()?.extras.state?.['usuario'];
    this.ramo = this.router.getCurrentNavigation()?.extras.state?.['ramos'];
    
    
    this.api.getRamos(this.usuario.nombre_usuario).subscribe(res=>{
      console.log(res);
      this.ramos=res["items"];
    },(error)=>{
      console.log(error);
    })

    this.api.getAlumnos(this.usuario.nombre_usuario,this.ramo[0].id_ramo).subscribe(res=>{
      console.log(res);
      this.alumnos=res["items"];
    },(error)=>{
      console.log(error);
    })
    

    
  }
  
  
  
  /*
  mostrarRamos(){
    
    if(this.display === true){
      this.display = false;
      document.getElementById("ramos").hidden = false;
    }else if(this.display === false){
      this.display = true;
      document.getElementById("ramos").hidden = true;
    }

  }*/




  /*
  constructor(private api:ApiService) { 
    this.api.getAlumnos().subscribe(res=>{
      console.log(res);
      this.alumnos=res["items"];
    },(error)=>{
      console.log(error);
    })
  }
  mostrarAlumnos(){
    this.api.getAlumnos().subscribe(res=>{
      console.log(res);
      this.alumnos=res["items"];
    },(error)=>{
      console.log(error);
    })
    
  }*/
  ngOnInit(){
    
  }

}
