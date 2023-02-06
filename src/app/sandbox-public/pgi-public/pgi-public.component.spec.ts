import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PgiPublicComponent } from './pgi-public.component';

describe('PgiPublicComponent', () => {
  let component: PgiPublicComponent;
  let fixture: ComponentFixture<PgiPublicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PgiPublicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PgiPublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
