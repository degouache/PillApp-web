import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataCreationService } from 'src/app/services/data-creation/data-creation.service';

@Component({
  selector: 'app-vital-lecture',
  templateUrl: './vital-lecture.component.html',
  styleUrls: ['./vital-lecture.component.css']
})
export class VitalLectureComponent implements OnInit {

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
