import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailstableComponent } from './detailstable.component';

describe('DetailstableComponent', () => {
  let component: DetailstableComponent;
  let fixture: ComponentFixture<DetailstableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailstableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailstableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
