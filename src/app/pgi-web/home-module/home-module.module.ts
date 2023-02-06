import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeModuleRoutingModule } from './home-module-routing.module';
import { HomeComponent } from './home/home.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgxSpinnerModule } from 'ngx-spinner';
import { HttpClientModule } from '@angular/common/http';
import { NgwWowModule } from 'ngx-wow';
import { FormsModule } from '@angular/forms';
import { SafeSvgPipeModule } from 'src/app/safe-svg-pipe/safe-svg-pipe.module';
// import {NgbCarousel,NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import { MatCarouselModule } from '@ngmodule/material-carousel';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HomeModuleRoutingModule,
    CarouselModule,
    NgxSpinnerModule,
    HttpClientModule,
    NgwWowModule,
    SafeSvgPipeModule,
    MatCarouselModule.forRoot()
    // NgbCarousel,
    // NgbCarouselConfig
  ]
})
export class HomeModuleModule { 

  constructor(){
  }
}
