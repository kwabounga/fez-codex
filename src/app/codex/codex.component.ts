import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-codex',
  templateUrl: './codex.component.html',
  styleUrls: ['./codex.component.less'],
  host: {class: "grid-container-codex  tablet tablet-alt z-1"},
})
export class CodexComponent {
  @Input() tiles?: string[];
  @Input() mapping?: any;
  get tilesCanChange() {
    return this.tiles?.filter((letter)=>{
      return letter != "00";
    })
  }
}
