import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-state-wise-domain',
  templateUrl: './state-wise-domain.component.html',
  styleUrls: ['./state-wise-domain.component.css']
})
export class StateWiseDomainComponent implements OnInit {
  scores: any = [];
  indicatorScore: any = {};
  userDto: any = {};
  locationDto: any = {};
  dbStates: any = [];
  filtersModel: any = {};
  fYear: any;
  showFilters = true;
  years = [
    { key: '2017-18', value: '2017' },
    { key: '2018-19', value: '2018' }
  ];
  constructor(private pgiService: UsersService) { }

  ngOnInit() {

  }

  getStateData() {

    if (sessionStorage.getItem('year') == this.fYear) {
      if (localStorage.getItem('scores')) {

        this.scores = JSON.parse(localStorage.getItem('scores'));
      }
    }
    else {

      // document.querySelector('body').style.overflowY = 'hidden';
      this.showFilters = false;
      this.indicatorScore.year = this.fYear;
      this.userDto.score = this.indicatorScore;
      this.userDto.param = "D";
      // let sessionScores = [];
      // if (JSON.parse(sessionStorage.getItem("scores"))) {
      //   sessionScores = JSON.parse(sessionStorage.getItem("scores"));
      // }

      this.pgiService.getStateData(this.userDto).subscribe(res => {
        console.log(res);
        if (res.statusCode === environment.pgi_success_code) {
          if (res.scores) {
            this.scores = res.scores;
            this.getStateList();
          }
        }
      }, error => { });

      // else {
      //   this.pgiService.scores = sessionScores;
      //   this.prepareHomeData();

      // }
    }
  }

  getStateList() {

    this.pgiService.getStateList(this.locationDto).subscribe(res => {
      if (res.statusCode === environment.success_code) {
        this.dbStates = res.states;
        for (let i = 0; i < this.dbStates.length; i++) {

          for (let j = 0; j < this.scores.length; j++) {

            if (this.dbStates[i].stateId == this.scores[j].stateId) {
              this.scores[j].stateName = this.dbStates[i].stateName;
            }
          }
        }
      }
    });
  }

}
