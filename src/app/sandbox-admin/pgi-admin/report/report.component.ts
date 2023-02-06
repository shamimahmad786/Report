import { Component, OnInit } from '@angular/core';
import { ReportServiceService } from 'src/app/services/report-service.service';


@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  public listReports: [];
  
  constructor(private reportService: ReportServiceService) { }

  ngOnInit() {
    this.getReportName();
  }
  getReportName(){
    // alert('call for report data');
    this.reportService.getReportName().subscribe(res => {
// alert('data come through--->'+JSON.stringify(res));
    this.listReports=res;
    },
      error => { 
        alert('error--->');
  } )
  }
//   getReportName(){
//     this.reportService.getReportName().subscribe(res => {
 
//     },
//       error => { 

//   } 
// }

}
