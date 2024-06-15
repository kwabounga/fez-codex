import { Component, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-codex',
  templateUrl: './codex.component.html',
  styleUrls: ['./codex.component.less'],
  host: {class: "grid-container-codex  tablet tablet-alt z-1 movable"},
})
export class CodexComponent {

  @Input() tiles?: string[];
  @Input() currentTile?: string;
  @Input() mapping?: any;
  @Output() onSelect = new EventEmitter<any>();
  get tilesCanChange() {
    return this.tiles?.filter((letter)=>{
      return letter != "00";
    })
  }

  selectLetter(tileId: string) {
    this.onSelect.emit(tileId);
  }
}
