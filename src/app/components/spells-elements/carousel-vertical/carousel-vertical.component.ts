import { Component, AfterViewInit, Input, ElementRef } from '@angular/core';
// import { Carousel } from 'bootstrap';
@Component({
  selector: 'app-carousel-vertical',
  templateUrl: './carousel-vertical.component.html',
  styleUrls: ['./carousel-vertical.component.less'],
  host: {class: "d-contents"},
})
export class CarouselVerticalComponent {
  currentPosition:number = 0;

  @Input() isGlyphs:boolean = true;
  @Input() allGlyphs:string[] = [];
  @Input() consoleID:number = 0;
  constructor(
    private elem: ElementRef
  ) { }
  carouselElement!: any;
  ngAfterViewInit() {

    // let carouselTrigger = this.elem.nativeElement.querySelector('[data-ride="carousel"]')
    // this.carouselElement = new Carousel('#carouselExampleSlidesOnly', {pause:false, ride:'carousel'});
    // console.log("carouselElement", this.carouselElement);
  }
  next(event:Event) {
    console.log((event?.target as Element).getAttributeNames());

    if(this.currentPosition < this.allGlyphs.length) {
      this.currentPosition++;
    }

  }
  preview(event:Event) {
    console.log((event?.target as Element).getAttributeNames());

    if(this.currentPosition > 0) {
      this.currentPosition--;
    }
  }
}
