import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueOffersComponent } from './issue-offers.component';

describe('IssueOffersComponent', () => {
  let component: IssueOffersComponent;
  let fixture: ComponentFixture<IssueOffersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssueOffersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
