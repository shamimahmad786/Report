import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';



const routes: Routes = [
  {
    path: 'test1', component: Test1Component
  },
  {
    path: 'test2', component: Test2Component
  }
];

@NgModule({
  declarations: [],
 // imports: [RouterModule.forRoot(routes, { useHash: true, scrollPositionRestoration: 'enabled', preloadingStrategy: PreloadAllModules })],
  imports: [
    CommonModule,RouterModule.forRoot(routes, { useHash: true, scrollPositionRestoration: 'enabled', preloadingStrategy: PreloadAllModules })
  ]
})


export class ShamimRoutingModule { 

}
