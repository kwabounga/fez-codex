import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpellMappingSelectorComponent } from './spell-mapping-selector.component';

describe('SpellMappingSelectorComponent', () => {
  let component: SpellMappingSelectorComponent;
  let fixture: ComponentFixture<SpellMappingSelectorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpellMappingSelectorComponent]
    });
    fixture = TestBed.createComponent(SpellMappingSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
