import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AspirationalDistComponent } from './aspirational-dist.component';

describe('AspirationalDistComponent', () => {
  let component: AspirationalDistComponent;
  let fixture: ComponentFixture<AspirationalDistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AspirationalDistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AspirationalDistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
