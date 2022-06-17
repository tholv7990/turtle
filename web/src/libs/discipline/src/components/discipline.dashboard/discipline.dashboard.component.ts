import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder,  FormGroup } from '@angular/forms';

@Component({
  selector: 'discipline-dashboard',
  templateUrl: './discipline.dashboard.component.html',
  styleUrls: ['./discipline.dashboard.component.less'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DisciplineDashboardComponent implements OnInit {


  public form : FormGroup;

  constructor(private builder: FormBuilder) {

    this.form = this.builder.group({
      numberOfTrade: this.builder.group({
        month: [0, []],
        week: [0, []],
        day: [0, []]
      }),
      profit: this.builder.group({
        month: [0, []],
        week: [0, []],
        day: [0, []]
      }),
      loss: this.builder.group({
        month: [0, []],
        week: [0, []],
        day: [0, []]
      }),
      time: this.builder.group({
       open: [null, []],
       close: [null, []]
      }),
      openOrders: [1, []],
      accountRisk: [0, []]
    })

   }

  ngOnInit(): void {
  }

}
