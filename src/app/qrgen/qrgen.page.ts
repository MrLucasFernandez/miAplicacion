import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-qrgen',
  templateUrl: './qrgen.page.html',
  styleUrls: ['./qrgen.page.scss'],
})
export class QrgenPage implements OnInit {

  public qrCode: string = null;

  constructor() { 
    this.qrCode = 'Este texto es la prueba de QR';
  }

  ngOnInit() {
  }

}
