import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-datos-personales',
  templateUrl: './datos-personales.page.html',
  styleUrls: ['./datos-personales.page.scss'],
})
export class DatosPersonalesPage implements OnInit {

  constructor( private menuCtrl: MenuController, public router: Router ) {}

  ngOnInit() {
  }

  toggleMenu() {
    this.menuCtrl.toggle();
  }

  guardarDatos() {
    console.log('Datos Guardados');
    
    this.router.navigate(['home/']);
  }


}
