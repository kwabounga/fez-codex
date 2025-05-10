import { Component, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-wall-tabs',
  templateUrl: './wall-tabs.component.html',
  styleUrls: ['./wall-tabs.component.less']
})
export class WallTabsComponent {
  @Input() messages?:any = [];
  @Output() onSelectMessage = new EventEmitter<any>();
  click(id:any){
    console.log("message selected ", id);
    this.onSelectMessage.emit(id);
  }
}
