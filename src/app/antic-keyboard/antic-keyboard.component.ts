import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-antic-keyboard',
  templateUrl: './antic-keyboard.component.html',
  styleUrls: ['./antic-keyboard.component.less'],
  host: {class:"grid-container-antic antic-keyboard tablet tablet-alt z-1"}
})
export class AnticKeyboardComponent {
  charas:string[] = [ "00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24"]
  @Input() mapping?: any;
}
