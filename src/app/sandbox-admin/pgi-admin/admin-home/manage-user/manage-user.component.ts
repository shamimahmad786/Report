import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth-service.service';
import { LocationService } from 'src/app/services/location.service';
import { NgForm } from '@angular/forms';
import { DialogComponent } from '../dialog/dialog.component';
import {MatDialog} from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.css']
})
export class ManageUserComponent implements OnInit {

  columnDefs = [
    {headerName: 'Name', field: 'name' },
    {headerName: 'Mobile No.', field: 'mobileNo' },
    {headerName: 'Email', field: 'email'},
    {headerName: 'Username', field: 'username'}
    
];


rowData = [
    { name: 'Name', mobileNo: '45464546', email: 'dsdsd@g.com',username:'dsdsd' },
    { name: 'Name', mobileNo: '45464546', email: 'dsdsd@g.com',username:'dsdsd' },
    { name: 'Name', mobileNo: '45464546', email: 'dsdsd@g.com',username:'dsdsd' },
    { name: 'Name', mobileNo: '45464546', email: 'dsdsd@g.com',username:'dsdsd' }
];


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

  registerModel: any = {};
  showOverlay = false;
  roles: any = [];
  states: any = [];
  districts: any = [];
  blocks: any = [];
  showRegForm = false;
  successMsg;
  users: any = [];

  constructor(private auth: AuthService, private location: LocationService,public dialog: MatDialog,private _router:Router) { }

  ngOnInit() {
    this.successMsg = "";
    this.getAllRoles();
    this.getAllUsers();

  }

  getAllUsers() {
    this.auth.getUsers().subscribe(res => {

      this.users = res;

      // var rawArray = [];

      // console.log(res);
     
      // for(var i=0;i<res.length;i++)
      // {
       
      //   rawArray.push({name:res[i].firstname + res[i].lastname,mobileNo:res[i].mobileNo,email:res[i].email,username:res[i].username}) 
       
      //   //console.log(this.rowData[i]);
      // }

      // this.rowData = rawArray;
       
    })
  }

  delete(id)
  {
    this.auth.setMessage(id)
   var dialogConstant = this.dialog.open(DialogComponent);

   dialogConstant.afterClosed().subscribe(result => {
      if(`${result}`=='true')
      {
        this.auth.deleteUser({'id':id}).subscribe(res => {
            this.getAllUsers();
          })
      }
      else
      {

      }
    });
  }

  getAllRoles() {
    this.auth.getRoles().subscribe(res => {
      this.roles = res;
    })
  }

  getStates() {
    if (this.registerModel.designation === '3' || this.registerModel.designation === '4' || this.registerModel.designation === '5') {
      this.location.getStateList().subscribe(res => {
        this.states = res;
        // alert(JSON.stringify(this.states));
      })
    }
  }

  getDistrict() {
    if (this.registerModel.designation === '4' || this.registerModel.designation === '5')
      this.location.getDistrictList(this.registerModel.state.id).subscribe(res => {
        this.districts = res;
      })
  }

  getBlock() {
    if (this.registerModel.designation === '5')
      this.location.getBlockList(this.registerModel.district.districtId).subscribe(res => {
        this.blocks = res;
      })
  }

  edit(user)
  {
    this.auth.setMessage(user)
      this._router.navigate(['/sandbox/home/adduser',user.id]);
  }

  register(lf: NgForm) {
    this.registerModel.roleId = "";
    this.registerModel.createdBy = "ADMIN";
    if (this.registerModel.designation === "5") {
      this.registerModel.paramName = "BLU";
      this.registerModel.paramValue = this.registerModel.block;
    }
    else if (this.registerModel.designation === "4") {
      this.registerModel.paramName = "DLU";
      this.registerModel.paramValue = this.registerModel.district.districtId;
      this.registerModel.stateId = this.registerModel.state.id;
      this.registerModel.stateName = this.registerModel.state.stateName;
      this.registerModel.districtName = this.registerModel.district.districtName;
    }
    else if (this.registerModel.designation === "3") {
      this.registerModel.paramName = "STLU";
      this.registerModel.paramValue = this.registerModel.state.id;
    }
    else if (this.registerModel.designation === "2") {
      this.registerModel.paramName = "MIN";
    }
    else if (this.registerModel.designation === "1") {
      this.registerModel.paramName = "ADMIN";
    }else if(this.registerModel.designation === "6"){
      this.registerModel.paramName = "KV";
      //this.registerModel.paramValue = 786;
    }else if(this.registerModel.designation === "7"){
      this.registerModel.paramName = "NV";
    }else if(this.registerModel.designation === "8"){
      this.registerModel.paramName = "NCERT";
    }else if(this.registerModel.designation === "9"){
      this.registerModel.paramName = "CTSA";
    }else if(this.registerModel.designation === "10"){
      this.registerModel.paramName = "NBB";
    }else if(this.registerModel.designation === "11"){
      this.registerModel.paramName = "CBSE";
    }else if(this.registerModel.designation === "12"){
      this.registerModel.paramName = "NIOS";
    }else if(this.registerModel.designation === "13"){
      this.registerModel.paramName = "NCTE";
    }





    let c = 0;
    for (let i = 0; i < this.roles.length; i++) {
      if (this.roles[i].isSelected) {
        if (c >= 1) {
          this.registerModel.roleId += "," + this.roles[i].id;
        }
        else {
          this.registerModel.roleId += this.roles[i].id + "";
        }
        c++;
      }
    }

    alert("create state users-->"+this.registerModel)
    this.auth.register(this.registerModel).subscribe(res => {
      if (res) {
        lf.reset();
        this.showRegForm = false;
        this.successMsg = "User Created Successfully";
        this.getAllUsers();
      }
      else {
        this.successMsg = "Some Error Occured while creating user";
      }
    })
  }

}
