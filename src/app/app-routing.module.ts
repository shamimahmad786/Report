import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { PgiWebComponent } from './pgi-web/pgi-web.component';

// Added by shamim
// import { ShamimRouteTestComponent } from './shamim-route-test/shamim-route-test.component';
import { StaticReportComponent } from './sandbox-admin/pgi-admin/static-report/static-report.component';
import { PreLoadingService } from './services/pre-loading.service';

// end 

const routes: Routes = [
  {
    path: '', component: PgiWebComponent, children: [
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', loadChildren: () => import('./pgi-web/home-module/home-module.module').then(m => m.HomeModuleModule) },
      // { path: 'about/:id', loadChildren: () => import('./pgi-web/about/about.module').then(m => m.AboutModule) },
      // { path: 'national-findings', loadChildren: () => import('./pgi-web/national-findings/national-findings.module').then(m => m.NationalFindingsModule) },
      // { path: 'domain/:id', loadChildren: () => import('./pgi-web/domain/domain.module').then(m => m.DomainModule) },
      // { path: 'state/:sId', loadChildren: () => import('./pgi-web/state/state.module').then(m => m.StateModule) },
      // { path: 'indicators', loadChildren: () => import('./pgi-web/indicators/indicators.module').then(m => m.IndicatorsModule) },
    
      // { path: 'reportDashboard', component: PgiWebComponent ,data: { preload: true }},
    ]
  },

  // {
  //   path: '', component: PgiWebComponent, children: [

  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  // { path: 'home',loadChildren:'./pgi-web/home-module/home-module.module#HomeModuleModule'},
  // // { path: 'national-findings', loadChildren:'./pgi-web/national-findings/national-findings.module#NationalFindingsModule'},
  // // { path: 'domain/:id', loadChildren:'./pgi-web/domain/domain.module#DomainModule'},
  // // { path: 'state/:sId', loadChildren:'./pgi-web/state/state.module#StateModule'},
  // // { path: 'indicators', loadChildren:'./pgi-web/indicators/indicators.module#IndicatorsModule'},
  // // { path: 'about/:id', loadChildren:'./pgi-web/about/about.module#AboutModule'},
  // ]
  
  // },

  // { path: 'sandbox', loadChildren:'./sandbox-admin/sandbox-admin.module#SandboxAdminModule'},
  // { path: 'public', loadChildren:'./sandbox-public/sandbox-public.module#SandboxPublicModule'},
  // { path: 'shamim', component: StaticReportComponent},
  // { path: 'reportDashboard', data: { preload: true }, loadChildren:'./pgi-web/report-dashboard/report-dashboard.module#ReportDashboardModule'},
  // { path: 'sedashboard', loadChildren:'./sedashboard/sedashboard.module#SedashboardModule'}


  {
    path: 'sandbox',loadChildren: () => import('./sandbox-admin/sandbox-admin.module').then(m => m.SandboxAdminModule)
  },
    
  {
    path: 'public',
    loadChildren: () => import('./sandbox-public/sandbox-public.module').then(m => m.SandboxPublicModule)
  },

  

  {
   
    path: 'shamim', component: StaticReportComponent
    
  },

  { 
    path: 'reportDashboard', loadChildren: () => import('./pgi-web/report-dashboard/report-dashboard.module').then(m => m.ReportDashboardModule),data: { preload: true }
  },
  {
    path: 'sedashboard',
    loadChildren: () => import('./sedashboard/sedashboard.module').then(m => m.SedashboardModule)
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreLoadingService })],
  exports: [RouterModule]
})

export class AppRoutingModule { 
  constructor(){
    console.log("App routing module loaded")
  }
}
