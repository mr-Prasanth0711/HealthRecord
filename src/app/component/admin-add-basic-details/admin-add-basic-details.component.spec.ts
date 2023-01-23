import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddBasicDetailsComponent } from './admin-add-basic-details.component';

describe('AdminAddBasicDetailsComponent', () => {
  let component: AdminAddBasicDetailsComponent;
  let fixture: ComponentFixture<AdminAddBasicDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAddBasicDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAddBasicDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
