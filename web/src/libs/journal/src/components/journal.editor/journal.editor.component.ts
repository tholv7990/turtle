import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'journal-editor',
  templateUrl: './journal.editor.component.html',
  styleUrls: ['./journal.editor.component.less'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JournalEditorComponent implements OnInit {

  @Output() public close = new EventEmitter();
  @Output() public expand = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
