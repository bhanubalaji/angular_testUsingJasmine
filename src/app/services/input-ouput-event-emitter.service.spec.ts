import { TestBed } from '@angular/core/testing';

import { InputOuputEventEmitterService } from './input-ouput-event-emitter.service';

describe('InputOuputEventEmitterService', () => {
  let service: InputOuputEventEmitterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InputOuputEventEmitterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
