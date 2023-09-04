import { Component, OnInit } from '@angular/core';
import { LoginPage } from '../login/login.page';
import { Router, NavigationExtras, RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-restore',
  templateUrl: './restore.page.html',
  styleUrls: ['./restore.page.scss'],
})
export class RestorePage implements OnInit {

  alertaOpen = false;
  alertaOpen2 = false;
  alertaOpen3 = false;

  mostrarAlerta(isShow: boolean){
    this.alertaOpen = isShow;
  }
  mostrarAlerta2(isShow: boolean){
    this.alertaOpen2 = isShow;
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

  usuariosReg:{nombre:undefined, apellido:undefined, email:undefined, tipo:undefined, username:undefined, password:string, 
              carrera:string, ramos:Array<string>[]}[]=[]
  
  username= '';
  password= '';
  password2= '';
  //Se crea el arreglo de usuarios con sus respectivos campos además de variables para recoger los datos del formulario


  constructor(private router: Router) {
    const localUsers = localStorage.getItem('usuariosRegistrados');
    if (localUsers) {
      this.usuariosReg = JSON.parse(localUsers);
    }
  }
  //Se crea un router para luego navegar a otros componentes y se consume del localStorage los usuarios registrados y 
  //se ordenan en formato JSON para su consumo

  restore(){//La función busca en el arreglo de usuarios si el usuario coincide y guarda los datos de este en la 
            //constante user y la posición donde se encontraba en la variable index
    const user = this.usuariosReg.find(user => user.username == this.username);
    const index = this.usuariosReg.findIndex(user => user.username == this.username); 
    
    if (user){//Si el usuario existe se procedé a validar que las contraseñas ingresadas sean iguales
      console.log(user)
      if (this.password == this.password2) {//Si las contraseñas son iguales se reemplazan los datos del usuario antiguo del localStorage 
                                            //manteniendo todos a excepción de la nueva contraseña ingresada
        this.usuariosReg.splice(index, 1, {nombre: user?.nombre, apellido: user?.apellido, email: user?.email, tipo: user?.tipo, username: user?.username, password: this.password, carrera: user?.carrera, ramos: user?.ramos});
        
        localStorage.setItem('usuariosRegistrados', JSON.stringify(this.usuariosReg));
        //Se actualiza el arreglo con todos los usuarios nuevamente en el localStorage
        
        this.mostrarAlerta3(true)
        //Se muestra la confirmación del cambio exitoso de contraseña
        
      }else{//Si las contraseñas no son iguales se muestra la alerta correspondiente y se limpian los campos de estas
        this.mostrarAlerta2(true)
        
        this.password= '';
        this.password2= '';
      }
    }else{//Si el usuario no existe se invoca la alerta correspondiente y se limpian todos los campos
      this.mostrarAlerta(true)
      this.username= '';
      this.password= '';
      this.password2= '';
    }
  }

  ngOnInit() {
    this.username= '';
    this.password= '';
    this.password2= '';
  }

}
