import { Component, Input, Output,EventEmitter, OnInit ,OnChanges} from '@angular/core';

/*
instructions to show spell codex:
  'spell codex  click in     order 1 bird 2 gomez 3    portal 4     spell stone';
*/
@Component({
  selector: 'app-tablet',
  templateUrl: './tablet.component.html',
  styleUrls: ['./tablet.component.less'],
  host: {'class': 'd-content'} //mt-5
})
export class TabletComponent {
  @Input() tiles:string[]=[];
  @Input() mapping: any;
  @Input() message: string = 'coucou';
  @Output() onErase = new EventEmitter<any>();
  @Output() onSelect = new EventEmitter<any>();
  @Output() onSet = new EventEmitter<any>();
  @Output() onNew = new EventEmitter<any>();
  selectedTileId:number = -1;
  ngOnChanges(){

  }

  messageChange(event:any){
    console.log(event);
    console.log(event.srcElement.value);
    this.message = event.srcElement.value;
    console.log();
    this.tiles =this.mappingToTiles(this.message)
    this.setMessage(this.message);
  }
  reverseMapping(letter:string){
    let glyph = "00";
    let keys = Object.keys(this.mapping);
    for (let g = 0; g < keys.length; g++) {
      const element = this.mapping[keys[g]];
      if(letter == element){
        glyph = keys[g]??"00";
        break
      }
    }
    return glyph
  }
  mappingToTiles(message:string){
    let total = this.tiles.length;
    let nbColumns = 6;
    let nbRows = total / nbColumns;
    let newTiles = Array(78).fill('00');
    for (let p = 0; p < total; p++) {
      const letter = message[p];
      let id = Math.floor(p/nbRows)
      let idTile = total - (nbRows + (id*nbRows)) + (p - (id*nbRows))
      newTiles[idTile] = this.reverseMapping(letter);
    }
    return newTiles
  }
  newMessage(event:any){
    this.onNew.emit('newMessage');
  }
  resetGlyph(event:any){
    this.onErase.emit('erase');
  }
  selectGlyph(tileId:any){
    this.selectedTileId = tileId
    let r:any = document.querySelector(':root');
    r.style.setProperty('--selected-tile-id', tileId);
    let tt:any = document.querySelectorAll(`app-tablet .grid-container.tablet app-tile .tile`);
    tt.forEach((t:any) => {
      t.classList.remove('selected')
    });
    let t:any = document.querySelector(`app-tablet .grid-container.tablet app-tile:nth-of-type(${tileId+1}) .tile`);
    t.classList.add('selected')
    this.onSelect.emit(tileId);
  }
  setMessage(event:any){
    console.log("setMessage", event);
    this.onSet.emit(this.mappingToTiles(event));
  }
}
