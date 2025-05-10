import { Component, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-antic-keyboard',
  templateUrl: './antic-keyboard.component.html',
  styleUrls: ['./antic-keyboard.component.less'],
  host: {class:"grid-container-antic antic-keyboard tablet tablet-alt z-2 movable"}
})
export class AnticKeyboardComponent {
onclick(event:any) {
  console.log(event);
}
  @Input() charas:string[] = [ "00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24",'25','26','27','28','29','30','31','32','33','34','35']
  @Input() mapping?: any;
  @Input() title?: string = 'Antic kbd';

  @Output() onSelect = new EventEmitter<any>();

  selectGlyph(tileId: any) {
    console.log('antic glyph', tileId)
    this.onSelect.emit(tileId);
  }
}
