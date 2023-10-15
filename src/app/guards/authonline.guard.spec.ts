import { TestBed } from '@angular/core/testing';

import { AuthonlineGuard } from './authonline.guard';

describe('AuthonlineGuard', () => {
  let guard: AuthonlineGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthonlineGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
