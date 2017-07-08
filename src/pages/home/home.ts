import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {SettingPage} from "../setting/setting";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
gototheme()
{
  this.navCtrl.push(SettingPage);
}
}
