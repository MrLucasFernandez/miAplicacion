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
  async mostrarAlerta3(isShow: boolean){
    this.alertaOpen3 = isShow;
    await this.delay(3000);
    this.router.navigate(['/login']);
  }
  
  delay(time: number){
    return new Promise(resolve => setTimeout(resolve, time));
  }


  username= '';
  password= '';
  password2= '';


  usuariosReg:{nombre:undefined, apellido:undefined, email:undefined, tipo:undefined, username:undefined, password:string, carrera:string, ramos:string[]}[]=[]

  constructor(private router: Router) {
    const localUsers = localStorage.getItem('usuariosRegistrados');
    if (localUsers) {
      this.usuariosReg = JSON.parse(localUsers);
    }
  }


  restore(){
    const user = this.usuariosReg.find(user => user.username == this.username);
    const index = this.usuariosReg.findIndex(user => user.username == this.username); 
    //Busca el usuario en el localStorage
    if (user){
      console.log(user)
      if (this.password == this.password2) {
        this.usuariosReg.splice(index, 1, {nombre: user?.nombre, apellido: user?.apellido, email: user?.email, tipo: user?.tipo, username: user?.username, password: this.password, carrera: user?.carrera, ramos: user?.ramos});
        localStorage.setItem('usuariosRegistrados', JSON.stringify(this.usuariosReg));
        this.delay(5000);
        this.mostrarAlerta3(true)
        
      }else{
        this.mostrarAlerta2(true)
        
        this.password= '';
        this.password2= '';
      }
    }else{
      this.mostrarAlerta(true)
      this.username= '';
      this.password= '';
      this.password2= '';
    }

  }
  
  
  

  ngOnInit() {
    
  }

}
