import { Component, Output,EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.less'],
  host:{class:"grid-container-alphabet tablet tablet-alt z-2  movable "},
})
export class KeyboardComponent {
  alphabet:any = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

    @Output() onSelect = new EventEmitter<any>();
    selectLetter(letter: string) {
      console.log('letter', letter)
      this.onSelect.emit(letter);
    }
}
