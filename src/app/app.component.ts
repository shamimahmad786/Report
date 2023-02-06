import { Component, OnInit, AfterViewInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';
// import { MatSelectSearchVersion } from 'ngx-mat-select-search';
// import { VERSION } from '@angular/material/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  // title = 'PGI';
  constructor(private wowService: NgwWowService) { }

  ngOnInit() {
    this.wowService.init();
  }
  // version = VERSION;

  // matSelectSearchVersion = MatSelectSearchVersion;
  ngAfterViewInit() {
    // setTimeout(() => {
    //   this.spinner.hide();
    // }, 2000);
  }

}
