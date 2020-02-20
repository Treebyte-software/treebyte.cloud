import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSectionMainraisedComponent } from './home-section-mainraised.component';

describe('HomeSectionMainraisedComponent', () => {
  let component: HomeSectionMainraisedComponent;
  let fixture: ComponentFixture<HomeSectionMainraisedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeSectionMainraisedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSectionMainraisedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
