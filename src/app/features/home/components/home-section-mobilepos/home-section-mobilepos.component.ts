import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-section-mobilepos',
  templateUrl: './home-section-mobilepos.component.html',
  styleUrls: ['./home-section-mobilepos.component.css']
})
export class HomeSectioMobileposComponent implements OnInit {
  title = 'MOBILE POS';
  description2 = 'La soluzione progettata per il tuo Retail: in cloud, sempre disponibile, fruibile da qualsiasi dispositivo mobile e integrata con le più diffuse piattaforme ERP: Zucchetti, Microsoft, Oracle e SAP.  ';
  constructor() { }

  ngOnInit(): void {
  }

}
