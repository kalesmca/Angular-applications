import { TestBed } from '@angular/core/testing';

import { CreateDonorService } from './create-donor.service';

describe('CreateDonorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreateDonorService = TestBed.get(CreateDonorService);
    expect(service).toBeTruthy();
  });
});
