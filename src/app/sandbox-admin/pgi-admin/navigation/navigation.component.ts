import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit {
  
  userParamName;
  username;
  constructor(private router: Router) { }

  ngOnInit() {
   this.userParamName = JSON.parse(sessionStorage.getItem('currentUser')).paramName;
   this.username = JSON.parse(sessionStorage.getItem('currentUser')).username;
  }

  onLogout() {
    sessionStorage.clear();
    localStorage.clear();
    this.router.navigate(['sandbox/login']);
  }

}