import { TestBed } from '@angular/core/testing';

import { TechServiceService } from './tech-service.service';

describe('TechServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TechServiceService = TestBed.get(TechServiceService);
    expect(service).toBeTruthy();
  });
});
