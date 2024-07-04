import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-console-swapper',
  templateUrl: './console-swapper.component.html',
  styleUrls: ['./console-swapper.component.less']
})
export class ConsoleSwapperComponent {
  @Output() swapperChanged = new EventEmitter<any>();
  @Input() choices:string[] = [];
  lastSelectedConsole:string = "ps4"
  selectedConsole:string = "ps4"
  selectDevice(device:string) {
    console.log(`selected console: ${device}`);
    this.lastSelectedConsole = this.selectedConsole;
    this.selectedConsole = device;
    this.swapperChanged.emit(this.selectedConsole);
  }

}
