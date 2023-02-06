import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StateComponent } from './state.component';

import { StateRoutingModule } from './state-routing.module';
import { SafeSvgPipeModule } from 'src/app/safe-svg-pipe/safe-svg-pipe.module';
import { NgwWowModule } from 'ngx-wow';

@NgModule({
  imports: [
    CommonModule,
    StateRoutingModule,
    SafeSvgPipeModule,
    NgwWowModule
  ],
  declarations: [
    StateComponent
  ]
})
export class StateModule {
  constructor(){
  }
 }
