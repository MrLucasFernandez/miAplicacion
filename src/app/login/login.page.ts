import { Component, Input, OnInit } from '@angular/core';
import { UsuarioClass } from '../services/usuario-class';
import { LoginClass } from '../services/login-class';
import { Router, NavigationExtras, RouterLinkWithHref } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  constructor(private route1: Router) {}

  alertaOpen = false;
  listUsuarios: UsuarioClass[] = [
    new UsuarioClass('Lucas','Fernández','lu.fernandezm@duocuc.cl',3,'lufernandezm','lucas123'),
    new UsuarioClass('Francisco','Toloza','fran.toloza@duocuc.cl',3,'frantoloza','francisco123'),
    new UsuarioClass('Matias','Diaz','mat.diaz@duocuc.cl',3,'matdiaz','matias123'),
    new UsuarioClass('Carlos','De Ferrari', 'car.deferrari@duocuc.cl',2,'cardeferrari','cardeferrari123')
  ];

  userLogin = {
    username: "",
    password: "",
    tipo:""
  }

  userLoginRestart(): void{
    this.userLogin.username = "",
    this.userLogin.password = ""
  }

  mostrarAlerta(isShow: boolean){
    this.alertaOpen = isShow;
  }

  userLoginValidator(): void{
    for(let i = 0; i < this.listUsuarios.length; i++){
      if((this.listUsuarios[i].username==this.userLogin.username)&&(this.listUsuarios[i].password==this.userLogin.password)){
        this.userLogin.username=this.listUsuarios[i].username
        this.userLogin.password=this.listUsuarios[i].password

        if(this.listUsuarios[i].tipo==1){
          this.userLogin.tipo='Administrador'//continuar validaciones de tipos y luego validar ingreso y clave
        }else{
          if(this.listUsuarios[i].tipo==2){
            this.userLogin.tipo='Profesor'
          }else{
            if(this.listUsuarios[i].tipo==3){
              this.userLogin.tipo='Alumno'
            }
          }
        }
        let userInfoSend: NavigationExtras = {
          state: {
            user: this.userLogin
          }
        }
        this.route1.navigate(['/home'], userInfoSend);
      }else{
        //mostrar alerta de ingreso
        this.mostrarAlerta(true)
      }
    }
  }
  
  

  ngOnInit() {
    this.userLoginRestart
  }

}
