import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CongngheComponent } from './congnghe.component';

describe('CongngheComponent', () => {
  let component: CongngheComponent;
  let fixture: ComponentFixture<CongngheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CongngheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CongngheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
