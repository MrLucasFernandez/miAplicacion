import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-ramos',
  templateUrl: './ramos.page.html',
  styleUrls: ['./ramos.page.scss'],
})
export class RamosPage implements OnInit {
  
  alumnos=[]
  constructor(private api:ApiService) { 
    this.api.getAlumnos().subscribe(res=>{
      console.log(res);
      this.alumnos=res;
    },(error)=>{
      console.log(error);
    })
  }
  ramosShown1 = false;
  ramosShown2 = false;
  ramosShown3 = false;
  ramosShown4 = false;
  
  /*
  mostrarRamos(){
    
    if(this.display === true){
      this.display = false;
      document.getElementById("ramos").hidden = false;
    }else if(this.display === false){
      this.display = true;
      document.getElementById("ramos").hidden = true;
    }

  }*/




  /*
  constructor(private api:ApiService) { 
    this.api.getAlumnos().subscribe(res=>{
      console.log(res);
      this.alumnos=res["items"];
    },(error)=>{
      console.log(error);
    })
  }
  mostrarAlumnos(){
    this.api.getAlumnos().subscribe(res=>{
      console.log(res);
      this.alumnos=res["items"];
    },(error)=>{
      console.log(error);
    })
    
  }*/
  ngOnInit(){
    this.api.getAlumnos();
  }

}
