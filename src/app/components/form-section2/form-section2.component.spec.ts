import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSection2Component } from './form-section2.component';

describe('FormSection2Component', () => {
  let component: FormSection2Component;
  let fixture: ComponentFixture<FormSection2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormSection2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSection2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
