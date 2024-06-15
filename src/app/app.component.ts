import { Component, OnInit } from '@angular/core';

const GLYPH_DEFAULT_VALUE:number = -1;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  uiHidden:boolean = true;
  currentGlyph:number = GLYPH_DEFAULT_VALUE;
  glitchText:string = "codex";
  currentTile:string = "00";
  title = 'fez_codex';
  tiles:string[] = [
    "01","07","02","01","00","03","02",
    "01","00","00","26","00","00","01",
    "01","07","02","01","00","03","01",
    "01","07","00","01","05","03","05",
    "01","00","02","01","05","03","08",
    "00","00","00","00","05","03","09",
    "00","07","02","01","05","03","00",
    "01","07","02","01","05","03","04",
    "00","07","02","00","05","03","05",
    "01","00","00","01","05","03","35",
    "01","07","02","01","05","05","05","05",
  ];
  mapping: any = {
    "00":" ",
    "01":"a",
    "02":"?",
    "03":"?",
    "04":"?",
    "05":"?",
    "06":"?",
    "07":"?",
    "08":"?",
    "09":"?",
    "10":"?",
    "11":"?",
    "12":"?",
    "13":"?",
    "14":"?",
    "15":"?",
    "16":"?",
    "17":"?",
    "18":"?",
    "19":"?",
    "20":"?",
    "21":"?",
    "22":"?",
    "23":"?",
    "24":"?",
    "25":"0",
    "26":"1",
    "27":"2",
    "28":"3",
    "29":"4",
    "30":"5",
    "31":"6",
    "32":"7",
    "33":"8",
    "34":"9",
    "35":"10",
  }
  symbols = Object.keys(this.mapping);


  // ngOnInit(){
  //   new Array(36).forEach((id)=>{
  //     this.mapping[`${id}`.padStart(2,'0')] = '?'
  //   })
  // }
  razMessage(event:any){
    console.log('razMessage',event)
    this.tiles = new Array(78).fill('00');
  }

  // tablet & antic-keyboard part
  assignGlyph(glyphId: any) {
    console.log("glyphId ", glyphId)
    this.currentGlyph = glyphId
  }
  onSelectGlyphFromAnticKeyBoard(glyphID: any) {
    this.tiles[this.currentGlyph] = glyphID;
    this.currentGlyph = GLYPH_DEFAULT_VALUE;
  }
  // codex & keyboard part
  assignLetter(tileId: string) {
    console.log("tileId", tileId)
    this.currentTile = tileId
  }
  onSelectLetterFromKeyBoard(letter: any) {
    console.log("letter", letter);
    if(this.currentTile != "00"){
      this.mapping[this.currentTile] = letter;
    }
    this.currentTile = "00";
  }
  toggleUi(){
    this.uiHidden = !this.uiHidden;
  }
}
