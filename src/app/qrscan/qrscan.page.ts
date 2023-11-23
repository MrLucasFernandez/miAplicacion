import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-qrscan',
  templateUrl: './qrscan.page.html',
  styleUrls: ['./qrscan.page.scss'],
})
export class QrscanPage{

  constructor() {}

  usuarioActual: any; // Información del usuario actual obtenida de dos formas(autenticación por token (No la recomiendo xd) o autenticacion por ID simplemente o haciendo la autenticacion que se hace al principio de verificacion de usuario.)

  

}
