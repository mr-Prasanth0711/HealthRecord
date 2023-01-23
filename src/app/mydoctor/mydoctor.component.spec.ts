import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MydoctorComponent } from './mydoctor.component';

describe('MydoctorComponent', () => {
  let component: MydoctorComponent;
  let fixture: ComponentFixture<MydoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MydoctorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MydoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
