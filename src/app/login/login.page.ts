import { Component, Input, OnInit } from '@angular/core';
import { UsuarioClass } from '../services/usuario-class';
import { LoginClass } from '../services/login-class';
import { Router, NavigationExtras, RouterLinkWithHref } from '@angular/router';
import { ArrayType } from '@angular/compiler';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  alertaOpen = false;
  
  /*
  usuariosReg:{nombre:string, apellido:string, email:string, tipo:string, username:string, password:string}[]=
  [
    {nombre:'Lucas', apellido:'Fernandez', email:'lu.fernandezm@duocuc.cl', tipo:'Administrador', username:'lufernandezm', password:'lucas123'},
    {nombre:'Francisco', apellido:'Toloza', email:'fran.toloza@duocuc.cl', tipo:'Profesor', username:'frantoloza', password:'francisco123'},
    {nombre:'Matias', apellido:'Diaz', email:'mat.diaz@duocuc.cl', tipo:'Alumno', username:'matdiaz', password:'matias123'},
    {nombre:'Carlos', apellido:'De Ferrari', email:'car.deferrari@duocuc.cl', tipo:'Alumno', username:'cardeferrari', password:'cardeferrari123'}
  ]
  */
  
  
  usuariosReg:{nombre:string, apellido:string, email:string, tipo:string, username:string, password:string, carrera:string, ramos:Array<string>[]}[]=[]

  username= ''
  password= ''	
  
  mostrarAlerta(isShow: boolean){
    this.alertaOpen = isShow;
  }
  

  constructor(private router: Router) {
    const localUsers = localStorage.getItem('usuariosRegistrados');
    if (localUsers) {
      this.usuariosReg = JSON.parse(localUsers);
    }
  }

  login(){
    const user = this.usuariosReg.find(user => user.username === this.username && user.password === this.password); 
    //Busca el usuario en el localStorage
    console.log(user)
    
    if(user){
      // Si el usuario se valida se redirige al Home
      this.router.navigate(['/home', { username: this.username, nombre: user.nombre, apellido: user.apellido, email: user.email, tipo: user.tipo, carrera: user.carrera, ramos: user.ramos}]);
    } else {
      // Si los datos no corresponden da arroja la alerta
      this.mostrarAlerta(true)
    }
  }


  /*
  register() {
    // Agregar usuarios al arreglo
    this.usuariosReg.push({nombre:'Lucas', apellido:'Fernandez', email:'lu.fernandezm@duocuc.cl', tipo:'Alumno', username:'lufernandezm', password:'lucas123', carrera:'Ingenieria en Informática', ramos:[["Programación Web"], ["Programación de Base de datos"], ["Ingeniería de Software"], ["Mentalidad Emprendedora"]]},
                          {nombre:'Francisco', apellido:'Toloza', email:'fran.toloza@duocuc.cl', tipo:'Profesor', username:'frantoloza', password:'francisco123', carrera:'Ingenieria en Informática',ramos:[['Modelamiento de base de datos'],['Arquitectura'],['Programación de Base de datos'],['Consultas de Base de datos']]},
                          {nombre:'Matias', apellido:'Diaz', email:'mat.diaz@duocuc.cl', tipo:'Alumno', username:'matdiaz', password:'matias123', carrera:'Ingenieria en Informática',ramos:[['Inglés intermedio'],['Programación Web'], ['Programación de Base de datos'], ['Ingeniería de Software'], ['Mentalidad Emprendedora']]},
                          {nombre:'Carlos', apellido:'De Ferrari', email:'car.deferrari@duocuc.cl', tipo:'Alumno', username:'cardeferrari', password:'cardeferrari123', carrera:'Ingenieria en Sonido',ramos:[['Electroacústica'],['Sonido y acústica'],['Electricidad'],['Nivelación Matemática'],['Inglés básico I']]});
    // Almacenar arreglo formateado
    localStorage.setItem('usuariosRegistrados', JSON.stringify(this.usuariosReg));
    // Redirigir a la página de inicio de sesión
    this.router.navigate(['/login']);
  }*/

  ngOnInit(){

  }
  /*
  constructor(private route1: Router) {}

  
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
  }*/

}
