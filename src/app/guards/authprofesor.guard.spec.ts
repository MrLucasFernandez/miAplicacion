import { TestBed } from '@angular/core/testing';

import { AuthprofesorGuard } from './authprofesor.guard';

describe('AuthprofesorGuard', () => {
  let guard: AuthprofesorGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthprofesorGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
