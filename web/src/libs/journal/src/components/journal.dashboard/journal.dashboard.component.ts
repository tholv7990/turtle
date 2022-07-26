import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DialogType, Journal, TradingSide, TradingStatus } from '@libs/model';
import { StateComponent } from '@libs/standalone';
import { DateUtility } from '@libs/utils/date.utility';
import Enumerable from 'linq';
import { DateTime } from 'luxon';

interface JournalDashboardComponentVM {
  journals: Journal[];
  dialog: DialogType;
}

const initialState = {
  journals : [],
  dialog : DialogType.None
}
@Component({
  selector: 'journal-dashboard',
  templateUrl: './journal.dashboard.component.html',
  styleUrls: ['./journal.dashboard.component.less'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JournalDashboardComponent extends StateComponent<JournalDashboardComponentVM> implements OnInit {

  public items = [
    {
      _id: '1',
      name: 'test',
      account: {
        _id: '1',
        name: 'Demo'
      },
      strategy: 'Sonic R',
      status: TradingStatus.Win,
      side: TradingSide.Long,
      symbol: 'BTC/USDT',
      entry: 25600,
      exist: 24999,
      target: 27600,
      open: DateUtility.getDateTime(new Date()),
      close:DateUtility.getDateTime(new Date()).plus({'day': 1}) ,
      profit: 500,
      size: 100,
      amount: 200,
      cost: 1,
      mistake: '',
      note: 'best trade',
      multipleR: 2,
      commission: 1
    },
    {
      _id: '2',
      name: 'test',
      account: {
        _id: '1',
        name: 'Demo'
      },
      strategy: 'Sonic R',
      status: TradingStatus.Lost,
      side: TradingSide.Long,
      symbol: 'ETH/USDT',
      entry: 1600,
      exist: 1599,
      target: 1700,
      open: DateUtility.getDateTime(new Date()),
      close:DateUtility.getDateTime(new Date()).plus({'day': 1}) ,
      profit: 500,
      size: 100,
      amount: 200,
      cost: 1,
      mistake: '',
      note: 'best trade',
      multipleR: 2,
      commission: 1
    },
    {
      _id: '2',
      name: 'test',
      account: {
        _id: '1',
        name: 'Demo'
      },
      strategy: 'Sonic R',
      status: TradingStatus.Open,
      side: TradingSide.Short,
      symbol: 'BTC/USDT',
      entry: 25600,
      exist: 24999,
      target: 27600,
      open: DateUtility.getDateTime(new Date()).minus({'day': 1}),
      close:DateUtility.getDateTime(new Date()).plus({'day': 1}) ,
      profit: 500,
      size: 100,
      amount: 200,
      cost: 1,
      mistake: '',
      note: 'best trade',
      multipleR: 2,
      commission: 1
    },
    {
      _id: '1',
      name: 'test',
      account: {
        _id: '1',
        name: 'Demo'
      },
      strategy: 'Sonic R',
      status: TradingStatus.Win,
      side: TradingSide.Long,
      symbol: 'BTC/USDT',
      entry: 25600,
      exist: 24999,
      target: 27600,
      open: DateUtility.getDateTime(new Date()).minus({'day': 1}),
      close:DateUtility.getDateTime(new Date()).plus({'day': 1}) ,
      profit: 500,
      size: 100,
      amount: 200,
      cost: 1,
      mistake: '',
      note: 'best trade',
      multipleR: 2,
      commission: 1
    },
    {
      _id: '2',
      name: 'test',
      account: {
        _id: '1',
        name: 'Demo'
      },
      strategy: 'Sonic R',
      status: TradingStatus.Lost,
      side: TradingSide.Long,
      symbol: 'ETH/USDT',
      entry: 1600,
      exist: 1599,
      target: 1700,
      open: DateUtility.getDateTime(new Date()).minus({'day': 1}),
      close:DateUtility.getDateTime(new Date()).plus({'day': 1}) ,
      profit: 500,
      size: 100,
      amount: 200,
      cost: 1,
      mistake: '',
      note: 'best trade',
      multipleR: 2,
      commission: 1
    },
  ] as Journal[];

  public DialogType = DialogType;

  constructor() { 
    super(initialState);

    this.vm.journals = Enumerable.from(this.items)
    .orderBy(x => x.open)
    .select(x => {
      x['date'] = x.open.toLocaleString(DateTime.DATE_SHORT)

      return x;
    })
    .toArray();
  }

  ngOnInit(): void {
  }

  public onOpenDialog(dialog: DialogType) {
    this.setState({dialog: dialog});
  }

  public onExpand(){
    
  }

}
