import { Component, Inject, Optional, OnInit } from '@angular/core'; 
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-custom-alert',
  templateUrl: './custom-alert.component.html',
  styleUrls: ['./custom-alert.component.css']
})
export class CustomAlertComponent implements OnInit {

  constructor(@Optional() @Inject(MAT_DIALOG_DATA) public data: any) {}
public alertMessage:any="Hi shamim";
  ngOnInit() {
    // alert("on init data -->"+this.data.pageValue)
    this.alertMessage=this.data.pageValue;
  }
  exParent($event){
    this.alertMessage=event;
  }
}
