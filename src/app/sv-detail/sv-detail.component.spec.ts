import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SvDetailComponent } from './sv-detail.component';

describe('SvDetailComponent', () => {
  let component: SvDetailComponent;
  let fixture: ComponentFixture<SvDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SvDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
