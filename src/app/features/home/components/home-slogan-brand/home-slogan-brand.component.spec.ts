import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSloganBrandComponent } from './home-slogan-brand.component';

describe('HomeSloganBrandComponent', () => {
  let component: HomeSloganBrandComponent;
  let fixture: ComponentFixture<HomeSloganBrandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeSloganBrandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSloganBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
