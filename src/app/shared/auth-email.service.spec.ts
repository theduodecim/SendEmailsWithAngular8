import { TestBed } from '@angular/core/testing';

import { AuthEmailService } from './auth-email.service';

describe('AuthEmailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthEmailService = TestBed.get(AuthEmailService);
    expect(service).toBeTruthy();
  });
});
