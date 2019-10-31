import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuitProdDetailComponent } from './guit-prod-detail.component';

describe('GuitProdDetailComponent', () => {
  let component: GuitProdDetailComponent;
  let fixture: ComponentFixture<GuitProdDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuitProdDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuitProdDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
