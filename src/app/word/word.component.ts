import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.less'],
  host:{class:"word"},
})
export class WordComponent {
@Input() word?:string;
get letters(){
  return this.word?.split('').map(letter => letter.toLowerCase());
}
}
