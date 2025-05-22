import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { TranslatorComponent } from './components/codex-elements/translator/translator.component';

const LOCAL_STORAGE_KEY:string = 'fez_codex_state';
const GLYPH_DEFAULT_VALUE:number = -1;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {

  currentMouseX = 0;
  currentMouseY = 0;
  scrollY = 0;
  uiHidden:boolean = true;
  currentGlyph:number = GLYPH_DEFAULT_VALUE;
  glitchText:string = "fez\ncodex";
  currentTile:string = "00";
  currentMessage:number = 0;
  title = 'fez_codex';
  consoleID:number = 0;
  allConsoles: string[] = ['ps4','xbox','switch'];

  constructor(private localStorageService: LocalStorageService) {
    document.addEventListener('scroll', (event:any) => {
      this.scrollY = (window.scrollY);
    })

    this.animationTics();
    let self = this;

    window.addEventListener('mousemove', function (e) {
      e.preventDefault();
      self.currentMouseX = e.pageX;
      self.currentMouseY = e.pageY;
    }, true);
  }

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
  messages:any = [ ];
  tiles:string[] = [ ];
  currentMessageObject:any = {}
  /*[

     "01","07","02","01","00","03",
     "02","01","00","00","26","00",
     "00","01","01","07","02","01",
     "00","03","01","01","07","00",
     "01","05","03","05","01","00",
     "02","01","05","03","08","00",
     "00","00","00","05","03","09",
     "00","07","02","01","05","03",
     "00","01","07","02","01","05",
     "03","04","00","07","02","00",
     "05","03","05","01","00","00",
     "01","05","03","35","01","07",
     "02","01","05","05","05","05",

    ];*/
  ngOnInit(){
    let save = this.retrieveFromLocalStorage();
    if(save){
      this.messages = save.messages
      this.mapping = save.mapping
      this.currentMessageObject  = this.getMessage(this.currentMessage);
      this.tiles  = this.currentMessageObject.tiles;
      this.uiHidden = save.uiHidden??true;
    }
  }

  razMessage(event:any){
    console.log('razMessage',event)
    this.tiles = Array(78).fill('00');
    this.currentMessageObject.message = "";
    this.currentMessageObject.tiles = this.tiles;
  }
  newMessage(event:any){
    this.currentMessage = this.messages.length;
    console.log('newMessage this.currentMessage', this.currentMessage)
    this.currentMessageObject  = this.getMessage(this.currentMessage);
    this.tiles  = this.currentMessageObject.tiles;
  }

  getMessage(_msgId:number){
    console.log('getMessage')
    if(this.messages[_msgId]){
      return this.messages[_msgId];
    } else{
      let msg = {tiles:Array(78).fill('00'), message:"" };
      this.messages.push(msg);
      return this.messages[_msgId];
    }
  }

  saveMessage(event:any){
    console.log('saveMessage(app)', event)
    this.currentMessageObject = event
    this.tiles  = this.currentMessageObject.tiles;
    this.messages[this.currentMessage] = this.currentMessageObject
    // this.messages.push(event);
  }

  setCurrentMessageId(msgId: any) {
    this.currentMessage = msgId;
    this.currentMessageObject  = this.getMessage(this.currentMessage);
    this.tiles  = this.currentMessageObject.tiles;
  }

  // tablet & antic-keyboard part

  assignGlyph(glyphId: any) {
    console.log("glyphId ", glyphId)
    this.currentGlyph = glyphId
  }
  // tablet & antic-keyboard part
  setTiles(event: any) {
    console.log("new tile set ", event)
    this.tiles = event;
  }

  onSelectGlyphFromAnticKeyBoard(glyphID: any) {
    if(this.tiles){
      this.tiles[this.currentGlyph] = glyphID;
      this.currentGlyph = GLYPH_DEFAULT_VALUE;
    }
    this.currentMessageObject.message = TranslatorComponent.translate(this.tiles, this.mapping).join('')
    // this.saveMessage({
    //   tiles: this.tiles,
    //   message: TranslatorComponent.translate(this.tiles)
    // })
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
    console.log(this.messages);
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

  setDevice(deviceID:number){
    console.log("device", this.allConsoles[deviceID]);
    this.consoleID = deviceID
  }

  animationTics(){
    const step = () => {
      // set mouse positions
      let r:any = document.querySelector(':root');
      r.style.setProperty('--mouse-x', this.currentMouseX+'px');
      r.style.setProperty('--mouse-y', this.currentMouseY+'px');
      //console.log("step");
      window.requestAnimationFrame(step);
    }
    step();
  }
}
