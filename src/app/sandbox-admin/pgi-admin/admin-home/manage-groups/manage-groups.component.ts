import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth-service.service';
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';


@Component({
  selector: 'app-manage-groups',
  templateUrl: './manage-groups.component.html',
  styleUrls: ['./manage-groups.component.css']
})
export class ManageGroupsComponent implements OnInit {

  constructor(private _authService:AuthService,private _router:Router,public dialog: MatDialog) { }

  ngOnInit() {
    this.manageGroups()
  }

  groupList;

  manageGroups()
  {  
          this._authService.getAllGroup().subscribe(res => {
            console.log(res)
            this.groupList = res
            })
  }

    editGroup(id)
    {
      this._router.navigate(['/sandbox/home/editgroup',id]);
    }

    delete(id)
    {
     // this.auth.setMessage(id)
     var dialogConstant = this.dialog.open(DialogComponent);
  
     dialogConstant.afterClosed().subscribe(result => {
        if(`${result}`=='true')
        {
          this._authService.deleteGroup({'groupId':id}).subscribe(res => {
              this.manageGroups();
            })
        }
        else
        {
  
        }
      });
    }
  
  }


