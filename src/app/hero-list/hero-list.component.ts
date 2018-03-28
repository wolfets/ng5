import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss']
})

@Injectable() /*https://embed.plnkr.co/KNq5fC/*/
export class HeroListComponent implements OnInit {

    static _heros: any = [];
    titre: string;

    constructor(route: ActivatedRoute) {
        this.titre = route.snapshot.data['title'];
        /*this.heros.push(new Hero(18, 'Dr IQ', 'aucun', 'Chuck Overstreet'));*/
    }

    ngOnInit() {
    }

    get heros() {
        return HeroListComponent._heros;
    }



    public videListe = () => {
      HeroListComponent._heros = [];
      alert(HeroListComponent._heros.length);
    };
}
