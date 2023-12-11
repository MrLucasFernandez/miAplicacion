import { TestBed } from '@angular/core/testing';

import { AuthProfesorGuard } from './authprofesor.guard';

describe('AuthprofesorGuard', () => {
  let guard: AuthProfesorGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthProfesorGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
