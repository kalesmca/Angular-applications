import { TestBed } from '@angular/core/testing';

import { PesonalInfoService } from './pesonal-info.service';

describe('PesonalInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PesonalInfoService = TestBed.get(PesonalInfoService);
    expect(service).toBeTruthy();
  });
});
