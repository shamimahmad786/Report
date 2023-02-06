import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NationalComponent } from './sedashboard/national/national.component';
import { StateComponent } from './sedashboard/state/state.component';
import { SchemesComponent } from './sedashboard/schemes/schemes.component';
import { SedashboardComponent } from './sedashboard/sedashboard.component';
import { AutonomusBodiesComponent } from './sedashboard/autonomus-bodies/autonomus-bodies.component';


const routes: Routes = [
  {path: '', component: SedashboardComponent, children: [
  { path: '', redirectTo: 'national', pathMatch: 'full' },
  { path: 'national', component: NationalComponent },
  { path: 'state', component: StateComponent },
  { path: 'schemes', component: SchemesComponent },
  { path: 'autonomus', component: AutonomusBodiesComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SedashboardRoutingModule { }
