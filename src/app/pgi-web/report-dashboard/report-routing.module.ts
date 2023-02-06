import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReportDashboardComponent } from './report-dashboard.component';
import { StaticReportComponent } from '../../sandbox-admin/pgi-admin/static-report/static-report.component';
import { CustomAnalyticsComponent } from '../../sandbox-admin/pgi-admin/custom-analytics/custom-analytics.component';
import { SchoolDashboardComponent } from '../../sandbox-public/pgi-public/school-dashboard/school-dashboard.component';
import { TeacherDashboardComponent } from '../../sandbox-public/pgi-public/teacher-dashboard/teacher-dashboard.component';
import { StudentDashboardComponent } from '../../sandbox-public/pgi-public/student-dashboard/student-dashboard.component';
import { SedashboardComponent } from 'src/app/sedashboard/sedashboard/sedashboard.component';
import { NationalComponent } from 'src/app/sedashboard/sedashboard/national/national.component';
import { StateComponent } from './state/state.component';
import { SedashboardModule } from 'src/app/sedashboard/sedashboard.module';
import { SedashboardRoutingModule } from 'src/app/sedashboard/sedashboard-routing.module';
import { SchemesComponent } from 'src/app/sedashboard/sedashboard/schemes/schemes.component';
import { AutonomusBodiesComponent } from 'src/app/sedashboard/sedashboard/autonomus-bodies/autonomus-bodies.component';
import { AspirationalDistComponent } from 'src/app/sandbox-admin/pgi-admin/aspirational-dist/aspirational-dist.component';
import { CitywiseReportComponent } from 'src/app/sandbox-admin/pgi-admin/citywise-report/citywise-report.component';

const routes: Routes = [
  {
    path: '', component: ReportDashboardComponent, children: [
      { path: 'sReport', component: StaticReportComponent },
      { path: 'aReport', component: CustomAnalyticsComponent },
      { path: 'sDashboard', component: SchoolDashboardComponent },
      { path: 'tDashboard', component: TeacherDashboardComponent },
      { path: 'stdDashboard', component: StudentDashboardComponent },
      { path: 'national', component: NationalComponent},
      { path: 'state', component:StateComponent},
      { path: 'scheme', component:SchemesComponent},
      { path: 'autonomus', component:AutonomusBodiesComponent},
      { path: 'aspirationalDist', component:AspirationalDistComponent},
      { path: 'citywiseReport', component:CitywiseReportComponent}
      // { path: 'sedashboard', component:SedashboardComponent}
    ]
  },
  
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ReportRoutingModule { }
