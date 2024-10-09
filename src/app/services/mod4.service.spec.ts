import { TestBed } from '@angular/core/testing';

import { Mod4Service } from './mod4.service';

describe('Mod4Service', () => {
  let service: Mod4Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Mod4Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
