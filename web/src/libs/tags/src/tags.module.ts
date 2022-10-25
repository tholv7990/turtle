import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagDashboardComponent } from './components';
import { RouterModule } from '@angular/router';

const routes = [
  { path: '', component: TagDashboardComponent }
];


@NgModule({
  declarations: [
    TagDashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class TagsModule { }
