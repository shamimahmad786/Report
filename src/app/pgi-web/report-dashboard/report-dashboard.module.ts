import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportRoutingModule } from './report-routing.module';
import { ReportDashboardComponent } from './report-dashboard.component';
import { StateComponent } from './state/state.component';
import { FormsModule } from '@angular/forms'; 
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import {MatSidenavModule,MatToolbarModule,MatIconModule} from '@angular/material';
import { MatDatepickerModule,MatToolbarModule,MatDialogModule, MatButtonModule, MatCardModule, MatInputModule, MatIconModule, MatFormFieldModule, MatOptionModule, MatSelectModule, MatSidenavModule, MatCheckboxModule, MatTableModule, MatPaginatorModule, MatRadioModule, MatDividerModule, MatTabsModule } from '@angular/material';
// import { MdSidenavModule, MdButtonModule, MdToolbarModule, MdIconModule, MdListModule } from '@angular/material';
@NgModule({
  declarations: [ReportDashboardComponent,StateComponent],
  imports: [
    CommonModule,FormsModule,
    ReportRoutingModule,
    MatDatepickerModule,MatToolbarModule,MatDialogModule, MatButtonModule, MatCardModule, MatInputModule, MatIconModule, MatFormFieldModule, MatOptionModule, MatSelectModule, MatSidenavModule, MatCheckboxModule, MatTableModule, MatPaginatorModule, MatRadioModule, MatDividerModule, MatTabsModule
    // MatSidenavModule,
    // MatToolbarModule,
    // MatIconModule
    // MdSidenavModule
    // BrowserModule,
    // BrowserAnimationsModule
  ],
  exports: [
  	MatSidenavModule,
  	MatToolbarModule
  ]
})
export class ReportDashboardModule { 
  constructor(){
  }
}
