import { Component, OnInit, Pipe, Sanitizer, AfterContentInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { domains } from '../../../utils/data';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent implements OnInit, AfterViewInit {
  pageId: any;
  stateDetail: any = {};
  grade: any;
  domains: any;
  simStates: any = [];
  simStateDetails: any;
  indicatorScore: any = {};
  userDto: any = {}
  indScores: any = {};
  constructor(private route: ActivatedRoute, private sanitizer: Sanitizer, public pgiService: UsersService) { }

  ngOnInit() {

    this.domains = domains;
    this.simStates = [];

    this.route.params.subscribe(param => {
      this.pageId = param[`sId`];
      sessionStorage.setItem("sId", this.pageId);

      if (this.pgiService.prepareStateData(this.pageId)) {

       
      }

      });
  }

  ngAfterViewInit() {
    let accordion = document.getElementsByClassName('accordion');
    for (let i = 0; i < accordion.length; i++) {
      accordion[i].addEventListener('click', function () {
        let panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + 'px';
        }
      });
    }
  }  

}
