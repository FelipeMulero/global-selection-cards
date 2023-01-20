import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentRescueComponent } from './investment-rescue.component';

describe('InvestmentRescueComponent', () => {
  let component: InvestmentRescueComponent;
  let fixture: ComponentFixture<InvestmentRescueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestmentRescueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestmentRescueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create investment rescue', () => {
    expect(component).toBeTruthy();
  });
});
