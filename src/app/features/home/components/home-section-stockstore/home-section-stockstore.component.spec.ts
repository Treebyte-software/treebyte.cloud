import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSectionStockstoreComponent } from './home-section-stockstore.component';

describe('HomeSectionProductComponent', () => {
  let component: HomeSectionStockstoreComponent;
  let fixture: ComponentFixture<HomeSectionStockstoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeSectionStockstoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSectionStockstoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
