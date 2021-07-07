import { Component, HostBinding, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-cars-cards',
  templateUrl: './cars-cards.component.html',
  styleUrls: ['./cars-cards.component.css']
})
export class CarsCardsComponent implements OnInit {

  @Input() @HostBinding('style.background-color') bgCardColor: string;

  @Input() logo;
  @Input() title;
  @Input() details;

  constructor() { }

  ngOnInit(): void {
  }
}
