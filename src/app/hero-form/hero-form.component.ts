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
    couleur = 'green';

    contact:any = [];

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
      this.contact = this.heroList.getContact();
      //console.log(this.contact);

      //
      this.heroList.heros.push(new Hero(1, 'Red', 'Chuck Overstreet','SFR', ));
      this.heroList.heros.push(new Hero(2, 'Green', 'Chuck Overstreet','Lantern', ));
      //this.heroList.heros.push(new Hero(3, this.contact.response[0].name, this.contact.response[0].power, this.contact.response[0].alterEgo));
  }

  onSubmit(data) {
      /*console.log(data);*/
      this.couleur = data.name;
      this.heroList.heros.push(data);

      /*console.log(this.heroList.heros);*/
      this.submitted = true;
  }

    // TODO: Remove this when we're done
    get diagnostic() { return JSON.stringify(this._model); }

}
