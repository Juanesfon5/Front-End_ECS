import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginAnalistComponent } from './login-analist.component';

describe('LoginAnalistComponent', () => {
  let component: LoginAnalistComponent;
  let fixture: ComponentFixture<LoginAnalistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginAnalistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginAnalistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
