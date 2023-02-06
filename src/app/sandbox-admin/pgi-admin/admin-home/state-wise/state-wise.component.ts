import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../../services/users.service';
import { environment } from '../../../../../environments/environment';
import { domains } from '../../../../../utils/data';
import { DataService } from 'src/app/services/data-service.service';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'app-state-wise',
  templateUrl: './state-wise.component.html',
  styleUrls: ['./state-wise.component.css']
})
export class StateWiseComponent implements OnInit {
  years = [
    { key: '2017-18', value: '2017' },
    { key: '2018-19', value: '2018' }
  ];
  currentUser;
  stateData: any = {};
  states: any = [];
  locationDto: any = {};
  showFilters = true;
  filtersModel: any = {};
  indicatorScore: any = {};
  showOverlay = false;
  showSucMsg = false;
  showMsg = false;
  userDto: any = {};
  scores: any = [];
  domains: any = [];
  catList = [
    { key: 'Outcomes', value: 'O' },
    { key: 'Governance & Management', value: 'G' }
  ];
  constructor(private dataService: DataService, private location: LocationService) { }

  ngOnInit() {
    this.currentUser = JSON.parse(sessionStorage.getItem("currentUser"));

    if (this.currentUser.paramName === 'ADMIN') {
      this.getStateList();
    }
  }

  getStateList() {
    this.location.getStateList().subscribe(res => {
      this.states = res;

    });
  }

  getDomains() {
    this.domains = JSON.parse(JSON.stringify(domains));
    if (this.stateData.cat === 'O') {
      this.domains = this.domains.splice(0, 4);
    } else {

      this.domains = this.domains.splice(4, 1);
    }
  }

  getStateInd() {
    this.showMsg = false;
    this.showFilters = false;
    if (this.currentUser.paramName === 'ADMIN') {
      this.indicatorScore.stateId = this.stateData.state;
    }
    else
    {
      this.indicatorScore.stateId = this.currentUser.paramValue;
    }
    this.indicatorScore.domainId = this.stateData.domain;
    this.indicatorScore.year = this.stateData.year;
    this.indicatorScore.param = "S";
    this.dataService.getStateScore(this.indicatorScore).subscribe(res => {
      console.log(res);
      if (res) {
        if (res.scores) {
          this.scores = res.scores;
        }
        else {
          this.showMsg = true;
          this.scores = [];
        }
      }
      else {
        this.showMsg = true;
        this.scores = [];
      }
    }, error => { });
  }

  modifySearch() {
    this.showSucMsg = false;
    this.showFilters = true;
  }

  // changeProcsdValue(ind) {
  //   console.log(ind);
  //   let pValue = 0;
  //   let benchmark = ind.indData.benchmark;
  //   let weight: number = ind.indData.weight;
  //   let interval: number;
  //   let param: number;
  //   let rawvalue: number = Math.round(ind.calcRawValue);

  //   if (benchmark > 0) {
  //     interval = (benchmark / 10);
  //     param = 1;
  //     if (interval % 1 != 0) {
  //       param = 0.1;
  //       rawvalue = ind.calcRawValue;
  //     }
  //     console.log("Service Call");
  //     pValue = this.pgiService.getProcsdValue(benchmark, interval, param, rawvalue, ind.indData.weight);
  //     console.log(pValue);
  //     ind.score = pValue;
  //     if (ind.indData.weight == 20) {
  //       ind.score = (pValue * 2);
  //     }
  //     if (ind.indData.weight < 10) {
  //       let weightParam: number = (weight / 10);
  //       let finalScore = pValue * weightParam;
  //       ind.score = Math.round(finalScore);
  //     }
  //   }
  //   else if (benchmark == 0) {
  //     pValue = this.pgiService.getProcsdValue(100, 10, 1, ind.calcRawValue, ind.indData.weight);
  //     let weightParam: number = (weight / 10);
  //     let finalScore = ((10 - pValue) + 1) * weightParam;
  //     ind.score = Math.round(finalScore);

  //   }
  // }

  // manageIndData() {
  //   this.showOverlay = true;
  //   this.showMsg = false;
  //   this.showSucMsg = false;
  //   let dtoScores = JSON.parse(JSON.stringify(this.scores));
  //   for (let i = 0; i < dtoScores.length; i++) {
  //     if (dtoScores[i].indData.weight == 0) {
  //       dtoScores.splice(i, 1);
  //     }
  //   }
  //   for (let i = 0; i < dtoScores.length; i++) {
  //     dtoScores[i].modifiedBy = "ADMIN";
  //     if (dtoScores[i].dataId == 0) {
  //       dtoScores[i].createdBy = "ADMIN";
  //       dtoScores[i].year = this.stateData.year;
  //       dtoScores[i].stateId = this.stateData.state;
  //     }
  //   }
  //   console.log(dtoScores);
  //   this.userDto = {};
  //   this.userDto.scores = dtoScores;
  //   this.pgiService.manageIndData(this.userDto).subscribe(res => {
  //     console.log(res);
  //     if (res.statusCode === environment.pgi_success_code) {
  //       this.scores = [];
  //       this.showOverlay = false;
  //       this.showSucMsg = true;

  //     }
  //   });
  // }


}
