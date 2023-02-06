import { Component, OnInit, AfterViewInit } from '@angular/core';
import { SlidesOutputData, OwlOptions } from 'ngx-owl-carousel-o';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-national-findings',
  templateUrl: './national-findings.component.html',
  styleUrls: ['./national-findings.component.css']
})
export class NationalFindingsComponent implements OnInit, AfterViewInit {
  nfDomains: any = [];
  domainData: any;
  arr: any;
  arrAvg: any;
  states: any;
  territories: any;
  dom: any;
  nfScores: any = [];
  showSlider = 'big';


  bigSlider: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    autoplay: false,
    smartSpeed: 1000,
    dots: false,
    navText: ['', ''],
    responsiveRefreshRate: 100,
    responsive: {
      0: {
        items: 1
      }
    },
    nav: true
  };
  smSlider: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    autoplay: false,
    smartSpeed: 1000,
    dots: false,
    navText: ['', ''],
    responsiveRefreshRate: 100,
    margin: 10,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  };
  constructor(public pgiService: UsersService) { }

  activeSlides: SlidesOutputData;
  getData(data: SlidesOutputData) {
    this.activeSlides = data;
    let items = document.querySelectorAll('.owl-item .progress-meter');
    items.forEach(i => {
      i.removeAttribute('style');
    });
    setTimeout(() => {
      this.loaderAnimation();
    });
  }

  loaderAnimation() {
    let progresslItem = document.querySelectorAll('.owl-item.active .progress-box');
    progresslItem.forEach((item: any) => {
      let performance = item.querySelector('.performance');
      let total = item.querySelector('.total');
      let t = total.textContent;
      let p = performance.textContent;
      let percentage;

      function getPercentage(a, b) {
        percentage = (a / b) * 100;
      }
      getPercentage(p, t);
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
      // let calc = Math.round(2000 / p) - 2;
      progress(percentage);
    });
  }

  ngOnInit() {
   this.pgiService.prepareNfData();
  }
  ngAfterViewInit() {

  }


}
