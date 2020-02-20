import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-section-stockstore',
  templateUrl: './home-section-stockstore.component.html',
  styleUrls: ['./home-section-stockstore.component.css']
})
export class HomeSectionStockstoreComponent implements OnInit {
  title = 'STOCK';
  title2 = 'STORE';
  description1 = 'Una piattaforma scalabile per tutti i processi del Retail';
  description2 = 'StockStore è una suite integrata di applicazioni e tecnologie intelligenti per catene retail che ambiscono a modelli di business innovativi e desiderano offrire customer experience personalizzate e pensate per ciascun settore merceologico.';
  constructor() { }

  ngOnInit(): void {
  }

}
