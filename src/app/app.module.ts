import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PgiWebComponent } from './pgi-web/pgi-web.component';
import { HeaderComponent } from './pgi-web/header/header.component';
import { FooterComponent } from './pgi-web/footer/footer.component';
import { LoadbannerDirective } from './directives/loadbanner.directive';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpReqInterceptor } from './interceptors/httpReqInterceptor';
import { ShamimRouteTestComponent } from './shamim-route-test/shamim-route-test.component';
import { ShamimRoutingModule } from './shamim-route-test/shamim-module/shamim-routing.module';
// import {MatToolbarModule} from '@angular/material/toolbar';
import { DataTablesModule } from 'angular-datatables';
// import { MatDialogModule, MatButtonModule, MatCardModule, MatInputModule, MatIconModule, MatFormFieldModule, MatOptionModule, MatSelectModule, MatSidenavModule, MatCheckboxModule, MatPaginatorModule, MatRadioModule, MatDividerModule } from '@angular/material';
import { MatDatepickerModule,MatToolbarModule, MatDialogModule, MatButtonModule, MatCardModule, MatInputModule, MatIconModule, MatFormFieldModule, MatOptionModule, MatSelectModule, MatSidenavModule, MatCheckboxModule, MatTableModule, MatPaginatorModule, MatRadioModule, MatDividerModule, MatTabsModule } from '@angular/material';
// import { BrowserModule } from '@angular/platform-browser'
// import {
//   MatTabsModule
// } from '@angular/material/tabs';
// import { NgbModule,NgbCarousel,NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
//import { NgbdModalOptions } from '@angular/modal-options';

//import { ChartModule } from 'angular-highcharts';
//import { ChartsModule } from 'ng2-charts';
//import { Chart } from 'angular-highcharts';
import { ChartModule } from 'angular-highcharts';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { AgGridModule } from 'ag-grid-angular';
import { FileUploadModule } from 'ng2-file-upload';
// import {MatTableModule} from '@angular/material/table';
import { StaticReportComponent } from './sandbox-admin/pgi-admin/static-report/static-report.component';
import { CustomAnalyticsComponent } from './sandbox-admin/pgi-admin/custom-analytics/custom-analytics.component';
// import { NgxUiLoaderService } from 'ngx-ui-loader';
import { NgxUiLoaderModule, NgxUiLoaderHttpModule, NgxUiLoaderConfig, SPINNER, POSITION, PB_DIRECTION } from 'ngx-ui-loader';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { TablePipePipe } from './sandbox-admin/pgi-admin/static-report/table-pipe.pipe';
import { HomeComponent } from './pgi-web/home-module/home/home.component';
import { ToastrModule } from 'ngx-toastr';
import { HighchartsComponent } from './shared/highcharts/highcharts.component';

// import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
// import { HomeComponent } from '@ngmodule/material-carousel';
// import { NgbdCarouselPause } from './carousel-pause';
// import { NgbdCarouselPause } from './carousel-pause';
// import { ReportDashboardComponent } from './pgi-web/report-dashboard/report-dashboard.component';
// import { ReportDashboardModule } from './pgi-web/report-dashboard/report-dashboard.module';
// import {MatFileUploadModule} from '@webacad/ng-mat-file-upload';
// import {MatFileUploadModule } from 'angular-material-fileupload';
// import {MatIconModule} from '@angular/material';

// import { MaterialFileInputModule } from 'ngx-material-file-input';
// import { AgGridModule } from "ag-grid-community";
//  import   "ag-grid-enterprise";
import {MatDatepicker} from '@angular/material/datepicker';
import { AspirationalDistComponent } from './sandbox-admin/pgi-admin/aspirational-dist/aspirational-dist.component';
// import { TablePipePipeAspirational } from './sandbox-admin/pgi-admin/aspirational-dist/table-pipe-aspirational.pipe';
// import { AspirationalDistComponent } from './pgi-admin/aspirational-dist/aspirational-dist.component';

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  bgsColor: 'red',
  bgsPosition: POSITION.bottomCenter,
  bgsSize: 40,
  bgsType: SPINNER.rectangleBounce,
  pbDirection: PB_DIRECTION.leftToRight, // progress bar direction
  pbThickness: 5, // progress bar thickness
};

@NgModule({
  declarations: [
    AppComponent,
    PgiWebComponent,
    HeaderComponent,
    FooterComponent,
    LoadbannerDirective,
    ShamimRouteTestComponent,
    StaticReportComponent,
    CustomAnalyticsComponent,
    TablePipePipe,
    AspirationalDistComponent
    // TablePipePipeAspirational
    // ReportDashboardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularMultiSelectModule,
    // FormGroup,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ShamimRoutingModule,
    MatTabsModule,
    MatToolbarModule,
    // NgbModule,
    DataTablesModule,
    //ChartsModule,
    ChartModule,
    // MatFileUploadModule,
    // MatIconModule,
    FileUploadModule,
    MatTableModule,
    MatIconModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    // StaticReportComponent,
    AgGridModule.withComponents([]),
    // ReportDashboardModule
    MatToolbarModule,
    MatDialogModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatTableModule,
    MatPaginatorModule,
    MatRadioModule,
    MatDividerModule,
    MatTabsModule,
    MatCarouselModule.forRoot(),
    MatDatepickerModule,
    ToastrModule.forRoot()
    // NgbCarousel,NgbCarouselConfig
    // ChartModule
  ],
  exports: [MatTabsModule],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: HttpReqInterceptor, multi: true },HighchartsComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
    console.log("App  module loaded")
  }
 }
