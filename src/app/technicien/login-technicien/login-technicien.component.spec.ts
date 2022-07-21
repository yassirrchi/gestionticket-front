import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginTechnicienComponent } from './login-technicien.component';

describe('LoginTechnicienComponent', () => {
  let component: LoginTechnicienComponent;
  let fixture: ComponentFixture<LoginTechnicienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginTechnicienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginTechnicienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
