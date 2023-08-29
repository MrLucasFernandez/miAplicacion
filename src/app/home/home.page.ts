import { Component } from '@angular/core';
import { LoginPageModule } from '../login/login.module';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  
  saludo: String; 


  constructor() {
    this.saludo = 'Bienvenido a la página...';
  }

}
