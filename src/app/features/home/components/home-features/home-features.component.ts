import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-features',
  templateUrl: './home-features.component.html',
  styleUrls: ['./home-features.component.css']
})
export class HomeFeaturesComponent implements OnInit {

  infoTitle1 = 'Stock Automation';
  paragraph1 = 'Ottimizza la gestione del magazzino sostituendo le attività manuali con processi automatizzati basati sui dati.';
  infoTitle2 = 'Smart check-out';
  paragraph2 = 'Offri ai tuoi clienti soluzioni di check-out in continua evoluzione ed esperienze d’acquisto moderne e personalizzate';
  infoTitle3 = 'Marketing e CRM';
  paragraph3 = 'Ottieni informazioni utili dallo storico degli acquisti per fidelizzare il cliente e suscitare il suo interesse con promozioni e sistemi di loyalty.';
  constructor() { }

  ngOnInit(): void {
  }

}
