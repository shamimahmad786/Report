import { TestBed } from '@angular/core/testing';

import { ReportAnalyticalService } from './report-analytical.service';

describe('ReportAnalyticalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReportAnalyticalService = TestBed.get(ReportAnalyticalService);
    expect(service).toBeTruthy();
  });
});
