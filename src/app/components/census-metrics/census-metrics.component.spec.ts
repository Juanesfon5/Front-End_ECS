import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CensusMetricsComponent } from './census-metrics.component';

describe('CensusMetricsComponent', () => {
  let component: CensusMetricsComponent;
  let fixture: ComponentFixture<CensusMetricsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CensusMetricsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CensusMetricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
