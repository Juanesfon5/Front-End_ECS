import { TestBed, async, inject } from '@angular/core/testing';

import { AuthCollectorGuard } from './auth-collector.guard';

describe('AuthCollectorGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthCollectorGuard]
    });
  });

  it('should ...', inject([AuthCollectorGuard], (guard: AuthCollectorGuard) => {
    expect(guard).toBeTruthy();
  }));
});
