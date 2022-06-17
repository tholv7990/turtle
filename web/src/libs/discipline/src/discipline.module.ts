import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisciplineDashboardComponent } from './components';
import { DisciplineService } from './services';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import {CalendarModule} from 'primeng/calendar';

const routes = [
  { path: '', component: DisciplineDashboardComponent }
];


@NgModule({
  declarations: [
    DisciplineDashboardComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    CalendarModule
  ],
  providers: [
    DisciplineService
  ]
})
export class DisciplineModule { }
