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

  public accounts = [
    {_id: '1', name: 'Demo'},
    {_id: '2', name: 'Binance BTC'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
