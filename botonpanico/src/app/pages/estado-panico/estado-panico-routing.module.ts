import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EstadoPanicoPage } from './estado-panico.page';

const routes: Routes = [
  {
    path: '',
    component: EstadoPanicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstadoPanicoPageRoutingModule {}
