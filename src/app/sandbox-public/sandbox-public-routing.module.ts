import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SchoolDashboardComponent} from './pgi-public/school-dashboard/school-dashboard.component';

import {PgiPublicComponent} from './pgi-public/pgi-public.component';
import { AuthGuard } from '../guard/auth.guard';


const routes: Routes = [
  {
  path: 'home', component: PgiPublicComponent, canActivate: [AuthGuard], children: [
   
    { path: 'schooldashboard', component: SchoolDashboardComponent }
  ]
  }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SandboxPublicRoutingModule { }
