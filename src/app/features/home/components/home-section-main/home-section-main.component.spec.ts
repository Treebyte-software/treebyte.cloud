import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSectionMainComponent } from './home-section-main.component';

describe('HomeSectionMainComponent', () => {
  let component: HomeSectionMainComponent;
  let fixture: ComponentFixture<HomeSectionMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeSectionMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSectionMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
