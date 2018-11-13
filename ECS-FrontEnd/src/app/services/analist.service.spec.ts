import { TestBed } from '@angular/core/testing';

import { AnalistService } from './analist.service';

describe('AnalistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AnalistService = TestBed.get(AnalistService);
    expect(service).toBeTruthy();
  });
});
