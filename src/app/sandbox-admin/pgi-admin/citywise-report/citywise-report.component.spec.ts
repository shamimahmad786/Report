import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitywiseReportComponent } from './citywise-report.component';

describe('CitywiseReportComponent', () => {
  let component: CitywiseReportComponent;
  let fixture: ComponentFixture<CitywiseReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitywiseReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitywiseReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
