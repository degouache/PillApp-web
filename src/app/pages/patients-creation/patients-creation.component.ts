import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
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
    fullName: new FormControl('', Validators.required),
    kg: new FormControl('', []),
    notes: new FormControl('', []),
  });

  constructor(
    private newPatientService: NewPatientService, private router:Router,
  ) {}

  get fullName(): AbstractControl {
    return this.registerPatientForm.controls['fullName'];
  }
  get kg(): AbstractControl {
    return this.registerPatientForm.controls['kg'];
  }
  get notes(): AbstractControl {
    return this.registerPatientForm.controls['notes'];
  }

  ngOnInit(): void {}
  registerSubmit(): void {
    const formValue = this.registerPatientForm.value;
    if (this.registerPatientForm.valid) {
      const payload: PatientRegister = {
            fullName: formValue.fullName,
            notes: formValue.notes,
            kg: formValue.kg,
      };
      this.newPatientService
        .registerPatient(payload)
        .subscribe((patientCreated) => {
          this.onReset();
        });
    }

    this.submitted = true;
  }

  get registerDataForm() {
    return this.registerPatientForm.controls;
  }

  onReset(): void {
    this.submitted = false;
    this.registerPatientForm.reset();
    this.goBack();
  }

  goBack():void{
    this.router.navigate(['/patients-all']);
  }
}

