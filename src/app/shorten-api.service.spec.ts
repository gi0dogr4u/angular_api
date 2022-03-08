import { TestBed } from '@angular/core/testing';

import { ShortenApiService } from './shorten-api.service';

describe('ShortenApiService', () => {
  let service: ShortenApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShortenApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
