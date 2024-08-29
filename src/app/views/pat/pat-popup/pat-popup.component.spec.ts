import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatPopupComponent } from './pat-popup.component';

describe('PatPopupComponent', () => {
  let component: PatPopupComponent;
  let fixture: ComponentFixture<PatPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PatPopupComponent]
    });
    fixture = TestBed.createComponent(PatPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
