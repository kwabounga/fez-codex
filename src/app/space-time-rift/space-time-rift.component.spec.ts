import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceTimeRiftComponent } from './space-time-rift.component';

describe('SpaceTimeRiftComponent', () => {
  let component: SpaceTimeRiftComponent;
  let fixture: ComponentFixture<SpaceTimeRiftComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpaceTimeRiftComponent]
    });
    fixture = TestBed.createComponent(SpaceTimeRiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
