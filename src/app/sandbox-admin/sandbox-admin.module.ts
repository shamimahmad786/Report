import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { SandboxAdminRoutingModule } from './sandbox-admin-routing.module';
import { PgiAdminComponent } from './pgi-admin/pgi-admin.component';
import { LoginComponent } from './pgi-admin/login/login.component';
import { AdminHomeComponent } from './pgi-admin/admin-home/admin-home.component';
import { NavigationComponent } from './pgi-admin/navigation/navigation.component';
import { ManageRecordsComponent } from './pgi-admin/admin-home/manage-records/manage-records.component';
import { StateWiseComponent } from './pgi-admin/admin-home/state-wise/state-wise.component';
import { HttpClientModule } from '@angular/common/http';

import { StateWiseDomainComponent } from './pgi-admin/admin-home/state-wise-domain/state-wise-domain.component';
import { ManageUserComponent } from './pgi-admin/admin-home/manage-user/manage-user.component';
import { DashboardComponent } from './pgi-admin/dashboard/dashboard.component';
import { SafeSvgPipeModule } from 'src/app/safe-svg-pipe/safe-svg-pipe.module';
import { DataEntryformComponent } from './pgi-admin/admin-home/data-entryform/data-entryform.component';
import { AnalyticsComponent } from './pgi-admin/admin-home/analytics/analytics.component';
import { ReportComponent } from './pgi-admin/report/report.component';
import { ReportQueryComponent } from './pgi-admin/report-query/report-query.component';
import { StaticReportComponent } from './pgi-admin/static-report/static-report.component';
//import { ReportComponentComponent } from './pgi-admin/report/report-component/report-component.component';
import { ChartsModule } from 'ng2-charts';
// import { ChartModule } from 'angular-highcharts';
// import { KVDataEntryComponent } from './pgi-admin/kvdata-entry/kvdata-entry.component';
// import { KVDaComponent } from './pgi-admin/admin-home/kvda/kvda.component';
// import { CustomAnalyticsComponent } from './pgi-admin/custom-analytics/custom-analytics.component';
//import {SelectMultipleExample} from './app/select-multiple-example';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { AgGridModule } from 'ag-grid-angular';
// import { NvdataEntryComponent } from './pgi-admin/nvdata-entry/nvdata-entry.component';
// import { NiosdataEntryComponent } from './pgi-admin/niosdata-entry/niosdata-entry.component';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import {MatExpansionModule} from '@angular/material/expansion';

// import { AllModules } from "ag-grid-enterprise";
import   "ag-grid-enterprise";
// import { CtsadataEntryComponent } from './pgi-admin/ctsadata-entry/ctsadata-entry.component';
// import { NbbdataEntryComponent } from './pgi-admin/nbbdata-entry/nbbdata-entry.component';
import {FileUploadModule} from 'ng2-file-upload';
// import { CbsedataEntryComponent } from './pgi-admin/cbsedata-entry/cbsedata-entry.component';
// import { NcertdataEntryComponent } from './pgi-admin/ncertdata-entry/ncertdata-entry.component';
// import { NctedataEntryComponent } from './pgi-admin/nctedata-entry/nctedata-entry.component';
import { CustomAlertComponent } from './pgi-admin/custom-alert/custom-alert.component';
import { ChartModule, HIGHCHARTS_MODULES } from 'angular-highcharts';
import stock from 'highcharts/modules/stock.src';
import more from 'highcharts/highcharts-more.src';
import { PgiApproverComponent } from './pgi-admin/pgi-approver/pgi-approver.component';
import {MaterialModule} from '../shared/material/material.module';
import { AddUserComponent } from './pgi-admin/admin-home/add-user/add-user.component';
import { DialogComponent } from './pgi-admin/admin-home/dialog/dialog.component';

import { ManageGroupsComponent } from './pgi-admin/admin-home/manage-groups/manage-groups.component';
import { AddGroupComponent } from './pgi-admin/admin-home/add-group/add-group.component';
import { ManageReportsComponent } from './pgi-admin/admin-home/manage-reports/manage-reports.component';
import { EditReportComponent } from './pgi-admin/admin-home/edit-report/edit-report.component';
import { FilterPipe } from '../shared/filter/filter.pipe';
import { ManageDashboardComponent } from './pgi-admin/admin-home/manage-dashboard/manage-dashboard.component';
// import { AspirationalDistComponent } from './pgi-admin/aspirational-dist/aspirational-dist.component';
import { CitywiseReportComponent } from './pgi-admin/citywise-report/citywise-report.component';
// import { MapComponent } from './pgi-admin/static-report/map/map.component';
// import { TablePipePipeAspirational } from './pgi-admin/aspirational-dist/table-pipe-aspirational.pipe';
// import { TablePipePipeAspirational } from './sandbox-admin/pgi-admin/aspirational-dist/table-pipe-aspirational.pipe';
// import { DatePipe } from '@angular/common';
// import { TablePipePipe } from './pgi-admin/static-report/table-pipe.pipe';
// import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
// import { MomentDateAdapter } from '@angular/material-moment-adapter';
// import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
// import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
// import { BrowserModule } from '@angular/platform-browser'
// import {CommonModule} from '@angular/common'
// import { MyAlertDialogComponent } from './my-alert-dialog/my-alert-dialog.component';
// import {MatFileUploadModule} from '@webacad/ng-mat-file-upload';
// import {MatFileUploadModule } from 'angular-material-fileupload';

export function highchartsModules() {
//   // apply Highcharts Modules to this array
  return [stock, more];
}
// import { ButtonRendererComponent } from './renderer/button-renderer.component';
@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule ,
   // FormGroup,
   AngularMultiSelectModule,
    CommonModule,
    SandboxAdminRoutingModule,
    HttpClientModule,

    SafeSvgPipeModule,
    ChartsModule,
    ChartModule,
    AgGridModule.withComponents([]),
    NgxUiLoaderModule,
    MatExpansionModule,
    FileUploadModule,
    MaterialModule,
    // TablePipePipeAspirational
    // MomentDateAdapter
    
    // MatDatepickerModule
    // NgxMatSelectSearchModule
    // BrowserModule
    // MatFileUploadModule

    // KVDataEntryComponent

  ],
  declarations: [
    PgiAdminComponent,
    LoginComponent,
    AdminHomeComponent,
    NavigationComponent,
    ManageRecordsComponent,
    StateWiseComponent,
    StateWiseDomainComponent,
    ManageUserComponent,
    DashboardComponent,
    DataEntryformComponent,
    AnalyticsComponent,
    ReportComponent,
    ReportQueryComponent,
    // StaticReportComponent,
    // KVDataEntryComponent,
    // KVDaComponent,
    // CustomAnalyticsComponent,
    // NvdataEntryComponent,
    // NiosdataEntryComponent,
    // CtsadataEntryComponent,
    // NbbdataEntryComponent,
    // CbsedataEntryComponent,
    // NcertdataEntryComponent,
    // NctedataEntryComponent,
    CustomAlertComponent,
    PgiApproverComponent,
    AddUserComponent,
    DialogComponent,
    ManageGroupsComponent,
    AddGroupComponent,
    ManageReportsComponent,
    EditReportComponent,
    FilterPipe,
    ManageDashboardComponent,
    // AspirationalDistComponent,
    CitywiseReportComponent,
    // MapComponent 
    // DatePipe
    // TablePipePipe,
    
    // StaticReportComponent
  ],
  providers: [
    // DatePipe,
    CustomAlertComponent,{ provide: HIGHCHARTS_MODULES, useFactory: highchartsModules },
    
    // provide: HIGHCHARTS_MODULES
  ],
  // exports: [ TablePipePipe ]
})
export class SandboxAdminModule { 
  constructor(){
    console.log("SandBox Admin Module Loaded")
  }
}
