import { TestBed, async, inject } from '@angular/core/testing';

import { AuthAnalistGuard } from './auth-analist.guard';

describe('AuthAnalistGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthAnalistGuard]
    });
  });

  it('should ...', inject([AuthAnalistGuard], (guard: AuthAnalistGuard) => {
    expect(guard).toBeTruthy();
  }));
});
