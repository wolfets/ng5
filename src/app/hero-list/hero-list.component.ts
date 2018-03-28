import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import {ActivatedRoute} from '@angular/router'; /*https://yakovfain.com/2015/11/11/angular-2-passing-data-to-routes/*/

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
        this.titre = route.snapshot.data.title + ' / ';
        /*this.productID = route.snapshot.params['id']; // 3*/

        /*this.heros.push(new Hero(18, 'Dr IQ', 'aucun', 'Chuck Overstreet'));*/
    }

    ngOnInit() {
    }

    get heros() {
        return HeroListComponent._heros;
    }



    public videListe = () => {
      HeroListComponent._heros = [];
      // alert(HeroListComponent._heros.length);
    };
}
