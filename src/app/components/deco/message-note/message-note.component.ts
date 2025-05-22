import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-message-note',
  templateUrl: './message-note.component.html',
  styleUrls: ['./message-note.component.less']
})
export class MessageNoteComponent {
  @Input() msgClass?:string = "";
}
