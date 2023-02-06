import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HighchartsComponent } from './highcharts/highcharts.component';


@NgModule({
  declarations: [HighchartsComponent],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  // exports: [HighchartsComponent],
})
export class SharedModule { }
