import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutonomusBodiesComponent } from './autonomus-bodies.component';

describe('AutonomusBodiesComponent', () => {
  let component: AutonomusBodiesComponent;
  let fixture: ComponentFixture<AutonomusBodiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutonomusBodiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutonomusBodiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
