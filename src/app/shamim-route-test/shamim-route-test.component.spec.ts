import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShamimRouteTestComponent } from './shamim-route-test.component';

describe('ShamimRouteTestComponent', () => {
  let component: ShamimRouteTestComponent;
  let fixture: ComponentFixture<ShamimRouteTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShamimRouteTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShamimRouteTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
