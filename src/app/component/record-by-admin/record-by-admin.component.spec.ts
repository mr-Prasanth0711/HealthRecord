import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordByAdminComponent } from './record-by-admin.component';

describe('RecordByAdminComponent', () => {
  let component: RecordByAdminComponent;
  let fixture: ComponentFixture<RecordByAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecordByAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecordByAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
