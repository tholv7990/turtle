import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent, RegisterComponent, ShellComponent } from '@libs/standalone';
import { AuthGuard } from './helpers';

const routes: Routes = [
  {
    path: '', component: ShellComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'journal',
        loadChildren: () => import('../libs/journal').then(m => m.JournalModule),
        data: { title: 'Journal', animation: 'journalPage' }
      },
      {
        path: 'rules',
        loadChildren: () => import('../libs/rules').then(m => m.RulesModule),
        data: { title: 'Rules', animation: 'disciplinePage' }
      },
      {
        path: 'strategy',
        loadChildren: () => import('../libs/journal').then(m => m.JournalModule),
        data: { title: 'Strategy', animation: 'strategyPage' }
      },
      {
        path: 'planning',
        loadChildren: () => import('../libs/journal').then(m => m.JournalModule),
        data: { title: 'Planning', animation: 'planningPage' }
      },
      {
        path: 'import',
        loadChildren: () => import('../libs/bulk.import').then(m => m.BulkImportModule),
        data: { title: 'Bulk Import', animation: 'import' }
      }
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', redirectTo: '' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
