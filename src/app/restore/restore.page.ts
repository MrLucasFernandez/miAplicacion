import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, RouterLinkWithHref } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-restore',
  templateUrl: './restore.page.html',
  styleUrls: ['./restore.page.scss'],
})
export class RestorePage implements OnInit {

  alertaOpen = false;
  alertaOpen2 = false;
  alertaOpen3 = false;
  alertaOpen4 = false;

  mostrarAlerta(isShow: boolean){
    this.alertaOpen = isShow;
  }
  mostrarAlerta2(isShow: boolean){
    this.alertaOpen2 = isShow;
  }
  mostrarAlerta4(isShow: boolean){
    this.alertaOpen4 = isShow;
  }
  
  //Se crean las variables y métodos para invocar cada alerta según las condiciones

  delay(time: number){
    return new Promise(resolve => setTimeout(resolve, time));
  }//Se crea una promesa para asignar un tiempo según un valor definido de espera
  async mostrarAlerta3(isShow: boolean){
    this.alertaOpen3 = isShow;
    await this.delay(3000);
    this.router.navigate(['/login']);
  }//Se muestra la alerta 3 al conseguir una restauración exitosa mostrando un mensaje que 
  //esperará el tiempo asignado en pantalla antes de volver al Login

  usuario:{
    apellido: string,
    contrasena: string,
    correo: string,
    carrera: string,
    nombre: string,
    nombre_usuario: string,
    tipo: string
  };
  
  username= '';
  password= '';
  password2= '';
  //Se crea el arreglo de usuarios con sus respectivos campos además de variables para recoger los datos del formulario


  constructor(private api:ApiService,private router: Router) {
  }
  restore(){
    if(this.password!=''||this.password2!=''){
      if(this.password==this.password2){
        this.api.getUsuario(this.username).subscribe(res=>{
          this.usuario=res;
          this.api.putUsuario(this.usuario.nombre_usuario,{contrasena: this.password,nombre: this.usuario.nombre, apellido: this.usuario.apellido, correo: this.usuario.correo, carrera: this.usuario.carrera, tipo: this.usuario.tipo,nombre_usuario: this.usuario.nombre_usuario}).subscribe(res=>{     
            this.usuario=res;
            console.log(this.usuario);
            
            this.mostrarAlerta3(true)
            
          },(error)=>{
            console.log(error);
            this.mostrarAlerta(true)
            
          })
        })
        ,(error)=>{
          console.log(error);
          console.log('errorGET')
          this.mostrarAlerta(true)
          
        }
      }else{
        this.mostrarAlerta2(true)
      }
    }else{
      if(this.password==''&&this.password2==''){
        this.mostrarAlerta4(true)
      }
      
    }
  }
  
  ngOnInit() {
    this.username= '';
    this.password= '';
    this.password2= '';
  }

}
