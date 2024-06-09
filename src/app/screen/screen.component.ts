import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.less'],
  host: {'class': 'grid-container-screen tablet  mt-5 '}
})
export class ScreenComponent {
  @Input() message?:string[];

}
