import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSectionFreeDemoComponent } from './home-section-free-demo.component';

describe('HomeSectionFreeDemoComponent', () => {
  let component: HomeSectionFreeDemoComponent;
  let fixture: ComponentFixture<HomeSectionFreeDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeSectionFreeDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSectionFreeDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
