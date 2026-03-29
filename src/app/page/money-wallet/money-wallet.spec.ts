import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivatedRoute } from '@angular/router';
import { MoneyWallet } from './money-wallet';
import { provideRouter } from '@angular/router';

describe('MoneyWallet', () => {
  let component: MoneyWallet;
  let fixture: ComponentFixture<MoneyWallet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoneyWallet],
      providers: [
        provideRouter([])
      ]
      
    }).compileComponents();

    fixture = TestBed.createComponent(MoneyWallet);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
