import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSectionStockstorecloudComponent } from './home-section-stockstorecloud.component';

describe('HomeSectionStockstorecloudComponent', () => {
  let component: HomeSectionStockstorecloudComponent;
  let fixture: ComponentFixture<HomeSectionStockstorecloudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeSectionStockstorecloudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSectionStockstorecloudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
