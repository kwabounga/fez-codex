import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenGlyphComponent } from './screen-glyph.component';

describe('ScreenGlyphComponent', () => {
  let component: ScreenGlyphComponent;
  let fixture: ComponentFixture<ScreenGlyphComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScreenGlyphComponent]
    });
    fixture = TestBed.createComponent(ScreenGlyphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
