import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSection3Component } from './form-section3.component';

describe('FormSection3Component', () => {
  let component: FormSection3Component;
  let fixture: ComponentFixture<FormSection3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormSection3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSection3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
