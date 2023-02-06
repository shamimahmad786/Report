import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment';
import * as CryptoJS from 'crypto-js';
import { AuthService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  card = 'login';
  invalidUser = false;
  invalidId = false;
  invalidOtp = false;
  showOverlay = false;
  loginModel: any = {};
  userDto: any = {};
  userPojo: any = {};
  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit() {
  }

  login() {
 
    debugger;
    this.showOverlay = true;
    this.userDto = {};
    // this.userDto.source = 'enc';
    // this.loginModel.userId = CryptoJS.AES.encrypt(this.loginModel.userId, environment.encr_pass).toString();
    // this.loginModel.password = CryptoJS.AES.encrypt(this.loginModel.password, environment.encr_pass).toString();
    // this.loginModel.registrationType = 'U';
    // this.loginModel.param = 'Web';
    this.userDto = this.loginModel;
    this.auth.login(this.userDto).subscribe(res => {
      console.log(res);
   
      if (res.token) {
        sessionStorage.setItem('currentUser', JSON.stringify(res));
        this.router.navigate(['sandbox/home']);

        this.loginModel = {};
        this.showOverlay = false;
      } else {
        this.loginModel = {};
        this.invalidUser = true;
        this.showOverlay = false;
      }
    },
      error => { 
        alert("login response--->"+JSON.stringify(error))
        this.loginModel = {};
        this.invalidUser = true;
        this.showOverlay = false; });
  }

}
