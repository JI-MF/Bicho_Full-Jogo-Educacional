import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Start } from './start';
import { LayoutLoginDefault } from '../../components/layout-login-default/layout-login-default';
import { Login } from '../login/login';

describe('Start', () => {
  let component: Start;
  let fixture: ComponentFixture<Start>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Start,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(Start);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
