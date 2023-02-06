import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NationalFindingsComponent } from './national-findings.component';

const routes: Routes = [

  { path: '', component: NationalFindingsComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NationalFindingsRoutingModule { }
