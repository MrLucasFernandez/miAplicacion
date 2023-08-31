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
  
  constructor(private route: Router) {}

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

  userLoginValidator(): void{
    for(let i = 0; i < this.listUsuarios.length; i++){
      if((this.listUsuarios[i].username==this.userLogin.username)&&(this.listUsuarios[i].password==this.userLogin.password)){
        this.userLogin.username=this.listUsuarios[i].username
        this.userLogin.password=this.listUsuarios[i].password

        if(this.listUsuarios[i].type==1){
          this.userLogin.tipo='Administrador'//continuar validaciones de tipos y luego validar ingreso y clave
        }else{
          if(this.listUsuarios[i].type==2){
            this.userLogin.tipo='Profesor'
          }else{
            if(this.listUsuarios[i].type==3){
              this.userLogin.tipo='Alumno'
            }
          }
        }
        let userInfoSend: NavigationExtras = {
          state: {
            user: this.userLogin
          }
        }
        this.route.navigate(['/home'], userInfoSend);
      }else{
        //ocultar mensaje de error
      }
    }
  }
  

  ngOnInit() {
    this.userLoginRestart
  }

}
