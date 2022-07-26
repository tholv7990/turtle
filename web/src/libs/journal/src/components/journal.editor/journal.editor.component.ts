import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { TradingSide } from '@libs/model';
import Decimal from 'decimal.js';

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

  public positions = [
    { _id: TradingSide.Long, name: TradingSide.Long },
    { _id: TradingSide.Short, name: TradingSide.Short }
  ]

  public theme = localStorage.getItem('theme');

  public editorOptions = {
    attribution: false,
    toolbarInline: false,
    theme: this.theme,
    listAdvancedTypes: true,
    placeholderText: 'Start typing something...',
    tableEditButtons: ['tableHeader', 'tableRemove', '|', 'tableRows', 'tableColumns', 'tableStyle', '-', 'tableCells', 'tableCellBackground', 'tableCellVerticalAlign', 'tableCellHorizontalAlign', 'tableCellStyle'],
    imageEditButtons: ['imageReplace', 'imageAlign', 'imageRemove', '|', 'imageLink', 'linkOpen', 'linkEdit', 'linkRemove', '-', 'imageDisplay', 'imageStyle', 'imageAlt', 'imageSize'],
    toolbarButtons: {
      moreText: {
        buttons: ['bold', 'italic', 'underline', 'clearFormatting', 'strikeThrough', 'fontFamily', 'fontSize', 'textColor', 'backgroundColor', 'inlineClass', 'inlineStyle'],
        align: 'left',
        buttonsVisible: 4
      },


      moreParagraph: {
        buttons: ['alignLeft', 'alignCenter', 'formatOLSimple', 'alignRight', 'alignJustify', 'formatOL', 'formatUL', 'paragraphFormat', 'paragraphStyle', 'lineHeight', 'outdent', 'indent', 'quote'],
        align: 'left',
        buttonsVisible: 3
      },

      moreRich: {
        buttons: ['insertLink', 'insertImage', 'insertTable', 'emoticons', 'fontAwesome', 'specialCharacters', 'embedly', 'insertFile', 'insertHR'],
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
      account: [null, [Validators.required]],
      balance: [10000, []],
      risk: [0.01, []],
      side: [TradingSide.Long, [Validators.required]],
      symbol: [null, Validators.required],
      leverage: [20, [Validators.required]],
      entry: [0, Validators.required],
      exist: [0, [Validators.required]],
      target: [0, [Validators.required]],
      note: [null, []],
      multipleR: [0, []],
      amount: [0, []],
      size: [0, []]
    })
  }

  ngOnInit(): void {
  }

  public onCalculateSize() {

    const { leverage, entry, exist, target, balance, risk, side } = this.form.value;

    const accountRisk = balance * risk;

    const tradeRisk =  Math.abs(entry - exist);
    const tradeReward =  Math.abs(entry - target);

    const shares = accountRisk / tradeRisk;

    const sharesWithLeverage = new Decimal(shares / leverage ?? 0).toDP(4).toNumber();

    const amountInCash = new Decimal(sharesWithLeverage * entry ?? 0).toDP(4).toNumber();

    const riskReward = tradeReward / tradeRisk;

    this.form.patchValue({size: sharesWithLeverage, amount: amountInCash, multipleR: riskReward});

  }

}
