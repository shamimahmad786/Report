import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PgiApproverComponent } from './pgi-approver.component';

describe('PgiApproverComponent', () => {
  let component: PgiApproverComponent;
  let fixture: ComponentFixture<PgiApproverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PgiApproverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PgiApproverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
