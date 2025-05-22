import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WallTabsComponent } from './wall-tabs.component';

describe('WallTabsComponent', () => {
  let component: WallTabsComponent;
  let fixture: ComponentFixture<WallTabsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WallTabsComponent]
    });
    fixture = TestBed.createComponent(WallTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
