import { Component, OnInit, OnDestroy } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css','../../../assets/newdashboard/css/style.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  states: any = [];
  territories: any = [];
  interval: any;
  dataYear: any;
  indicatorScore: any = {};
  userDto: any = {};
  dbStates: any = [];
  locationDto: any = {};

  constructor(public pgiService: UsersService, private route: Router) { }

  ngOnInit() {

    this.dataYear = sessionStorage.getItem('year');
    this.getDbStatesList();

    let d = new Date();

    function formatAMPM(date) {
      let hours = date.getHours();
      let minutes = date.getMinutes();
      let ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12;
      hours = hours ? hours : 12;
      minutes = minutes < 10 ? '0' + minutes : minutes;
      let strTime = hours + ':' + minutes + ' ' + ampm;
      return strTime;
    }
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    // document.getElementById('date').innerHTML = (d.getDate() < 10 ? '0' + d.getDate() : d.getDate()) +
    //   ' ' + months[
    //   d.getMonth()] + ' ' + d.getFullYear();
    // document.getElementById('time').innerHTML = formatAMPM(d) + ' IST';
    // this.interval = setInterval(() => {
    //   document.getElementById('time').innerHTML = formatAMPM(new Date()) + ' IST';
    // }, 1000);

  }

  showNav() {
    const nav = document.querySelector('.navbar-collapse');
    nav.classList.toggle('show');
  }

  getDbStatesList() {
    this.pgiService.getStateList(this.locationDto).subscribe(res => {
      if (res.statusCode === environment.success_code) {
        this.dbStates = res.states;
      }
    })
  }

  getStateData() {
    this.pgiService.showLoader = true;
    document.querySelector('body').style.overflowY = 'hidden';
    this.pgiService.masterCat = "G";
    this.pgiService.gradeType = "0";
    this.pgiService.showType = "gradeMap";
    sessionStorage.setItem('year', this.dataYear);
    this.indicatorScore.year = this.dataYear;
    this.userDto.score = this.indicatorScore;
    this.userDto.param = "D";
    this.pgiService.getStateData(this.userDto).subscribe(res => {
      if (res.statusCode === environment.pgi_success_code) {
        if (res.scores) {
          this.pgiService.scores = res.scores;
          this.getStateList();

        }
      }
    }, error => { });
  }

  getStateList() {
    for (let i = 0; i < this.dbStates.length; i++) {

      for (let j = 0; j < this.pgiService.scores.length; j++) {

        if (this.dbStates[i].stateId == this.pgiService.scores[j].stateId) {
          this.pgiService.scores[j].stateName = this.dbStates[i].stateName;
          this.pgiService.scores[j].path = this.dbStates[i].path;
          this.pgiService.scores[j].banner = this.dbStates[i].banner;
        }
      }
    }
    this.pgiService.setSessionScores();
    // sessionStorage.setItem("scores", JSON.stringify(this.pgiService.scores));
    if (this.route.url.includes('home')) {
      this.pgiService.setStatesData(this.pgiService.scores);
      this.pgiService.mapRefresh();
      // this.pgiService.showGradeWise(0);
      this.pgiService.getGridWiseChart();
      this.pgiService.getTopAchivres(this.pgiService.scores);
      this.pgiService.getDomainData('1');
      this.pgiService.prepareGradeTable();
    }
    else if (this.route.url.includes('state')) {

      let stateId = sessionStorage.getItem("sId");

      if (this.pgiService.prepareStateData(stateId)) {

      }

    }
    else if (this.route.url.includes('domain')) {
      let domainId = sessionStorage.getItem("dId");

      this.pgiService.prepareDomainData(domainId);

    }
    else if (this.route.url.includes('national-findings')) {

      this.pgiService.prepareNfData();

    }
    this.pgiService.showLoader = false;
    document.querySelector('body').style.overflowY = 'auto';
  }



  ngOnDestroy() {
    clearInterval(this.interval);
  }



}
