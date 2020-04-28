import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlertaTerceraPersonaPage } from './alerta-tercera-persona.page';

const routes: Routes = [
  {
    path: '',
    component: AlertaTerceraPersonaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlertaTerceraPersonaPageRoutingModule {}
