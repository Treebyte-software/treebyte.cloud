import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSectionHeaderComponent } from './home-section-header.component';

describe('HomeSectionHeaderComponent', () => {
  let component: HomeSectionHeaderComponent;
  let fixture: ComponentFixture<HomeSectionHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeSectionHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSectionHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
