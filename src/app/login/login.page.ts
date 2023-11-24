import { Component, Input, OnInit } from '@angular/core';
import { Router, NavigationExtras, RouterLinkWithHref } from '@angular/router';
import { AnimationController } from '@ionic/angular';
import { ApiService } from '../services/api.service';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  

  alertaOpen = false;
  mostrarAlerta(isShow: boolean){
    this.alertaOpen = isShow;
  }//Se crea una variable en false para luego volverla True si se desea mostrar una alerta Toast
  
  usuario:{
    apellido: string,
    contrasena: string,
    correo: string,
    carrera: string,
    nombre: string,
    nombre_usuario: string,
    tipo: string
  };
  username= ''
  password= ''	

  constructor(private api:ApiService, private router: Router, private navCtrl: NavController) {
    localStorage.setItem('online', 'false');
  }

  login(){
    this.api.getUsuario(this.username).subscribe(res=>{     
      this.usuario=res;
      console.log(this.usuario);
      if(this.password==this.usuario.contrasena){
        localStorage.setItem('online', 'true');
        if(this.usuario.tipo=='Profesor'){
          localStorage.setItem('profesor', 'true');
        }else{
          localStorage.setItem('profesor', 'false');
        }
        this.router.navigate(['/home'], {state:{ usuario: this.usuario},});
      }else{
        this.mostrarAlerta(true)
      }
      
    },(error)=>{
      console.log(error);
      this.mostrarAlerta(true)
    })
  }
  

  ngOnInit(){//Se dejan los campos vacios al entrar a la página
    this.username = '';
    this.password = '';
  }
  

}
