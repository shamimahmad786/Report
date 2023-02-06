import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DomainRoutingModule } from './domain-routing.module';
import { DomainComponent } from './domain.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgwWowModule } from 'ngx-wow';
import { SafeSvgPipeModule } from 'src/app/safe-svg-pipe/safe-svg-pipe.module';

@NgModule({
  declarations: [DomainComponent],
  imports: [
    CommonModule,
    DomainRoutingModule,
    CarouselModule,
    NgwWowModule,
    SafeSvgPipeModule
  ]
})
export class DomainModule { 
  constructor(){
    console.log("Domain Module Loaded")
  }
}
