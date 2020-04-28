import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alerta-tercera-persona',
  templateUrl: './alerta-tercera-persona.page.html',
  styleUrls: ['./alerta-tercera-persona.page.scss'],
})
export class AlertaTerceraPersonaPage implements OnInit {

  constructor( private menuCtrl: MenuController, public router: Router ) {}

  ngOnInit() {
  }

  toggleMenu() {
    this.menuCtrl.toggle();
  }

  generarAlerta() {
    console.log('Alerta Generada');
    this.router.navigate(['home/']);
  }

}
