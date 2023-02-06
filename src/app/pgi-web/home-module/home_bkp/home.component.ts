import { Component, OnInit,ViewChild} from '@angular/core';
import { SlidesOutputData, OwlOptions } from 'ngx-owl-carousel-o';
import { domains } from '../../../../utils/data';
// import * as CanvasJS from '../../../../assets/js/canvas.js';
import { UsersService } from 'src/app/services/users.service';
import { environment } from 'src/environments/environment';
// import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';
// import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource  } from '@ng-bootstrap/ng-bootstrap';
import {NgbCarousel,NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
declare var myExtObject: any;
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';
import { AutoHeightService } from 'ngx-owl-carousel-o/lib/services/autoheight.service';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css','../../../../assets/newdashboard/css/style.css','../../../../assets/newdashboard/css/responsive.css'],
  providers: [NgbCarouselConfig]
})
export class HomeComponent implements OnInit {

  // images = [62, 83, 466, 965, 982, 1043, 738].map((n) => `https://picsum.photos/id/${n}/900/500`);

  // paused = false;
  // unpauseOnArrow = false;
  // pauseOnIndicator = false;
  // pauseOnHover = true;
  // @ViewChild('carousel', {static : true}) carousel: NgbCarousel;
  // togglePaused() {
  //   if (this.paused) {
  //     this.carousel.cycle();
  //   } else {
  //     this.carousel.pause();
  //   }
  //   this.paused = !this.paused;
  // }

  // onSlide(slideEvent: NgbSlideEvent) {
  //   if (this.unpauseOnArrow && slideEvent.paused &&
  //     (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)) {
  //     this.togglePaused();
  //   }
  //   if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
  //     this.togglePaused();
  //   }
  // }
  public slidesList = new Array<never>(5);
public slides = this.slidesList.length;
  slidesStore = [
    { id: 'slide_0', src: 'assets/images/home-banner/all.jpg', alt: '' },
    { id: 'slide_1', src: 'assets/images/home-banner/banner-1.jpg', alt: 'Learning Outcomes & Quality' },
    { id: 'slide_2', src: 'assets/images/home-banner/banner-2.jpg', alt: 'Access' },
    { id: 'slide_3', src: 'assets/images/home-banner/banner-3.jpg', alt: 'Infrastructure & Facilities' },
    { id: 'slide_4', src: 'assets/images/home-banner/banner-4.jpg', alt: 'Equity' },
    { id: 'slide_5', src: 'assets/images/home-banner/banner-5.jpg', alt: 'Governance Processes' }
  ];

  states: any = [];
  territories: any = [];
  domains: any = [];
  domainData: any;
  topAchiversDetails: any;
  topAchivres: any = [];
  topDomainAchiver: any;
  topStates: any;
  activeMenu: any;
  indData: any;
  view: any;
  domainCat: any;
  outDomain: any;
  govDomain: any;
  dName: any;
  activeSlides: SlidesOutputData;
  indicatorScore: any = {};
  userDto: any = {};
  locationDto: any = {};
  dbStates: any = [];
  displayDomain: any;
  indWiseScores: any = [];
  sessionScores: any = [];
  showLoader = true;
  // private wowSubscription: Subscription;

  // constructor(public pgiService: UsersService) { }
  @ViewChild('myCarousel', {static : true}) myCarousel: NgbCarousel;
  // @ViewChild('myCarousel') myCarousel: NgbCarousel;
  private data = ["Slide 1","Slide 2","Slide 3"]
  //I prefered use private for all injected component
  constructor(private config: NgbCarouselConfig,public pgiService: UsersService) {
    this.config.interval = 10000;
    this.config.wrap = false;
    this.config.keyboard = false;
  }


  homeBanner: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    autoplay: true,
    autoplayTimeout: 5000,
    smartSpeed: 1000,
    dots: true,
    navText: ['', ''],
    responsiveRefreshRate: 100,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: false
  };

  slideChange(data: SlidesOutputData) {
    setTimeout(() => {
      let slides = Array.from(document.querySelectorAll('.owl-item'));
      slides.forEach((el) => {
        let slide = el.querySelector('.carousel-caption');
        slide.classList.remove('animated', 'captionUp', 'delay-1s');
      })
      let activeSlide = document.querySelector('.owl-item.active');
      let caption = activeSlide.querySelector('.carousel-caption');
      caption.classList.add('animated', 'captionUp', 'delay-1s');
    });
  }


  ngOnInit() {

    if ($(".logoSlider").length) {
    
      $('.logoSlider').owlCarousel({
          loop: true,
          autoplay: true,
          autoplayTimeout: 3000,
          smartSpeed: 1200,
          autoWidth:true,
          margin: 30,
          nav: true,
          navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
          dots: false,
          responsive: {
              0: {
                  items: 1
              },
              600: {
                  items: 3
              },
              1000: {
                  items: 4
              }
          }
      });
      /*owl.parent().find(".logoCarouselNav .prev").click(function() {
          owl.trigger('prev.owl.carousel');
      });
      owl.parent().find(".logoCarouselNav .next").click(function() {
          owl.trigger('next.owl.carousel');
      });
      $(".logoCarouselNav").show();*/
  }



    this.getStateData();
    this.pgiService.masterCat = 'G';
    this.pgiService.gradeType = 0;
    this.myCarousel.activeId='2';
    // this.states = statesData;
    // this.territories = territoriesData;
    this.domains = domains;

    // this.domainData = myExtObject.getDomainData();
    // this.topAchivres = gradeData.Grade1.concat(gradeData.Grade2).slice(0, 5);
    // this.topAchiversDetails = this.states.filter((val: any) => {
    //   val.grade = myExtObject.findGrade(val.key);
    //   return this.topAchivres.includes(val.key);
    // });
    // this.territories.filter((val: any) => {
    //   val.grade = myExtObject.findGrade(val.key);
    //   if (this.topAchivres.includes(val.key)) {
    //     this.topAchiversDetails.push(val);
    //   }
    // });

    this.showTabWise('M');


    // window.addEventListener('scroll', () => {
    //   const scrolled = window.pageYOffset;
    //   const elem: any = document.querySelector('.parallax');
    //   elem.style.top = -(scrolled * 0.2) + 'px';
    // });
  }

  getStateData() {
    // document.querySelector('body').style.overflowY = 'hidden';
    this.indicatorScore.year = sessionStorage.getItem('year');
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
          this.pgiService.scores = res.scores;
          this.getStateList();
        }
      }
    }, error => { });

    // else {
    //   this.pgiService.scores = sessionScores;
    //   this.prepareHomeData();

    // }
  }

  getStateList() {

    this.pgiService.getStateList(this.locationDto).subscribe(res => {
      if (res.statusCode === environment.success_code) {
        this.dbStates = res.states;
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
        this.prepareHomeData();
      }
    });
  }


  prepareHomeData() {
    this.pgiService.setStatesData(this.pgiService.scores);
    this.pgiService.mapRefresh();
    // this.pgiService.showGradeWise(0);
    this.pgiService.getGridWiseChart();
    this.topAchivres = this.pgiService.getTopAchivres(this.pgiService.scores);
    this.pgiService.getDomainData('1');
    this.pgiService.prepareGradeTable();
    this.showLoader = false;
    // document.querySelector('body').style.overflowY = 'auto';

  }


  showSubMenu() {
    if (this.pgiService.masterCat === 'G') {
      this.pgiService.gradeType = 0;
      this.pgiService.setStatesData(this.pgiService.scores);
      this.pgiService.getGridWiseChart();
    } else {
      this.domainCat = 'O';
      this.outDomain = 1;
      this.getIndData(1);
    }
    this.showMapOnTime();
    this.showTabWise('M');
  }

  showTabWise(type) {
    this.view = type;
    if (this.pgiService.masterCat === 'G') {
      if (this.view === 'M') {
        this.pgiService.gradeType = 0;
        this.pgiService.showType = "gradeMap";
      }
      else {
        this.pgiService.showType = "gradeTable";
      }

    }
    else {
      if (this.view === 'M') {
        this.pgiService.showType = "domMap";
      }
      else {
        setTimeout(() => {
          this.getIndData(1);
        });
        this.domainCat = 'O';
        this.outDomain = 1;
        this.pgiService.showType = "domTable";

      }
    }
  }

  getCatWiseDomains() {
    if (this.domainCat == 'O') {
      this.outDomain = 1;
      this.getIndData(1);
    } else {
      this.govDomain = 5;
      this.getIndData(5);
    }
  }

  getIndData(domain) {
    this.activeMenu = '';
    // this.indData = (domain == 1 ? Domain1 : (domain == 2 ? Domain2 : (domain == 3 ? Domain3 : (domain == 4 ? Domain4 : Domain5))));
    this.userDto.recordId = domain;
    this.pgiService.getIndicators(this.userDto).subscribe(res => {
      if (res.statusCode === environment.pgi_success_code) {
        this.indData = res.indicators;
      }
    }, error => { });

    this.pgiService.showDomainWise(domain);
    var domainChart = [];
    var domainChartData: any = {};
    var dataPoints = [];

    this.pgiService.scores.sort((a, b) => {
      return a.domainScore['domain' + domain] - b.domainScore['domain' + domain];
    })

    for (var j = 0; j < this.pgiService.scores.length; j++) {
      dataPoints.push({
        label: this.pgiService.scores[j].stateName,
        y: parseInt(this.pgiService.scores[j].domainScore['domain' + domain])
      });
    }
    domainChartData.dataPoints = dataPoints;
    domainChart.push(domainChartData);
    domainChartData = {};
    dataPoints = [];
    for (var j = 0; j < this.pgiService.scores.length; j++) {
      dataPoints.push({
        label: this.pgiService.scores[j].stateName,
        y: (this.pgiService.scores[j].domainScore['domain' + domain + 'Max'] - this.pgiService.scores[j].domainScore['domain' + domain])
      });
    }
    domainChartData.dataPoints = dataPoints;
    domainChart.push(domainChartData);
    for (var i = 0; i < domainChart.length; i++) {

      domainChart[i].type = "stackedBar";
      this.dName = this.domains.filter(function (val) {
        return (val.key == ("Domain_" + domain));
      });
      domainChart[i].name = this.dName[0].value;
      if (i == 1) {
        domainChart[i].name = 'Distance from max score.';
      }
      domainChart[i].showInLegend = true;

    }
    myExtObject.getDomainWiseChart(domain, domainChart);
    // // myExtObject.hideWatermark();
  }

  showIndicatorWise(ind) {
    let indStateScore = {};
    this.activeMenu = ind.serial;
    this.indicatorScore.indId = ind.indId
    this.indicatorScore.year = sessionStorage.getItem('year');
    this.userDto.score = this.indicatorScore;
    this.pgiService.getStateData(this.userDto).subscribe(res => {
      if (res.statusCode === environment.pgi_success_code) {
        if (res.scores) {
          this.indWiseScores = res.scores;
          for (let i = 0; i < this.pgiService.scores.length; i++) {
            for (let j = 0; j < this.indWiseScores.length; j++) {
              if (this.pgiService.scores[i].stateId == this.indWiseScores[j].stateId) {
                indStateScore[this.pgiService.scores[i].stateName] = this.indWiseScores[j].score;
              }
            }
          }
          this.pgiService.showIndicatorWise(indStateScore);
        }
      }
    });
  }

  showMapOnTime() {
    setTimeout(() => {
      if (this.pgiService.masterCat === 'G') {
        this.pgiService.showGradeWise(0);
      }
      else {
        this.pgiService.showDomainWise(1);
      }
    });
  }





}
