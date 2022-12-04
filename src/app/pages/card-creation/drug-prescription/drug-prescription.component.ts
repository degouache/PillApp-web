import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataCreationService } from 'src/app/services/data-creation/data-creation.service';

@Component({
  selector: 'app-drug-prescription',
  templateUrl: './drug-prescription.component.html',
  styleUrls: ['./drug-prescription.component.css']
})
export class DrugPrescriptionComponent implements OnInit {
  private patientId: number = 0;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private dataCreationService:DataCreationService) { }
  
  private paramSub!: Subscription;
  ngOnInit() {
    this.paramSub = this.activatedRoute.paramMap.subscribe(
      (params: ParamMap) => {
        let paramStr = params.get('id');
        if (paramStr != null) {
          this.patientId = Number.parseInt(paramStr)
        }
      }
    );
  }
  ngOnDestroy() {
    this.paramSub.unsubscribe();
  }

}
