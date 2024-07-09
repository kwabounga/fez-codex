import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HypercubeComponent } from './hypercube.component';

describe('HypercubeComponent', () => {
  let component: HypercubeComponent;
  let fixture: ComponentFixture<HypercubeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HypercubeComponent]
    });
    fixture = TestBed.createComponent(HypercubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
