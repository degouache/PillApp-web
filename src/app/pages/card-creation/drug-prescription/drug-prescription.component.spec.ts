import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrugPrescriptionComponent } from './drug-prescription.component';

describe('DrugPrescriptionComponent', () => {
  let component: DrugPrescriptionComponent;
  let fixture: ComponentFixture<DrugPrescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrugPrescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrugPrescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
