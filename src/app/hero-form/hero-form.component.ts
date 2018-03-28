import { Component, OnInit } from '@angular/core';


import { Hero } from '../hero';
import {HeroListComponent} from '../hero-list/hero-list.component';


@Component({
    selector: 'app-hero-form',
    templateUrl: './hero-form.component.html',
    styleUrls: ['./hero-form.component.scss'],
    providers: [ HeroListComponent ]
})

export class HeroFormComponent implements OnInit {
    powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];
    submitted = false;


    private _model: Hero;
    get model(): Hero {
        return this._model;
    }
    set model(value: Hero) {
        this._model = value;
    }

  constructor(private heroList: HeroListComponent) {
    this.model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
  }

  ngOnInit() {
  }

  onSubmit(data) {
      /*console.log(data);*/
      this.heroList.heros.push(data);

      /*console.log(this.heroList.heros);*/
      this.submitted = true;
  }

    // TODO: Remove this when we're done
    get diagnostic() { return JSON.stringify(this._model); }

}
