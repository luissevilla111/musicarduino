import { TestBed } from '@angular/core/testing';

import { HttpnotesService } from './httpnotes.service';

describe('HttpnotesService', () => {
  let service: HttpnotesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpnotesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
