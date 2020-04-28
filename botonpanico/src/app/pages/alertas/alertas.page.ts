import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alertas',
  templateUrl: './alertas.page.html',
  styleUrls: ['./alertas.page.scss'],
})
export class AlertasPage implements OnInit {

  constructor( private menuCtrl: MenuController, public router: Router ) { }

  ngOnInit() {
  }

  toggleMenu() {
    this.menuCtrl.toggle();
  }

  seleccionAlerta(seleccion: string) {
    console.log(seleccion);
    this.irHome();
  }

  irHome() {
    this.router.navigate(['home/']);
  }

}
