import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { FormGroup, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';

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

  public  editorOptions = {
    attribution: false,
    toolbarInline: false,
    pluginsEnabled: ['align', 'link', 'wordPaste', 'emoticons', 'draggable', 'table', 'codeView'],
    tableEditButtons: ['tableHeader', 'tableRemove', '|', 'tableRows', 'tableColumns', 'tableStyle', '-', 'tableCells', 'tableCellBackground', 'tableCellVerticalAlign', 'tableCellHorizontalAlign', 'tableCellStyle'],
    imageEditButtons: ['imageReplace', 'imageAlign', 'imageRemove', '|', 'imageLink', 'linkOpen', 'linkEdit', 'linkRemove', '-', 'imageDisplay', 'imageStyle', 'imageAlt', 'imageSize'],
    toolbarButtons: {
      moreText: {
        buttons: ['bold', 'italic', 'underline', 'fontSize', 'wordPaste', 'clearFormatting'],
        buttonsVisible: 6
      },
      moreParagraph: {
        buttons: ['alignLeft', 'alignCenter', 'alignRight', 'alignJustify'],
        buttonsVisible: 5
      },
      moreRich: {
        buttons: ['emoticons', 'insertTable', 'insertLink', 'insertImage', 'insertVideo'],
        buttonsVisible: 5
      },
      moreMisc: {
        buttons: ['undo', 'redo', 'selectAll', 'html'],
        align: 'right',
        buttonsVisible: 5
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
