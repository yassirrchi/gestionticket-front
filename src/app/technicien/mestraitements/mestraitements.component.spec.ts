import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MestraitementsComponent } from './mestraitements.component';

describe('MestraitementsComponent', () => {
  let component: MestraitementsComponent;
  let fixture: ComponentFixture<MestraitementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MestraitementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MestraitementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
