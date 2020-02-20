import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-slogan-brand',
  templateUrl: './home-slogan-brand.component.html',
  styleUrls: ['./home-slogan-brand.component.css']
})
export class HomeSloganBrandComponent implements OnInit {
  title = 'Le Soluzioni Enterprise per il Retail';
  constructor() { }

  ngOnInit(): void {
  }

}
