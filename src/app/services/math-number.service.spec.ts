/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MathServiceService } from './math-service.service';

describe('Service: MathService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MathServiceService]
    });
  });

  it('should ...', inject([MathServiceService], (service: MathServiceService) => {
    expect(service).toBeTruthy();
  }));
});
