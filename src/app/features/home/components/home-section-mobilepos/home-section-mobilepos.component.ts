import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-section-mobilepos',
  templateUrl: './home-section-mobilepos.component.html',
  styleUrls: ['./home-section-mobilepos.component.css']
})
export class HomeSectioMobileposComponent implements OnInit {
  title = 'POINT OF SALE';
  description2 = 'La soluzione per l'automazione del punto vendita che ti permette di gestire con semplicità tutte le attività e le operazioni all'interno del tuo negozio, del tuo ristorante e della tua catena commerciale.  ';
  description3 = 'Una soluzione di front end in versione desktop e mobile, versatile dall''interfaccia semplice e con un elevata possibilità di personalizzazione.  ';
  titleBtn = 'Maggiori informazioni';
  constructor() { }

  ngOnInit(): void {
  }

}
