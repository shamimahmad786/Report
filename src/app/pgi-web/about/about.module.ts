import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { ConclusionsComponent } from './conclusions/conclusions.component';
import { CatalysingComponent } from './catalysing/catalysing.component';
import { MethodologyComponent } from './methodology/methodology.component';
import { NgwWowModule } from 'ngx-wow';

@NgModule({
  declarations: [
    AboutComponent,
    ConclusionsComponent,
    CatalysingComponent,
    MethodologyComponent
    ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    NgwWowModule
  ]
})
export class AboutModule { 

  constructor(){
    console.log("About Module Loaded")
  }
}
