import { TestBed } from '@angular/core/testing';

import { AuthOnlineGuard } from './authonline.guard';

describe('AuthonlineGuard', () => {
  let guard: AuthOnlineGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthOnlineGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
