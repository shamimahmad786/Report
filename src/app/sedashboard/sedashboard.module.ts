import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SedashboardRoutingModule } from './sedashboard-routing.module';
import { NationalComponent } from './sedashboard/national/national.component';

import { SchemesComponent } from './sedashboard/schemes/schemes.component';
import { SedashboardComponent } from './sedashboard/sedashboard.component';
import { AutonomusBodiesComponent } from './sedashboard/autonomus-bodies/autonomus-bodies.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  // declarations: [NationalComponent, StateComponent, SchemesComponent, SedashboardComponent, AutonomusBodiesComponent],
  declarations: [NationalComponent, SchemesComponent, SedashboardComponent, AutonomusBodiesComponent],
  imports: [
    CommonModule,
    SedashboardRoutingModule,
    FormsModule
  ]
})
export class SedashboardModule {
  constructor(){
    console.log("SeDashboard  Modile loaded")
  }
 }
