import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tablet',
  templateUrl: './tablet.component.html',
  styleUrls: ['./tablet.component.less'],
  host: {'class': 'grid-container tablet'}
})
export class TabletComponent {
  @Input() tiles?:string[];
  @Input() mapping?: any;

}
