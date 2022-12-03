import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VitalLecturePrescriptionComponent } from './vital-lecture-prescription.component';

describe('VitalLecturePrescriptionComponent', () => {
  let component: VitalLecturePrescriptionComponent;
  let fixture: ComponentFixture<VitalLecturePrescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VitalLecturePrescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VitalLecturePrescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
