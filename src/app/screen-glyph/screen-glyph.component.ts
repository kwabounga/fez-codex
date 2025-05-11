import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-screen-glyph',
  templateUrl: './screen-glyph.component.html',
  styleUrls: ['./screen-glyph.component.less'],
  host:{class:"d-content"},
})
export class ScreenGlyphComponent {
  @Output() onSelectGlyph = new EventEmitter<any>();
  @Input() isHalfed: boolean = false
  @Input() tiles: string[] = [];
  @Input() mapping: any = [];
  selectGlyph($event:any){
    this.onSelectGlyph.emit($event);
  }
}
