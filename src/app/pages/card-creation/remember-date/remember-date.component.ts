import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataCreationService } from 'src/app/services/data-creation/data-creation.service';
import { MeetingData } from 'src/app/shared/models/data-creation.interface';

@Component({
  selector: 'app-remember-date',
  templateUrl: './remember-date.component.html',
  styleUrls: ['./remember-date.component.css'],
})
export class RememberDateComponent implements OnInit {
  private patientId: number = 0;

  submitted = false;
  registerRememberDateForm = new FormGroup({
    title: new FormControl('', Validators.required),
    date: new FormControl(this.currentDate(), Validators.required),
    time: new FormControl(this.currentTime(), Validators.required),
    dateReminder: new FormControl(this.currentDate(), []),
    timeReminder: new FormControl(this.currentTime(), []),
  });

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private dataCreationService: DataCreationService
  ) {}

  get title(): AbstractControl {
    return this.registerRememberDateForm.controls['title'];
  }
  get date(): AbstractControl {
    return this.registerRememberDateForm.controls['date'];
  }
  get time(): AbstractControl {
    return this.registerRememberDateForm.controls['time'];
  }
  get dateReminder(): AbstractControl {
    return this.registerRememberDateForm.controls['dateReminder'];
  }
  get timeReminder(): AbstractControl {
    return this.registerRememberDateForm.controls['timeReminder'];
  }

  private paramSub!: Subscription;
  ngOnInit() {
    this.paramSub = this.activatedRoute.paramMap.subscribe(
      (params: ParamMap) => {
        let paramStr = params.get('id');
        if (paramStr != null) {
          this.patientId = Number.parseInt(paramStr);
        }
      }
    );
  }

  ngOnDestroy() {
    this.paramSub.unsubscribe();
  }

  registerSubmit(): void {
    const formValue = this.registerRememberDateForm.value;
    if (this.registerRememberDateForm.valid) {
      const payload: MeetingData = {
        patientId: this.patientId,
        description: formValue.title,
        appointmentTimestamp: this.createTimestamp(
          formValue.date,
          formValue.time
        ),
        reminderTimestamp: this.createTimestamp(
          formValue.dateReminder,
          formValue.timeReminder
        ),
      };
      this.dataCreationService
      .registerMeeting(payload)
      .subscribe((meetingCreated) => {
        this.onReset();
      })
    }
  }

  createTimestamp(date: string, time: string): number {
    var someDate = new Date (date+"T"+ time);
    return someDate.getTime() / 1000;
  }

  currentDate() {
    return new Date().toISOString().split('T')[0];
  }

  currentTime() {
    return new Date().toLocaleString('es-ES', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    })
  }

  onReset(): void {
    this.submitted = false;
    this.registerRememberDateForm.reset();
    this.goBack();
  }

  goBack():void{
    this.router.navigate(['/patient/'+ this.patientId]);
  }
}
