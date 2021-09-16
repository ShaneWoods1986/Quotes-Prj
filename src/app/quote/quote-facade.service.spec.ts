import { TestBed } from '@angular/core/testing';

import { QuoteFacadeService } from './quote-facade.service';

describe('QuoteFacadeService', () => {
  let service: QuoteFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuoteFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
