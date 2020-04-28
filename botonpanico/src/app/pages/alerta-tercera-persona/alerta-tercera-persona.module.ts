import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlertaTerceraPersonaPageRoutingModule } from './alerta-tercera-persona-routing.module';

import { AlertaTerceraPersonaPage } from './alerta-tercera-persona.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlertaTerceraPersonaPageRoutingModule
  ],
  declarations: [AlertaTerceraPersonaPage]
})
export class AlertaTerceraPersonaPageModule {}
