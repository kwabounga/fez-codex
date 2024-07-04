import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
const LOCAL_STORAGE_KEY:string = 'fez_codex_state';
const GLYPH_DEFAULT_VALUE:number = -1;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  constructor(private localStorageService: LocalStorageService) {
    document.addEventListener('scroll', (event:any) => {
      this.scrollY = (window.scrollY);
    })
  }
  scrollY = 0;
  uiHidden:boolean = true;
  currentGlyph:number = GLYPH_DEFAULT_VALUE;
  glitchText:string = "fez\ncodex";
  currentTile:string = "00";
  currentMessage:number = 0;
  title = 'fez_codex';

  mapping: any = {
    "00":" ",
    "01":"?",
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
    "25":"?",
    "26":"?",
    "27":"?",
    "28":"?",
    "29":"?",
    "30":"?",
    "31":"?",
    "32":"?",
    "33":"?",
    "34":"?",
    "35":"?",
  }
  symbols = Object.keys(this.mapping);
  messages:any = [
    /* [
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
    ],
    [
      "02","07","02","01","00","03","02",
      "01","00","00","26","00","00","01",
      "01","07","02","01","00","03","01",
      "01","07","00","01","05","03","05",
      "01","00","02","01","05","03","08",
      "00","00","00","00","05","03","09",
      "00","07","02","01","05","03","00",
      "01","07","02","01","05","03","04",
      "00","07","02","00","05","03","05",
      "01","00","00","01","05","03","35",
      "01","07","02","01","05","05","05","16",
    ], */
  ];

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

  ngOnInit(){
    let save = this.retrieveFromLocalStorage();
    if(save){
      this.messages = save.messages
      this.mapping = save.mapping
      this.tiles  = this.copieMessage(0);
      this.uiHidden = save.uiHidden??true;
    }
  }
  razMessage(event:any){
    console.log('razMessage',event)
    this.tiles = new Array(78).fill('00');
  }
  copieMessage(_msgId:number){
    console.log('copieMessage')
    return Object.create(this.messages[_msgId]);
  }
  saveMessage(){
    console.log('saveMessage')
    this.messages.push(Object.create(this.tiles));
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

  saveToLocalStorage() {
    this.localStorageService.setItem(
      LOCAL_STORAGE_KEY,
      JSON.stringify({
        mapping:this.mapping,
        messages:this.messages,
        uiHidden:this.uiHidden
      }));
  }

  retrieveFromLocalStorage() {
    const value = this.localStorageService.getItem(LOCAL_STORAGE_KEY);
    return value ? JSON.parse(value) : null;
  }
  setDevice(device:any){
    console.log("device", device);
  }
}
