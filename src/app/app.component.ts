import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  cards = [ {
    title : 'SEDANS',
    details : 'Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.',
    logo : './assets/images/icon-sedans.svg',
    bgCardColor : 'hsl(31, 77%, 52%)'
  },  {
    title : 'SUVS',
    details : 'Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.',
    logo : './assets/images/icon-suvs.svg',
    bgCardColor : 'hsl(184, 100%, 22%)'
  }, {
    title : 'LUXURY',
    details : 'Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.',
    logo : './assets/images/icon-luxury.svg',
    bgCardColor : 'hsl(179, 100%, 13%)'
  }]
}
