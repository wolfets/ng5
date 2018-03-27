import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss']
})

@Injectable() /*https://embed.plnkr.co/KNq5fC/*/
export class HeroListComponent implements OnInit {

  public heros = [];

  constructor() { }

  ngOnInit() {
  }

}
