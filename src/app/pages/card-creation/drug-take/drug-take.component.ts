import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import {BehaviorSubject, Subscription} from 'rxjs';
import { DataCreationService } from 'src/app/services/data-creation/data-creation.service';
import {DrugTakeSelectorService} from "../../../services/drug-take-selector/drug-take-selector.service";
import {DataObject} from "../../../shared/models/patient.interface";
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {DrugActionData} from "../../../shared/models/data-creation.interface";

@Component({
  selector: 'app-drug-take',
  templateUrl: './drug-take.component.html',
  styleUrls: ['./drug-take.component.css']
})
export class DrugTakeComponent implements OnInit {
  public patientId: number = 0;

  public itemsDrug: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  private valuesDrug: DataObject[] = [];

  submitted = false;
  registerDrugActionForm = new FormGroup({
    drug: new FormControl('', Validators.required),
    dose: new FormControl('', Validators.required),
    date: new FormControl(this.currentDate(), Validators.required),
    time: new FormControl(this.currentTime(), Validators.required)
  });

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private dataCreationService:DataCreationService,
    private drugListService:DrugTakeSelectorService
  ) { }

  get drug(): AbstractControl {
    return this.registerDrugActionForm.controls['drug'];
  }
  get dose(): AbstractControl {
    return this.registerDrugActionForm.controls['dose'];
  }
  get date(): AbstractControl {
    return this.registerDrugActionForm.controls['date'];
  }
  get time(): AbstractControl {
    return this.registerDrugActionForm.controls['time'];
  }

  private paramSub!: Subscription;
  ngOnInit() {
    this.paramSub = this.activatedRoute.paramMap.subscribe(
      (params: ParamMap) => {
        let paramStr = params.get('id');
        if (paramStr != null) {
          this.patientId = Number.parseInt(paramStr);
          this.loadDrugList();
        }
      }
    );
  }

  ngOnDestroy() {
    this.paramSub.unsubscribe();
  }

  registerSubmit(): void {
    const formValue = this.registerDrugActionForm.value;
    if (this.registerDrugActionForm.valid) {
      const payload: DrugActionData = {
        drugId: formValue.drug,
        dose: formValue.dose,
        doneTimestamp: this.createTimestamp(formValue.date, formValue.time),
      }
      this.dataCreationService
        .registerDrugAction(payload)
        .subscribe((created) => {
          this.onReset();
        })
    }
  }

  private loadDrugList() {
    this.drugListService.getUserData().subscribe( (patientData) => {
      for (const update of patientData.updates) {
        if (update.type == 'drug' && update.data.patientId == this.patientId) {
          this.valuesDrug.push(update.data);
          this.itemsDrug.next(this.valuesDrug);
        }
      }
    });
  }

  onDrugSelected() {
    let selectedId = this.registerDrugActionForm.controls['drug'].value;
    for (let drugPlan of this.valuesDrug) {
      if (drugPlan.id == selectedId) {
        this.registerDrugActionForm.controls['drug'].setValue(drugPlan.id);
        this.registerDrugActionForm.controls['dose'].setValue(drugPlan.dosePerIntake);
      }
    }
  }

  createTimestamp(date: string, time: string): number {
    return new Date(date + "T" + time).getTime() / 1000;
  }

  currentDate() { // return current date in format "yyyy-mm-dd"
    return new Date().toISOString().split('T')[0];
  }

  currentTime() {  // returns current time in format HH:MM
    return new Date().toLocaleString('es-ES', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    })
  }

  onReset(): void {
    this.submitted = false;
    this.registerDrugActionForm.reset();
    this.goBack();
  }

  goBack():void{
    this.router.navigate(['/patient/'+ this.patientId]);
  }
}
