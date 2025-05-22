import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-translator',
  templateUrl: './translator.component.html',
  styleUrls: ['./translator.component.less'],
  host: {class:"d-contents"}
})
export class TranslatorComponent {
  @Output() onSave = new EventEmitter<any>();
  @Input() tiles: string[] = [];
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
  get translation() {
    let reordered = TranslatorComponent.translate(this.tiles, this.mapping);
    // let reordered = [];
    // let total = this.tiles?.length ?? 78;
    // let nbColumns = 6;
    // let nbRows = total / nbColumns
    // let indice = total;
    // if(this.tiles){
    //   for (let i = 0; i < nbColumns; i++) {
    //     indice = total - (nbRows * (i+1))
    //     for (let t = indice; t < (indice + nbRows); t++) {
    //       reordered.push(this.tiles[t]);

    //     }

    //   }
    // }

    return reordered
  }
  saveMessage(event:any) {
    let msg = this.translation
    console.log(msg.join(''))
    this.onSave.emit({
      message: msg.join(''),
      tiles: this.tiles
    });
  }
  static translate (tiles:any,mapping:any) {
    let reordered = [];
    let total = tiles?.length ?? 78;
    let nbColumns = 6;
    let nbRows = total / nbColumns
    let indice = total;
    if(tiles){
      for (let i = 0; i < nbColumns; i++) {
        indice = total - (nbRows * (i+1))
        for (let t = indice; t < (indice + nbRows); t++) {
          reordered.push(tiles[t]);

        }

      }
    }

    return reordered.map((letter)=>{return mapping[letter]})
  }
}
