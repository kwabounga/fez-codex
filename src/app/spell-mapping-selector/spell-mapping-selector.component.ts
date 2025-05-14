import { Component, Input, } from '@angular/core';

@Component({
  selector: 'app-spell-mapping-selector',
  templateUrl: './spell-mapping-selector.component.html',
  styleUrls: ['./spell-mapping-selector.component.less']
})
export class SpellMappingSelectorComponent {
  @Input() glyphs: any = ['00','01','02','03','04','05'];
  @Input() buttons: any = ['00','01','02','03','04','05','06','07','08','09'];

}
