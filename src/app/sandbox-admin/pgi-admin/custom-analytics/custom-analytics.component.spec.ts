import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomAnalyticsComponent } from './custom-analytics.component';

describe('CustomAnalyticsComponent', () => {
  let component: CustomAnalyticsComponent;
  let fixture: ComponentFixture<CustomAnalyticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomAnalyticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
