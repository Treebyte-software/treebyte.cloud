import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-section-free-demo',
  templateUrl: './home-section-free-demo.component.html',
  styleUrls: ['./home-section-free-demo.component.css']
})
export class HomeSectionFreeDemoComponent implements OnInit {
  title = 'Free Demo';
  description1 = 'Do you want to test and see the benefits of this kit before purchasing it? You can give the demo version a try. It features enough basic components for you to get a feel of the design and also test the quality of the code. Get it free on GitHub!';
  titleBtn = 'View Demo on Github';
  constructor() { }

  ngOnInit(): void {
  }

}
