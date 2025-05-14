import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselVerticalComponent } from './carousel-vertical.component';

describe('CarouselVerticalComponent', () => {
  let component: CarouselVerticalComponent;
  let fixture: ComponentFixture<CarouselVerticalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarouselVerticalComponent]
    });
    fixture = TestBed.createComponent(CarouselVerticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
