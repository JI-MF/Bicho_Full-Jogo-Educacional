import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginServices } from './login-services';

describe('LoginServices', () => {
  let component: LoginServices;
  let fixture: ComponentFixture<LoginServices>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginServices],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginServices);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
