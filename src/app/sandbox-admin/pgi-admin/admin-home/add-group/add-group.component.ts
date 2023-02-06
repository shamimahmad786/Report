import { Component, OnInit } from '@angular/core';
import { ReportServiceService } from 'src/app/services/report-service.service';
import { AuthService } from 'src/app/services/auth-service.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-group',
  templateUrl: './add-group.component.html',
  styleUrls: ['./add-group.component.css']
})
export class AddGroupComponent implements OnInit {

  constructor(private _reportServiceService: ReportServiceService,
    private _authService:AuthService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute) { }

  reportsList;
  ;
  reports = [];
  message='';
  messageClass="";
  routeId;
  selectedQuantity = [];
  groupId;
  

 //groupbyId_result = [];

  UserForm: FormGroup;

  ngOnInit() {

    
    this.route.params.subscribe(params => {
     
      if (params.id) 
      {
        this.routeId = +params.id;
        this.getGroupbyId()
      }
      else
      {

      }
  });
    this.getAllReports()

    this.UserForm = this.formBuilder.group({
      groupName: ['', [Validators.required]],
      groupMapping:[[]]
   
    });
  }

  

  getAllReports() {
    

    var reportType = { paramName: 'A', paramValue: '' }

    this._reportServiceService.getStaticReportMaster(reportType).subscribe(res => {

  

      
      this.reportsList = res;

     // this.getGroupbyId()
       
    })
  }

  isChecked(id)
  {
        var result = this.UserForm.value.groupMapping.filter(obj => {
            return obj.reportId === id;
          })[0]
          if(result)
          {
            return true
          }    
          else
          {
            return false
          }

  }

  getGroupbyId()
  {
    this._authService.groupById({'groupId':this.routeId}).subscribe(res => {

      //var result = res.json()

   
      this.groupId = res.groupId;
   

     for(var i=0;i<res.groupMapping.length;i++)
     {
        this.UserForm.value.groupMapping.push(res.groupMapping[i])
     }

   

      this.UserForm.controls['groupName'].setValue(res.groupName); 

 
    })
  }

  saveGroup()
  {
    this.message = '';


    if(this.UserForm.valid)
    {
        if(this.UserForm.value.groupMapping.length>0)
        {
          console.log(this.UserForm.value);

          let postModel = Object.assign({}, this.UserForm.value);
          if(this.routeId)
          {
            postModel.groupId = this.groupId
          }
          else
          {
            delete postModel.groupId
          }
          this._authService.saveGroup(postModel).subscribe(res => {

            if(res.status==1)
            {
              this.UserForm.reset();
         
              this.messageClass = 'success'
              this.message = res.message;
              if(postModel.groupId>0){
                alert("Group update successfully");
              }else{
                alert("Group add successfully");
                
              }
              this.router.navigate(['/sandbox/home/groups']);
              
            }
            else
            {
              
              this.messageClass = 'error'
              this.message = res.message;
            }
        
       
            })
        }
        else
        {
          this.message = 'Please select report';
          this.messageClass = 'error'
        }
    }

  
  }

  onChange(event,id)
  {
   var reportObject = {reportId:'',reportCode:'',reportName:''}
      if(event.checked)
      {
        var resultObject = this.reportsList.filter(obj => {
        return obj.id === id;
      })[0]

      reportObject.reportId = resultObject.id;
      reportObject.reportCode = resultObject.ordernumber;
      reportObject.reportName = resultObject.report_name;

      this.UserForm.value.groupMapping.push(reportObject)
      }
      else
      {
        var reportArray = this.UserForm.value.groupMapping.filter(obj => {
          return obj.reportId != id;
        })

        this.UserForm.value.groupMapping = reportArray

      }

      
        
 
  }

}
