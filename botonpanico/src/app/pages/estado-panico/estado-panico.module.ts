import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EstadoPanicoPageRoutingModule } from './estado-panico-routing.module';

import { EstadoPanicoPage } from './estado-panico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EstadoPanicoPageRoutingModule
  ],
  declarations: [EstadoPanicoPage]
})
export class EstadoPanicoPageModule {}
