import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth-service.service';
import { Router,ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ReportServiceService } from 'src/app/services/report-service.service';

@Component({
  selector: 'app-edit-report',
  templateUrl: './edit-report.component.html',
  styleUrls: ['./edit-report.component.css']
})
export class EditReportComponent implements OnInit {

  constructor(private _authService:AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private _reportServiceService: ReportServiceService) { }
  reportDetails;
  routeId
  reportForm: FormGroup;
  reportTag:any;
  reportDomain:any;
  ngOnInit() {
    this.getReportTag();
    this.getReportDomain();
    this.reportForm = this.formBuilder.group({
      report_name: ['', [Validators.required]],
      tag: ['', [Validators.required]],
      reportdomain: ['', [Validators.required]],
      reportTag: ['',[Validators.required]]
    });

    this.route.params.subscribe(params => {  
      if (params.id) 
      {
        this.routeId = +params.id;
        this.editReportbyId(this.routeId)
      }
      else
      {

      }
  });

  }
 myArray = [];
  editReportbyId(id)
  {
    this._reportServiceService.getReportbyId(id).subscribe(res => {
      this.reportDetails = res;
      this.reportForm.controls['report_name'].setValue( this.reportDetails.data.report_name);
      this.reportForm.controls['tag'].setValue( this.reportDetails.data.report_name);
      this.reportForm.controls['reportdomain'].setValue( this.reportDetails.data.reportdomain);
      var reportTagArray = this.reportDetails.data.reportTag.split(",");
      
      for(var i=0;i<reportTagArray.length;i++)
      {
        this.myArray.push(reportTagArray[i])
      }
      this.reportForm.controls['reportTag'].setValue(this.myArray);
    })
  }

  getReportDomain(){
  this._reportServiceService.getReportDomain().subscribe(res => {
this.reportDomain=res.data;
  })
}

getReportTag(){
this._reportServiceService.getReportTag().subscribe(res => {
this.reportTag=res.data;
})
}
submit(){
  // alert("called");
  
  if(this.reportForm.valid){
// var tagData="";
// alert(this.reportForm.value.reportTag);
// for(let i=0;this.reportForm.value.reportTag.length;i++){
//   tagData +=this.reportForm.value.reportTag[i]+",";
// }
//     alert(tagData.replace(/,\s*$/, ""));
const tagData=this.reportForm.value.reportTag;
    let postModel = Object.assign({});
    postModel.id=this.reportDetails.data.id
    postModel.report_code=this.reportDetails.data.report_code
    postModel.report_name=this.reportForm.value.report_name
    postModel.tag=this.reportForm.value.tag
    postModel.ministryreport=this.reportDetails.data.ministryreport
    postModel.statereport=this.reportDetails.data.statereport
    postModel.districtreport=this.reportDetails.data.districtreport
    postModel.blockreport=this.reportDetails.data.blockreport
    postModel.schoolreport=this.reportDetails.data.schoolreport
    postModel.civilianreport=this.reportDetails.data.civilianreport
    postModel.ordernumber=this.reportDetails.data.ordernumber
    postModel.reportdomain=this.reportForm.value.reportdomain
    postModel.reportTag=this.reportForm.value.reportTag.join(',');
 
    // alert(this.reportForm.value.reportTag)
    console.log(JSON.stringify(postModel));
    this._reportServiceService.updateReport(postModel).subscribe(res => {
      // alert("update response"+JSON.stringify(res));
      this.reportTag=res.data;
      alert("User Update successfully");
      this.router.navigate(['/sandbox/home/managereports']);
      })
  }
  // this._reportServiceService.updateReport().subscribe(res => {
  //   this.reportTag=res.data;
  //   })
}

}
