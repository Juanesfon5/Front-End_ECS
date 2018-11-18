import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSection4Component } from './form-section4.component';

describe('FormSection4Component', () => {
  let component: FormSection4Component;
  let fixture: ComponentFixture<FormSection4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormSection4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSection4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
