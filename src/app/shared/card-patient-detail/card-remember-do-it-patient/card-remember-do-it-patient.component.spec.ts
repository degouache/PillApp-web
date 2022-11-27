/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CardRememberDoItPatientComponent } from './card-remember-do-it-patient.component';

describe('CardRememberDoItPatientComponent', () => {
  let component: CardRememberDoItPatientComponent;
  let fixture: ComponentFixture<CardRememberDoItPatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardRememberDoItPatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardRememberDoItPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
