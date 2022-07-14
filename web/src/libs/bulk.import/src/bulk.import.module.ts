import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BulkImportDashboardComponent, ImportEditorComponent } from './components';
import { RouterModule } from '@angular/router';

const routes = [
  { path: '', component: BulkImportDashboardComponent }
];

@NgModule({
  declarations: [
    BulkImportDashboardComponent,
    ImportEditorComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class BulkImportModule { }
