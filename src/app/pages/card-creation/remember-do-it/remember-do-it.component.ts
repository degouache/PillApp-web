import { DataCreationService } from './../../../services/data-creation/data-creation.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-remember-do-it',
  templateUrl: './remember-do-it.component.html',
  styleUrls: ['./remember-do-it.component.css']
})
export class RememberDoItComponent implements OnInit {

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
