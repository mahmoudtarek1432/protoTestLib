import { TestBed } from '@angular/core/testing';

import { BroadcastEndpointService } from './broadcast-endpoint.service';

describe('BroadcastEndpointService', () => {
  let service: BroadcastEndpointService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BroadcastEndpointService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
