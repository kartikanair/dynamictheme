import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SettingsProvider} from "../../providers/settings/settings";

/**
 * Generated class for the SettingPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {
    selectedTheme: String;
    availableThemes: {className: string, prettyName: string}[];
    constructor(public navCtrl: NavController, public navParams: NavParams,private settings: SettingsProvider) {
      this.settings.getActiveTheme().subscribe(val => this.selectedTheme = val);
      this.availableThemes = this.settings.availableThemes;
    }
  public  setActiveTheme(e) {
      this.settings.setActiveTheme(e);
    }



}
