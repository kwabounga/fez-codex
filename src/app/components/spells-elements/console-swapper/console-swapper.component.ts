import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-console-swapper',
  templateUrl: './console-swapper.component.html',
  styleUrls: ['./console-swapper.component.less']
})
export class ConsoleSwapperComponent {
  @Output() swapperChanged = new EventEmitter<any>();
  @Input() choices:string[] = ['ps4','xbox','switch'];
  @Input() consoleID:number = 0;
  lastSelectedConsole:string = this.choices[this.consoleID];
  selectedConsole:string = this.choices[this.consoleID];

  selectDevice(deviceID:number) {
    this.consoleID = deviceID;
    console.log(`selected console: ${this.choices[deviceID]}`);
    this.lastSelectedConsole = this.selectedConsole;
    this.selectedConsole = this.choices[deviceID];
    this.swapperChanged.emit(this.consoleID);
  }

}
