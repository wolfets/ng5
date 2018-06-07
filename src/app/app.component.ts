import { Component } from '@angular/core';
import {HeroListComponent} from './hero-list/hero-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
    providers: [HeroListComponent]
})
export class AppComponent {
  title = 'app';

  constructor(private heroList: HeroListComponent){
  }

  get herosLength() {
    return this.heroList.heros.length;
  }
}
