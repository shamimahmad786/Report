import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-pgi-web',
  templateUrl: './pgi-web.component.html',
  styleUrls: ['./pgi-web.component.css']
})
export class PgiWebComponent implements OnInit {

  constructor(public pgiService: UsersService) { }

  ngOnInit() {

    if (!sessionStorage.getItem('year'))
      sessionStorage.setItem('year', '2017');
  }
}
