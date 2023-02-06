import { TestBed } from '@angular/core/testing';

import { SchoolDataEntryService } from './school-data-entry.service';

describe('SchoolDataEntryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SchoolDataEntryService = TestBed.get(SchoolDataEntryService);
    expect(service).toBeTruthy();
  });
});
