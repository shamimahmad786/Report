import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NationalFindingsRoutingModule } from './national-findings-routing.module';
import { NationalFindingsComponent } from './national-findings.component';
import { NgwWowModule } from 'ngx-wow';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [NationalFindingsComponent],
  imports: [
    CommonModule,
    NationalFindingsRoutingModule,
    CarouselModule,
    NgwWowModule
  ]
})
export class NationalFindingsModule {
  constructor(){
    console.log("National Findings Module Loaded")
  }
 }
