import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-slogan',
  templateUrl: './home-slogan.component.html',
  styleUrls: ['./home-slogan.component.css']
})
export class HomeSloganComponent implements OnInit {
  slogan = 'Da oltre 20 anni, siamo i partner tecnologici e digitali di attività e catene commerciali. StockStore è la nostra suite proprietaria che, con i suoi moduli, apporta benefici in termini di produttività ed efficienza, consentendo nuovi modelli di business <br>in risposta alle tendenze del mercato.';
  constructor() { }

  ngOnInit(): void {
  }

}
