import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  pageId: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(param => {
      this.pageId = param[`id`];
    });
  }

}
