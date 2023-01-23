import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddDetailComponent } from './admin-add-detail.component';

describe('AdminAddDetailComponent', () => {
  let component: AdminAddDetailComponent;
  let fixture: ComponentFixture<AdminAddDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAddDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAddDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
