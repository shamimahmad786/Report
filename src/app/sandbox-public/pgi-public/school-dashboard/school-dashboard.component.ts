import { Component, OnInit, ɵConsole,ViewChild,ElementRef,TemplateRef } from '@angular/core';
import { ReportServiceService } from 'src/app/services/report-service.service';
import * as Highcharts from 'highcharts';
import { HighchartsComponent } from 'src/app/shared/highcharts/highcharts.component';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
//import { AgGridModule } from 'ag-grid-angular';
// import * as Highcharts from 'highcharts';
import HC_exportData from 'highcharts/modules/exporting';
import HC_solidgauge from 'highcharts/modules/solid-gauge'
import HC_cylinder from 'highcharts/modules/cylinder';
import HC_exporting from 'highcharts/modules/exporting';
import HC_variwide from 'highcharts/modules/variwide';
import HC_exportData1 from 'highcharts/modules/export-data';
import HC_series from 'highcharts/modules/series-label';
import HC_highcharts3d from 'highcharts/highcharts-3d';
import HC_accessibility from 'highcharts/modules/accessibility';
import HC_pyramid3d from 'highcharts/modules/pyramid3d';
import HC_funnel3d from 'highcharts/modules/funnel3d';
// import HC_cylinder from 'highcharts/modules/cylinder';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Width } from 'ngx-owl-carousel-o/lib/services/carousel.service';
import { HttpClient } from '@angular/common/http';
//import * as sampleData from 'src/app/test.json'
import dummyData from 'src/app/_file/myFile.json';
import testdata1 from 'src/app/_file/testData.json';
import { bindCallback } from 'rxjs';
// import { NgAnimatedCounterParams } from '@bugsplat/ng-animated-counter';


HC_exportData(Highcharts);
HC_solidgauge(Highcharts);
HC_highcharts3d(Highcharts);
HC_cylinder(Highcharts);
HC_exporting(Highcharts);
HC_variwide(Highcharts);
HC_exportData1(Highcharts);
HC_series(Highcharts);
HC_accessibility(Highcharts);
HC_funnel3d(Highcharts);
HC_pyramid3d(Highcharts);

@Component({
  selector: 'app-school-dashboard',
  templateUrl: './school-dashboard.component.html',
  styleUrls: ['./school-dashboard.component.css'],
  
})
export class SchoolDashboardComponent implements OnInit {

  isValid:boolean = false;
  isValid2:boolean = true;
  studentWidth:number=0;

  managvscatDrilldownSerisData:any[]=[];
  managvscatSeriesData:any[]=[];
  managvscatDrilldownSerisArrayData:any[]=[];
  masterCondition;
  values:any;
  listOfObjects = [];
  // public readonly title: string = '@bugsplat/ng-animated-counter';
  // public params: NgAnimatedCounterParams = {start:100, end: 500, interval:50}

  state;
  district;
  block;
  uniState = 'national';
  uniDist = 'all';
  uniYear = '2018-19';
  uniBlock = 'all';
  query = JSON.stringify({year:'2018-19',state:'national',dist:'none',block:'none'});;

  years = [{name:'2018-19',value:'2018-19'},{name:'2017-18',value:'2017-18'},{name:'2016-17',value:'2016-17'}]
  reportList = new Array(4);
  currentUser;
  // totalschool
  totalschool = [];
  totalschoolcat = [];
  cwsngovtele = [];
  cwsngovtsec = [];
  cwsngovthsec = [];
  cwsnaidedele = [];
  cwsnaidedsec = [];
  cwsnaidedhsec = [];
  cwsnpvtele = [];
  cwsnpvtsec = [];
  cwsnpvthsec = [];
  cwsnothele = [];
  cwsnothsec = [];
  cwsnothhsec = [];
  boystoiletele = [];
  boystoiletsec = [];
  boystoilethsec = [];
  girlstoiletele = [];
  girlstoiletsec = [];
  girlstoilethsec = [];
  boysschtypcat = [];
  girlsschtypcat = [];
  coedschtypcat = [];
  totalschoolschtype =[];
  libarary = [];
  groundgovt = [];
  groundaided = [];
  groundprivate = [];
  groundothers = [];
  computer = [];s
  // drinkingwaterdata = [];
  electricitygovt = [];
  electricityaided = [];
  electricityprivate = [];
  electricityothers = [];
  drnkwatergovt = [];
  drnkwateraided = [];
  drnkwaterprivate= [];
  drnkwaterothers=[];
  drnkwater = [];
  handwash =[];
  boystoilet1 = [];
  girlstoilet1 =[];
  electricity = [];
  internet =[];
  medical1 = [];
  ramp = [];
  rampele = [];
  rampsec = [];
  ramphsec = [];
  test61 = [];
  test62 = [];
  test63 = [];
  test64 = [];
  test65 = [];
  test66 = [];
  test67 = [];
  test68 = [];
  test69 = [];
  test70 = [];
  test71 = [];
  test72 = [];

  columnDefs = [
    { field: 'SNo', sortable: true, filter: true },
    { field: 'SchoolManagement', sortable: true, filter: true },
    { field: 'Primary', sortable: true, filter: true},
    { field: 'UpperPrimary', sortable: true, filter: true},
    { field: 'Secondary', sortable: true, filter: true},
    { field: 'HigherSecondary', sortable: true, filter: true}
  ];

  rowData: {SNo:number, SchoolManagement:string, Primary:number, UpperPrimary:number, Secondary:number, HigherSecondary:number} [] = dummyData;
  
  
  

  constructor(private _reportServiceService: ReportServiceService, private http: HttpClient,
  private _highchart:HighchartsComponent,private reportService: ReportServiceService,private modalService: NgbModal) {}

  @ViewChild('Graphical', { static: true }) Graphical: TemplateRef<any>;

  ngOnInit() {

    Highcharts.setOptions({
      lang: {
        thousandsSep: ""
      }
    });



    const input = {name: 'nome', value: 100000};
    this.listOfObjects.push(input);
       
    // this.stesting();
    this.sschltypebycat();
    // this.scomputerFacility();
    this.onLoad();
    // this.sbtoilet();
    // this.sbtoilet();
    // this.sgirlstoilet();

    //console.log(sampleData);
    // this.smyExpanded()
    this.currentUser = JSON.parse(sessionStorage.getItem('currentUser'));

    var totalschool = [];
    
    // var testdata1 = JSON.parse(testdata1);
    // alert("test567-->" + testdata1);
    for (var i=0; i<testdata1.length; i++)
    {
      if(testdata1[i].year == "2021-22"){
      //Total NUmber of Schools // in use
      var a = [];
      a.push(testdata1[i].name);
      a.push(testdata1[i].number);
      if (a[0] != null){
        this.totalschool.push(a);
      }


      // Total Number of School Category Wise // in use
      var a = [];
      a.push(testdata1[i].totschcatname);
      a.push(testdata1[i].totschcatnum);
      if (a[0] != null){
        this.totalschoolcat.push(a);
      }


      // Total Number of School on School types // in use
      var a = [];
      a.push(testdata1[i].schtypename);
      a.push(testdata1[i].schtypnumber);
      if (a[0] != null){
        this.totalschoolschtype.push(a);
      }

      // Total Number of School type by Category // in use
      // Boys
      if(testdata1[i].boyschtypcatelem != null){
        this.boysschtypcat.push(testdata1[i].boyschtypcatelem);
      }
      if(testdata1[i].boyschtypcatsec != null){
        this.boysschtypcat.push(testdata1[i].boyschtypcatsec);
      }
      if(testdata1[i].boyschtypcathsec != null){
        this.boysschtypcat.push(testdata1[i].boyschtypcathsec);
      }
      //Girsl // in use
      if(testdata1[i].girlschtypcatelem != null){
        this.girlsschtypcat.push(testdata1[i].girlschtypcatelem);
      }
      if(testdata1[i].girlschtypcatsec != null){
        this.girlsschtypcat.push(testdata1[i].girlschtypcatsec);
      }
      if(testdata1[i].girlschtypcathsec != null){
        this.girlsschtypcat.push(testdata1[i].girlschtypcathsec);
      }
      //Co-Ed // in use
      if(testdata1[i].coedschtypcatelem != null){
        this.coedschtypcat.push(testdata1[i].coedschtypcatelem);
      }
      if(testdata1[i].coedschtypcatsec != null){
        this.coedschtypcat.push(testdata1[i].coedschtypcatsec);
      }
      if(testdata1[i].coedschtypcathsec != null){
        this.coedschtypcat.push(testdata1[i].coedschtypcathsec);
      }

            ///---Drinking water---- // in use
            if(testdata1[i].drnkwatergovt != null){
              this.drnkwater.push(testdata1[i].drnkwatergovt);
            }
            if(testdata1[i].drnkwateraided != null){
              this.drnkwater.push(testdata1[i].drnkwateraided);
            }
            if(testdata1[i].drnkwaterpvt != null){
              this.drnkwater.push(testdata1[i].drnkwaterpvt);
            }
            if(testdata1[i].drnkwateroth != null){
              this.drnkwater.push(testdata1[i].drnkwateroth);
            }
      
      
            if(testdata1[i].handwashgovt != null){
              this.handwash.push(testdata1[i].handwashgovt);
            }
            if(testdata1[i].handwashaided != null){
              this.handwash.push(testdata1[i].handwashaided);
            }
            if(testdata1[i].handwashpvt != null){
              this.handwash.push(testdata1[i].handwashpvt);
            }
            if(testdata1[i].handwashoth != null){
              this.handwash.push(testdata1[i].handwashoth);
            }
      
      
            if(testdata1[i].boystoiletgovt != null){
              this.boystoilet1.push(testdata1[i].boystoiletgovt);
            }
            if(testdata1[i].boystoiletaided != null){
              this.boystoilet1.push(testdata1[i].boystoiletaided);
            }
            if(testdata1[i].boystoiletpvt != null){
              this.boystoilet1.push(testdata1[i].boystoiletpvt);
            }
            if(testdata1[i].boystoiletoth != null){
              this.boystoilet1.push(testdata1[i].boystoiletoth);
            }
      
      
            if(testdata1[i].girlstoiletgovt != null){
              this.girlstoilet1.push(testdata1[i].girlstoiletgovt);
            }
            if(testdata1[i].girlstoiletaided != null){
              this.girlstoilet1.push(testdata1[i].girlstoiletaided);
            }
            if(testdata1[i].girlstoiletpvt != null){
              this.girlstoilet1.push(testdata1[i].girlstoiletpvt);
            }
            if(testdata1[i].girlstoiletoth != null){
              this.girlstoilet1.push(testdata1[i].girlstoiletoth);
            }
      
            //Computer // in use
            if(testdata1[i].compgovt != null){
              this.computer.push(testdata1[i].compgovt);
            }
            if(testdata1[i].compaided != null){
              this.computer.push(testdata1[i].compaided);
            }
            if(testdata1[i].comppvt != null){
              this.computer.push(testdata1[i].comppvt);
            }
            if(testdata1[i].compothers != null){
              this.computer.push(testdata1[i].compothers);
            }
            //INternet // in use
            if(testdata1[i].internetgovt != null){
              this.internet.push(testdata1[i].internetgovt);
            }
            if(testdata1[i].internetaided != null){
              this.internet.push(testdata1[i].internetaided);
            }
            if(testdata1[i].internetpvt != null){
              this.internet.push(testdata1[i].internetpvt);
            }
            if(testdata1[i].internetothers != null){
              this.internet.push(testdata1[i].internetothers);
            }
            //Electricity // in use
            if(testdata1[i].electgovt != null){
              this.electricity.push(testdata1[i].electgovt);
            }
            if(testdata1[i].electaided != null){
              this.electricity.push(testdata1[i].electaided);
            }
            if(testdata1[i].electpvt != null){
              this.electricity.push(testdata1[i].electpvt);
            }
            if(testdata1[i].electothers != null){
              this.electricity.push(testdata1[i].electothers);
            }

            //Medical and Ramp
            if(testdata1[i].medical1govt != null){
              this.medical1.push(testdata1[i].medical1govt);
            }
            if(testdata1[i].medical1aided != null){
              this.medical1.push(testdata1[i].medical1aided);
            }
            if(testdata1[i].medical1pvt != null){
              this.medical1.push(testdata1[i].medical1pvt);
            }
            if(testdata1[i].medical1oth != null){
              this.medical1.push(testdata1[i].medical1oth);
            }

            if(testdata1[i].rampgovt != null){
              this.ramp.push(testdata1[i].rampgovt);
            }
            if(testdata1[i].rampaided != null){
              this.ramp.push(testdata1[i].rampaided);
            }
            if(testdata1[i].ramppvt != null){
              this.ramp.push(testdata1[i].ramppvt);
            }
            if(testdata1[i].rampoth != null){
              this.ramp.push(testdata1[i].rampoth);
            }
      
      //CWSN // not in use
      // if(testdata1[i].cwsngovtelem != null){
      //   this.cwsngovtele.push(testdata1[i].cwsngovtelem);
      // }
      // if(testdata1[i].cwsngovtsec != null){
      //   this.cwsngovtsec.push(testdata1[i].cwsngovtsec);
      // }
      // if(testdata1[i].cwsngovthsec != null){
      //   this.cwsngovthsec.push(testdata1[i].cwsngovthsec);
      // }
      // if(testdata1[i].cwsnaidedelem != null){
      //   this.cwsnaidedele.push(testdata1[i].cwsnaidedelem);
      // }
      // if(testdata1[i].cwsnaidedsec != null){
      //   this.cwsnaidedsec.push(testdata1[i].cwsnaidedsec);
      // }
      // if(testdata1[i].cwsnaidedhsec != null){
      //   this.cwsnaidedhsec.push(testdata1[i].cwsnaidedhsec);
      // }
      // if(testdata1[i].cwsnpvtelem != null){
      //   this.cwsnpvtele.push(testdata1[i].cwsnpvtelem);
      // }
      // if(testdata1[i].cwsnpvtsec != null){
      //   this.cwsnpvtsec.push(testdata1[i].cwsnpvtsec);
      // }
      // if(testdata1[i].cwsnpvthsec != null){
      //   this.cwsnpvthsec.push(testdata1[i].cwsnpvthsec);
      // }
      // if(testdata1[i].cwsnothelem != null){
      //   this.cwsnothele.push(testdata1[i].cwsnothelem);
      // }
      // if(testdata1[i].cwsnothsec != null){
      //   this.cwsnothsec.push(testdata1[i].cwsnothsec);
      // }
      // if(testdata1[i].cwsnothhsec != null){
      //   this.cwsnothhsec.push(testdata1[i].cwsnothhsec);
      // }

      //CWSN // not in use
      // var a = [];
      // a.push(testdata1[i].cwsnname); 
      // a.push(testdata1[i].cwsnper)
      // a.push(testdata1[i].cwsnnumber);
      // if (a[0] != null){
      //   this.cwsnschool.push(a);
      // }

      //Drinking Water
      // var a = [];
      // a.push(testdata1[i].drnkwatername);
      // a.push(testdata1[i].drnkwaternum);
      // if (a[0] != null){
      //   this.drinkingwaterdata.push(a)
      // }

      //Electricity // not in use
      //Electrcity Government // not in use
      // var a = [];
      // a.push(testdata1[i].electgovtname);
      // a.push(testdata1[i].electgovtnum);
      // if (a[0] != null){
      //   this.electricitygovt.push(a)
      // }

      // //Electricity Aided // not in use
      // var a = [];
      // a.push(testdata1[i].electaidedname);
      // a.push(testdata1[i].electaidednum);
      // if (a[0] != null){
      //   this.electricityaided.push(a)
      // }

      // //Electricity Private' // not in use
      // var a = [];
      // a.push(testdata1[i].electpvtname);
      // a.push(testdata1[i].electpvtnum);
      // if (a[0] != null){
      //   this.electricityprivate.push(a)
      // }

      // //Electricity Others // not in use
      // var a = [];
      // a.push(testdata1[i].electothname);
      // a.push(testdata1[i].electothnum);
      // if (a[0] != null){
      //   this.electricityothers.push(a)
      // }

      //Medical Facility // not in use
      // var a = [];
      // a.push(testdata1[i].medicalname);
      // a.push(testdata1[i].medicalnumber);
      // if (a[0] != null){
      //   this.medical.push(a)
      // }

      // //Ramp Facility
      // if(testdata1[i].rampnamegovtele != null){
      //   this.rampele.push(testdata1[i].rampnamegovtele);
      // }
      // if(testdata1[i].rampnameaidedele != null){
      //   this.rampele.push(testdata1[i].rampnameaidedele);
      // }
      // if(testdata1[i].rampnameprivateele != null){
      //   this.rampele.push(testdata1[i].rampnameprivateele);
      // }
      // if(testdata1[i].rampnameothersele != null){
      //   this.rampele.push(testdata1[i].rampnameothersele);
      // }

      // if(testdata1[i].rampnamegovtsec != null){
      //   this.rampsec.push(testdata1[i].rampnamegovtsec);
      // }
      // if(testdata1[i].rampnameaidedsec != null){
      //   this.rampsec.push(testdata1[i].rampnameaidedsec);
      // }
      // if(testdata1[i].rampnameprivatesec != null){
      //   this.rampsec.push(testdata1[i].rampnameprivatesec);
      // }
      // if(testdata1[i].rampnameotherssec != null){
      //   this.rampsec.push(testdata1[i].rampnameotherssec);
      // }

      // if(testdata1[i].rampnamegovthsec != null){
      //   this.ramphsec.push(testdata1[i].rampnamegovthsec);
      // }
      // if(testdata1[i].rampnameaidedhsec != null){
      //   this.ramphsec.push(testdata1[i].rampnameaidedhsec);
      // }
      // if(testdata1[i].rampnameprivatehsec != null){
      //   this.ramphsec.push(testdata1[i].rampnameprivatehsec);
      // }
      // if(testdata1[i].rampnameothershsec != null){
      //   this.ramphsec.push(testdata1[i].rampnameothershsec);
      // }

      //Ramp Facility // not in use
      // var a = [];
      // a.push(testdata1[i].rampname);
      // a.push(testdata1[i].rampnumber);
      // if (a[0] != null){
      //   this.ramp.push(a)
      // }
      // alert("ramp-->>"+this.ramp)

      // Toilet // not in use
      // Boys Toilet Elementary // not in use
      // if(testdata1[i].boysgovttoiletele != null){
      //   this.boystoiletele.push(testdata1[i].boysgovttoiletele);
      // }
      // if(testdata1[i].boysaidedtoiletele != null){
      //   this.boystoiletele.push(testdata1[i].boysaidedtoiletele);
      // }
      // if(testdata1[i].boysprivatetoiletele != null){
      //   this.boystoiletele.push(testdata1[i].boysprivatetoiletele);
      // }
      // if(testdata1[i].boysotherstoiletele != null){
      //   this.boystoiletele.push(testdata1[i].boysotherstoiletele);
      // }
      // // Boys Toilet Secondary // not in use
      // if(testdata1[i].boysgovttoiletsec != null){
      //   this.boystoiletsec.push(testdata1[i].boysgovttoiletsec);
      // }
      // if(testdata1[i].boysaidedtoiletsec != null){
      //   this.boystoiletsec.push(testdata1[i].boysaidedtoiletsec);
      // }
      // if(testdata1[i].boysprivatetoiletsec != null){
      //   this.boystoiletsec.push(testdata1[i].boysprivatetoiletsec);
      // }
      // if(testdata1[i].boysotherstoiletsec != null){
      //   this.boystoiletsec.push(testdata1[i].boysotherstoiletsec);
      // }
      // // Boys Toilet Higher Secondary // not in use
      // if(testdata1[i].boysgovttoilethsec != null){
      //   this.boystoilethsec.push(testdata1[i].boysgovttoilethsec);
      // }
      // if(testdata1[i].boysaidedtoilethsec != null){
      //   this.boystoilethsec.push(testdata1[i].boysaidedtoilethsec);
      // }
      // if(testdata1[i].boysprivatetoilethsec != null){
      //   this.boystoilethsec.push(testdata1[i].boysprivatetoilethsec);
      // }
      // if(testdata1[i].boysotherstoilethsec != null){
      //   this.boystoilethsec.push(testdata1[i].boysotherstoilethsec);
      // }
      
      // alert("boys-->" + this.boystoilet)
      // Girls Toilet Elementary // not in use
      // if(testdata1[i].girlsgovttoiletele != null){
      //   this.girlstoiletele.push(testdata1[i].girlsgovttoiletele);
      // }
      // if(testdata1[i].girlsaidedtoiletele != null){
      //   this.girlstoiletele.push(testdata1[i].girlsaidedtoiletele);
      // }
      // if(testdata1[i].girlsprivatetoiletele != null){
      //   this.girlstoiletele.push(testdata1[i].girlsprivatetoiletele);
      // }
      // if(testdata1[i].girlsotherstoiletele != null){
      //   this.girlstoiletele.push(testdata1[i].girlsotherstoiletele);
      // }

      // if(testdata1[i].girlsgovttoiletsec != null){
      //   this.girlstoiletsec.push(testdata1[i].girlsgovttoiletsec);
      // }
      // if(testdata1[i].girlsaidedtoiletsec != null){
      //   this.girlstoiletsec.push(testdata1[i].girlsaidedtoiletsec);
      // }
      // if(testdata1[i].girlsprivatetoiletsec != null){
      //   this.girlstoiletsec.push(testdata1[i].girlsprivatetoiletsec);
      // }
      // if(testdata1[i].girlsotherstoiletsec != null){
      //   this.girlstoiletsec.push(testdata1[i].girlsotherstoiletsec);
      // }

      // if(testdata1[i].girlsgovttoilethsec != null){
      //   this.girlstoilethsec.push(testdata1[i].girlsgovttoilethsec);
      // }
      // if(testdata1[i].girlsaidedtoilethsec != null){
      //   this.girlstoilethsec.push(testdata1[i].girlsaidedtoilethsec);
      // }
      // if(testdata1[i].girlsprivatetoilethsec != null){
      //   this.girlstoilethsec.push(testdata1[i].girlsprivatetoilethsec);
      // }
      // if(testdata1[i].girlsotherstoilethsec != null){
      //   this.girlstoilethsec.push(testdata1[i].girlsotherstoilethsec);
      // }

      /////---libarary---- // not in use

      // if(testdata1[i].libgovt != null){
      //   this.libarary.push(testdata1[i].libgovt);
      // }
      // if(testdata1[i].libaided != null){
      //   this.libarary.push(testdata1[i].libaided);
      // }
      // if(testdata1[i].libprivate != null){
      //   this.libarary.push(testdata1[i].libprivate);
      // }
      // if(testdata1[i].libothers != null){
      //   this.libarary.push(testdata1[i].libothers);
      // }

      //Drinking Water Govt. // not in use
      // if(testdata1[i].drnkwatergovtelem != null){
      //   this.drnkwatergovt.push(testdata1[i].drnkwatergovtelem);
      // }
      // if(testdata1[i].drnkwatergovtsec != null){
      //   this.drnkwatergovt.push(testdata1[i].drnkwatergovtsec);
      // }
      // if(testdata1[i].drnkwatergovthsec != null){
      //   this.drnkwatergovt.push(testdata1[i].drnkwatergovthsec);
      // }
      // //Drinking Water // not in use
      // if(testdata1[i].drnkwateraidedelem != null){
      //   this.drnkwateraided.push(testdata1[i].drnkwateraidedelem);
      // }
      // if(testdata1[i].drnkwateraidedsec != null){
      //   this.drnkwateraided.push(testdata1[i].drnkwateraidedsec);
      // }
      // if(testdata1[i].drnkwateraidedhsec != null){
      //   this.drnkwateraided.push(testdata1[i].drnkwateraidedhsec);
      // }
      // //Drinking Water // not in use
      // if(testdata1[i].drnkwaterpvtelem != null){
      //   this.drnkwaterprivate.push(testdata1[i].drnkwaterpvtelem);
      // }
      // if(testdata1[i].drnkwaterpvtsec != null){
      //   this.drnkwaterprivate.push(testdata1[i].drnkwaterpvtsec);
      // }
      // if(testdata1[i].drnkwaterpvthsec != null){
      //   this.drnkwaterprivate.push(testdata1[i].drnkwaterpvthsec);
      // }
      // //Drinking Water // not in use
      // if(testdata1[i].drnkwaterothelem != null){
      //   this.drnkwaterothers.push(testdata1[i].drnkwaterothelem);
      // }
      // if(testdata1[i].drnkwaterothsec != null){
      //   this.drnkwaterothers.push(testdata1[i].drnkwaterothsec);
      // }
      // if(testdata1[i].drnkwaterothsec != null){
      //   this.drnkwaterothers.push(testdata1[i].drnkwaterothsec);
      // }

      // ///---Ground water----
      // //Ground Govt. // not in use
      // if(testdata1[i].grndgovtelem != null){
      //   this.groundgovt.push(testdata1[i].grndgovtelem);
      // }
      // if(testdata1[i].grndgovtsec != null){
      //   this.groundgovt.push(testdata1[i].grndgovtsec);
      // }
      // if(testdata1[i].grndgovthsec != null){
      //   this.groundgovt.push(testdata1[i].grndgovthsec);
      // }
      // //Ground Aided // not in use
      // if(testdata1[i].grndaidedelem != null){
      //   this.groundaided.push(testdata1[i].grndaidedelem);
      // }
      // if(testdata1[i].grndaidedsec != null){
      //   this.groundaided.push(testdata1[i].grndaidedsec);
      // }
      // if(testdata1[i].grndaidedhsec != null){
      //   this.groundaided.push(testdata1[i].grndaidedhsec);
      // }
      // //Ground Private // not in use
      // if(testdata1[i].grndpvtelem != null){
      //   this.groundprivate.push(testdata1[i].grndpvtelem);
      // }
      // if(testdata1[i].grndpvtsec != null){
      //   this.groundprivate.push(testdata1[i].grndpvtsec);
      // }
      // if(testdata1[i].grndpvthsec != null){
      //   this.groundprivate.push(testdata1[i].grndpvthsec);
      // }
      // //Ground Private // not in use
      // if(testdata1[i].grndothelem != null){
      //   this.groundothers.push(testdata1[i].grndothelem);
      // }
      // if(testdata1[i].grndothsec != null){
      //   this.groundothers.push(testdata1[i].grndothsec);
      // }
      // if(testdata1[i].grndothsec != null){
      //   this.groundothers.push(testdata1[i].grndothsec);
      // }
          }
    }


    this.stotalnoSchool();
    // this.scwsnSchools();
    // this.sdrinkingWater2();
    // this.sMedRampfacility();
    // this.sgtoilet();
    // this.sbtoilet();
    // this.slibararyFacility();
    // this.sground();
    // this.scomputerFacility();
    // this.sdrinkingWater();
    // this.selectricityFaclitiy();
    // this.smedicalFacilty();
    // this.srampFacility();
    this.sschoolTypes();
    this.stotalnoSchoolcat();
    this.sschltypebycat(); 
    
   
    // alert("called");
    // debugger;
    // this.rowData = this.http.get('http://localhost:4200/assets/test.json')
    // alert("dataa-->" + JSON.parse(this.rowData))

    // this.http.get('http://localhost:4200/assets/test.json').subscribe(data =>{
    //   console.log(data);
    //   this.rowData = data;
      
    // })
    // alert("dataa-->" + JSON.parse(this.rowData))

   
    //alert("init function");
    // test();
    // this.getDashboard().then(data=>{
    //   this.setFilter();
    // })
    

    //Highcharts.chart('container', this.options);

    //this._highchart.piechart()

    //this.displayReport2()
    
      // this.displayReport("81",{dependencyValue:this.query,mapId:81,paramName:'"civilian"',paramValue:''}); 
      // this.displayReport("86",{dependencyValue:this.query,mapId:86,paramName:'"civilian"',paramValue:''});

    

  }

  resDashboard

  myclick2(valid){
    // this.sground();
    this.isValid=valid;
    // setTimeout(function(){
      // this.sground();
      // this.scomputerFacility();
      // this.selectricityFaclitiy();
      // this.smedicalFacilty();
      // this.srampFacility();
      // this.sdrinkingWater();
      // this.slibararyFacility();
      // this.sbtoilet();
      // this.scwsnSchools();
      
    // },2200);
    
    // this.isValid2=false;  
  }

  myclick3(valid){
    this.isValid2=valid;

  }

  getDashboard()
  {
    return new Promise((resolve, reject) => {
    this._reportServiceService.getDashboardbyCategory('school').subscribe(res => 
      {
        //console.log('getDashboard:----',res)

        for(var i=0;i<4;i++)
        {
          this.reportList[res[i].reportSequence] = res[i];
        }

       // this.reportList = res;

        
        this.getMasterData('GET_STATE','').then(data=>{
          resolve('succsess');
        })
        
      })
    })
  }

  displayReport1()
  {
    // alert("After change In display 1 report function");
    var obj ={};
    if(this.currentUser==null){
    obj = {dependencyValue:this.query,
        mapId:this.reportList[0].reportId,reportType:'H'}
    }else{
    obj = {dependencyValue:this.query,
      mapId:this.reportList[0].reportId,paramName:this.currentUser.paramName,paramValue:this.currentUser.paramValue,reportType:'H'}
    }
    // this.reportService.getTabularData(obj).subscribe(async res => 
    //   {
      // alert(JSON.stringify(obj));
      this.reportService.getTabularData1(obj).map(res => 
        {
          // alert("res---->"+JSON.stringify(res));
    // this.reportService.getTabularData(obj).subscribe(res => 
    // {

      
        //console.log(res);

       let title = this.reportList[0].reportName;
         
          if(res.rowValue.length>0)
         {

          var rowData = res.rowValue;
  
            this._highchart.highchart(this.reportList[0].reportId,'id1',rowData,title,'D',"")
            
          
         }
         this.displayReport2();
    },error => {
      // alert("Error called");
     }
    ).toPromise();
  // })
  }

  // displayReport2()
  // {
  //   var obj = {mapId:41,paramName:'"Admin"',paramValue:''}

  //   this.reportService.getTabularData(obj).subscribe(res => 
  //   {
  //       //console.log(res);
        
  //       var noofSchool = [];
  //       var status_15_16 = [];
  //       var status_16_17 = [];
  //       var status_17_18 = [];
  //       var status_18_19 = [];
  //        this.resDashboard = res;
  //         if(res.rowValue.length>0)
  //        {
 
  //          //console.log(res);
 
  //          for(var i=0;i<res.rowValue.length;i++)
  //          {
             
  //            noofSchool.push(res.rowValue[i].no_of_school);
  //            status_15_16.push(res.rowValue[i].status_15_16);
  //            status_16_17.push(res.rowValue[i].status_16_17);
  //            status_17_18.push(res.rowValue[i].status_17_18);
  //            status_18_19.push(res.rowValue[i].status_18_19);
  //          }
 
  //          var data = [{name:'status_15_16',data:status_15_16},
  //            {name:'status_16_17',data:status_16_17},
  //            {name:'status_17_18',data:status_17_18},
  //            {name:'status_18_19',data:status_18_19}]
 
  //          this._highchart.linechart('id2',noofSchool,data)
         
  //        }
  //   })
  // }

  
   displayReport2()
  {
    var obj = {}
    if(this.currentUser==null){
     obj = {dependencyValue:this.query,mapId:this.reportList[1].reportId,reportType:'H'}
    }else{
     obj = {dependencyValue:this.query,
    mapId:this.reportList[1].reportId,paramName:this.currentUser.paramName,paramValue:this.currentUser.paramValue,reportType:'H'}
  //  alert(JSON.stringify(obj));
     }
    this.reportService.getTabularData2(obj).map( res => 
    {
      // alert("res---->"+JSON.stringify(res));
    
        //console.log(this.reportList[2].reportId+'='+JSON.parse(JSON.stringify(res)));
      //  alert("2-->"+JSON.stringify(JSON.parse(JSON.stringify(res))));
        var rowData = res.rowValue

       

        var title = this.reportList[1].reportName;
        this._highchart.highchart(this.reportList[1].reportId,'id2',rowData,title,'D',"");
    
       this.displayReport3()
    }).toPromise()
  // }
  }
    displayReport3()
  {
    var obj = {}
    if(this.currentUser==null){
     obj = {dependencyValue:this.query,mapId:this.reportList[2].reportId,reportType:'H'}
    }else{
     obj = {dependencyValue:this.query,
    mapId:this.reportList[2].reportId,paramName:this.currentUser.paramName,paramValue:this.currentUser.paramValue,reportType:'H'}
     }
    //  alert(JSON.stringify(obj));
   this.reportService.getTabularData3(obj).map( res => 
    {
      // alert("res---->"+JSON.stringify(res));
       // console.log(this.reportList[2].reportId+'='+res);
      //  alert("3---->"+JSON.stringify(JSON.parse(JSON.stringify(res))));
        var rowData = res.rowValue
        res = null;
        var title = this.reportList[2].reportName
        this._highchart.highchart(this.reportList[2].reportId,'id3',rowData,title,'D',"");
        this.displayReport4();

    }).toPromise()
  // }
  }
  displayReport4()
  {
    var obj = {}
    if(this.currentUser==null){
     obj = {dependencyValue:this.query,mapId:this.reportList[3].reportId,reportType:'H'}
    }else{
     obj = {dependencyValue:this.query,
    mapId:this.reportList[3].reportId,paramName:this.currentUser.paramName,paramValue:this.currentUser.paramValue,reportType:'H'}
     }
    //  alert(JSON.stringify(obj));
   this.reportService.getTabularData4(obj).map( res => 
    {
      // alert("res---->"+JSON.stringify(res));
       // console.log(this.reportList[3].reportId+'='+res);
      //  alert("4---->"+JSON.stringify(JSON.parse(JSON.stringify(res))));
        var rowData = res.rowValue
        res = null;
        var title = this.reportList[3].reportName
        this._highchart.highchart(this.reportList[3].reportId,'id4',rowData,title,'D',"");
    }).toPromise()
  // }
  }
    getMasterData(extensionCall, condition) {

      return new Promise((resolve, reject) => {
      this.masterCondition = {
        extensionCall: extensionCall,
        condition: condition
      };
      this.reportService.getMasterData(this.masterCondition).subscribe(res => {
        if (extensionCall == "GET_STATE") {
          this.state = res.rowValue;

           this.state.unshift({udise_state_code:'national',state_name:'National'});
          // alert(JSON.stringify(this.state))
        } else if (extensionCall == "GET_DISTRICT") {
          this.district = res.rowValue;
          // alert(JSON.stringify(this.district))
        } else if(extensionCall == "GET_BLOCK"){
          this.block=res.rowValue;
          // alert(JSON.stringify(this.block))
        }
       // this.displayReport2()
       resolve('succsess');
      },
        error => {
          // alert('error in getMasterData--->');
        })
        
      })
    }

    getDistrict(event,flag){

      return new Promise((resolve, reject) => {

      this.uniState=event.target.value;

      if(this.uniState=='national')
      {
        this.uniDist="all";
        this.uniBlock="all";
        
      }

     // this.query=JSON.stringify({"year":this.uniYear,"state":event.target.value, "dist":"none", "block":"none"})
        
    
        this.getMasterData('GET_DISTRICT', "where udise_state_code= '" + event.target.value + "' order by district_name ").then(data=>{
          resolve('succsess');
        });
      
      // alert(JSON.stringify(condtionsValue))

       //this.displayReport3()
    })
    
    }

    getBlock(event)
    {
      return new Promise((resolve, reject) => {
      this.uniDist=event.target.value;
      //this.query=JSON.stringify({"year":this.uniYear,"state":this.uniState, "dist":event.target.value,"block":"none"});
      this.getMasterData('GET_BLOCK', "where udise_dist_code= '" + event.target.value + "' order by block_name ").then(data=>{
        resolve('succsess');
      })
      
    })
    }
    
    getRegion(event){
      this.query = JSON.stringify({"year":this.uniYear,"state":this.uniState, "dist":this.uniDist,"block":event.target.value})
      
      //this.displayReport2();
    }

    getYear(event){
      this.uniYear=event.value;
      this.query=JSON.stringify({"year":this.uniYear,"state":"national", "dist":"none", "block":"none"})
          
            this.uniDist='all';
            this.uniBlock='all';
            this.uniState='national';

            // this.displayReport1();
            // this.displayReport2();
            // this.displayReport3();
            // this.displayReport4();
         
      
     
        }

    setFilter()
        {
          if(this.currentUser==null){
            // alert("In null if condition");
            this.displayReport1();
            // this.displayReport2();
            // this.displayReport3();
            // this.displayReport4();
          }else{
          if(this.currentUser.paramName=="Block")
          {
            this.uniState = this.currentUser.stateName;
            this.uniDist = this.currentUser.districtName;
            this.uniBlock = this.currentUser.paramValue;
            let stateEvent = {target:{value:this.uniState}};
            let distEvent = {target:{value:this.uniDist}}
            this.getDistrict(stateEvent,'').then(data=>{
              this.getBlock(distEvent).then(data=>{

                this.myquery({target:{value:this.uniBlock}},'block')
                //this.displayReport2();
              })
            });
            
          }
          else if(this.currentUser.paramName=="District")
          {
            this.uniState = this.currentUser.stateName;
            this.uniDist = this.currentUser.paramValue;

            let stateEvent = {target:{value:this.uniState}};
            let distEvent = {target:{value:this.uniDist}};
            this.getDistrict(stateEvent,'').then(data=>{
              this.getBlock(distEvent).then(data=>{
                this.myquery({target:{value:this.uniDist}},'district')
              })
            })
            
          }
          else if(this.currentUser.paramName=="State")
          {
            this.uniState = this.currentUser.paramValue;

            let event = {target:{value:this.uniState}}
            this.getDistrict(event,'').then(data=>{
              this.myquery({target:{value:this.uniState}},'state')
            })
            //this.getBlock(event);
          }
          else
          {
            // alert("in display report 1");
            this.displayReport1();
            // this.displayReport2();
            // this.displayReport3();
            // this.displayReport4();
          }
        }
          
    }

    myquery(event,type)
    {
      if(type=="state")
      {
        this.query = JSON.stringify({"year":this.uniYear,"state":event.target.value, "dist":"none", "block":"none"})
        //this.getMasterData('GET_DISTRICT', "where udise_state_code= '" + event.target.value + "' order by district_name ");
      }
      else if(type=="district")
      {
        this.query = JSON.stringify({"year":this.uniYear,"state":this.uniState, "dist":event.target.value,"block":"none"});
        //this.getMasterData('GET_BLOCK', "where udise_dist_code= '" + event.target.value + "' order by block_name ");
      }
      else if(type=="block")
      {
        this.query = JSON.stringify({"year":this.uniYear,"state":this.uniState, "dist":this.uniDist,"block":event.target.value})
      }
      // this.displayReport1();
      //       this.displayReport2();
      //       this.displayReport3();
      //       this.displayReport4();
      //this.displayReport2();
    }

    
// New Dashboard code - -- To be used ---- Start//

// Total Number of Schools Management-Wise
stotalnoSchool1:any ={
  colors: ['#82d3e5','#fd635c','#feb543','#027d56'],
  chart: {
    // reflow: true,
    // reflow: true,
      type: 'pie',
       height:425,
      // size:100,
      options3d: {
          enabled: true,
          alpha: 45
      }
  },
  title: {
      text: null,
      verticalAlign: 'bottom',
      style: {

        font: 'normal 25px Verdana, sans-serif',

        color : 'black'

    }
  },
  credits: {
    enabled: false
},
  
  plotOptions: {
    series: {
      animation: {
        duration: 2200
    }},
      pie: {
        
          innerSize: 100,
          depth: 40,
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %',
            connectorColor: 'silver',
            style: {
              fontSize: '12px'
          }
        },
        showInLegend: true
        // legend: {
        //   layout: 'vertical',
        //   align: 'right',
        //   verticalAlign: 'top',
        //   x: -40,
        //   y: 120,
        //   floating: true,
        //   borderWidth: 1,
        //   backgroundColor:
        //       Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
        //   shadow: true
      // },
      }
  },

  

  series: 
  [{
      name: 'Total Number of Schools',
      data:  this.totalschool
     
  }]
}

stotalnoSchool(){ 
// alert(JSON.stringify(this.totalschool));
  Highcharts.chart('stotalnoSchool', this.stotalnoSchool1);
  
  // alert("test-->" + totalschool)
}


// Total Number of School on category
stotalnoSchoolcat1:any ={
  colors: ['#409fdb','#6ddbdb','#c7f578','#d8892f'],
  chart: {
      type: 'pie',
       height:425,
      // size:100,
      options3d: {
          enabled: true,
          alpha: 180
      }
  },
  title: {
      text: null,
      verticalAlign: 'bottom',
      style: {

        font: 'normal 25px Verdana, sans-serif',

        color : 'black'

    }
  },
  credits: {
    enabled: false
},
  
  plotOptions: {
    series: {
      animation: {
        duration: 2200
    }},
      pie: {
          innerSize: 100,
          depth: 40,
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %',
            connectorColor: 'silver',
            style: {
              fontSize: '12px'
          }
        },
        showInLegend: true
      }
  },

  series: 
  [{
      name: 'Total Number of Schools',
      data:  this.totalschoolcat
     
  }]
}
stotalnoSchoolcat(){ 
// alert(JSON.stringify(this.totalschool));
  Highcharts.chart('stotalnoSchoolcat', this.stotalnoSchoolcat1);
  // alert("test-->" + totalschool)
}


// Number of Schools based on School Types
sschoolTypes1: any = {

  //   chart: {
  //     type: 'pyramid3d',
  //     height:425,
  //     options3d: {
  //         enabled: true,
  //         alpha: 10,
  //         depth: 50,
  //         viewDistance: 50        
  //     }
  // },
  // title: {
  //     text: 'Number of Schools based on School Types',
  //     verticalAlign: 'bottom'
  // },
  // plotOptions: {
  //     series: {
  //         dataLabels: {
  //             enabled: true,
  //             format: '<b>{point.name}</b> ({point.percentage:.1f} %)',
  //             allowOverlap: false,
  //             x: 10,
  //             y: -5
  //         },
  
  //         width: '50%',
  //         height: '60%',
  //         center: ['50%', '45%']
  //     }
  // },
  // series: [{
  //     name: 'Number of Schools',
  //     data: [
  //         ['Boys', 15654],
  //         ['Girls', 4064],
  //         ['Co-Ed', 1987]
  //     ]
  // }]
  colors:['#07afd4','#57e3e3','#ef666d'],
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: 'pie',
    height: 425
  },
  title: {
    text: null,
    verticalAlign: 'bottom',
    style: {

      font: 'normal 25px Verdana, sans-serif',

      color : 'black'

  }
  },
  credits: {
    enabled: false
},
  // tooltip: {
  //   pointFormat: '{series.name}: <b>{point.value}</b>'
  // },
  accessibility: {
    point: {
        valueSuffix: '%'
    }
  },
  plotOptions: {
    series: {
      animation: {
        duration: 2200
    }},
    pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %',
            style: {
              fontSize: '12px'
          }
        },
        showInLegend: true
    }
  },
  series: [{
    name: 'Number of Schools',
    colorByPoint: true,
    data: this.totalschoolschtype
  }]
  }
  sschoolTypes(){
    // alert("test2-->"+ JSON.stringify(this.myOption42))
    Highcharts.chart('sschoolTypes', this.sschoolTypes1);
  
  }
  
  
  //Number of Schools by types of School and School Category
  sschltypebycat1: any = {
    colors:['#1bbc9b','#f9a825','#6e848f'],
    chart: {
      type: 'bar',
      height:425
  },
  title: {
      text: null,
      verticalAlign: 'bottom',
      style: {

        font: 'normal 25px Verdana, sans-serif',

        color : 'black'

    }
  },
  xAxis: {
      categories: ['Elementary','Secondary','Higher Secondary'],
      labels: {
        style: {
            // color: 'red',
            fontSize:'15px'
        }
    }
  },
  yAxis: {
      min: 0,
      title: {
          text: 'Count',
          align: 'high'
      },
      labels: {
          overflow: 'justify',
          
      }
  },
  tooltip: {
      // valueSuffix: ' millions'
  },
  plotOptions: {
    series: {
      animation: {
        duration: 2200
    }},
      bar: {
          dataLabels: {
              enabled: true,
              style: {
                fontSize: '12px'
            }
          }
      }
  },
  legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'top',
      x: -40,
      y: 120,
      floating: true,
      borderWidth: 1,
      backgroundColor:
          Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
      shadow: true
  },
  credits: {
      enabled: false
  },
  series: [{
      name: 'Girls School',
      data: this.girlsschtypcat
  }, {
      name: 'Boys School',
      data: this.boysschtypcat
  }, {
      name: 'Co-ed Schools',
      data: this.coedschtypcat
  }]
  }
  sschltypebycat(){
    // alert("test"+this.myOption53)
    Highcharts.chart('sschltypebycat', this.sschltypebycat1);
  }


  //Drinking Water / HandWash / Toilet Facility

//   sdrinkingWater3:any ={
//     colors:['#749cd6','#8ecb91','#fdd061','#f8728b'],
//   chart: {
//     type: 'column',
//     height:425
// },
// title: {
//     text: null,
//     verticalAlign: 'bottom',
//     style: {

//       font: 'normal 25px Verdana, sans-serif',

//       color : 'black'

//   }
// },

// credits: {
//   enabled: false
// },
// // subtitle: {
// //     text: 'Source: WorldClimate.com'
// // },
// xAxis: {
//     categories: [
//         'Govt.','Aided','Private','Others'
//     ],
//     crosshair: true,
//     labels: {
//       style: {
//           // color: 'red',
//           fontSize:'15px'
//       }
//   }
// },
// yAxis: {
//     min: 0,
//     title: {
//         text: 'Total',
//         style: {
//           fontSize: '20px'
//       }
//     }
// },
// tooltip: {
//     headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
//     pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
//         '<td style="padding:0"><b>{point.y}</b></td></tr>',
//     footerFormat: '</table>',
//     shared: false,
//     useHTML: true
// },
// plotOptions: {
//   series: {
//     animation: {
//       duration: 2200
//   }},
//     column: {
//       dataLabels: {
//         enabled: true,
//         rotation: -90,
//         align:'left',
//         y: 10,
//         // format:'{data.value}',
//         // borderColor: 'red',
//         //         borderWidth: 2,
//         //         padding: 5,
//         //         shadow: true,
//         style: {
//           fontSize: '12px'
//       }
//     },
//         pointPadding: 0.2,
//         borderWidth: 0
//     }
// },
// series: [{
//     name: 'Drinking Water',
//     data: this.drnkwater

// }, {
//     name: 'Handwash Facility',
//     data: this.handwash

// }, {
//     name: 'Girls Toilet',
//     data: this.girlstoilet1

// }, {
//     name: 'Boys Toilet',
//     data: this.boystoilet1

// }]
//   }
//   sdrinkingWater2(){
//   Highcharts.chart('sdrinkingWater5', this.sdrinkingWater3)
// }


// Schools having Electricity, Computer and Internet Facility
// scomputerFacility1:any = { 
//   colors:['#00acc0','#90A8C3','#82d3e5'],  
//   chart: {
//   type: 'bar',
//   height:425
// },
// title: {
//   text: null,
//   verticalAlign: 'bottom',
//   style: {

//     font: 'normal 25px Verdana, sans-serif',

//     color : 'black'

// }
// },



// xAxis: {
//   categories: ['Govt', 'Aided', 'Private', 'Others'],
//   labels: {
//     style: {
//         // color: 'red',
//         fontSize:'15px'
//     }
// }
// },
// yAxis: {
//   min: 0,
//   title: {
//       text: 'Count',
//       align: 'high'
//   },
//   labels: {
//       overflow: 'justify'
//   }
// },
// tooltip: {
//   // valueSuffix: ' millions'
// },
// plotOptions: {
//   series: {
//     animation: {
//       duration: 2200
//   }},
//   bar: {
//       dataLabels: {
//           enabled: true,
//           style: {
//             fontSize: '10px'
//         }
//       }
//   }
// },

// credits: {
//   enabled: false
// },
// series: [
//   {
//     name: 'Electricity',
//     data: this.electricity
//   },
//   {
//   name: 'Computer',
//   data: this.computer
// },
// {
//   name: 'Internet',
//   data: this.internet
// }]
//   }
// scomputerFacility(){
//   Highcharts.chart('scomputerFacility', this.scomputerFacility1);
//   }


//Medical and Ramp Facility

// sMedRampfacility1:any ={
//   colors:['#1bbc9b','#f9a825'],
// chart: {
//   type: 'column',
//   height:425
// },
// title: {
//   useHTML: true,
//   text: null,
//   verticalAlign: 'bottom',
//   y: 40, 
//   x: 0,
//   'background-color': 'black',
  
//   style: {

//     font: 'normal 25px Verdana, sans-serif',

//     color : 'black'

// }
// },

// credits: {
//   enabled: false
// },
// // subtitle: {
// //     text: 'Source: WorldClimate.com'
// // },
// xAxis: {
//   categories: [
//       'Govt.','Aided','Private','Others'
//   ],
//   crosshair: true,
//   labels: {
//     style: {
//         // color: 'red',
//         fontSize:'15px'
//     }
// }
// },
// yAxis: {
//   min: 0,
//   title: {
//       text: 'Total',
//       style: {
//         fontSize: '20px'
//     }
//   }
// },
// tooltip: {
//   headerFormat: '<span style="font-size:10px">{point.key}</span><table><br>',
//   pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
//   '<td style="padding:0"><b>{point.y}</b></td></tr>',
//   footerFormat: '</table>',
//   shared: false,
//   useHTML: false
// },
// plotOptions: {
//   series: {
//     animation: {
//       duration: 2200
//   }
//   },
//   column: {
//     dataLabels: {
//       enabled: true,
//       // rotation: 270,
//       //   align:'left',
//       //   y: 10,
//       // pointPadding: 0,
//       // groupPadding: 0,
//       style: {
//         fontSize: '10px'
//     },      
//   },
//       pointPadding: 0.2,
//       borderWidth: 0
//   }
// },
// series: [{
//   name: 'Medical Facility',
//   data: this.medical1

// }, {
//   name: 'Ramp facility',
//   data: this.ramp

// }]
// }
// sMedRampfacility(){
// Highcharts.chart('sMedRampfacility', this.sMedRampfacility1)
// }



//Modal View
// mouseEnter(div : string){
//   //alert("enter div-->"+div);
//   //this.values = 1;
// if(div == "chart1"){
//   this.values = div;
//   // alert("entereddata-->"+this.values)
//   this.modalService.open(this.Graphical, { size: 'xl', backdrop: 'static', keyboard: false });
//   this.mytest();
//   this.smyExpanded();
    
// }
// if(div == "chart2"){
//   this.values = div;
//   alert("entereddata-->"+this.values)
//   this.modalService.open(this.Graphical, { size: 'xl', backdrop: 'static', keyboard: false });
//   this.mytest();
//   this.smyExpanded();
// }
// if(div == "chart3"){
//   this.values = div;
//   this.modalService.open(this.Graphical, { size: 'xl', backdrop: 'static', keyboard: false });
//   this.mytest();
//   this.smyExpanded();
// }
// if(div == "chart4"){
//   this.values = div;
//   this.modalService.open(this.Graphical, { size: 'xl', backdrop: 'static', keyboard: false });
// }
// if(div == "chart5"){
//   this.values = div;
//   this.modalService.open(this.Graphical, { size: 'xl', backdrop: 'static', keyboard: false });
//   this.smyExpanded();
// }
// if(div == "chart6"){
//   this.values = div;
//   this.modalService.open(this.Graphical, { size: 'xl', backdrop: 'static', keyboard: false });
// }
// if(div == "chart7"){
//   this.values = div;
//   this.modalService.open(this.Graphical, { size: 'xl', backdrop: 'static', keyboard: false });
//   this.smyExpanded();
// }
// if(div == "chart8"){
//   this.values = div;
//   this.modalService.open(this.Graphical, { size: 'xl', backdrop: 'static', keyboard: false });
// }
// if(div == "chart9"){
//   this.values = div;
//   this.modalService.open(this.Graphical, { size: 'xl', backdrop: 'static', keyboard: false });
//   this.smyExpanded();
// }
// if(div == "chart10"){
//   this.values = div;
//   this.modalService.open(this.Graphical, { size: 'xl', backdrop: 'static', keyboard: false });
// }
// if(div == "chart11"){
//   this.values = div;
//   this.modalService.open(this.Graphical, { size: 'xl', backdrop: 'static', keyboard: false });
//   this.smyExpanded();
// }
// if(div == "chart12"){
//   this.values = div;
//   this.modalService.open(this.Graphical, { size: 'xl', backdrop: 'static', keyboard: false });
// }
// }

//Testing for expanded graph chart1
    //Govt
//   mytest(){
//     if (this.values == 'chart1'){
      
//       this.test61 = [];
//       this.test62 = [];
//       this.test63 = [];
//       this.test64 = [];

//       for (var i=0; i<testdata1.length; i++)
//       {

//       if(testdata1[i].testgdata1 != null){
//         this.test61.push(testdata1[i].testgdata1)
//       }
//       if(testdata1[i].testgdata2 != null){
//         this.test61.push(testdata1[i].testgdata2)
//       }
//       if(testdata1[i].testgdata3 != null){
//         this.test61.push(testdata1[i].testgdata3)
//       }
//       if(testdata1[i].testgdata4 != null){
//         this.test61.push(testdata1[i].testgdata4)
//       }
//       if(testdata1[i].testgdata5 != null){
//         this.test61.push(testdata1[i].testgdata5)
//       }
//       if(testdata1[i].testgdata6 != null){
//         this.test61.push(testdata1[i].testgdata6)
//       }
//       //Aided
//       if(testdata1[i].testadata1 != null){
//         this.test62.push(testdata1[i].testadata1)
//       }
//       if(testdata1[i].testadata2 != null){
//         this.test62.push(testdata1[i].testadata2)
//       }
//       if(testdata1[i].testadata3 != null){
//         this.test62.push(testdata1[i].testadata3)
//       }
//       if(testdata1[i].testadata4 != null){
//         this.test62.push(testdata1[i].testadata4)
//       }
//       if(testdata1[i].testadata5 != null){
//         this.test62.push(testdata1[i].testadata5)
//       }
//       if(testdata1[i].testadata6 != null){
//         this.test62.push(testdata1[i].testadata6)
//       }
//       //Private
//       if(testdata1[i].testpdata1 != null){
//         this.test63.push(testdata1[i].testpdata1)
//       }
//       if(testdata1[i].testpdata2 != null){
//         this.test63.push(testdata1[i].testpdata2)
//       }
//       if(testdata1[i].testpdata3 != null){
//         this.test63.push(testdata1[i].testpdata3)
//       }
//       if(testdata1[i].testpdata4 != null){
//         this.test63.push(testdata1[i].testpdata4)
//       }
//       if(testdata1[i].testpdata5 != null){
//         this.test63.push(testdata1[i].testpdata5)
//       }
//       if(testdata1[i].testpdata6 != null){
//         this.test63.push(testdata1[i].testpdata6)
//       }
//       //Others
//       if(testdata1[i].testodata1 != null){
//         this.test64.push(testdata1[i].testodata1)
//       }
//       if(testdata1[i].testodata2 != null){
//         this.test64.push(testdata1[i].testodata2)
//       }
//       if(testdata1[i].testodata3 != null){
//         this.test64.push(testdata1[i].testodata3)
//       }
//       if(testdata1[i].testodata4 != null){
//         this.test64.push(testdata1[i].testodata4)
//       }
//       if(testdata1[i].testodata5 != null){
//         this.test64.push(testdata1[i].testodata5)
//       }
//       if(testdata1[i].testodata6 != null){
//         this.test64.push(testdata1[i].testodata6)
//       }
//     }
//   }
//   else if (this.values == 'chart2'){
//     this.test61 = [];
//     this.test62 = [];
//     this.test63 = [];
//     this.test64 = [];
//     for (var i=0; i<testdata1.length; i++)
//       {
//   //Testing for expanded graph chart2
//     //Govt
//     if(testdata1[i].testggdata1 != null){
//       this.test61.push(testdata1[i].testggdata1)
//     }
//     if(testdata1[i].testggdata2 != null){
//       this.test61.push(testdata1[i].testggdata2)
//     }
//     if(testdata1[i].testggdata3 != null){
//       this.test61.push(testdata1[i].testggdata3)
//     }
//     if(testdata1[i].testggdata4 != null){
//       this.test61.push(testdata1[i].testggdata4)
//     }
//     if(testdata1[i].testggdata5 != null){
//       this.test61.push(testdata1[i].testggdata5)
//     }
//     if(testdata1[i].testggdata6 != null){
//       this.test61.push(testdata1[i].testggdata6)
//     }
//     //Aided
//     if(testdata1[i].testaadata1 != null){
//       this.test62.push(testdata1[i].testaadata1)
//     }
//     if(testdata1[i].testaadata2 != null){
//       this.test62.push(testdata1[i].testaadata2)
//     }
//     if(testdata1[i].testaadata3 != null){
//       this.test62.push(testdata1[i].testaadata3)
//     }
//     if(testdata1[i].testaadata4 != null){
//       this.test62.push(testdata1[i].testaadata4)
//     }
//     if(testdata1[i].testaadata5 != null){
//       this.test62.push(testdata1[i].testaadata5)
//     }
//     if(testdata1[i].testaadata6 != null){
//       this.test62.push(testdata1[i].testaadata6)
//     }
//     //Private
//     if(testdata1[i].testppdata1 != null){
//       this.test63.push(testdata1[i].testppdata1)
//     }
//     if(testdata1[i].testppdata2 != null){
//       this.test63.push(testdata1[i].testppdata2)
//     }
//     if(testdata1[i].testppdata3 != null){
//       this.test63.push(testdata1[i].testppdata3)
//     }
//     if(testdata1[i].testppdata4 != null){
//       this.test63.push(testdata1[i].testppdata4)
//     }
//     if(testdata1[i].testppdata5 != null){
//       this.test63.push(testdata1[i].testppdata5)
//     }
//     if(testdata1[i].testppdata6 != null){
//       this.test63.push(testdata1[i].testppdata6)
//     }
//     //Others
//     if(testdata1[i].testoodata1 != null){
//       this.test64.push(testdata1[i].testoodata1)
//     }
//     if(testdata1[i].testoodata2 != null){
//       this.test64.push(testdata1[i].testoodata2)
//     }
//     if(testdata1[i].testoodata3 != null){
//       this.test64.push(testdata1[i].testoodata3)
//     }
//     if(testdata1[i].testoodata4 != null){
//       this.test64.push(testdata1[i].testoodata4)
//     }
//     if(testdata1[i].testoodata5 != null){
//       this.test64.push(testdata1[i].testoodata5)
//     }
//     if(testdata1[i].testoodata6 != null){
//       this.test64.push(testdata1[i].testoodata6)
//     }
//     }
//   }
//   else if (this.values == 'chart3'){
//     this.test61 = [];
//     this.test62 = [];
//     this.test63 = [];
//     this.test64 = [];
//     for (var i=0; i<testdata1.length; i++)
//       {

//     //Testing for expanded graph chart3
//     //Govt
//     if(testdata1[i].testgggdata1 != null){
//       this.test61.push(testdata1[i].testgggdata1)
//     }
//     if(testdata1[i].testgggdata2 != null){
//       this.test61.push(testdata1[i].testgggdata2)
//     }
//     if(testdata1[i].testgggdata3 != null){
//       this.test61.push(testdata1[i].testgggdata3)
//     }
//     if(testdata1[i].testgggdata4 != null){
//       this.test61.push(testdata1[i].testgggdata4)
//     }
//     if(testdata1[i].testgggdata5 != null){
//       this.test61.push(testdata1[i].testgggdata5)
//     }
//     if(testdata1[i].testgggdata6 != null){
//       this.test61.push(testdata1[i].testgggdata6)
//     }
//     //Aided
//     if(testdata1[i].testaaadata1 != null){
//       this.test62.push(testdata1[i].testaaadata1)
//     }
//     if(testdata1[i].testaaadata2 != null){
//       this.test62.push(testdata1[i].testaaadata2)
//     }
//     if(testdata1[i].testaaadata3 != null){
//       this.test62.push(testdata1[i].testaaadata3)
//     }
//     if(testdata1[i].testaaadata4 != null){
//       this.test62.push(testdata1[i].testaaadata4)
//     }
//     if(testdata1[i].testaaadata5 != null){
//       this.test62.push(testdata1[i].testaaadata5)
//     }
//     if(testdata1[i].testaaadata6 != null){
//       this.test62.push(testdata1[i].testaaadata6)
//     }
//     //Private
//     if(testdata1[i].testpppdata1 != null){
//       this.test63.push(testdata1[i].testpppdata1)
//     }
//     if(testdata1[i].testpppdata2 != null){
//       this.test63.push(testdata1[i].testpppdata2)
//     }
//     if(testdata1[i].testpppdata3 != null){
//       this.test63.push(testdata1[i].testpppdata3)
//     }
//     if(testdata1[i].testpppdata4 != null){
//       this.test63.push(testdata1[i].testpppdata4)
//     }
//     if(testdata1[i].testpppdata5 != null){
//       this.test63.push(testdata1[i].testpppdata5)
//     }
//     if(testdata1[i].testpppdata6 != null){
//       this.test63.push(testdata1[i].testpppdata6)
//     }
//     //Others
//     if(testdata1[i].testooodata1 != null){
//       this.test64.push(testdata1[i].testooodata1)
//     }
//     if(testdata1[i].testooodata2 != null){
//       this.test64.push(testdata1[i].testooodata2)
//     }
//     if(testdata1[i].testooodata3 != null){
//       this.test64.push(testdata1[i].testooodata3)
//     }
//     if(testdata1[i].testooodata4 != null){
//       this.test64.push(testdata1[i].testooodata4)
//     }
//     if(testdata1[i].testooodata5 != null){
//       this.test64.push(testdata1[i].testooodata5)
//     }
//     if(testdata1[i].testooodata6 != null){
//       this.test64.push(testdata1[i].testooodata6)
//     }
//   }
// }
// }
mouseLeave(div : string){
}

onResize(event) {
  // alert(event.target.innerWidth)
  // this.studentWidth=event.target.innerWidth-50
  $("#stotalnoSchoolcat").attr("style","width:100%");
  $("#stotalnoSchool").attr("style","width:100%");
  $("#sschoolTypes").attr("style","width:100%");
  $("#sschltypebycat").attr("style","width:100%");
  // $("#sMedRampfacility").attr("style","width:100%");
  // $("#scomputerFacility").attr("style","width:100%");
  // $("#sdrinkingWater5").attr("style","width:100%");
}

onLoad(){
 $("#stotalnoSchoolcat").attr("style","width:100%");
 $("#stotalnoSchool").attr("style","width:100%");
 $("#sschoolTypes").attr("style","width:100%");
 $("#sschltypebycat").attr("style","width:100%");
//  $("#sMedRampfacility").attr("style","width:100%");
//  $("#scomputerFacility").attr("style","width:100%");
//  $("#sdrinkingWater5").attr("style","width:100%");
}


//Electricity Facility
// selectricityFaclitiy(){
//   const selectricityFaclitiy1: any = {
//     chart: {
//       type: 'packedbubble',
//       height: 425
//   },
//   title: {
//       text: 'Electricity Management-Wise',
//       verticalAlign: 'bottom'
//   },
//   tooltip: {
//       useHTML: true,
//       pointFormat: '<b>{point.name}:</b> {point.value} <sub></sub>'
//   },
//   plotOptions: {
//       packedbubble: {
//           minSize: '20%',
//           maxSize: '100%',
//           zMin: 0,
//           zMax: 1000,
//           layoutAlgorithm: {
//               gravitationalConstant: 0.05,
//               splitSeries: true,
//               seriesInteraction: false,
//               dragBetweenSeries: true,
//               parentNodeLimit: true
//           },
//           dataLabels: {
//               enabled: true,
//               format: '{point.name}',
//               filter: {
//                   property: 'y',
//                   operator: '>',
//                   value: 250
//               },
//               style: {
//                   color: 'black',
//                   textOutline: 'none',
//                   fontWeight: 'normal'
//               }
//           }
//       }
//   },
//   series: [{
//       name: 'Govt.',
//       data: this.electricitygovt
//       },
//       {
//       name: 'Aided',
//       data: this.electricityaided
//       },
//       {      
//       name: 'Private',
//       data: this.electricityprivate
//       }, 
//       {
//       name: 'Others',
//       data: this.electricityothers
//   }
// ]
// }
// setTimeout(function(){
//   Highcharts.chart('selectricityFaclitiy', selectricityFaclitiy1);
// },10); 
// }


// Number of Special Schools for CWSN by School Management and School Category
// scwsnSchools(){
// const scwsnSchools1: any = {

//   colors: ['#FFFFFF','#7afcb4','#47b8e7','#f79647','#FF5552'],
//   chart: {
//     // backgroundColor: '#FCFFC5',
//     height: 425,
//     // color: 'black',
// },

// title: {
//     text: 'Number of CWSN Schools by Management and School Category',
//     verticalAlign: 'bottom'
// },
// series: [{
//     type: "sunburst",
//     data: [{
// id: '0.0',
// parent: '',
// name: 'CWSN Schools'
// }, {
// id: '1.1',
// parent: '0.0',
// name: 'Govt'
// }, {
// id: '1.2',
// parent: '0.0',
// name: 'Aided'
// }, {
// id: '1.3',
// parent: '0.0',
// name: 'Private'
// },
// {
//   id: '1.4',
//   parent: '0.0',
//   name: 'Others'
// },

// /* Govt */
// {
// id: '2.1',
// parent: '1.1',
// name: 'Elementary',
// value: 1
// },
// {
// id: '2.2',
// parent: '1.1',
// name: 'Secondary',
// value: 1
// },
// {
// id: '2.3',
// parent: '1.1',
// name: 'H.S',
// value: 1
// },
// //Aided
// {
//   id: '3.1',
//   parent: '1.2',
//   name: 'Elementary',
//   value: 1
//   },
//   {
//   id: '3.2',
//   parent: '1.2',
//   name: 'Secondary',
//   value: 1
//   },
//   {
//   id: '3.3',
//   parent: '1.2',
//   name: 'H.S',
//   value: 1
//   },
// //Private
//   {
//     id: '4.1',
//     parent: '1.3',
//     name: 'Elementary',
//     value: 1
//     },
//     {
//     id: '4.2',
//     parent: '1.3',
//     name: 'Secondary',
//     value: 1
//     },
//     {
//     id: '4.3',
//     parent: '1.3',
//     name: 'H.S',
//     value: 1
//     },
// //Others
//     {
//       id: '5.1',
//       parent: '1.4',
//       name: 'Elementary',
//       value: 1
//       },
//       {
//       id: '5.2',
//       parent: '1.4',
//       name: 'Secondary',
//       value: 1
//       },
//       {
//       id: '5.3',
//       parent: '1.4',
//       name: 'H.S',
//       value: 1
// }],
//     allowDrillToNode: true,
//     cursor: 'pointer',
//     dataLabels: {
//         color:'black',
//         format: '{point.name}',
//         filter: {
//             property: 'innerArcLength',
//             operator: '>',
//             value: 25
//         },
//         rotationMode: 'circular'
//     },
//     levels: [{
//         level: 1,
//         levelIsConstant: false,
//         dataLabels: {
//           color:'black',
//             filter: {
//                 property: 'outerArcLength',
//                 operator: '>',
//                 value: 64
//             }
//         }
//     }, {
//         level: 2,
//         colorByPoint: true
//     },
//     {
//         level: 3,
//         colorVariation: {
//             key: 'brightness',
//             to: 0
//         }
//     }, {
//         level: 4,
//         colorVariation: {
//             key: 'brightness',
//             to: 0
//         }
//     }]

// }]
// }
// setTimeout(function(){
//   Highcharts.chart('scwsn', scwsnSchools1);
// },10); 
//   // alert("cwsn"+this.cwsngovtele+','+this.cwsngovtsec+','+this.cwsngovthsec+','+this.cwsnaidedele+','+this.cwsnaidedsec+','+this.cwsnaidedhsec+','+this.cwsnpvtele+','+this.cwsnpvtsec+','+this.cwsnpvthsec+','+this.cwsnothele+','+this.cwsnothsec+','+this.cwsnothhsec)
// }

//Ramp Facility

// srampFacility(){
//   const srampFacility1:any = {
//     colors: ['#FFD700', '#C0C0C0', '#CD7F32'],
//     chart: {
//         type: 'column',
//         inverted: true,
//         polar: true
//     },
//     title: {
//         text: 'Ramp Facility by School Category and Management'
//     },
//     tooltip: {
//         outside: true
//     },
//     pane: {
//         size: '85%',
//         innerSize: '20%',
//         endAngle: 360
//     },
//     xAxis: {
//         tickInterval: 1,
//         labels: {
//             align: 'right',
//             useHTML: true,
//             allowOverlap: true,
//             step: 1,
//             y: 3,
//             style: {
//                 fontSize: '13px'
//             }
//         },
//         lineWidth: 0,
//         categories: [
//             'Government <span class="f16"><span id="flag" class="flag no">' +
//             '</span></span>',
//             'Aided <span class="f16"><span id="flag" class="flag us">' +
//             '</span></span>',
//             'Private <span class="f16"><span id="flag" class="flag de">' +
//             '</span></span>',
//             'Others <span class="f16"><span id="flag" class="flag ca">' +
//             '</span></span>',
//         ]
//     },
//     yAxis: {
//         crosshair: {
//             enabled: true,
//             color: '#333'
//         },
//         lineWidth: 0,
//         tickInterval: 25,
//         reversedStacks: false,
//         endOnTick: true,
//         showLastLabel: true
//     },
//     plotOptions: {
//         column: {
//             stacking: 'normal',
//             borderWidth: 0,
//             pointPadding: 0,
//             groupPadding: 0.15
//         }
//     },
//     series: [{
//         name: 'Elementary',
//         data: this.rampele
//     }, {
//         name: 'Secondary',
//         data: this.rampsec
//     }, {
//         name: 'Higher Secondary',
//         data: this.ramphsec
//     }]
//   }
//   setTimeout(function(){
//         Highcharts.chart('srampFacility', srampFacility1);
//       },10);
// }



//Medical Facility

// smedicalFacilty(){
//   const smedicalFacilty1:any = {
//     colors : ['#074d81','#20cbc2','#40b2e6','#6e848f'],
//    chart: {
//      plotBackgroundColor: null,
//      plotBorderWidth: null,
//      plotShadow: false,
//      type: 'pie',
//      height: 425
//  },
//  title: {
//      text: 'Medical Facility Management-Wise',
//      verticalAlign: 'bottom'
//  },
//  tooltip: {
//      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
//  },
//  accessibility: {
//      point: {
//          valueSuffix: '%'
//      }
//  },
//  plotOptions: {
//      pie: {
//          allowPointSelect: true,
//          cursor: 'pointer',
//          dataLabels: {
//              enabled: true,
//              format: '<b>{point.name}</b>: {point.percentage:.1f} %'
//          }
//      }
//  },
//  series: [{
//      name: 'Schools with Medical Facility',
//      colorByPoint: true,
//      data: this.medical
//  }]
//    }
//    setTimeout(function(){
//      Highcharts.chart('smedicalFacilty', smedicalFacilty1);
//    },10);
//  }
 
 //OnClick Expanded Graph
 
//  smyExpanded(){
   
//   const smyExpanded1:any = {
//    chart:{
//      width:1670
//    },
//   title: {
//     text: 'School Growth by Management, 2012-2020'
//  },
 
//  yAxis: {
//     title: {
//         text: 'Number of Schools'
//     }
//  },
 
//  xAxis: {
//     accessibility: {
//         rangeDescription: 'Range: 2012 to 2017'
//     }
//  },
 
//  legend: {
//     layout: 'vertical',
//     align: 'right',
//     verticalAlign: 'middle'
//  },
 
//  plotOptions: {
//     series: {
//         label: {
//             connectorAllowed: false
//         },
//         pointStart: 2012
//     }
//  },
 
//  series: [{
//     name: 'Govt.',
//     data: this.test61
//  }, {
//     name: 'Aided',
//     data: this.test62
//  }, {
//     name: 'Private',
//     data: this.test63
//  }, {
//     name: 'Others',
//     data: this.test64
//  }],
 
//  responsive: {
//     rules: [{
//         condition: {
//             maxWidth: 500
//         },
//         chartOptions: {
//             legend: {
//                 layout: 'horizontal',
//                 align: 'center',
//                 verticalAlign: 'bottom'
//             }
//         }
//     }]
//  }
//  }
//  alert("testing---->>>" + this.test61 + "testing---->>>" + this.test62 + "testing---->>>" + this.test63 + "testing---->>>" + this.test64)
//  alert("MyOptiontesting-->"+JSON.stringify(smyExpanded1))
//  var lineChart = Highcharts.chart('stest6', smyExpanded1);
//  }
 
 
 
//  stesting(){
//   const stesting1: any = {
//      chart: {
//        type: 'area',
//        zoomType: 'x',
//        panning: true,
//        panKey: 'shift',
//        height: 220,
//        Width: '100%',
//        scrollablePlotArea: {
//            minWidth: 2200
//        }
//    },
 
//    title: {
//        text: 'Total Number of Schools year-wise',
//        floating: true,
//    },
 
//    credits: {
//        enabled: false
//    },
   
   
//    xAxis: {
//        labels: {
//            format: '{value}'
//        },
//        minRange: 5,
//        title: {
//            text: 'Year'
//        }
//    },
 
//    yAxis: {
//        startOnTick: true,
//        endOnTick: false,
//        maxPadding: 3,
//        title: {
//            text: null
//        },
//        labels: {
//            format: '{value}'
//        }
//    },
 
//    tooltip: {
//        headerFormat: 'Year : {point.x}<br>',
//        pointFormat: 'No. Of Schools : {point.y}',
//        shared: true
//    },
 
//    legend: {
//        enabled: false
//    },
 
//    series: [{
//        accessibility: {
//            keyboardNavigation: {
//                enabled: false
//            }
//        },
//        data: [
//          [1770,200],
//          [1780,250],
//          [1790,300],
//          [1800,350],
//          [1810,400],
//          [1820,450],
//          [1830,1500],
//          [1840,550],
//          [1850,600],
//          [1860,400],
//          [1870,405],
//          [1880,410],
//          [1890,415],
//          [1900,420],
//          [1910,425],
//          [1920,430],
//          [1930,435],
//          [1940,1000],
//          [1950,1020],
//          [1960,1040],
//          [1963,2200],
//          [1970,1060],
//          [1980,1080],
//          [1990,1100],
//          [2200,1120],
//          [2010,1140],
//          [2020,1560],
//          ],
//        lineColor: Highcharts.getOptions().colors[1],
//        color: Highcharts.getOptions().colors[25],
//        fillOpacity: 0.4,
//            marker: {
//            enabled: false
//        },
//        threshold: null
//    }]
//    }
//    var lineChart = Highcharts.chart('stesting', stesting1);
//  }
 
 // Girls Toilet
 
//  sgtoilet1:any = {
//    colors:['#00acc0','#f9a825','#6e848f'],
//    chart: {
//      type: 'column'
//  },
//  title: {
//      text: 'Number of Schools having Girls Toilet'
//  },
//  xAxis: {
//      categories: ['Govt.', 'Aided', 'Private', 'Others']
//  },
//  yAxis: {
//      min: 0,
//      title: {
//          text: 'Total girls toilet ( % out of 100 )'
//      }
//  },
//  tooltip: {
//      pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
//      shared: true
//  },
//  plotOptions: {
//      column: {
//          stacking: 'percent'
//      }
//  },
//  series: [{
//      name: 'Elementary',
//      data: this.girlstoiletele
//  }, {
//      name: 'Secondary',
//      data: this.girlstoiletsec
//  }, {
//      name: 'Higher Secondary',
//      data: this.girlstoilethsec
//  }]
//  }
//  sgtoilet(){
//    Highcharts.chart('sgtoilet', this.sgtoilet1);
//  }
 


// Boys Toilet
// sbtoilet(){
//   // Highcharts.chart('sbtoilet', this.sbtoilet1);
//   const sbtoilet1:any = {
//   chart: {
//     type: 'column'
// },
// title: {
//     text: 'Number of Schools having Boys Toilet'
// },
// xAxis: {
//     categories: ['Govt.', 'Aided', 'Private', 'Others']
// },
// yAxis: {
//     min: 0,
//     title: {
//         text: 'Total girls toilet ( % out of 100 )'
//     }
// },
// tooltip: {
//     pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
//     shared: true
// },
// plotOptions: {
//     column: {
//         stacking: 'percent'
//     }
// },
// series: [{
//     name: 'Elementary',
//     data: this.boystoiletele
// }, {
//     name: 'Secondary',
//     data: this.boystoiletsec
// }, {
//     name: 'Higher Secondary',
//     data: this.boystoilethsec
// }]
// }
// setTimeout(function(){
//   Highcharts.chart('sbtoilet', sbtoilet1);
// },200);
// }



// sdrinkingWater(){

//   const sdrinkingWater1:any ={

//   //   chart: {
//   //     type: 'area',
//   //     height: 425
//   // },
//   // title: {
//   //     text: 'Schools having Drinking Water Facility',
//   //     verticalAlign: 'bottom'
//   // },
//   // xAxis: {
//   //     categories: ['Elementary', 'Secondary', 'Higher Secondary']
//   // },
//   // credits: {
//   //     enabled: false
//   // },
//   // series: [{
//   //     name: 'Govt.',
//   //     data: this.drnkwatergovt
//   // }, {
//   //     name: 'Aided',
//   //     data: this.drnkwateraided
//   // }, {
//   //     name: 'Private',
//   //     data: this.drnkwaterprivate
//   // },{
//   //     name: 'Others',
//   //     data: this.drnkwaterothers
//   // }]
// colors:['#1bbc9b','6e848f','#00acc0','#e64a19'],
//   chart: {
//     type: 'column'
// },
// title: {
//     text: 'Drinking Water Facility'
// },
// // subtitle: {
// //     text: 'Source: WorldClimate.com'
// // },
// xAxis: {
//     categories: [
//         'Elementary','Secondary','Higher Secondary'
//     ],
//     crosshair: true
// },
// yAxis: {
//     min: 0,
//     title: {
//         text: 'Drinking Water'
//     }
// },
// tooltip: {
//     headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
//     pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
//         '<td style="padding:0"><b>{point.y}</b></td></tr>',
//     footerFormat: '</table>',
//     shared: true,
//     useHTML: true
// },
// plotOptions: {
//     column: {
//         pointPadding: 0.2,
//         borderWidth: 0
//     }
// },
// series: [{
//     name: 'Govt.',
//     data: this.drnkwatergovt

// }, {
//     name: 'Aided',
//     data: this.drnkwateraided

// }, {
//     name: 'Private',
//     data: this.drnkwaterprivate

// }, {
//     name: 'Others',
//     data: this.drnkwaterothers

// }]
   
//   }   
//   setTimeout(function(){
//     Highcharts.chart('sdrinkingWater', sdrinkingWater1)
//   },200);
// }
// New Dashboard code - -- To be used ---- End//




//Libarary Facility

// slibararyFacility(){
//  const slibararyFacility1:any = {
//   colors: ['#C0C0C0', '#C0C0C0', '#CD7F32'],
//   chart: {
//       type: 'column',
//       inverted: true,
//       polar: true,
//       height: 425
//   },
//   title: {
//       text: 'Libarary',
//       verticalAlign: 'bottom'
//   },
//   tooltip: {
//       outside: true
//   },
//   pane: {
//       size: '85%',
//       innerSize: '20%',
//       endAngle: 360
//   },
//   xAxis: {
//       tickInterval: 1,
//       labels: {
//           align: 'right',
//           useHTML: true,
//           allowOverlap: true,
//           step: 1,
//           y: 4,
//           style: {
//               fontSize: '13px'
//           }
//       },
//       lineWidth: 0,
//       categories: [
//           'Govt <span class="f16"></span>',
//           'Aided <span class="f16"></span>',
//           'Private <span class="f16"></span>',
//           'Others <span class="f16"></span>'
//       ]
//   },
//   yAxis: {
//       crosshair: {
//           enabled: true,
//           color: '#333'
//       },
//       lineWidth: 0,
//       tickInterval: 25,
//       reversedStacks: false,
//       endOnTick: true,
//       showLastLabel: true
//   },
//   plotOptions: {
//       column: {
//           stacking: 'normal',
//           borderWidth: 0,
//           pointPadding: 0,
//           groupPadding: 0.15
//       }
//   },
//   series: [{
//       name: 'Number of Libarary',
//       data: [909674, 70161, 242392, 27491]
//   }]
//   }
//   setTimeout(function(){
//     Highcharts.chart('slibararyFacility', slibararyFacility1);
//   },10);    
//   }


//Schools having ground// sground(){

//   const sground1:any ={
//     chart: {
//       type: 'area',
//       height: 425
//   },
//   title: {
//       text: 'Schools having grounds',
//       verticalAlign: 'bottom'
//   },
//   xAxis: {
//       categories: ['Elementary', 'Secondary', 'Higher Secondary']
//   },
//   credits: {
//       enabled: false
//   },
//   series: [{
//       name: 'Govt.',
//       data: this.groundgovt
//   }, {
//       name: 'Aided',
//       data: this.groundaided
//   }, {
//       name: 'Private',
//       data: this.groundprivate
//   },{
//       name: 'Others',
//       data: this.groundothers
//   }]
   
//   }  
  
//   setTimeout(function(){
//     Highcharts.chart('stest1', sground1)
//   },200);
// }


//Toilet

// stoilet(){
//   const myOption46: any = {
//     chart: {
//       type: 'areaspline',
//       height: 425
//   },
//   title: {
//       text: 'Schools having Toilet',
//       verticalAlign: 'bottom'
//   },
//   legend: {
//       layout: 'vertical',
//       align: 'left',
//       verticalAlign: 'top',
//       x: 400,
//       y: 100,
//       floating: true,
//       borderWidth: 1,
//       backgroundColor:
//           Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF'
//   },
//   xAxis: {
//       categories: [
//           'Govt.',
//           'Aided',
//           'Private',
//           'Others'
//       ],
//       plotBands: [{ // visualize the weekend
//           from: 4.5,
//           to: 6.5,
//           color: 'rgba(68, 170, 213, .2)'
//       }]
//   },
//   yAxis: {
//       title: {
//           text: 'Fruit units'
//       }
//   },
//   tooltip: {
//       shared: true,
//       valueSuffix: ' units'
//   },
//   credits: {
//       enabled: false
//   },
//   plotOptions: {
//       areaspline: {
//           fillOpacity: 0.5
//       }
//   },
//   series: [{
//       name: 'Girls Toilet',
//       data: this.girlstoilet
//   }, {
//       name: 'Boys Toilet',
//       data: this.boystoilet
//   }]
//   }
//   var lineChart = Highcharts.chart('gbtoilet', myOption46);
// }




// setOptions:any = ({
//   colors: Highcharts.map(Highcharts.getOptions().colors, function (color) {
//       return {
//           radialGradient: {
//               cx: 0.5,
//               cy: 0.3,
//               r: 0.7
//           },
//           stops: [
//               [0, color],
//               [1, Highcharts.color(color).brighten(-0.3).get('rgb')] // darken
//           ]
//       };
//   })
// });



// sdrinkingWater(){
//   const myOption46: any = {
//     chart: {
//         plotBackgroundColor: null,
//         plotBorderWidth: null,
//         plotShadow: false,
//         type: 'pie',
//         height: 425
//     },
//     title: {
//         text: 'Schools having Drinking Water Facility',
//         verticalAlign: 'bottom'
//     },
  
//     accessibility: {
//         point: {
//             valueSuffix: '%'
//         }
//     },
//     plotOptions: {
//         pie: {
//             allowPointSelect: true,
//             cursor: 'pointer',
//             dataLabels: {
//                 enabled: true,
//                 format: '<b>{point.name}</b>: {point.percentage:.1f} %',
//                 connectorColor: 'silver'
//             }
//         }
//     },
//     series: [{
//         name: 'Share',
//         data: this.drinkingwaterdata
//     }]
//   }

//   setTimeout(function(){
//   Highcharts.chart('stest3',Highcharts.merge(this.setOptions, myOption46));
// },50);
// }


//CWSN Schools 

// scwsnSchools(){
//   const myOption48: any = {

//   chart: {
//     type: 'variwide',
//     height: 425
//   },

//   title: {
//       text: 'CWSN Schools Management-Wise',
//       verticalAlign: 'bottom'
//   },

  
//   xAxis: {
//       type: 'category'
//   },

//   legend: {
//       enabled: false
//   },

//   series: [{
//       name: 'CWSN School',
//       data: this.cwsnschool,

//       dataLabels: {
//           enabled: false,
//           format: '{point.y:.0f}'
//       },
//       tooltip: {
//           pointFormat: 'CWSN School: <b> {point.y}%</b><br>'
//       },
//       colorByPoint: true
//   }]
    
//   }
//   var lineChart = Highcharts.chart('scwsn',myOption48);
// }



// srampFacility(){
//  const myOption49:any = {
//     chart: {
//       plotBackgroundColor: null,
//       plotBorderWidth: 0,
//       plotShadow: false,
//       height: 425
      
//   },
//   title: {
//       text: 'Ramp Facility',
//       align: 'center',
//       verticalAlign: 'bottom',
//       y: 20
      
//   },
//   tooltip: {
//       pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
//   },
//   accessibility: {
//       point: {
//           valueSuffix: '%'
//       }
//   },
//   plotOptions: {
//       pie: {
//           dataLabels: {
//               enabled: true,
//               distance: -30,
//               style: {
//                   fontWeight: 'bold',
//                   color: 'white'
//               }
//           },
//           startAngle: -90,
//           endAngle: 90,
//           center: ['50%', '100%'],
//           size: '150%'
//       }
//   },
//   series: [{
//       type: 'pie',
//       name: 'Ramp Facility',
//       innerSize: '50%',
//       data: this.ramp
//   }]
//   }
//   setTimeout(function(){
//     Highcharts.chart('stest7', myOption49);
//   },10);
// }
}
  


