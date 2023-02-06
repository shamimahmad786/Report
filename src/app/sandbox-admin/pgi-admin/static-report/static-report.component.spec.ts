import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticReportComponent } from './static-report.component';

describe('StaticReportComponent', () => {
  let component: StaticReportComponent;
  let fixture: ComponentFixture<StaticReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaticReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
