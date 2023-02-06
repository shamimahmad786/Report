import { Component, OnInit } from '@angular/core';
import { ReportServiceService } from 'src/app/services/report-service.service';
import { AuthService } from 'src/app/services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-reports',
  templateUrl: './manage-reports.component.html',
  styleUrls: ['./manage-reports.component.css']
})
export class ManageReportsComponent implements OnInit {

  constructor(private _reportServiceService: ReportServiceService,
    private _authService:AuthService,
    private _router:Router) { }

  reportsList;

  ngOnInit() {

    this.getAllReports()
  }

  getAllReports() {
    

    var reportType = { paramName: 'A', paramValue: '' }

    this._reportServiceService.getStaticReportMaster(reportType).subscribe(res => {

      this.reportsList = res;
       
    })
  }

  editReport(id)
  {
    this._router.navigate(['/sandbox/home/editreport',id]);
  }

  

}
