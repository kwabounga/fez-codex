import { Component, EventEmitter, Input, Output, AfterViewInit, ElementRef } from '@angular/core';
import { Tooltip } from 'bootstrap';
import { TranslatorComponent } from '../translator/translator.component';
@Component({
  selector: 'app-screen-glyph',
  templateUrl: './screen-glyph.component.html',
  styleUrls: ['./screen-glyph.component.less'],
  host:{class:"d-content"},
})
export class ScreenGlyphComponent {
  @Output() onSelectGlyph = new EventEmitter<any>();
  @Input() isJustStone: boolean = false;
  @Input() isHalfed: boolean = false;
  @Input() tiles: string[] = [];
  @Input() mapping: any = [];
  tooltipElement: any;
  constructor(
    private elem: ElementRef
  ) { }
   ngAfterViewInit(){
    if(this.isJustStone) {
      setTimeout(()=>{
      let tooltipTrigger = this.elem.nativeElement.querySelector('[data-bs-toggle="tooltip"]')
      let t:string = tooltipTrigger.dataset.bsOriginalTitle;

      if(this.title.trim() !== ""){
        this.tooltipElement = new Tooltip(tooltipTrigger);
      }

    },200)
    }
  }

  selectGlyph($event:any){
    this.onSelectGlyph.emit($event);
  }
  get title () {
    return TranslatorComponent.translate(this.tiles, this.mapping).join('')
  }
}
