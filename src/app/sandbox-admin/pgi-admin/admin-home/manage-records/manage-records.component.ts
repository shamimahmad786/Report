import { Component, OnInit } from '@angular/core';
import { domains } from '../../../../../utils/data';
import { UsersService } from '../../../../services/users.service';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-manage-records',
  templateUrl: './manage-records.component.html',
  styleUrls: ['./manage-records.component.css']
})
export class ManageRecordsComponent implements OnInit {
  years = [
    { key: '2017-18', value: '2017' },
    { key: '2018-19', value: '2018' }
  ];

  catList = [
    { key: 'Outcomes', value: 'O' },
    { key: 'Governance & Management', value: 'G' }
  ];

  indData: any = {};
  domains: any;
  userDto: any = {};
  indicators: any = [];
  indicatorScore: any = {};
  scores: any = [];
  locationDto: any = {};
  states: any = [];
  indWeight: any;
  showOverlay = false;
  showMsg = false;
  showFilters = true;
  filtersModel: any = {};

  constructor(private pgiService: UsersService) { }

  ngOnInit() { }

  getDomains() {
    this.domains = JSON.parse(JSON.stringify(domains));
    if (this.indData.cat === 'O') {
      this.domains = this.domains.splice(0, 4);
    } else {

      this.domains = this.domains.splice(4, 1);
    }
  }
  getIndicators() {
    this.userDto.recordId = this.indData.domain;
    this.pgiService.getIndicators(this.userDto).subscribe(res => {
      if (res.statusCode === environment.pgi_success_code) {
        this.indicators = res.indicators;
      }
      console.log(this.indicators);

    }, error => { });
  }

  getStateData() {
    this.showFilters = false;
    this.showMsg = false;
    this.userDto = {};
    console.log(this.indData);
    this.indicators.find((ind) => {
      if (this.indData.indicator == ind.indId) {
        this.indWeight = ind.weight;
      }
    });
    this.indicatorScore.indId = this.indData.indicator;
    this.indicatorScore.year = this.indData.year;
    this.userDto.score = this.indicatorScore;
    this.pgiService.getStateData(this.userDto).subscribe(res => {
      console.log(res);
      if (res.statusCode === environment.pgi_success_code) {
        if (res.scores) {
          this.scores = res.scores;
        }
        else {
          this.scores = [];
        }
      }
      else {
        this.scores = [];
      }
      this.getStateList();
    }, error => { });
  }

  getStateList() {
    this.pgiService.getStateList(this.locationDto).subscribe(res => {
      if (res.statusCode === environment.success_code) {
        this.states = res.states;
        this.generateIndData();
      }
    });
  }

  generateIndData() {
    if (this.scores.length > 0) {
      for (let i = 0; i < this.states.length; i++) {

        let isScore = false;
        this.states[i].indId = this.indData.indicator;
        this.states[i].year = this.indData.year;
        this.states[i].createdBy = "ADMIN";
        this.states[i].modifiedBy = "ADMIN";
        this.states[i].domainId = this.indData.domain;



        for (let j = 0; j < this.scores.length; j++) {

          if (this.states[i].stateId == this.scores[j].stateId) {
            isScore = true;
            this.states[i].score = this.scores[j].score;
            this.states[i].calcRawValue = this.scores[j].calcRawValue;
            this.states[i].dataId = this.scores[j].dataId;
          }
        }
        if (!isScore) {
          this.states[i].score = 0;
          this.states[i].calcRawValue = "";
        }
      }

    }
    else {
      for (let i = 0; i < this.states.length; i++) {
        this.states[i].indId = this.indData.indicator;
        this.states[i].year = this.indData.year;
        this.states[i].createdBy = "ADMIN";
        this.states[i].modifiedBy = "ADMIN";
        this.states[i].score = 0;
        this.states[i].calcRawValue = "";
      }
    }
  }

  manageIndData() {
    this.showOverlay = true;
    this.showMsg = false;
    console.log(this.states);
    this.userDto = {};
    this.userDto.scores = this.states;
    this.pgiService.manageIndData(this.userDto).subscribe(res => {

      if (res.statusCode === environment.pgi_success_code) {
        console.log(res);
        this.states = [];
        this.showOverlay = false;
        this.showMsg = true;
      }
    });
  }

  modifySearch() {
    this.showFilters = true;
  }


  changeProcsdValue(state) {
    console.log(state);
    let ind = this.filtersModel.indicator;
    let pValue = 0;
    let benchmark = ind.benchmark;
    let weight: number = ind.weight;
    let interval: number;
    let param: number;

    if (benchmark > 0) {
      interval = (benchmark / 10);
      param = 1;
      if (interval < 10) {
        param = 0.1;
      }
      pValue = this.pgiService.getProcsdValue(benchmark, interval, param, state.calcRawValue, weight);
      state.score = pValue;
      if (weight == 20) {
        state.score = (pValue * 2);
      }
      if (ind.indData.weight < 10) {
        let weightParam: number = (weight / 10);
        let finalScore = ((10 - pValue) + 1) * weightParam;
        ind.score = Math.round(finalScore);
      }
    }
    else if (benchmark == 0) {
      pValue = this.pgiService.getProcsdValue(100, 10, 1, state.calcRawValue, weight);
      let weightParam: number = (weight / 10);
      let finalScore = ((10 - pValue) + 1) * weightParam;
      state.score = Math.round(finalScore);

    }
  }

}
