import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-estado-panico',
  templateUrl: './estado-panico.page.html',
  styleUrls: ['./estado-panico.page.scss'],
})
export class EstadoPanicoPage implements OnInit {

  constructor( private menuCtrl: MenuController, public router: Router ) {}

  ngOnInit() {
  }

  toggleMenu() {
    this.menuCtrl.toggle();
  }

  acudirAlerta() {
    console.log('Ruta Trazada');
    this.router.navigate(['home/']);
  }

}
