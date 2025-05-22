import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControllerButtonMappingComponent } from './controller-button-mapping.component';

describe('ControllerButtonMappingComponent', () => {
  let component: ControllerButtonMappingComponent;
  let fixture: ComponentFixture<ControllerButtonMappingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ControllerButtonMappingComponent]
    });
    fixture = TestBed.createComponent(ControllerButtonMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
