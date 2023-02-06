import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  user: any = {};
  icon = 'left';
  constructor() { }

  ngOnInit() {
    this.user = JSON.parse(sessionStorage.getItem('currentUser'));
  }

  changeIcon() {
    if (this.icon === 'left') {
      this.icon = 'right';
    } else {
      this.icon = 'left';
    }
  }

}
