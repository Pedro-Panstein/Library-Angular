import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddBookComponent } from './modal-add-book.component';

describe('ModalAddBookComponent', () => {
  let component: ModalAddBookComponent;
  let fixture: ComponentFixture<ModalAddBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalAddBookComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalAddBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
