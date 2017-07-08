import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/Rx';
/*
  Generated class for the SettingsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/

@Injectable()
export class SettingsProvider {

  private theme: BehaviorSubject<String>;
  availableThemes: {className: string, prettyName: string}[];

  constructor() {
    this.theme = new BehaviorSubject('blue-theme');
    this.availableThemes = [
      {className: 'blue-theme', prettyName: 'Blue'},
      {className: 'pink-theme', prettyName: 'Pink'},
      {className: 'green-theme', prettyName: 'Green'},
      {className: 'copper-theme', prettyName: 'copper'},
      {className: 'gold-theme', prettyName: 'gold'},
      {className: 'gold-design-theme', prettyName: 'gold design'},

    ];
  }

  setActiveTheme(val) {
    this.theme.next(val);
  }

  getActiveTheme() {
    return this.theme.asObservable();
  }
}
