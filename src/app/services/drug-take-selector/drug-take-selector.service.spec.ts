import { TestBed } from '@angular/core/testing';

import { DrugTakeSelectorService } from './drug-take-selector.service';

describe('DrugTakeSelectorService', () => {
  let service: DrugTakeSelectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DrugTakeSelectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
