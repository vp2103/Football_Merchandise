import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManUnitedComponent } from './man-united.component';

describe('ManUnitedComponent', () => {
  let component: ManUnitedComponent;
  let fixture: ComponentFixture<ManUnitedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManUnitedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManUnitedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
