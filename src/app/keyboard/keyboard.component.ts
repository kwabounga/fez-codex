import { Component } from '@angular/core';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.less'],
  host:{class:"grid-container-alphabet tablet tablet-alt z-1"},
})
export class KeyboardComponent {
  alphabet:any = [" ", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
}
