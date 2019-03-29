import { TestBed } from '@angular/core/testing';

import { KprService } from './kpr.service';

describe('KprService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KprService = TestBed.get(KprService);
    expect(service).toBeTruthy();
  });
});
