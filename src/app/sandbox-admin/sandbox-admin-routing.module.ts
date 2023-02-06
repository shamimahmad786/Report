import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PgiAdminComponent } from './pgi-admin/pgi-admin.component';
import { LoginComponent } from './pgi-admin/login/login.component';
import { AdminHomeComponent } from './pgi-admin/admin-home/admin-home.component';
import { ManageRecordsComponent } from './pgi-admin/admin-home/manage-records/manage-records.component';
import { StateWiseComponent } from './pgi-admin/admin-home/state-wise/state-wise.component';
import { AuthGuard } from '../guard/auth.guard';
import { StateWiseDomainComponent } from './pgi-admin/admin-home/state-wise-domain/state-wise-domain.component';
import { ManageUserComponent } from './pgi-admin/admin-home/manage-user/manage-user.component';
import { DashboardComponent } from './pgi-admin/dashboard/dashboard.component';
import { DataEntryformComponent } from './pgi-admin/admin-home/data-entryform/data-entryform.component';
import { AnalyticsComponent } from './pgi-admin/admin-home/analytics/analytics.component';
import { ReportComponent } from './pgi-admin/report/report.component';
import { ReportQueryComponent } from './pgi-admin/report-query/report-query.component';
import { StaticReportComponent } from './pgi-admin/static-report/static-report.component';
// import { KVDataEntryComponent } from './pgi-admin/kvdata-entry/kvdata-entry.component';
// import { NvdataEntryComponent } from './pgi-admin/nvdata-entry/nvdata-entry.component';
// import { NcertdataEntryComponent} from './pgi-admin/ncertdata-entry/ncertdata-entry.component'
// import { CbsedataEntryComponent} from './pgi-admin/cbsedata-entry/cbsedata-entry.component'
// import { NiosdataEntryComponent } from './pgi-admin/niosdata-entry/niosdata-entry.component';
// import { CtsadataEntryComponent } from './pgi-admin/ctsadata-entry/ctsadata-entry.component';
// import { NbbdataEntryComponent } from './pgi-admin/nbbdata-entry/nbbdata-entry.component';
// import { NctedataEntryComponent } from './pgi-admin/nctedata-entry/nctedata-entry.component';
import { CustomAnalyticsComponent } from './pgi-admin/custom-analytics/custom-analytics.component';
import { PgiApproverComponent } from './pgi-admin/pgi-approver/pgi-approver.component';
import {AddUserComponent} from './pgi-admin/admin-home/add-user/add-user.component';
import {AddGroupComponent} from './pgi-admin/admin-home/add-group/add-group.component';
import {ManageGroupsComponent} from './pgi-admin/admin-home/manage-groups/manage-groups.component';
import {ManageReportsComponent} from './pgi-admin/admin-home/manage-reports/manage-reports.component';
import {EditReportComponent} from './pgi-admin/admin-home/edit-report/edit-report.component';
import {ManageDashboardComponent} from './pgi-admin/admin-home/manage-dashboard/manage-dashboard.component';



const routes: Routes = [
  {
    path: '', component: PgiAdminComponent, children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      {
        path: 'home', component: AdminHomeComponent, canActivate: [AuthGuard], children: [
          { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
          { path: 'dashboard', component: DashboardComponent },
          { path: 'entryForm', component: DataEntryformComponent },
          { path: 'user', component: ManageUserComponent },
          { path: 'indicator', component: ManageRecordsComponent },
          { path: 'state', component: StateWiseComponent },
          { path: 'stateWiseDomain', component: StateWiseDomainComponent },
          { path: 'analytics', component: AnalyticsComponent },
          { path: 'report', component: ReportComponent },
          { path: 'reportQuery', component: ReportQueryComponent },
          { path: 'staticReport', component: StaticReportComponent },
          // { path: 'KVForm', component: KVDataEntryComponent },
          // { path: 'NVForm', component: NvdataEntryComponent },
          // { path: 'NCERTForm',component: NcertdataEntryComponent},
          // { path: 'CTSAForm', component: CtsadataEntryComponent },
          // { path: 'NIOSForm', component: NiosdataEntryComponent },
          // { path: 'CBSEForm', component: CbsedataEntryComponent },
          // { path: 'NBBForm', component: NbbdataEntryComponent },
          // { path: 'NCTEForm', component: NctedataEntryComponent },
          { path: 'customAnalytics', component: CustomAnalyticsComponent },
          { path: 'pgiApprover', component: PgiApproverComponent },
          { path: 'adduser/:id', component: AddUserComponent },
          { path: 'adduser', component: AddUserComponent },
          {path: 'addgroup', component: AddGroupComponent },
          {path: 'editgroup/:id', component: AddGroupComponent },
          {path: 'groups', component: ManageGroupsComponent },
          {path: 'managereports', component: ManageReportsComponent },
          {path: 'editreport/:id', component: EditReportComponent },
          {path: 'editreport/:id', component: EditReportComponent },
          {path: 'manage-dashboard', component: ManageDashboardComponent }
                     
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SandboxAdminRoutingModule { }
