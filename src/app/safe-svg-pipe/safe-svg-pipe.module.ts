import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafeSvgPipe } from '../pipes/safe-svg.pipe';

@NgModule({
  declarations: [SafeSvgPipe],
  imports: [
    CommonModule
  ],
  exports : [SafeSvgPipe]
})
export class SafeSvgPipeModule { }
