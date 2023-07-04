import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealMadridComponent } from './real-madrid.component';

describe('RealMadridComponent', () => {
  let component: RealMadridComponent;
  let fixture: ComponentFixture<RealMadridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealMadridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RealMadridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
