import { TestBed } from '@angular/core/testing';

import { OutsideService } from './outside.service';

describe('OutsideService', () => {
  let service: OutsideService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OutsideService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
