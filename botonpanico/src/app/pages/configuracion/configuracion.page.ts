import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.page.html',
  styleUrls: ['./configuracion.page.scss'],
})
export class ConfiguracionPage implements OnInit {

  constructor( private menuCtrl: MenuController, public router: Router ) {}

  ngOnInit() {
  }

  toggleMenu() {
    this.menuCtrl.toggle();
  }

  irAlertaPrincipal() {
    this.router.navigate(['alertas/']);
  }

  irDatosPersonales() {
    this.router.navigate(['datos-personales/']);
  }


}
