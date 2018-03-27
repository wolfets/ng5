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

  constructor(private heroList: HeroListComponent) { }

  ngOnInit() {
  }

    powers = ['Really Smart', 'Super Flexible',
        'Super Hot', 'Weather Changer'];

    model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

    submitted = false;

    onSubmit(data) {
      console.log(data);
      this.heroList.heros.push(data);

      console.log(this.heroList.heros);

        this.submitted = true;
    }

    // TODO: Remove this when we're done
    get diagnostic() { return JSON.stringify(this.model); }

}
