import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-section-free-demo',
  templateUrl: './home-section-free-demo.component.html',
  styleUrls: ['./home-section-free-demo.component.css']
})
export class HomeSectionFreeDemoComponent implements OnInit {
  title = 'Free';
  title2 = ' Demo';
  description1 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et lectus nisi. Vivamus nec ullamcorper nunc. Proin tristique vel enim quis elementum.';
  titleBtn = 'Access Demo';
  constructor() { }

  ngOnInit(): void {
  }

}
