import { Component, Input } from '@angular/core';
import { UsuarioClass } from '../services/usuario-class';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  userInfoReceived: UsuarioClass | undefined;

  saludo: String; 


  constructor(private router: Router, private activatedRoute: ActivatedRoute) {

    this.userInfoReceived = this.router.getCurrentNavigation()?.extras.state?.['user'];

    this.saludo = 'Bienvenido a la página...';
  }

}
