import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageNoteComponent } from './message-note.component';

describe('MessageNoteComponent', () => {
  let component: MessageNoteComponent;
  let fixture: ComponentFixture<MessageNoteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MessageNoteComponent]
    });
    fixture = TestBed.createComponent(MessageNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
