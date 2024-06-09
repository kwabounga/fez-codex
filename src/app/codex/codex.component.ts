import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-codex',
  templateUrl: './codex.component.html',
  styleUrls: ['./codex.component.less'],
  host: {class: "codex"},
})
export class CodexComponent {
  @Input() tiles?: string[];
  @Input() mapping?: any;
}
