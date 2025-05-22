import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnticKeyboardComponent } from './antic-keyboard.component';

describe('AnticKeyboardComponent', () => {
  let component: AnticKeyboardComponent;
  let fixture: ComponentFixture<AnticKeyboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnticKeyboardComponent]
    });
    fixture = TestBed.createComponent(AnticKeyboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
