import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';

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
    { _id: '1', name: 'Demo' },
    { _id: '2', name: 'Binance BTC' }
  ];

  public theme = localStorage.getItem('theme');

  public editorOptions = {
    attribution: false,
    toolbarInline: false,
    theme: this.theme,
    listAdvancedTypes: true,
    placeHolder: 'type something...',
    tableEditButtons: ['tableHeader', 'tableRemove', '|', 'tableRows', 'tableColumns', 'tableStyle', '-', 'tableCells', 'tableCellBackground', 'tableCellVerticalAlign', 'tableCellHorizontalAlign', 'tableCellStyle'],
    imageEditButtons: ['imageReplace', 'imageAlign', 'imageRemove', '|', 'imageLink', 'linkOpen', 'linkEdit', 'linkRemove', '-', 'imageDisplay', 'imageStyle', 'imageAlt', 'imageSize'],
    toolbarButtons: {
      moreText: {
        buttons: ['bold', 'italic', 'underline','clearFormatting', 'strikeThrough',  'fontFamily', 'fontSize', 'textColor', 'backgroundColor', 'inlineClass', 'inlineStyle'],
        align: 'left',
        buttonsVisible: 4
      },


      moreParagraph: {
        buttons: ['alignLeft', 'alignCenter', 'formatOLSimple', 'alignRight', 'alignJustify', 'formatOL', 'formatUL', 'paragraphFormat', 'paragraphStyle', 'lineHeight', 'outdent', 'indent', 'quote'],
        align: 'left',
        buttonsVisible: 3
      },

      moreRich: {
        buttons: ['insertLink', 'insertImage',  'insertTable', 'emoticons', 'fontAwesome', 'specialCharacters', 'embedly', 'insertFile', 'insertHR'],
        align: 'left',
        buttonsVisible: 3
      },

      moreMisc: {
        buttons: ['undo', 'redo', 'fullscreen', 'print', 'getPDF', 'spellChecker', 'selectAll', 'html', 'help'],
        align: 'right',
        buttonsVisible: 2
      }
    },
    toolbarButtonsXS: [['undo', 'redo'], ['bold', 'italic', 'underline']]

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
