import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportPriceListComponent } from './report-price-list.component';

describe('ReportPriceListComponent', () => {
  let component: ReportPriceListComponent;
  let fixture: ComponentFixture<ReportPriceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportPriceListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportPriceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
