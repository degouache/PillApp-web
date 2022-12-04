/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DataCreationService } from './data-creation.service';

describe('Service: DataCreation', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataCreationService]
    });
  });

  it('should ...', inject([DataCreationService], (service: DataCreationService) => {
    expect(service).toBeTruthy();
  }));
});
