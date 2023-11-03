import { Component, Input, OnDestroy } from '@angular/core';
import { Router} from '@angular/router';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnDestroy{
  usuario:{
    apellido: string,
    contrasena: string,
    correo: string,
    carrera: string,
    nombre: string,
    nombre_usuario: string,
    tipo: string
  };
  
  resultadoQR : any;

  constructor(private router: Router) { 
    //Se consume desde la ruta Login los parametros y se guardan en las variables para ser mostradas
    this.usuario = this.router.getCurrentNavigation()?.extras.state?.['usuario'];
    
  }

  verCuenta(){
    this.router.navigate(['/usuario'], {state:{ usuario: this.usuario},});
  }

  verQR(){
    if(this.usuario.tipo=='Profesor'){
      this.router.navigate(['/qrgen']);
    }else{
      if (this.usuario.tipo=='Alumno'){
        this.iniciarQR();
      }
    }
  }

  async verPermisos(){
    try{
      const status = await  BarcodeScanner.checkPermission({ force : true });
      if (status.granted) {
        return true;
      }else
      return false;
    }catch(error) {
      console.log(error)
      return false;
    }
  }

  async iniciarQR(){
    try {
      const permisos = await this.verPermisos();
      if (!permisos){
        return;
      }
      await BarcodeScanner.hideBackground();
      document.querySelector('body').classList.add('scanner-active');
      const resultado = await BarcodeScanner.startScan();
      console.log(resultado);
      if (resultado?.hasContent){
        this.resultadoQR = resultado.content;
        console.log(this.resultadoQR)
      }
    } catch(error){
      console.log(error);
      this.detenerQR();
    }
  }

  detenerQR(){
    BarcodeScanner.showBackground();
    BarcodeScanner.stopScan();
    document.querySelector('body').classList.remove('scanner-active');
  }

  logout(){
    localStorage.setItem('online', 'false');
    this.router.navigate(['/login']);
  }

  ngOnDestroy(): void {
    this.detenerQR();
  }
}
