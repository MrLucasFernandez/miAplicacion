import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-qrscan',
  templateUrl: './qrscan.page.html',
  styleUrls: ['./qrscan.page.scss'],
})
export class QrscanPage implements OnDestroy {

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
  estado_visible = '';
  mensaje:string;

  constructor(private router: Router, private api:ApiService) {
    this.usuario = this.router.getCurrentNavigation()?.extras.state?.['usuario'];
  }

  usuarioActual: any; // Información del usuario actual obtenida de dos formas(autenticación por token (No la recomiendo xd) o autenticacion por ID simplemente o haciendo la autenticacion que se hace al principio de verificacion de usuario.)
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
      this.estado_visible = 'hidden';
      const resultado = await BarcodeScanner.startScan();
      console.log(resultado);
      this.estado_visible = '';
      BarcodeScanner.showBackground();
      document.querySelector('body').classList.remove('scanner-active');
      if (resultado?.hasContent){
        this.resultadoQR = resultado.content;

        this.api.putAsistencias(this.usuario.nombre_usuario, this.resultadoQR, {nombre_usuario: this.usuario.nombre, id_ramo: this.resultadoQR, clases_asist:0}).subscribe(res=>{     
          console.log(res);
          this.mensaje = '¡Asistencia registrada correctamente!';
          
        },(error)=>{

          console.log(error);
        })

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
    this.estado_visible = '';
  }

  ngOnDestroy(): void {
    this.detenerQR();
  }
}
