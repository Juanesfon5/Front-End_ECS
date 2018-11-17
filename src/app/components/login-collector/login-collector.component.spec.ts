import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginCollectorComponent } from './login-collector.component';

describe('LoginCollectorComponent', () => {
  let component: LoginCollectorComponent;
  let fixture: ComponentFixture<LoginCollectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginCollectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginCollectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
