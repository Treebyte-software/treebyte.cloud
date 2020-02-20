import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-section-stockstorecloud',
  templateUrl: './home-section-stockstorecloud.component.html',
  styleUrls: ['./home-section-stockstorecloud.component.css']
})
export class HomeSectionStockstorecloudComponent implements OnInit {
  title = 'STOCK';
  title2 = 'STORE';
  title3 = ' CLOUD';
  description1 = 'Lorem ipsum dolor sit amet';
  description2 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consectetur quam mauris, eu volutpat odio vestibulum a. Aenean scelerisque purus at enim luctus, ac iaculis lorem iaculis. Nullam pharetra turpis id luctus sagittis. Aenean a turpis ac sapien semper fermentum. Quisque vehicula arcu non ex imperdiet pulvinar in nec nisl. Ut vitae nisi fringilla, dictum ipsum sed, pretium erat. Vivamus nibh sapien, volutpat eget arcu vitae, rutrum laoreet urna. ';
  constructor() { }

  ngOnInit(): void {
  }

}
