import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor( private menuCtrl: MenuController, public router: Router ) {}

  toggleMenu() {
    this.menuCtrl.toggle();
  }

  verAlerta() {
    this.router.navigate(['estado-panico/']);
  }

}
