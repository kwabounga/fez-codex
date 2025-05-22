import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsoleSwapperComponent } from './console-swapper.component';

describe('ConsoleSwapperComponent', () => {
  let component: ConsoleSwapperComponent;
  let fixture: ComponentFixture<ConsoleSwapperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsoleSwapperComponent]
    });
    fixture = TestBed.createComponent(ConsoleSwapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
