import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import {Hero} from '../hero';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss']
})

@Injectable() /*https://embed.plnkr.co/KNq5fC/*/
export class HeroListComponent implements OnInit {

    static _heros: any = [];

    constructor() {
        /*this.heros.push(new Hero(18, 'Dr IQ', 'aucun', 'Chuck Overstreet'));*/
    }

    ngOnInit() {
    }

    get heros() {
        return HeroListComponent._heros;
    }



    public refresh = () => {
      alert(HeroListComponent._heros.length);
    };
}
