import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JournalDashboardComponent, JournalEditorComponent } from './components';
import { RouterModule } from '@angular/router';
import {TableModule} from 'primeng/table';
import { DateTimePipe } from '@libs/standalone.pipes/date.time.pipe';
import {DialogModule} from 'primeng/dialog';
import {DropdownModule} from 'primeng/dropdown';
import { ReactiveFormsModule } from '@angular/forms';
import {SelectButtonModule} from 'primeng/selectbutton';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { AttachmentComponent } from '@libs/standalone';
import { JournalService } from './services';
import { JournalResolver } from './resolver';
import { DisplayTextPipe } from '@libs/standalone.pipes';

 const routes = [
  { path: '', component: JournalDashboardComponent, resolve: { journal: JournalResolver } }
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
    DropdownModule,
    SelectButtonModule,
    AttachmentComponent,
    DisplayTextPipe
  ],
  providers: [
    JournalService,
    JournalResolver
  ]
})
export class JournalModule { }
