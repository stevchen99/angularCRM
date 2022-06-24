import { TestBed } from '@angular/core/testing';

import { HistoServService } from './histo-serv.service';

describe('HistoServService', () => {
  let service: HistoServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistoServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
