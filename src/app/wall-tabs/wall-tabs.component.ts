import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-wall-tabs',
  templateUrl: './wall-tabs.component.html',
  styleUrls: ['./wall-tabs.component.less']
})
export class WallTabsComponent {
  @Input() messages?:any = [];
}
