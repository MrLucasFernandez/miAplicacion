import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.page.html',
  styleUrls: ['./asistencia.page.scss'],
})
export class AsistenciaPage implements OnInit {

  asistencias=[]


  porc:number
  constructor(private api:ApiService) { 
    this.api.getAsistencias().subscribe(res=>{
      console.log(res);
      this.asistencias=res["items"];
      
    },(error)=>{
      console.log(error);
    })
  }

  ngOnInit() {
  }

}
