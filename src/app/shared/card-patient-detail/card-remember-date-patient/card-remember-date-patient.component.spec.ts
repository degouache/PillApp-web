/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CardRememberDatePatientComponent } from './card-remember-date-patient.component';

describe('CardRememberDatePatientComponent', () => {
  let component: CardRememberDatePatientComponent;
  let fixture: ComponentFixture<CardRememberDatePatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardRememberDatePatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardRememberDatePatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
