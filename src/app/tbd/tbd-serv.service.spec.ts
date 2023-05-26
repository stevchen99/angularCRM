import { TestBed } from '@angular/core/testing';

import { TbdServService } from './tbd-serv.service';

describe('TbdServService', () => {
  let service: TbdServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TbdServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
