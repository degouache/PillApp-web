import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientsCreationComponent } from './patients-creation.component';

describe('PatientsCreationComponent', () => {
  let component: PatientsCreationComponent;
  let fixture: ComponentFixture<PatientsCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientsCreationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientsCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
