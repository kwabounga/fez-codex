import { Component, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tablet',
  templateUrl: './tablet.component.html',
  styleUrls: ['./tablet.component.less'],
  host: {'class': 'grid-container tablet  mt-5 rel'}
})
export class TabletComponent {
  @Input() tiles?:string[];
  @Input() mapping?: any;
  @Output() onErase = new EventEmitter<any>();



  dispatchClick(event:any){
    // console.log('dispatchClick')
    this.onErase.emit('erase');
  }
}
