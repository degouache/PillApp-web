import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { NewPatientService } from 'src/app/services/new-patient/new-patient.service';

@Component({
  selector: 'app-patients-creation',
  templateUrl: './patients-creation.component.html',
  styleUrls: ['./patients-creation.component.css'],
})
export class PatientsCreationComponent implements OnInit {

  submitted = false;
  registerForm = new FormGroup({
    fullName: new FormControl('', [Validators.required]),
    weight: new FormControl('', []),
    notes: new FormControl('', []),
  });

  constructor(
    private newPatientService: NewPatientService,
    private formBuilder: FormBuilder
  ) {}

  get fullName(): AbstractControl {
    return this.registerForm.controls['fullName'];
  }
  get weight(): AbstractControl {
    return this.registerForm.controls['weight'];
  }
  get notes(): AbstractControl {
    return this.registerForm.controls['notes'];
  }

  ngOnInit(): void {}
}

// registerSubmit(): void {}
// get registerDataForm() {}
// onReset(): void {}