import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pgi-public',
  templateUrl: './pgi-public.component.html',
  styleUrls: ['./pgi-public.component.css']
})
export class PgiPublicComponent implements OnInit {

  user: any = {};
  icon = 'left';
  constructor() { }

  ngOnInit() 
  {
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
