import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QrgenPageRoutingModule } from './qrgen-routing.module';

import { QrgenPage } from './qrgen.page';
import { QRCodeModule } from 'angularx-qrcode';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QrgenPageRoutingModule,
    QRCodeModule
  ],
  declarations: [QrgenPage]
})
export class QrgenPageModule {}
