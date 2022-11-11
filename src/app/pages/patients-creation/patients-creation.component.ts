import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { NewPatientService } from 'src/app/services/new-patient/new-patient.service';
import { PatientRegister } from 'src/app/shared/models/patient.interface';

@Component({
  selector: 'app-patients-creation',
  templateUrl: './patients-creation.component.html',
  styleUrls: ['./patients-creation.component.css'],
})
export class PatientsCreationComponent implements OnInit {

  submitted = false;
  registerPatientForm = new FormGroup({
    fullName: new FormControl('', [Validators.required]),
    weight: new FormControl('', []),
    notes: new FormControl('', []),
  });

  constructor(
    private newPatientService: NewPatientService,
    private formBuilder: FormBuilder
  ) {}

  get fullName(): AbstractControl {
    return this.registerPatientForm.controls['fullName'];
  }
  get weight(): AbstractControl {
    return this.registerPatientForm.controls['weight'];
  }
  get notes(): AbstractControl {
    return this.registerPatientForm.controls['notes'];
  }

  ngOnInit(): void {}
  registerSubmit(): void {
    const formValue = this.registerPatientForm.value;
    if (this.registerPatientForm.valid) {
      const payload: PatientRegister = {
            fullName: formValue.email,
            notes: formValue.password,
            kg: formValue.userName,
      };
      this.newPatientService
        .registerPatient(payload)
        .subscribe((patientCreated) => console.log(patientCreated));
    }
    
    this.submitted = true;
    this.onReset();
  }
  get registerDataForm() {
    return this.registerPatientForm.controls;
  }
  onReset(): void {
    this.submitted = false;
    this.registerPatientForm.reset();
  }
}

