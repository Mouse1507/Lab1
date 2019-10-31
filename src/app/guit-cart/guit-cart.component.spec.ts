import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuitCartComponent } from './guit-cart.component';

describe('GuitCartComponent', () => {
  let component: GuitCartComponent;
  let fixture: ComponentFixture<GuitCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuitCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuitCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
