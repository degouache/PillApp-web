/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CardVitalPatientComponent } from './card-vital-patient.component';

describe('CardVitalPatientComponent', () => {
  let component: CardVitalPatientComponent;
  let fixture: ComponentFixture<CardVitalPatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardVitalPatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardVitalPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
