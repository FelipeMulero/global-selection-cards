import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRescueComponent } from './modal-rescue.component';

describe('ModalRescueComponent', () => {
  let component: ModalRescueComponent;
  let fixture: ComponentFixture<ModalRescueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalRescueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalRescueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create modal rescue', () => {
    expect(component).toBeTruthy();
  });
});
