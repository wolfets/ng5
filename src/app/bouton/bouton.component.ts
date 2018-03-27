import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bouton',
  template: `
    <button (click)="onClickMe()">Click me!</button>
    {{clickMessage}}`,
  styleUrls: ['./bouton.component.scss']
})
export class BoutonComponent implements OnInit {
 clickMessage = '';

  constructor() { }

  ngOnInit() {
  }
    onClickMe() {
        this.clickMessage = 'You are my hero!';
    }
}
