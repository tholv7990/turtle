import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  RulesDashboardComponent } from './components';
import {  RulesService } from './services';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import {CalendarModule} from 'primeng/calendar';

const routes = [
  { path: '', component: RulesDashboardComponent }
];


@NgModule({
  declarations: [
    RulesDashboardComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    CalendarModule
  ],
  providers: [
    RulesService
  ]
})
export class RulesModule { }
