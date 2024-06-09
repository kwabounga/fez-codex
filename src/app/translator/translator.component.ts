import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-translator',
  templateUrl: './translator.component.html',
  styleUrls: ['./translator.component.less'],
  host: {class:"d-contents"}
})
export class TranslatorComponent {
  @Input() tiles?: string[];
  @Input() mapping: any = {
    "00":" ",
    "01":"e",
    "02":"n",
    "03":"a",
    "04":"r",
    "05":"t",
    "06":"y",
    "07":"u",
    "08":"i",
    "09":"o",
    "10":"p",
    "11":"q",
    "12":"s",
    "13":"d",
    "14":"f",
    "15":"g",
    "16":"h",
    "17":"j",
    "18":"k",
    "19":"l",
    "20":"m",
    "21":"w",
    "22":"c",
    "23":"v",
    "24":"b"
  }
  get message() {
    return this.tiles?.map((letter)=>{return this.mapping[letter]})
  }

}
