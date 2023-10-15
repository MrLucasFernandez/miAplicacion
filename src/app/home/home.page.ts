import { Component, Input } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  usuario:{
    apellido: string,
    contrasena: string,
    correo: string,
    carrera: string,
    nombre: string,
    nombre_usuario: string,
    tipo: string
  };
  

  constructor(private router: Router) { 
    //Se consume desde la ruta Login los parametros y se guardan en las variables para ser mostradas
    this.usuario = this.router.getCurrentNavigation()?.extras.state?.['usuario'];
    
  }

  verCuenta(){
    this.router.navigate(['/usuario'], {state:{ usuario: this.usuario},});
  }
  logout(){
    localStorage.setItem('online', 'false');
    this.router.navigate(['/login']);
  }

}
