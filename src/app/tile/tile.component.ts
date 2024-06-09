import { Component,AfterViewInit, Input, ElementRef } from '@angular/core';
import { Tooltip } from 'bootstrap';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.less'],
  host: {'class': 'd-contents'}
})
export class TileComponent {
  assetsMapping:any = {
    "00":"/assets/Tiles/tile 00.png",
    "01":"/assets/Tiles/tile 1.png",
    "02":"/assets/Tiles/tile 2.png",
    "03":"/assets/Tiles/tile 3.png",
    "04":"/assets/Tiles/tile 4.png",
    "05":"/assets/Tiles/tile 5.png",
    "06":"/assets/Tiles/tile 6.png",
    "07":"/assets/Tiles/tile 7.png",
    "08":"/assets/Tiles/tile 8.png",
    "09":"/assets/Tiles/tile 9.png",
    "10":"/assets/Tiles/tile 10.png",
    "11":"/assets/Tiles/tile 11.png",
    "12":"/assets/Tiles/tile 12.png",
    "13":"/assets/Tiles/tile 13.png",
    "14":"/assets/Tiles/tile 14.png",
    "15":"/assets/Tiles/tile 15.png",
    "16":"/assets/Tiles/tile 16.png",
    "17":"/assets/Tiles/tile 17.png",
    "18":"/assets/Tiles/tile 18.png",
    "19":"/assets/Tiles/tile 19.png",
    "20":"/assets/Tiles/tile 20.png",
    "21":"/assets/Tiles/tile 21.png",
    "22":"/assets/Tiles/tile 22.png",
    "23":"/assets/Tiles/tile 23.png",
    "24":"/assets/Tiles/tile 24.png"
  }
  @Input() asset?: string;
  @Input() letter?: string;
  tooltipElement!:any;

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
    console.log('hover')
  }
  leaveTile(){
    console.log('leave')
  }
}
