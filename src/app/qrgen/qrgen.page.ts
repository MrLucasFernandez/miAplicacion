import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-qrgen',
  templateUrl: './qrgen.page.html',
  styleUrls: ['./qrgen.page.scss'],
})
export class QrgenPage implements OnInit {

  public qrCode: string;

  ramos=[]

  ramo:{
    id_ramo: string,
    descripcion: string,
    clases_reg: string,
    profesor: string,
    siglas: string
  }

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
    
    this.usuario = this.router.getCurrentNavigation()?.extras.state?.['usuario'];
    

    this.api.getRamos(this.usuario.nombre_usuario).subscribe(res=>{
      console.log(res);
      this.ramos=res["items"];
    },(error)=>{
      console.log(error);
    })
    
  }
  changeRamo(e) {
    console.log('ID Ramo: ' + e.detail.value);
    this.qrCode = e.detail.value.toString();
    //JSON.stringify(ev.target.value)
  }

  ngOnInit() {
  }

}
