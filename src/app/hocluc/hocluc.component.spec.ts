import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoclucComponent } from './hocluc.component';

describe('HoclucComponent', () => {
  let component: HoclucComponent;
  let fixture: ComponentFixture<HoclucComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoclucComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoclucComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
