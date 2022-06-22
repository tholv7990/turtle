import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output, ViewEncapsulation } from '@angular/core';
import {  UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';

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
  ];

  public theme = localStorage.getItem('theme');

  public  editorOptions = {
    attribution: false,
    toolbarInline: false,
    theme: this.theme,
    listAdvancedTypes: true,
    placeHolder: 'type something...',
   // pluginsEnabled: [ 'align',  'colors', 'lists', 'link', 'wordPaste', 'emoticons', 'draggable', 'table', 'codeView'],
    tableEditButtons: ['tableHeader', 'tableRemove', '|', 'tableRows', 'tableColumns', 'tableStyle', '-', 'tableCells', 'tableCellBackground', 'tableCellVerticalAlign', 'tableCellHorizontalAlign', 'tableCellStyle'],
    imageEditButtons: ['imageReplace', 'imageAlign', 'imageRemove', '|', 'imageLink', 'linkOpen', 'linkEdit', 'linkRemove', '-', 'imageDisplay', 'imageStyle', 'imageAlt', 'imageSize'],
    toolbarButtons: {
      moreText: {
        buttons: ['bold', 'italic', 'underline', 'strikeThrough', 'fontSize', 'clearFormatting'],
        buttonsVisible: 6
      },
      moreColors: {
        buttons: ['textColor', 'backgroundColor'],
        buttonsVisible: 2
      },
      moreList: {
        buttons: ['formatOL', 'formatUL'],
        buttonsVisible: 2
      },
      moreParagraph: {
        buttons: ['align'],
        buttonsVisible: 1
      },
      moreOptions: {
        buttons: ['insertOrderedList', 'insertUnorderedList'],
        buttonsVisible: 2
      },
      moreActions: {
        buttons: ['outdent', 'indent'],
        buttonsVisible: 2
      },
      moreRich: {
        buttons: ['emoticons', 'insertTable', 'insertLink'],
        buttonsVisible: 3
      },
      moreMisc: {
        buttons: ['undo', 'redo', 'selectAll', 'html'],
        align: 'right',
        buttonsVisible: 4
      }
    },
    
};

  public form: UntypedFormGroup;

  constructor(builder: UntypedFormBuilder) {

    this.form = builder.group({
      _id: [null, []],
      account: [null, []],
      note: [null, []]
    })
   }

  ngOnInit(): void {
  }

}
