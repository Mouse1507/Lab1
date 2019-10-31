import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuitCheckoutComponent } from './guit-checkout.component';

describe('GuitCheckoutComponent', () => {
  let component: GuitCheckoutComponent;
  let fixture: ComponentFixture<GuitCheckoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuitCheckoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuitCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
