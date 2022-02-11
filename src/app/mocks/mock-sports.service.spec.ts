import { TestBed } from '@angular/core/testing';

import { MockSportsService } from './mock-sports.service';

describe('MockSportsService', () => {
  let service: MockSportsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockSportsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
