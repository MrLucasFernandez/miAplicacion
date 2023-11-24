import { Component, Input, OnDestroy } from '@angular/core';
import { Router} from '@angular/router';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage{
  usuario:{
    apellido: string,
    contrasena: string,
    correo: string,
    carrera: string,
    nombre: string,
    nombre_usuario: string,
    tipo: string
  };


  

  
  constructor(private router: Router, private api:ApiService) {
   //Se consume desde la ruta Login los parametros y se guardan en las variables para ser mostradas
    this.usuario = this.router.getCurrentNavigation()?.extras.state?.['usuario'];
  
  }

  verCuenta(){
    this.router.navigate(['/usuario'], {state:{ usuario: this.usuario},});
  }

  verQR(){
    if(this.usuario.tipo=='Profesor'){
      this.router.navigate(['/qrgen'], {state:{ usuario: this.usuario}});
    }else{
      if (this.usuario.tipo=='Alumno'){
        this.router.navigate(['/qrscan'], {state:{ usuario: this.usuario}});
      }
    }
  }

  

  

  logout(){
    localStorage.setItem('online', 'false');
    this.router.navigate(['/login']);
  }

  
}
