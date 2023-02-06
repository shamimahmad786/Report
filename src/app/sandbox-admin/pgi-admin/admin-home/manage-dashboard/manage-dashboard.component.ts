import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ReportServiceService } from 'src/app/services/report-service.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-manage-dashboard',
  templateUrl: './manage-dashboard.component.html',
  styleUrls: ['./manage-dashboard.component.css']
})
export class ManageDashboardComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private _reportServiceService: ReportServiceService,
    private toastr: ToastrService) { }

  
  ReportForm: FormGroup;
  reportsList;
  resDashboard;
  message='';
  reportList = new Array(4);
sortdedList:any[]=[];
  designations = [
    { "key": "1", "value": "school","name":"School"},
    { "key": "2", "value": "teacher","name":"Teacher"},
    { "key": "3", "value": "enrollment","name":"Student"},
    { "key": "4", "value": "ministry","name":"Ministry"},
    { "key": "5", "value": "state","name":"State"},
    { "key": "5", "value": "district","name":"District"},
    { "key": "5", "value": "block","name":"Block"}
  ]

  ngOnInit() 
  {
    this.ReportForm = this.formBuilder.group({
     
      designation:['',[Validators.required]],
      report1: ['', [Validators.required]],
      report2: ['', [Validators.required]],
      report3: ['', [Validators.required]],
      report4: ['', [Validators.required]]
    });

    //this.ReportForm.controls['designation'].setValue( 'school');

    this.getAllReports();
   // this.bindDashboard();
  }

  getAllReports() {

    var reportType = { paramName: 'A', paramValue: '' }

    this._reportServiceService.getStaticReportMaster(reportType).subscribe(res => {


      this.reportsList = res;


      // alert(JSON.stringify(this.reportsList));
       
    })
  }

  fullDesignation:String;

  bindDashboard()
  {  
    this.ReportForm.controls['report1'].setValue('');
    this.ReportForm.controls['report2'].setValue('');
    this.ReportForm.controls['report3'].setValue('');
    this.ReportForm.controls['report4'].setValue('');
// this.fullDesignation=this.ReportForm.value.designation+",frequently"
// alert(this.ReportForm.value.designation);
// alert(this.fullDesignation)
  this._reportServiceService.getDashboardbyCategory(this.ReportForm.value.designation).subscribe(res => 
  {
    this.resDashboard = res
  for(let j=0;j<this.reportsList.length;j++){
    if(this.reportsList[j].reportdomain.includes(this.ReportForm.value.designation)){
      // alert(this.reportsList[j].reportdomain)
       this.sortdedList.push(this.reportsList[j]);
    }
  }

  // alert(JSON.stringify(this.sortdedList));
  // alert("Ready for catch error");
// debugger;
    if(res.length>0)
    {
      for(var i=0;i<4;i++)
      {
        this.reportList[res[i].reportSequence] = res[i];
      }

      this.ReportForm.controls['designation'].setValue(this.reportList[0].category);
      this.ReportForm.controls['report1'].setValue(this.reportList[0].reportId);
      this.ReportForm.controls['report2'].setValue(this.reportList[1].reportId);
      this.ReportForm.controls['report3'].setValue( this.reportList[2].reportId);
      this.ReportForm.controls['report4'].setValue( this.reportList[3].reportId);
    }
  })
}

  submit()
  {

    if(this.ReportForm.valid)
    {
        var report1Obj = this.reportsList.filter(obj => {
          return obj.id === this.ReportForm.value.report1;
        })[0]
    
        var report2Obj = this.reportsList.filter(obj => {
          return obj.id === this.ReportForm.value.report2;
        })[0]
    
        var report3Obj = this.reportsList.filter(obj => {
          return obj.id === this.ReportForm.value.report3;
        })[0]
    
        var report4Obj = this.reportsList.filter(obj => {
          return obj.id === this.ReportForm.value.report4;
        })[0]

        var listObj;

        if(this.resDashboard.length>0)
        {
           listObj = [
            {id:this.resDashboard[0].id,reportSequence:0,"reportId": report1Obj.id, "reportName": report1Obj.report_name, "category": this.ReportForm.value.designation},
            {id:this.resDashboard[1].id,reportSequence:1,"reportId": report2Obj.id, "reportName": report2Obj.report_name, "category": this.ReportForm.value.designation},  
            {id:this.resDashboard[2].id,reportSequence:2,"reportId": report3Obj.id, "reportName": report3Obj.report_name, "category": this.ReportForm.value.designation},      
            {id:this.resDashboard[3].id,reportSequence:3,"reportId": report4Obj.id, "reportName": report4Obj.report_name, "category": this.ReportForm.value.designation}
            ];
        } 
        else
        {
           listObj = [
            {"reportId": report1Obj.id,reportSequence:0, "reportName": report1Obj.report_name, "category": this.ReportForm.value.designation},
            {"reportId": report2Obj.id,reportSequence:1, "reportName": report2Obj.report_name, "category": this.ReportForm.value.designation},  
            {"reportId": report3Obj.id,reportSequence:2, "reportName": report3Obj.report_name, "category": this.ReportForm.value.designation},      
            {"reportId": report4Obj.id,reportSequence:3, "reportName": report4Obj.report_name, "category": this.ReportForm.value.designation}
            ];
        }
          
          var data={listObj:listObj}
    
        this._reportServiceService.updateDashboard(data).subscribe(res => {
    
          console.log(res)

          if(res.status == 1)
          {
            this.toastr.success('updated successfully'); 
          }
          
        })
    }
    else
    {

    }

  }

}
