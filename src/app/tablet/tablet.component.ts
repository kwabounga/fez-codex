import { Component, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tablet',
  templateUrl: './tablet.component.html',
  styleUrls: ['./tablet.component.less'],
  host: {'class': 'grid-container tablet   rel'} //mt-5
})
export class TabletComponent {
  @Input() tiles?:string[];
  @Input() mapping?: any;
  @Output() onErase = new EventEmitter<any>();
  @Output() onSelect = new EventEmitter<any>();



  resetGlyph(event:any){
    this.onErase.emit('erase');
  }
  selectGlyph(tileId:any){
    this.onSelect.emit(tileId);
  }
}
