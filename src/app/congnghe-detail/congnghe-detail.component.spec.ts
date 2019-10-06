import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CongngheDetailComponent } from './congnghe-detail.component';

describe('CongngheDetailComponent', () => {
  let component: CongngheDetailComponent;
  let fixture: ComponentFixture<CongngheDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CongngheDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CongngheDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
