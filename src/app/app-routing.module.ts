import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { DataTableComponent } from './data-table/data-table.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'tables/:table', component: DataTableComponent },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
