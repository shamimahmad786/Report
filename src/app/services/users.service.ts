import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environment';
import { domains } from '../../utils/data';

declare var myExtObject: any;

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  loggedIn: boolean = false;
  scores: any = [];
  indicatorScore: any = {};
  userDto: any = {};
  masterCat: any;
  gradeType: any;
  showType: any;
  topAchivres: any = [];
  topStates: any = [];
  displayDomain: any;
  stateDetail: any = {};
  simStates: any = [];
  indScores: any = {};
  stateGrade: any;
  domains: any = [];
  simStateDetails: any = [];
  domainDetails: any = [];
  topDomainStates: any = [];
  topPerformerStates: any = [];
  nfDomains: any = [];
  nfScores: any = [];
  gradeTable: any = {};
  gradeTableMax: any
  gradeLength: any = {};
  showLoader = false;

  constructor(private http: HttpClient) {
    this.domains = domains;
    this.nfDomains = domains;
  }

  setLoggedIn() {
    this.loggedIn = true;
  }

  getLoggedIn() {
    return this.loggedIn;
  }

  setLoggedOut() {
    this.loggedIn = false;
  }

  setSessionScores()
  {
    localStorage.setItem("scores", JSON.stringify(this.scores));
  }

  getStateWiseData(year, param) {
    this.indicatorScore.year = year
    this.userDto.score = this.indicatorScore;
    this.userDto.param = param;
    this.getStateData(this.userDto).subscribe(res => {
      console.log(res);
      if (res.statusCode === environment.pgi_success_code) {
        if (res.scores) {
          this.scores = res.scores;
        }
      }
    }, error => { });
  }

  getUsers(userDto) {
    userDto.url = 'users/list/AdminUser';
    return this.http.post<any>(environment.user_service_url + '/users/list/AdminUser', userDto);
  }
  getIndicators(userDto) {
    userDto.url = 'pgiApp/list/IndicatorMaster';
    return this.http.post<any>(environment.pgi_service_url + '/pgiApp/list/IndicatorMaster', userDto);
  }

  getStateData(userDto) {
    userDto.url = 'pgiApp/list/IndicatorScore';
    return this.http.post<any>(environment.pgi_service_url + '/pgiApp/list/IndicatorScore', userDto);
  }
  getStateList(locationDto) {
    locationDto.url = 'locations/list/NpState';
    return this.http.post<any>(environment.location_service_url + '/locations/list/NpState', locationDto);
  }

  manageIndData(userDto) {
    userDto.url = 'pgiApp/manage/IndicatorScore';
    return this.http.post<any>(environment.pgi_service_url + '/pgiApp/manage/IndicatorScore', userDto);

  }

  getProcsdValue(benchmark, interval, param, inRawValue, weight) {
    let procsdVal = 0;
    let startRange: number
    let endRange: number
    let rawValue: number = inRawValue;
    startRange = ((benchmark - interval) + param);
    endRange = benchmark;
    console.log(startRange + " - " + endRange + "Raw: " + rawValue + " " + interval);
    console.log((startRange - (interval * 1) + "-" + (endRange - (interval * 1))));
    console.log((startRange - (interval * 2) + "-" + (endRange - (interval * 2))));
    console.log((startRange - (interval * 3) + "-" + (endRange - (interval * 3))));
    console.log((startRange - (interval * 4) + "-" + (endRange - (interval * 4))));
    console.log((startRange - (interval * 5) + "-" + (endRange - (interval * 5))));
    console.log((startRange - (interval * 6) + "-" + (endRange - (interval * 6))));
    console.log((startRange - (interval * 7) + "-" + (endRange - (interval * 7))));
    console.log((startRange - (interval * 8) + "-" + (endRange - (interval * 8))));
    console.log((startRange - (interval * 9) + "-" + (endRange - (interval * 9))));

    if (weight > 0 && benchmark != 1) {
      if (rawValue > endRange) {
        procsdVal = 10;
      }
      if (rawValue >= startRange && rawValue <= endRange) {
        procsdVal = 10;
      }
      else if (rawValue >= (startRange - (interval * 1)) && rawValue <= (endRange - (interval * 1))) {
        procsdVal = 9;
      }
      else if (rawValue >= (startRange - (interval * 2)) && rawValue <= (endRange - (interval * 2))) {
        procsdVal = 8;
      }
      else if (rawValue >= (startRange - (interval * 3)) && rawValue <= (endRange - (interval * 3))) {
        procsdVal = 7;
      }
      else if (rawValue >= (startRange - (interval * 4)) && rawValue <= (endRange - (interval * 4))) {
        procsdVal = 6;
      }
      else if (rawValue >= (startRange - (interval * 5)) && rawValue <= (endRange - (interval * 5))) {
        procsdVal = 5;
      }
      else if (rawValue >= (startRange - (interval * 6)) && rawValue <= (endRange - (interval * 6))) {
        procsdVal = 4;
      }
      else if (rawValue >= (startRange - (interval * 7)) && rawValue <= (endRange - (interval * 7))) {
        procsdVal = 3;
      }
      else if (rawValue >= (startRange - (interval * 8)) && rawValue <= (endRange - (interval * 8))) {
        procsdVal = 2;
      }
      else if (rawValue >= (startRange - (interval * 9)) && rawValue <= (endRange - (interval * 9))) {
        procsdVal = 1;
      }
      else if (rawValue < (startRange - (interval * 9))) {
        procsdVal = 0;
      }
    }
    else if (benchmark == 1) {
      if (rawValue > 1) {
        procsdVal = 10;
      }
      if (rawValue >= 0.95 && rawValue <= 1) {
        procsdVal = 10;
      }
      else if (rawValue >= 0.85 && rawValue <= 0.94) {
        procsdVal = 9;
      }
      else if (rawValue >= 0.75 && rawValue <= 0.84) {
        procsdVal = 8;
      }
      else if (rawValue >= 0.65 && rawValue <= 0.74) {
        procsdVal = 7;
      }
      else if (rawValue >= 0.55 && rawValue <= 0.64) {
        procsdVal = 6;
      }
      else if (rawValue >= 0.45 && rawValue <= 0.54) {
        procsdVal = 5;
      }
      else if (rawValue >= 0.35 && rawValue <= 0.44) {
        procsdVal = 4;
      }
      else if (rawValue >= 0.25 && rawValue <= 0.34) {
        procsdVal = 3;
      }
      else if (rawValue >= 0.15 && rawValue <= 0.24) {
        procsdVal = 2;
      }
      else if (rawValue >= 0.05 && rawValue <= 0.14) {
        procsdVal = 1;
      }
      else if (rawValue < 0.05) {
        procsdVal = 0;
      }
    }
    return procsdVal;
  }

  mapRefresh() {
    myExtObject.refresh();
  }

  getGridWiseChart() {
    setTimeout(() => {
      myExtObject.gridWiseChart();
    });
  }

  showGradeWise(grade) {
    myExtObject.showGradeWise(grade);

  }

  showDomainWise(domain) {
    myExtObject.showDomainWise(domain);

  }

  showIndicatorWise(ind) {
    myExtObject.showIndicatorWise(ind);
  }

  setStatesData(states) {
    myExtObject.setStatesData(states);
  }

  getTopAchivres(states: any[]) {
    let sortStates = JSON.parse(JSON.stringify(states));
    sortStates.sort((a, b) => {
      return (b.domainScore.totalScore - a.domainScore.totalScore)
    });
    this.topAchivres = sortStates.splice(0, 5);

  }

  getDomainData(d) {
    let domScores = JSON.parse(JSON.stringify(this.scores));

    domScores.sort((a, b) => {
      return b.domainScore['domain' + d] - a.domainScore['domain' + d];
    })
    this.displayDomain = d;
    this.topStates = domScores.splice(0, 4);
  }

  prepareStateData(stateId) {

    this.simStates = [];

    if (this.scores.length == 0) {
      this.scores = JSON.parse(localStorage.getItem("scores"));
    }
    this.stateDetail = this.scores.find(elem => {
      return elem.stateId == stateId;
    });
    console.log(this.stateDetail);
    this.stateGrade = this.stateDetail.domainScore.grade;
    // this.domainData = myExtObject.getDomainData();
    for (var i = 0; i < this.domains.length; i++) {
      this.domains[i].score = this.stateDetail.domainScore['domain' + (i + 1)];
      //Improvement Areas
      // let arr = Object.values(this.domainData[this.domains[i].key]);
      // let arrAvg = arr.reduce(function (a, b) {
      //   return parseInt(a + '') + parseInt(b + '')
      // });
      // let avg = this.arrAvg / 36;
      // if (this.domains[i].score < parseInt(avg + '')) {
      //   this.impDomain.push(this.domains[i]);
      // }
    }

    for (let i = 0; i < this.scores.length; i++) {
      if ((this.scores[i].domainScore.grade == this.stateDetail.domainScore.grade) && (this.scores[i].stateId != this.stateDetail.stateId)) {
        this.simStates.push(this.scores[i]);
      }

    }
    console.log(this.domains);
    if (this.simStates.length > 3) {
      this.simStateDetails = this.simStates.sort((a, b) => {
        return b.domainScore.totalScore - a.domainScore.totalScore;
      }).slice(0, 3);
    }
    else {
      this.simStateDetails = this.simStates.sort((a, b) => {
        return b.domainScore.totalScore - a.domainScore.totalScore;
      });
    }

    this.getStateInd(1, stateId);
    this.getStateInd(2, stateId);
    this.getStateInd(3, stateId);
    this.getStateInd(4, stateId);
    this.getStateInd(5, stateId);

    return true;
  }

  getStateInd(domain, stateId) {
    this.indicatorScore.stateId = stateId;
    this.indicatorScore.year = sessionStorage.getItem('year');
    this.indicatorScore.domainId = domain;
    this.userDto.score = this.indicatorScore;
    this.userDto.recordId = domain;
    this.userDto.param = "S";
    this.getStateData(this.userDto).subscribe(res => {
      console.log(res);
      if (res.statusCode === environment.pgi_success_code) {
        if (res.scores) {
          this.indScores['domain' + domain] = res.scores;
          console.log(this.indScores);
          if (domain == 5) {
            this.refreshLoader();
            setTimeout(() => {
              this.loaderAnimation();
            });
          }
        }
      }
    }, error => { });
  }

  loaderAnimation() {
    let progresslItem = document.querySelectorAll('.progress-box');
    progresslItem.forEach((item: any) => {
      let performance = item.querySelector('.performance');
      let total = item.querySelector('.total');
      let t = total.textContent;
      let p = performance.dataset.score;
      let percentage;

      function getPercentage(a, b) {
        percentage = (a / b) * 100;
      }

      getPercentage(p, t);
      function increaseClouser(p) {
        let thisP = p;
        let intervalId = null;
        function clearThisInterval() {
          clearInterval(intervalId);
        }
        return function increase(t) {
          let i = 0;
          intervalId = setInterval(() => {
            performance.textContent = i++;
            if (i > thisP) { clearThisInterval() };
          }, t)
        }
      }

      let increase = increaseClouser(p);
      let progressVal = item.querySelector('.progress-meter');
      let r = 85;
      let c = 2 * Math.PI * r;
      progressVal.style.transition = 'all 2s ease-in-out';
      function progress(value) {
        let progress = value / 100;
        let dashoffset = c * (1 - progress);
        progressVal.style.strokeDashoffset = dashoffset;
      }
      progressVal.style.strokeDasharray = c;
      let calc = Math.round(2000 / p) - 2;
      increase(calc);
      progress(percentage);
    });
  }

  refreshLoader() {
    const items = document.querySelectorAll('.progress-meter');
    items.forEach(i => {
      i.removeAttribute('style');
    });
  }


  prepareDomainData(domainId) {
    if (this.scores.length == 0) {
      this.scores = JSON.parse(localStorage.getItem("scores"));
    }

    this.domainDetails = this.domains.find((d) => {
      return (d.key === 'Domain_' + domainId);
    });
    console.log(this.domainDetails);
    // this.topStates = this.getData.getAllDetails(this.domainId, false);
    this.topDomainStates = this.scores.sort((a, b) => {
      return b.domainScore['domain' + domainId] - a.domainScore['domain' + domainId]
    })
    this.topPerformerStates = this.topDomainStates.slice(1, 4);


  }

  prepareNfData() {
    if (this.scores.length == 0) {
      this.scores = JSON.parse(localStorage.getItem("scores"));
    }
    this.nfScores = JSON.parse(JSON.stringify(this.scores));
    for (let i = 0; i < this.nfDomains.length; i++) {

      let min, max, sum;
      min = max = sum = this.scores[0].domainScore['domain' + (i + 1)];
      for (let j = 1; j < this.scores.length; j++) {
        let v = this.scores[j].domainScore['domain' + (i + 1)];
        min = (v < min) ? v : min;
        max = (v > max) ? v : max;
        sum += this.scores[j].domainScore['domain' + (i + 1)];
      }

      this.nfDomains[i].lowest = min;
      this.nfDomains[i].highest = max;
      let avg = sum / 36;
      this.nfDomains[i].avg = parseInt(avg + '');
    }

    for (let i = 0; i < this.nfScores.length; i++) {
      this.nfScores[i].domain = [];
      for (let j = 0; j < this.nfDomains.length; j++) {
        let dom: any = {};
        dom.name = this.nfDomains[j].value;
        dom.max = this.nfDomains[j].max;
        dom.icon = this.nfDomains[j].img;
        dom.score = this.nfScores[i].domainScore['domain' + (j + 1)];
        this.nfScores[i].domain.push(dom);
      }
    }
  }

  prepareGradeTable() {
    let gradeTable = {};
    let gradeLength = {};
    for (let i = 0; i < this.scores.length; i++) {
      if (gradeTable['Grade' + this.scores[i].domainScore.grade] != undefined) {
        gradeTable['Grade' + this.scores[i].domainScore.grade].push(this.scores[i].stateName);
      }
      else {
        gradeTable['Grade' + this.scores[i].domainScore.grade] = [];
        gradeTable['Grade' + this.scores[i].domainScore.grade].push(this.scores[i].stateName);
      }
    }

    let max = 0;
    for (let i = 1; i <= Object.keys(gradeTable).length; i++) {
      gradeLength['GLen' + i] = gradeTable['Grade' + i].length;
      if (gradeTable['Grade' + i].length > max) {
        max = gradeTable['Grade' + i].length;
      }
    }

    for (let i = 1; i <= Object.keys(gradeTable).length; i++) {
      for (let j = gradeTable['Grade' + i].length; j < max; j++) {
        gradeTable['Grade' + i].push("");
      }
    }
    console.log(gradeLength);
    this.gradeTable = gradeTable;
    this.gradeLength = gradeLength;
    this.gradeTableMax = max;

  }

  getDomain(domainJson){
    return this.http.post<any>(environment.pgi_services_url + '/getStateDomain', domainJson);
  }


}
