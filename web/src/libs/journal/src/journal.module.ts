import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JournalDashboardComponent, JournalEditorComponent } from './components';
import { RouterModule } from '@angular/router';
import {TableModule} from 'primeng/table';
import { DateTimePipe } from '@libs/standalone.pipes/date.time.pipe';
import {DialogModule} from 'primeng/dialog';
import { NgSelectModule } from '@ng-select/ng-select';
import {DropdownModule} from 'primeng/dropdown';
import { ReactiveFormsModule } from '@angular/forms';

import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

 const routes = [
  { path: '', component: JournalDashboardComponent }
];

@NgModule({
  declarations: [
    JournalDashboardComponent,
    JournalEditorComponent   
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FroalaEditorModule,
    FroalaViewModule,
    TableModule,
    DateTimePipe,
    DialogModule,
    NgSelectModule,
    DropdownModule
  ]
})
export class JournalModule { }
