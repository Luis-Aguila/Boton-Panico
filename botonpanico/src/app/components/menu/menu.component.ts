import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  constructor( public router: Router ) { }

  ngOnInit() {}

  irConfiguracion() {
    this.router.navigate(['configuracion/']);
  }

  alertaRoboTercera() {
    this.router.navigate(['alerta-tercera-persona/']);
  }
  alertaViolenciaTercera() {
    this.router.navigate(['alerta-tercera-persona/']);
  }
  alertaAcosoTercera() {
    this.router.navigate(['alerta-tercera-persona/']);
  }
  alertaAccidenteTercera() {
    this.router.navigate(['alerta-tercera-persona/']);
  }

}
