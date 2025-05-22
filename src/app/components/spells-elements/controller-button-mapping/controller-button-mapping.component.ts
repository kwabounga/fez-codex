import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-controller-button-mapping',
  templateUrl: './controller-button-mapping.component.html',
  styleUrls: ['./controller-button-mapping.component.less'],
  host: {class: "d-contents"},
})
export class ControllerButtonMappingComponent {
  consolesMapping:string[] = [
    'psx',
    'xbox',
    'switch',
  ];
  buttonsMapping:any = {
    "00": "0.png",
    "01": "1.png",
    "02": "2.png",
    "03": "3.png",
    "04": "up.png",
    "05": "right.png",
    "06": "down.png",
    "07": "left.png",
    "08": "RT.png",
    "09": "LT.png",
  }
  glyphsMapping:any = {
    "00": "0.png",
    "01": "1.png",
    "02": "2.png",
    "03": "3.png",
    "04": "4.png",
    "05": "5.png",
    "06": "6.png",
  }
  @Input() consoleID:number = 0 ;
  @Input() glyphID:string = '00' ;
  @Input() isGlyphsSet:boolean = true ;

  get mapping() {
    return this.isGlyphsSet ? this.glyphsMapping : this.buttonsMapping;
  }
}
