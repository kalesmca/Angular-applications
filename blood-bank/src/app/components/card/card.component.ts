import { Component, OnInit, Input } from '@angular/core';
import { CardModel } from './model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  cardObj = new CardModel();
  constructor() { }

  @Input() layout: any;

  ngOnInit() {
    console.log('card component:', this.layout);
  }

}
