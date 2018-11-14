import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleSectionComponent } from './people-section.component';

describe('PeopleSectionComponent', () => {
  let component: PeopleSectionComponent;
  let fixture: ComponentFixture<PeopleSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeopleSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
