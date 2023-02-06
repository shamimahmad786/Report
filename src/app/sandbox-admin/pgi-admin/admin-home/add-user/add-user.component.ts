import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth-service.service';
import { LocationService } from 'src/app/services/location.service';
import { Router,ActivatedRoute } from '@angular/router';
import { parse } from 'path';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private auth: AuthService, 
    private location: LocationService,
    private router: Router,
    private route: ActivatedRoute) { }

  UserForm: FormGroup;
  roles: any = [];
  states: any = [];
  districts:any = [];
  blocks:any = [];
  message='';
  messageClass="";
  myParam: string;
  routeId = -1;
  

  designations = [
    { "key": "1", "value": "Admin" },
    { "key": "2", "value": "Ministry" },
    { "key": "3", "value": "State" },
    { "key": "4", "value": "District" },
    { "key": "5", "value": "Block" },
    { "key": "6", "value": "KV" },
    { "key": "7", "value": "NV" },
    { "key": "8", "value": "NCERT"},
    { "key": "9", "value": "CTSA"},
    { "key": "10", "value": "NBB"},
    { "key": "11", "value": "CBSE"},
    { "key": "12", "value": "NIOS"},
    { "key": "13", "value": "NCTE"}
  ];

  groups = []

  // {id:1,name:"Secretary View"},
  // {id:2,name:"Trend Analysis"},
  // {id:3,name:"Facility Report"},
  // {id:4,name:"Test Group"},

  group_list: string[];
  auxT: any[] = [];

  ngOnInit() 
  {
    this.message = '';

    this.UserForm = this.formBuilder.group({
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      username: ['', [Validators.required]],
      password: ['',[Validators.required]],
      mobileNo: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      email: ['', [Validators.required,Validators.email]],
      paramName: ['', [Validators.required]],
      paramValue: [''],
      groupId: ['', [Validators.required]],
      roleId: ['', [Validators.required]],
      stateName: [''],
      districtName: [''],
      blockName: [''],
      id: ['']
    });

    this.route.params.subscribe(params => {
     
      if (params.id) 
      {
        this.routeId = +params.id;
        this.getUserbyId(this.routeId)
      }
      else
      {

      }
  });
  
    this.getAllRoles();
    this.getAllGroups();
  }

  getAllGroups()
  {  
          this.auth.getAllGroup().subscribe(res => {
            this.groups = res
            })
  }

  getAllRoles() 
  {
      this.auth.getRoles().subscribe(res => {
      this.roles = res;
    })
  }

  submit() 
  {
    this.message = '';

    let userName = this.UserForm.get(['roleId']).value;
    console.log(userName);
 
    if (this.UserForm.valid) 
    {
      let postModel = Object.assign({}, this.UserForm.value);

      postModel.groupId = postModel.groupId.join(',');
      postModel.roleId = postModel.roleId.join(',');

      var currentUser = JSON.parse(sessionStorage.getItem('currentUser'))
      let now = new Date();
      
      postModel.createdBy=currentUser.username;
      postModel.creationTime = now;
      postModel.modificationTime = now;
      postModel.status ="A";
      if(postModel.paramName=='State')
      {
       
        postModel.paramValue =this.UserForm.value.stateName ;

        postModel.stateName =this.UserForm.value.stateName ;
        
        postModel.districtName = '';
        postModel.blockName = '';
        
      }
     else if(postModel.paramName=='District')
      {
        var result;

        postModel.districtName = this.UserForm.value.districtName;

        postModel.stateName = this.UserForm.value.stateName;

          postModel.paramValue = this.UserForm.value.districtName

        postModel.blockName = '';
      }
     else if(postModel.paramName=='Block')
      {
        postModel.stateName = this.UserForm.value.stateName;
        postModel.districtName = this.UserForm.value.districtName;
        postModel.blockName = this.UserForm.value.blockName;
        postModel.paramValue = this.UserForm.value.blockName;
      }
      else
      {
        postModel.stateName = '';
        postModel.districtName = '';
        postModel.blockName = '';
        postModel.paramValue = '';
      }

      var jsonData = JSON.stringify(postModel);
      // alert(jsonData);
 
       this.auth.register(postModel).subscribe(res => {
        if (res) 
        {  
             if(res.status== 1)
             {
               
               var currentUser = JSON.parse(sessionStorage.getItem('currentUser'))
               currentUser.groupId = postModel.groupId;
               sessionStorage.setItem("currentUser",JSON.stringify(currentUser))

               this.message = res.message;
               this.messageClass = "success";
               if(this.UserForm.value.id>0){
               alert("User update successfully");
               }else{
               alert("User add successfully");
               }
              this.router.navigate(['/sandbox/home/user']);
            
             }
             else
             {
               this.message = res.message;
               this.messageClass = "error";
             }
        }
        else 
        {
          this.messageClass = "error";
               this.message = "Failed to create new user";
          
        }
      })
     }

    }

    getStates() 
    {
      return new Promise((resolve, reject) => {


        if (this.UserForm.value.paramName === 'State' || this.UserForm.value.paramName === 'District' || this.UserForm.value.paramName === 'Block') {
          this.location.getStateList().subscribe(res => {

            this.UserForm.controls['stateName'].setValue('');
            this.states = res;

            resolve('succsess');
          })
        }
    });
  
     
    }

    getDistrict() 
    {
      return new Promise((resolve, reject) => {
      if (this.UserForm.value.paramName === 'District' || this.UserForm.value.paramName === 'Block')
        this.location.getDistrictList(this.UserForm.value.stateName).subscribe(res => {

          this.UserForm.controls['districtName'].setValue('');
          this.districts = res;
          resolve('succsess');
        })
      });
    }

    getBlock() {
      return new Promise((resolve, reject) => {
      if (this.UserForm.value.paramName === 'Block')
        this.location.getBlockList(this.UserForm.value.districtName).subscribe(res => {
          this.UserForm.controls['blockName'].setValue('');
          this.blocks = res;
          resolve('succsess');
        })
      });
    }

    getUserbyId(id)
    {
      
      this.auth.getUsersbyId({'id':id}).subscribe(res => {
       
        console.log(res);

        var userDetails = res;
        this.UserForm.controls['id'].setValue( userDetails.id);
        this.UserForm.controls['firstname'].setValue( userDetails.firstname);
        this.UserForm.controls['lastname'].setValue( userDetails.lastname);
        this.UserForm.controls['username'].setValue( userDetails.username);
        this.UserForm.controls['mobileNo'].setValue( userDetails.mobileNo);
        this.UserForm.controls['email'].setValue( userDetails.email);
        this.UserForm.controls['paramName'].setValue( userDetails.paramName);
  
        if(userDetails.paramName=='State')
        {
          var result1

          this.getStates().then(data=>{

          this.UserForm.controls['stateName'].setValue(userDetails.paramValue); 
       
          });

        }
        else if(userDetails.paramName=='District')
        {

          this.getStates().then(data=>{

          this.UserForm.controls['stateName'].setValue(userDetails.stateName); 

          this.getDistrict().then(data=>{

          this.UserForm.controls['districtName'].setValue(userDetails.paramValue); 
       
          });
            
          });
      
        }
        else if(userDetails.paramName=='Block')
        {

          this.getStates().then(data=>{

          this.UserForm.controls['stateName'].setValue(userDetails.stateName); 

          this.getDistrict().then(data=>{

          this.UserForm.controls['districtName'].setValue(userDetails.districtName); 

          this.getBlock().then(data=>{

          this.UserForm.controls['blockName'].setValue(userDetails.paramValue); 
       
          });
       
          });
            
          });
      
        }
   
        this.UserForm.controls['paramValue'].setValue( userDetails.paramValue);
  
        var groupIdArray = userDetails.groupId.split(",");
        var myArray = [];
        for(var i=0;i<groupIdArray.length;i++)
        {
          myArray.push(parseInt(groupIdArray[i]))
        }
  
        this.UserForm.controls['groupId'].setValue(myArray);
  
        var roleIdArray = userDetails.roleId.split(",");
        var myArray1 = [];
        for(var i=0;i<roleIdArray.length;i++)
        {
          myArray1.push(parseInt(roleIdArray[i]))
        }
  
        this.UserForm.controls['roleId'].setValue(myArray1);
      
  
        this.UserForm.controls['stateName'].setValue( userDetails.stateName);
  
        console.log(userDetails)
      })
    
     // var userDetails = this.auth.messageString;

     
    }

}
