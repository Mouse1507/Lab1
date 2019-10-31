import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuitarShopComponent } from './guitar-shop.component';

describe('GuitarShopComponent', () => {
  let component: GuitarShopComponent;
  let fixture: ComponentFixture<GuitarShopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuitarShopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuitarShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
