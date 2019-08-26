import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDTComponent } from './product-dt.component';

describe('ProductDTComponent', () => {
  let component: ProductDTComponent;
  let fixture: ComponentFixture<ProductDTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
