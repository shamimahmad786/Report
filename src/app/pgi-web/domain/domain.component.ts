import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { domains } from 'src/utils/data';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-domain',
  templateUrl: './domain.component.html',
  styleUrls: ['./domain.component.css']
})
export class DomainComponent implements OnInit, AfterViewInit {
  domainId: any;
  domainDetails: any;
  domains = domains;
  topDomainAchiver = [];
  topStates = [];
  topPerformerStates = [];
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
  constructor(private route: ActivatedRoute, public pgiService: UsersService) { }

  ngOnInit() {
    // this.route.parent.params.subscribe(p => {
    //   console.log(p['id']);
    // });
    this.route.params.subscribe(param => {
      this.domainId = parseInt(param[`id`]);
      console.log(this.domainId);
      sessionStorage.setItem('dId', this.domainId);
      this.pgiService.prepareDomainData(this.domainId);
    });
  }

  ngAfterViewInit() {
    let card = document.querySelectorAll('.card-view .owl-item');
    for (let i = 0; i < card.length; i++) {
      card[i].addEventListener('mouseover', function () {
        var current = document.getElementsByClassName('up');
        if (current.length > 0) {
          current[0].className = current[0].className.replace(' up', '');
        }
        this.className += ' up';
      });
    }
  }

}
