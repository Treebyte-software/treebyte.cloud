import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSectionMobileposComponent } from './home-section-mobilepos.component';

describe('HomeSectionMobileposComponent', () => {
  let component: HomeSectionMobileposComponent;
  let fixture: ComponentFixture<HomeSectionMobileposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeSectionMobileposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSectionMobileposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
