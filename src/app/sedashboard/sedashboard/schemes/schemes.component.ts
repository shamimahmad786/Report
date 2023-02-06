import { Component, OnInit } from '@angular/core';
import { HighchartsComponent } from 'src/app/shared/highcharts/highcharts.component';
declare var $: any;

@Component({
  selector: 'app-schemes',
  templateUrl: './schemes.component.html',
  styleUrls: ['./schemes.component.css','../../../../assets/newdashboard/css/style.css']
})
export class SchemesComponent implements OnInit {

  isValid2:boolean = false;
  isValid3:boolean = true;

  constructor(private _highchart:HighchartsComponent) { }
   data1 = [
    ['SS', 38750.50],
    ['MDM', 11000],
    ['DMESMM', 220],
    ['ALT', 10],
    ['PLA',100]
]

data2 = [
  ['NMCMSS', 373],
  ['IGSE', 110],
  ['ODB', 25],
  ['DHRUV', 10],
  ['NAT', 1.50]
]

data3 = [
  ['KVS', 5516.50],
  ['NVS', 3300],
  ['NCERT', 300],
  ['CTSA', 66],
  ['NBB', 22]
]

data4 = [
  ['NLMA', 0.50],
  ['S', 35],
  ['DAE', 5]
]

  ngOnInit() {

    $(document).ready(function() {
      $('.colorTabs').scrollTabs();

      if ($(".resTab").length) {
       
        $('.resTab').responsiveTabs({
            rotate: false,
            startCollapsed: 'tab' //accordion
                ,
            collapsible: 'tab' //accordion
                ,
            scrollToAccordion: true
        });
    };
  });
   

    this._highchart.roundPieChart('chartP1',this.data1,'','');
    this._highchart.roundPieChart('chartP2',this.data2,'','');
    this._highchart.roundPieChart('chartP3',this.data3,'','');
    this._highchart.roundPieChart('chartP4',this.data4,'','');

  }
  myclick2(valid){
    // this.sground();
    this.isValid2=valid;
}
myclick(valid){
  // this.sground();
  this.isValid3=valid;
}}
