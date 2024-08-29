import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpPopupComponent } from './emp-popup.component';

describe('EmpPopupComponent', () => {
  let component: EmpPopupComponent;
  let fixture: ComponentFixture<EmpPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpPopupComponent]
    });
    fixture = TestBed.createComponent(EmpPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
