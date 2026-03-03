import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutLoginDefault } from './layout-login-default';

describe('LayoutLoginDefault', () => {
  let component: LayoutLoginDefault;
  let fixture: ComponentFixture<LayoutLoginDefault>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutLoginDefault],
    }).compileComponents();

    fixture = TestBed.createComponent(LayoutLoginDefault);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
