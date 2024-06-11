import { Component,AfterViewInit, Input, ElementRef } from '@angular/core';
import { Tooltip } from 'bootstrap';

@Component({
  selector: 'app-letter',
  templateUrl: './letter.component.html',
  styleUrls: ['./letter.component.less'],
  host: {'class': 'd-contents'}
})
export class LetterComponent {
  tooltipElement!:any;
  assetsMapping:any = {
    " ":"./assets/Tiles/tile 00.png",
    "a":"./assets/Letters/letter 1.png",
    "b":"./assets/Letters/letter 2.png",
    "c":"./assets/Letters/letter 3.png",
    "d":"./assets/Letters/letter 4.png",
    "e":"./assets/Letters/letter 5.png",
    "f":"./assets/Letters/letter 6.png",
    "g":"./assets/Letters/letter 7.png",
    "h":"./assets/Letters/letter 8.png",
    "i":"./assets/Letters/letter 9.png",
    "j":"./assets/Letters/letter 10.png",
    "k":"./assets/Letters/letter 11.png",
    "l":"./assets/Letters/letter 12.png",
    "m":"./assets/Letters/letter 13.png",
    "n":"./assets/Letters/letter 14.png",
    "o":"./assets/Letters/letter 15.png",
    "p":"./assets/Letters/letter 16.png",
    "q":"./assets/Letters/letter 17.png",
    "r":"./assets/Letters/letter 18.png",
    "s":"./assets/Letters/letter 19.png",
    "t":"./assets/Letters/letter 20.png",
    "u":"./assets/Letters/letter 21.png",
    "v":"./assets/Letters/letter 22.png",
    "w":"./assets/Letters/letter 23.png",
    "x":"./assets/Letters/letter 24.png",
    "y":"./assets/Letters/letter 25.png",
    "z":"./assets/Letters/letter 26.png",
    "?":"./assets/Letters/letter unknown.png",

    "0":"./assets/Letters/number 0.png",
    "1":"./assets/Letters/number 1.png",
    "2":"./assets/Letters/number 2.png",
    "3":"./assets/Letters/number 3.png",
    "4":"./assets/Letters/number 4.png",
    "5":"./assets/Letters/number 5.png",
    "6":"./assets/Letters/number 6.png",
    "7":"./assets/Letters/number 7.png",
    "8":"./assets/Letters/number 8.png",
    "9":"./assets/Letters/number 9.png",
    "10":"./assets/Letters/number 10.png",
  }
  @Input() letter: string='?';
  constructor(
    private elem: ElementRef
    ) { }
  ngAfterViewInit(){
    setTimeout(()=>{
      let tooltipTrigger = this.elem.nativeElement.querySelector('[data-bs-toggle="tooltip"]')
      this.tooltipElement = new Tooltip(tooltipTrigger);
    },200)

  }
  async hoverTile(){
    // console.log('hover')
  }
  leaveTile(){
    // console.log('leave')
  }

  get unknown ():boolean {
    return (this.letter == '?');
  }
  get title ():string {
    return (this.unknown?'?':(this.letter!=" "?this.letter:"space"));
  }
}
