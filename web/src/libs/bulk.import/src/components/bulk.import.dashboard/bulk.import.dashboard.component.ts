import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'bulk-import-dashboard',
  templateUrl: './bulk.import.dashboard.component.html',
  styleUrls: ['./bulk.import.dashboard.component.less'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BulkImportDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
