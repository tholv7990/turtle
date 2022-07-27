import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DialogType, Journal, TradingSide, TradingStatus } from '@libs/model';
import { StateComponent } from '@libs/standalone';
import Enumerable from 'linq';
import { DateTime } from 'luxon';
import { lastValueFrom, map } from 'rxjs';
import { JournalService } from '../../services';

interface JournalDashboardComponentVM {
  journals: Journal[];
  dialog: DialogType;
}

const initialState = {
  journals: [],
  dialog: DialogType.None
}
@Component({
  selector: 'journal-dashboard',
  templateUrl: './journal.dashboard.component.html',
  styleUrls: ['./journal.dashboard.component.less'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JournalDashboardComponent extends StateComponent<JournalDashboardComponentVM> implements OnInit {

  public DialogType = DialogType;

  constructor(private router: ActivatedRoute, private journalService: JournalService) {
    super(initialState);

    this.router.data
      .pipe(
        map(data => {

          const journals = data.journal as Journal[];

          if (!journals?.length)
            return;

            const grouping = Enumerable.from(journals)
            .orderBy(x => x.open)
            .select(x => {
              x['date'] = x.open.toLocaleString(DateTime.DATE_SHORT)
        
              return x;
            })
            .toArray();

          this.setState({ journals: grouping })

        })
      ).subscribe()

  }

  ngOnInit(): void {
  }

  public onOpenDialog(dialog: DialogType) {
    this.setState({ dialog: dialog });
  }

  public async onSave(request) {

    const result = await lastValueFrom(this.journalService.save(request));

    this.setState({ dialog: DialogType.None });

  }

}
