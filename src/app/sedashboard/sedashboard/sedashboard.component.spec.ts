import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SedashboardComponent } from './sedashboard.component';

describe('SedashboardComponent', () => {
  let component: SedashboardComponent;
  let fixture: ComponentFixture<SedashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SedashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SedashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
