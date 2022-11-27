/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CardDrugPatientComponent } from './card-drug-patient.component';

describe('CardDrugPatientComponent', () => {
  let component: CardDrugPatientComponent;
  let fixture: ComponentFixture<CardDrugPatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardDrugPatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardDrugPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
