import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatricePage } from './calculatrice.page';

describe('CalculatricePage', () => {
  let component: CalculatricePage;
  let fixture: ComponentFixture<CalculatricePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculatricePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatricePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
