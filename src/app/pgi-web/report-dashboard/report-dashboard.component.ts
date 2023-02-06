import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-report-dashboard',
  templateUrl: './report-dashboard.component.html',
  styleUrls: ['./report-dashboard.component.css']
})
export class ReportDashboardComponent implements OnInit {

  videoFlag:string;
  constructor() { }

  ngOnInit() {
    if(localStorage.videoFlag=='Y'){
      this.videoFlag='Y';
    }
  }

  flagSet(type){
    if(type=='Analytical'){
      this.videoFlag='Y';
      localStorage.videoFlag='Y'
    }else{
      this.videoFlag='N';
      localStorage.videoFlag='N'
    }
  }

  downloadVideo(url){
    window.open(url, "_blank");
    // window.location.href = "https://www.google.com/";
    // this.router.navigate(["/"]).then(result=>{window.location.href = 'http://www.cnn.com/';},'_blank');
    // (window as any).open("https://www.google.com/", "_blank");
  }


}
