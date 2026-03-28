import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyWallet } from './money-wallet';

describe('MoneyWallet', () => {
  let component: MoneyWallet;
  let fixture: ComponentFixture<MoneyWallet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoneyWallet],
    }).compileComponents();

    fixture = TestBed.createComponent(MoneyWallet);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
