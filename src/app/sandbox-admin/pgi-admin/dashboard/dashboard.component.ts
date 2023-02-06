import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data-service.service';
import { domains } from 'src/utils/data'
import { UsersService } from 'src/app/services/users.service';
import { LocationService } from 'src/app/services/location.service';
export interface domainData {
  p_id: string,
  q_s_no: string,
  question_desc: string,
  dom_id: number,
  questionweight: string,
  weight_val: string,
  calvalue: string,
  data_source: string,
  state_name: string,
  domain_name: string,
  state_id: number
}

export interface domainScore {
  score: number,
  max: number,
  img: string,
  value: string
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  indReqDto: any = {};
  domains: any = [];
  stateGrade: any;
  stateDetail: any = {};
  currentUser: any = {};
  scoreYear: String = "2019";
  domain1: any[] = [];
  domain2: any[] = [];
  domain3: any[] = [];
  domain4: any[] = [];
  domain5: any[] = [];
  domainDatas: domainData;
  domain1Get: number = 0;
  domain1Total: number = 0;
  domain2Get: number = 0;
  domain2Total: number = 0;
  domain3Get: number = 0;
  domain3Total: number = 0;
  domain4Get: number = 0;
  domain4Total: number = 0;
  domain5Get: number = 0;
  domain5Total: number = 0;
  domainScores: any[] = [];
  scoreValue: domainScore;
  paths: String;
  stateName:String;
  stateImg:String;
  totalScores:number;
  constructor(private dataService: DataService, private pgiService: UsersService, private location: LocationService) { }

  ngOnInit() {

    this.domains = domains;
    this.currentUser = JSON.parse(sessionStorage.getItem("currentUser"));

    if (this.currentUser.paramName === "STLU") {
      this.indReqDto.stateId = this.currentUser.paramValue;
      this.indReqDto.param = "D";
      this.indReqDto.year = this.scoreYear;
      this.getStateScores(this.indReqDto);
      this.getDomain(this.indReqDto.stateId,this.indReqDto.year)
    }

  }

  getStateScores(indReqDto) {

    this.location.getStateById(this.indReqDto.stateId).subscribe(res => {
      this.stateDetail = res;
    })

    this.dataService.getStateScore(indReqDto).subscribe(res => {
      console.log(res);
      // alert("State Score--->"+JSON.stringify(res));
      let score = res.scores[0];
      this.stateGrade = score.domainScore.grade

      for (var i = 0; i < this.domains.length; i++) {
        this.domains[i].score = score.domainScore['domain' + (i + 1)];
      }
      this.pgiService.refreshLoader();
      setTimeout(() => {
        this.pgiService.loaderAnimation();
      });
    })
  }

  changeIndexData(event) {
    this.currentUser = JSON.parse(sessionStorage.getItem("currentUser"));
    this.scoreYear = event.target.value;
    this.indReqDto.stateId = this.currentUser.paramValue;
    this.indReqDto.param = "D";
    this.indReqDto.year = this.scoreYear;
    this.getDomain(this.indReqDto.stateId, event.target.value);
  }


  getDomain(getStateId,domainYear) {
    // alert("get domain called sate id---->" + getStateId);
    this.domain1 = [];
    this.domain2 = [];
    this.domain3 = [];
    this.domain4 = [];
    this.domain5 = [];
    this.domainScores=[];
    this.domain1Get=0;
    this.domain1Total=0;
    this.domain2Get=0;
    this.domain2Total=0;
    this.domain3Get=0;
    this.domain3Total=0;
    this.domain4Get=0;
    this.domain4Total=0;
    this.domain5Get=0;
    this.domain5Total=0;
    this.totalScores=0;
    // alert(this.domain1.length);
    let domainJson={'stateId':getStateId,'year':domainYear}
    this.pgiService.getDomain(domainJson).subscribe(res => {
      // alert("Domain data--->" + JSON.stringify(res))
      for (let i = 0; i < res.rowValue.length; i++) {
        this.domainDatas = {
          p_id: res.rowValue[i].p_id,
          q_s_no: res.rowValue[i].q_s_no,
          question_desc: res.rowValue[i].question_desc,
          dom_id: res.rowValue[i].dom_id,
          questionweight: res.rowValue[i].questionweight,
          weight_val: res.rowValue[i].weight_val,
          calvalue: res.rowValue[i].calvalue,
          data_source: res.rowValue[i].data_source,
          state_name: res.rowValue[i].state_name,
          domain_name: res.rowValue[i].domain_name,
          state_id: res.rowValue[i].state_id
        }

        if (res.rowValue[i].dom_id == 1) {
          this.domain1.push(this.domainDatas);
          this.domain1Get += +this.domainDatas.weight_val;
          this.domain1Total += +this.domainDatas.questionweight;
        } else if (res.rowValue[i].dom_id == 2) {
          this.domain2.push(this.domainDatas);
          this.domain2Get += +this.domainDatas.weight_val;
          this.domain2Total += +this.domainDatas.questionweight;
        } else if (res.rowValue[i].dom_id == 3) {
          this.domain3.push(this.domainDatas);
          this.domain3Get += +this.domainDatas.weight_val;
          this.domain3Total += +this.domainDatas.questionweight;
        } else if (res.rowValue[i].dom_id == 4) {
          this.domain4.push(this.domainDatas);
          this.domain4Get += +this.domainDatas.weight_val;
          this.domain4Total += +this.domainDatas.questionweight;
        } else if (res.rowValue[i].dom_id == 5) {
          this.domain5.push(this.domainDatas);
          this.domain5Get += +this.domainDatas.weight_val;
          this.domain5Total += +this.domainDatas.questionweight;
        }
      }

      this.scoreValue = { score: this.domain1Get, max: this.domain1Total, img: "assets/images/domains-icon/lo.png", value: "Learning Outcomes & Quality" }
      this.domainScores.push(this.scoreValue);
      this.scoreValue = { score: this.domain2Get, max: this.domain2Total, img: "assets/images/domains-icon/ac.png", value: "Access" }
      this.domainScores.push(this.scoreValue);
      this.scoreValue = { score: this.domain3Get, max: this.domain3Total, img: "assets/images/domains-icon/in.png", value: "Infrastructure & Facilities" }
      this.domainScores.push(this.scoreValue);
      this.scoreValue = { score: this.domain4Get, max: this.domain4Total, img: "assets/images/domains-icon/eq.png", value: "Equity" }
      this.domainScores.push(this.scoreValue);
      this.scoreValue = { score: this.domain5Get, max: this.domain5Total, img: "assets/images/domains-icon/gp.png", value: "Governance Processes" }
      this.domainScores.push(this.scoreValue);
      this.totalScores =this.domain1Get +this.domain2Get+this.domain3Get+this.domain4Get+this.domain5Get
      // alert("Domain 1 datas--->"+JSON.stringify(this.domain4));
      // alert("Domain 1 datas--->"+JSON.stringify(this.domain5))
      // alert(this.totalScores)

    }, error => { });
  }

}
