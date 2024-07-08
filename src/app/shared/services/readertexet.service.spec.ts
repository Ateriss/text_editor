import { TestBed } from '@angular/core/testing';

import { ReadertexetService } from './readertexet.service';

describe('ReadertexetService', () => {
  let service: ReadertexetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReadertexetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
