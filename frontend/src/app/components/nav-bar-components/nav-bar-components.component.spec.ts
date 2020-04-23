import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarComponentsComponent } from './nav-bar-components.component';

describe('NavBarComponentsComponent', () => {
  let component: NavBarComponentsComponent;
  let fixture: ComponentFixture<NavBarComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavBarComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
