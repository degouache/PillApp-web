import { TestBed } from '@angular/core/testing';

import { PatientDetailCardService } from './patient-detail-card.service';

describe('PatientDetailCardService', () => {
  let service: PatientDetailCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatientDetailCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
