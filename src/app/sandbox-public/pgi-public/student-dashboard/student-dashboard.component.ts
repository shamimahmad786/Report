import { Component, OnInit, TemplateRef, ViewChild, ɵConsole } from '@angular/core';
import { ReportServiceService } from 'src/app/services/report-service.service';
import * as Highcharts from 'highcharts';
import { HighchartsComponent } from 'src/app/shared/highcharts/highcharts.component';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import HC_exportData from 'highcharts/modules/exporting';
import HC_solidgauge from 'highcharts/modules/solid-gauge'
import HC_cylinder from 'highcharts/modules/cylinder';
import HC_exporting from 'highcharts/modules/exporting';
import HC_variwide from 'highcharts/modules/variwide';
import HC_exportData1 from 'highcharts/modules/export-data';
import HC_series from 'highcharts/modules/series-label';
import HC_highcharts3d from 'highcharts/highcharts-3d';
import HC_accessibility from 'highcharts/modules/accessibility';
import HC_networkgraph from 'highcharts/modules/networkgraph';
import HC_sunburst from 'highcharts/modules/sunburst';
import studentdata from 'src/app/_file/testData.json';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PRIMARY_OUTLET } from '@angular/router';




HC_exportData(Highcharts);
HC_solidgauge(Highcharts);
HC_highcharts3d(Highcharts);
HC_cylinder(Highcharts);
HC_exporting(Highcharts);
HC_variwide(Highcharts);
HC_exportData1(Highcharts);
HC_series(Highcharts);
HC_accessibility(Highcharts);
HC_networkgraph(Highcharts);
HC_sunburst(Highcharts);

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent implements OnInit {
  managvscatDrilldownSerisData:any[]=[];
  managvscatSeriesData:any[]=[];
  managvscatDrilldownSerisArrayData:any[]=[];
  masterCondition;

  values:any;
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
 
  totalstudent = [];
  // noofgirls = [];
  // noofboys = [];
  gergirls = [];
  gerboys = [];
  gertotal = [];
  nergirls = [];
  nerboys = [];
  nertotal = [];
  // prdelementarydata = [];
  // prdsecondarydata = [];
  cwsndata = [];
  totalstdschcat = [];
  // expstd61 = [];
  // expstd62 = [];
  // expstd63 = [];
  // expstd64 = [];
  stdntboys = [];
  stdntgirls = [];

  constructor(private _reportServiceService: ReportServiceService,
  private _highchart:HighchartsComponent,private reportService: ReportServiceService,private modalService: NgbModal) { }

  @ViewChild('Graphical', { static: true }) Graphical: TemplateRef<any>;

  ngOnInit() {

    Highcharts.setOptions({
      lang: {
        thousandsSep: ""
      }
    });

    this.currentUser = JSON.parse(sessionStorage.getItem('currentUser'))
    
    //alert("init function");
    // test();
    this.getDashboard().then(data=>{
    this.setFilter();
    this.onLoad();
    })
    
    //New DashBoard

    for (var i=0; i<studentdata.length; i++)
    {
      if(studentdata[i].year == "2021-22"){
      //Total NUmber of Teachers Management-Wise
      var a = [];
      a.push(studentdata[i].totstdname);
      a.push(studentdata[i].totstdnumber);
      if (a[0] != null){
        this.totalstudent.push(a);
      }

      //Total Number of Students School Categorywise
      var a = [];
      a.push(studentdata[i].totstdschcatname);
      a.push(studentdata[i].totstdschcatnum);
      if (a[0] != null){
        this.totalstdschcat.push(a);
      }

      // Number of Boys and Girls //working
      if(studentdata[i].stdntboysgovt != null){
        this.stdntboys.push(studentdata[i].stdntboysgovt);
      }
      if(studentdata[i].stdntboysaided != null){
        this.stdntboys.push(studentdata[i].stdntboysaided);
      }
      if(studentdata[i].stdntboyspvt != null){
        this.stdntboys.push(studentdata[i].stdntboyspvt);
      }
      if(studentdata[i].stdntboysoth != null){
        this.stdntboys.push(studentdata[i].stdntboysoth);
      }


      if(studentdata[i].stdntgirlsgovt != null){
        this.stdntgirls.push(studentdata[i].stdntgirlsgovt);
      }
      if(studentdata[i].stdntgirlsaided != null){
        this.stdntgirls.push(studentdata[i].stdntgirlsaided);
      }
      if(studentdata[i].stdntgirlspvt != null){
        this.stdntgirls.push(studentdata[i].stdntgirlspvt);
      }
      if(studentdata[i].stdntgirlsoth != null){
        this.stdntgirls.push(studentdata[i].stdntgirlsoth);
      }

      // Number of Girls
      // if(studentdata[i].noofgirlselem != null){
      //   this.noofgirls.push(studentdata[i].noofgirlselem);
      // }
      // if(studentdata[i].noofgirlssec != null){
      //   this.noofgirls.push(studentdata[i].noofgirlssec);
      // }
      // if(studentdata[i].noofgirlshsec != null){
      //   this.noofgirls.push(studentdata[i].noofgirlshsec);
      // }
      
      // alert("boys-->" + this.boystoilet)
      // Number of Boys
      // if(studentdata[i].noofboyselem != null){
      //   this.noofboys.push(studentdata[i].noofboyselem);
      // }
      // if(studentdata[i].noofboyssec != null){
      //   this.noofboys.push(studentdata[i].noofboyssec);
      // }
      // if(studentdata[i].noofboyshsec != null){
      //   this.noofboys.push(studentdata[i].noofboyshsec);
      // }

      // Gross Enrolment Ratio
      // Girls
      if(studentdata[i].gergirlsprimary != null){
        this.gergirls.push(studentdata[i].gergirlsprimary);
      }
      if(studentdata[i].gergirlsupperprimary != null){
        this.gergirls.push(studentdata[i].gergirlsupperprimary);
      }
      if(studentdata[i].gergirlssec != null){
        this.gergirls.push(studentdata[i].gergirlssec);
      }
      if(studentdata[i].gergirlshsec != null){
        this.gergirls.push(studentdata[i].gergirlshsec);
      }
      // Boys
      if(studentdata[i].gerboysprimary!= null){
        this.gerboys.push(studentdata[i].gerboysprimary);
      }
      if(studentdata[i].gerboysupperprimary!= null){
        this.gerboys.push(studentdata[i].gerboysupperprimary);
      }
      if(studentdata[i].gerboyssec != null){
        this.gerboys.push(studentdata[i].gerboyssec);
      }
      if(studentdata[i].gerboyshsec != null){
        this.gerboys.push(studentdata[i].gerboyshsec);
      }
      // Total
      // if(studentdata[i].gertotalelem != null){
      //   this.gertotal.push(studentdata[i].gertotalelem);
      // }
      // if(studentdata[i].gertotalsec != null){
      //   this.gertotal.push(studentdata[i].gertotalsec);
      // }
      // if(studentdata[i].gertotalhsec != null){
      //   this.gertotal.push(studentdata[i].gertotalhsec);
      // }

      // Net Enrolment Ratio
      // Girls
      if(studentdata[i].nergirlsprimary != null){
        this.nergirls.push(studentdata[i].nergirlsprimary);
      }
      if(studentdata[i].nergirlsupperprimary != null){
        this.nergirls.push(studentdata[i].nergirlsupperprimary);
      }
      if(studentdata[i].nergirlssec != null){
        this.nergirls.push(studentdata[i].nergirlssec);
      }
      if(studentdata[i].nergirlshsec != null){
        this.nergirls.push(studentdata[i].nergirlshsec);
      }
      // Boys
      if(studentdata[i].nerboysprimary != null){
        this.nerboys.push(studentdata[i].nerboysprimary);
      }
      if(studentdata[i].nerboysupperprimary != null){
        this.nerboys.push(studentdata[i].nerboysupperprimary);
      }
      if(studentdata[i].nerboyssec != null){
        this.nerboys.push(studentdata[i].nerboyssec);
      }
      if(studentdata[i].nerboyshsec != null){
        this.nerboys.push(studentdata[i].nerboyshsec);
      }
      // Total
      // if(studentdata[i].nertotalelem != null){
      //   this.nertotal.push(studentdata[i].nertotalelem);
      // }
      // if(studentdata[i].nertotalsec != null){
      //   this.nertotal.push(studentdata[i].nertotalsec);
      // }
      // if(studentdata[i].nertotalhsec != null){
      //   this.nertotal.push(studentdata[i].nertotalhsec);
      // }

      //Promotion/Repetition/Dropout Rate
      //Elementary level
      // var a = [];
      // a.push(studentdata[i].prdrateele);
      // a.push(studentdata[i].prdelenum);
      // if (a[0] != null){
      //   this.prdelementarydata.push(a);
      // }
      //Secondary Level
      // var a = [];
      // a.push(studentdata[i].prdratesec);
      // a.push(studentdata[i].prdsecnum);
      // if (a[0] != null){
      //   this.prdsecondarydata.push(a);
      // }

      //CWSN Enrolment Data
      if(studentdata[i].cwsnenrolgovt != null){
        this.cwsndata.push(studentdata[i].cwsnenrolgovt);
      }
      if(studentdata[i].cwsnenrolaided != null){
        this.cwsndata.push(studentdata[i].cwsnenrolaided);
      }
      if(studentdata[i].cwsnenrolprivate != null){
        this.cwsndata.push(studentdata[i].cwsnenrolprivate);
      }
      if(studentdata[i].cwsnenrolothers != null){
        this.cwsndata.push(studentdata[i].cwsnenrolothers);
      }
    }
    } 

    // this.stdtesting2();
    this.stdtotalnoStudents();
    this.stdNer();
    this.stdGer();
    // this.stdGirls();
    // this.stdBoys();
    // this.scwsnenrolment();
    // this.stdger();
    // this.stdner();
    // this.stdpromorepdrop();
    // this.socioenrol();
    // this.tstdschoolTypes();
    this.tstdnumschcat();
    this.tBoysGirlsRatio();

    //Highcharts.chart('container', this.options);

    //this._highchart.piechart()

    //this.displayReport2()
    
      // this.displayReport("81",{dependencyValue:this.query,mapId:81,paramName:'"civilian"',paramValue:''}); 
      // this.displayReport("86",{dependencyValue:this.query,mapId:86,paramName:'"civilian"',paramValue:''});

  }

  resDashboard

  getDashboard()
  {
    return new Promise((resolve, reject) => {
    this._reportServiceService.getDashboardbyCategory('enrollment').subscribe(res => 
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


/////////////////////////////////////////////// New DashBoard //////////////////////////////////////////////

//DashBoard Top Time-Series Chart

// stdtesting2(){
//   const myOption81: any = {
//      chart: {
//        type: 'area',
//        zoomType: 'x',
//        panning: true,
//        panKey: 'shift',
//        height: 220,
//        scrollablePlotArea: {
//            minWidth: 2200
//        }
//    },
 
//    title: {
//        text: 'Total Number of Students year-wise',
//        floating: true,
//        verticalAlign: 'bottom'
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
//    var lineChart = Highcharts.chart('testing2', myOption81);
//  }

// Total Number of Students / Enrolment

Options82:any ={
  
  colors:['#07afd4','#57e3e3','#ef666d','#d8892f'],
  chart: {
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
      }
  },

  series: 
  [{
      name: 'Total',
      data:  this.totalstudent
     
  }]
}
stdtotalnoStudents(){ 
// alert(JSON.stringify(this.totalschool));
  Highcharts.chart('stdtotalnoStudents', this.Options82);
  // alert("test-->" + totalschool)
}


// Total NUmber of Teachers on school category

Options83:any ={
  colors: ['#82d3e5','#fd635c','#feb543','#027d56'],
  // colors: ['#eb9898','#f5dc78','#c7f578','#d8892f'],
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
      name: 'Total',
      data:  this.totalstdschcat
     
  }]
}
tstdnumschcat(){ 
// alert(JSON.stringify(this.totalschool));
  Highcharts.chart('tstdnumschcat', this.Options83);
  // alert("test-->" + totalschool)
}

// Number of Teachers based on School Types
// myOption84: any = {
//   colors: ['#409fdb','#6ddbdb','#c7f578'],
//   chart: {
//     plotBackgroundColor: null,
//     plotBorderWidth: null,
//     plotShadow: false,
//     type: 'pie',
//     height: 425
//   },
//   title: {
//     text: 'Number of Students based on School Types',
//     verticalAlign: 'bottom',
//     style: {

//       font: 'normal 25px Verdana, sans-serif',

//       color : 'black'

//   }
//   },
//   // tooltip: {
//   //   pointFormat: '{series.name}: <b>{point.value}</b>'
//   // },
//   accessibility: {
//     point: {
//         valueSuffix: '%'
//     }
//   },
//   plotOptions: {
//     series: {
//       animation: {
//         duration: 2200
//     }},
//     pie: {
//         allowPointSelect: true,
//         cursor: 'pointer',
//         dataLabels: {
//             enabled: true,
//             format: '<b>{point.name}</b>: {point.percentage:.1f} %',
//             style: {
//               fontSize: '15px'
//           }
//         }
//     }
//   },
//   series: [{
//     name: 'Number of Students',
//     colorByPoint: true,
//     data: [
//               ['Boys', 15654],
//               ['Girls', 4064],
//               ['Co-Ed', 1987]
//           ]
//   }]
// }
// tstdschoolTypes(){
//   Highcharts.chart('tstdschoolTypes', this.myOption84);
// }


// Number of Girls

// stdGirls1: any = {
//   chart: {
//     type: 'column'
// },
// title: {
//     text: 'Number Girls students'
// },
// xAxis: {
//     categories: ['Govt.', 'Aided', 'Private', 'Others']
// },
// yAxis: {
//     min: 0,
//     title: {
//         text: 'Total girls students ( % out of 100 )'
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
//     data: [5222, 3222, 4222, 7222]
// }, {
//     name: 'Secondary',
//     data: [2222, 2222, 3222, 2222]
// }, {
//     name: 'Higher Secondary',
//     data: [3222, 4222, 4222, 2222]
// }]
// }
// stdGirls(){
//   Highcharts.chart('stdGirls', this.stdGirls1);
// }


// Number of Boys

// stdBoys1: any = {
//   chart: {
//     type: 'column'
// },
// title: {
//     text: 'Number Girls students'
// },
// xAxis: {
//     categories: ['Govt.', 'Aided', 'Private', 'Others']
// },
// yAxis: {
//     min: 0,
//     title: {
//         text: 'Total girls students ( % out of 100 )'
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
//     data: [5222, 3222, 4222, 7222]
// }, {
//     name: 'Secondary',
//     data: [2222, 2222, 3222, 2222]
// }, {
//     name: 'Higher Secondary',
//     data: [3222, 4222, 4222, 2222]
// }]
// }
// stdBoys(){
//   Highcharts.chart('stdBoys', this.stdBoys1);
// }


// Male Female Students

tBoysGirlsRatio1:any ={
  colors:['#f8728b','#7851a9'],
chart: {
  type: 'column',
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

credits: {
  enabled: false
},
// subtitle: {
//     text: 'Source: WorldClimate.com'
// },
xAxis: {
  categories: [
      'Primary','Upper Primary','Secondary','Higher Secondary'
  ],
  crosshair: true,
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
      text: 'Total',
      style: {
        fontSize: '20px'
    }
  }
},
tooltip: {
  headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
  pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
      '<td style="padding:0"><b>{point.y}</b></td></tr>',
  footerFormat: '</table>',
  shared: false,
  useHTML: true
},
plotOptions: {
  series: {
    animation: {
      duration: 2200
  }},
  column: {
    dataLabels: {
      enabled: true,
      // rotation: -90,
      //   align:'left',
      //   y: 0,
      style: {
        fontSize: '10px'
    }
  },
      pointPadding: 0.2,
      borderWidth: 0
  }
},
series: [{
  name: 'Girls Students',
  data: this.stdntgirls

}, {
  name: 'Boys Students',
  data: this.stdntboys

}]
}
tBoysGirlsRatio(){
Highcharts.chart('tBoysGirlsRatio', this.tBoysGirlsRatio1)
}

//NER 

stdNer1:any ={
  colors:['#749cd7','#f9a825'],
chart: {
  type: 'column',
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

credits: {
  enabled: false
},
// subtitle: {
//     text: 'Source: WorldClimate.com'
// },
xAxis: {
  categories: [
      'Primary','Upper Primary','Secondary','Higher Secondary'
  ],
  crosshair: true,
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
      text: 'Total',
      style: {
        fontSize: '20px'
    }
  }
},
tooltip: {
  headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
  pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
      '<td style="padding:0"><b>{point.y}</b></td></tr>',
  footerFormat: '</table>',
  shared: false,
  useHTML: true
},
plotOptions: {
  series: {
    animation: {
      duration: 2200
  }},
  column: {
    dataLabels: {
      enabled: true,
      style: {
        fontSize: '10px'
    }
  },
      pointPadding: 0.2,
      borderWidth: 0
  }
},
series: [{
  name: 'Girls Students',
  data: this.nergirls

}, {
  name: 'Boys Students',
  data: this.nerboys

}]
}
stdNer(){
Highcharts.chart('stdNer', this.stdNer1)
}


//GER

stdGer1:any ={
  colors:['#1bbc9b','#f9a825'],
chart: {
  type: 'column',
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

credits: {
  enabled: false
},
// subtitle: {
//     text: 'Source: WorldClimate.com'
// },
xAxis: {
  categories: [
      'Primary','Upper Primary','Secondary','Higher Secondary'
  ],
  crosshair: true,
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
      text: 'Total',
      style: {
        fontSize: '20px'
    }
  }
},
tooltip: {
  headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
  pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
      '<td style="padding:0"><b>{point.y}</b></td></tr>',
  footerFormat: '</table>',
  shared: false,
  useHTML: true
},
plotOptions: {
  series: {
    animation: {
      duration: 2200
  }},
  column: {
    dataLabels: {
      enabled: true,
      style: {
        fontSize: '10px'
    }
  },
      pointPadding: 0.2,
      borderWidth: 0
  }
},
series: [{
  name: 'Girls Students',
  data: this.gergirls

}, {
  name: 'Boys Students',
  data: this.gerboys

}]
}
stdGer(){
Highcharts.chart('stdGer', this.stdGer1)
}


//resize

onResize(event) {
  // alert(event.target.innerWidth)
  // this.studentWidth=event.target.innerWidth-50
  $("#stdtotalnoStudents").attr("style","width:100%");
  $("#tstdnumschcat").attr("style","width:100%");
  $("#stdGer").attr("style","width:100%");
  $("#stdNer").attr("style","width:100%");
  $("#tBoysGirlsRatio").attr("style","width:100%");
  // $("#scomputerFacility").attr("style","width:100%");
  // $("#sdrinkingWater5").attr("style","width:100%");
}

onLoad(){
 $("#stdtotalnoStudents").attr("style","width:100%");
 $("#tstdnumschcat").attr("style","width:100%");
 $("#stdGer").attr("style","width:100%");
 $("#stdNer").attr("style","width:100%");
 $("#tBoysGirlsRatio").attr("style","width:100%");
//  $("#scomputerFacility").attr("style","width:600px");
//  $("#sdrinkingWater5").attr("style","width:1250px");
}

// stdboysgirls(){
//   const myOption85: any = {
//     chart: {
//       type: 'areaspline',
//       height: 425
//   },
//   title: {
//       text: 'Number of Boys and Girls School Category-Wise',
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
//           'Elementary',
//           'Secondary',
//           'Higher Secondary'
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
//       name: 'Number of Girls',
//       data: this.noofgirls
//   }, {
//       name: 'Number of Boys',
//       data: this.noofboys
//   }]
//   }
//   var lineChart = Highcharts.chart('stdtest2', myOption85);
// }

// CWSN Enrolment

// myOption86:any = {    chart: {
//   type: 'bar',
//   height:425
// },
// title: {
//   text: 'CWSN Enrolment',
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
//       align: 'high',
//       style: {
//         fontSize: '20px'
//     }
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
//             fontSize: '15px'
//         }
//       }
//   }
// },

// credits: {
//   enabled: false
// },
// series: [{
//   name: 'Number of CWSN Students',
//   data: this.cwsndata
// }]
//   }
//   scwsnenrolment(){
//     Highcharts.chart('scwsnenrolment', this.myOption86);
//   }


// Gross Enrolment Ratio

// myOption87: any = {
//   chart: {
//     type: 'column',
//     height: 425
// },

// title: {
//     text: 'Gross Enrolment Ratio'
// },

// xAxis: {
//     categories: ['Elementary', 'Secondary', 'Higher Secondary']
// },

// yAxis: {
//     allowDecimals: false,
//     min: 0,
//     title: {
//         text: 'Enrolment Ratio'
//     }
// },

// tooltip: {
//     formatter: function () {
//         return '<b>' + this.x + '</b><br/>' +
//             this.series.name + ': ' + this.y;
//     }
// },

// plotOptions: {
//     column: {
//         stacking: 'normal'
//     }
// },

// series: [{
//     name: 'Girls',
//     data: this.gergirls,
//     stack: 'a'
// }, {
//     name: 'Boys',
//     data: this.gerboys,
//     stack: 'a'
// },{
//     name: 'Total',
//     data: this.gertotal,
//     stack: 'b'
// }]
// }
// stdger(){
//   Highcharts.chart('stdger', this.myOption87);
// }


// Net Enrolment - Gross Enrolment Ratio

// myOption88: any = {
//   colors:['#82d3e5','#90a8c3','#00acc0','#e64a19'],
//   chart: {
//     type: 'column',
//     height: 425
// },

// title: {
//     text: 'Net Enrolment - Gross Enrolment ratio',
//     verticalAlign: 'bottom',
//     style: {

//       font: 'normal 25px Verdana, sans-serif',

//       color : 'black'

//   }
// },

// xAxis: {
//     categories: ['Elementary', 'Secondary', 'Higher Secondary'],
//     labels: {
//       style: {
//           // color: 'red',
//           fontSize:'15px'
//       }
//   }
// },

// yAxis: {
//     allowDecimals: false,
//     min: 0,
//     title: {
//         text: 'Enrolment Ratio',
//         style: {
//           fontSize: '20px'
//       }
//     }
// },

// tooltip: {
//     formatter: function () {
//         return '<b>' + this.x + '</b><br/>' +
//             this.series.name + ': ' + this.y;
//     }
// },

// plotOptions: {
//   series: {
//     animation: {
//       duration: 2200
//   }},
//     column: {
//         stacking: 'normal'
//     }
// },

// series: [{
//     name: 'NER-Girls',
//     data: this.nergirls,
//     stack: 'a'
// }, {
//     name: 'NER-Boys',
//     data: this.nerboys,
//     stack: 'a'
// },{
//     name: 'GER-Girls',
//     data: this.gergirls,
//     stack: 'b'
// },
// {
//   name: 'GER-Boys',
//   data: this.gerboys,
//   stack: 'b'
// }]
// }
// stdner(){
//   Highcharts.chart('stdner', this.myOption88);
// }

// Promotion / Repetition / Dropout Rate

// myOption89: any = {

//     chart: {
//         type: 'networkgraph',
//         height: 425
//     },
//     title: {
//         text: 'Promotion / Repetiton / Dropout Rate',
//         verticalAlign: 'bottom'
//     },

//     plotOptions: {
//         networkgraph: {
//             keys: ['from', 'to'],
//             layoutAlgorithm: {
//                 enableSimulation: true,
//                 friction: -0.9
//             }
//         }
//     },
//     series: [{
//         dataLabels: {
//             enabled: true,
//             linkFormat: ''
//         },
//         id: 'lang-tree1',
//         data: this.prdelementarydata
//     },
//     {
//         dataLabels: {
//             enabled: true,
//             linkFormat: ''
//         },
//         id: 'lang-tree',
//         data: this.prdsecondarydata
//     }
// ]
// }
// stdpromorepdrop(){
//   Highcharts.chart('stdpromorepdrop', this.myOption89);
// }

// Retention Rate
// SC / ST / OBC Enrolment

// socioenroltest: any = {
//   chart: {
//     height: 425
// },

// title: {
//     text: 'Enrolment on Social Category',
//     verticalAlign: 'bottom'
// },
// series: [{
//     type: "sunburst",
//     data: [{
// id: '0.0',
// parent: '',
// name: 'Socio Enrolment'
// }, {
// id: '1.3',
// parent: '0.0',
// name: 'Elementary'
// }, {
// id: '1.1',
// parent: '0.0',
// name: 'Secondary'
// }, {
// id: '1.2',
// parent: '0.0',
// name: 'Higher Secondary'
// },

// /* SC */
// {
// id: '2.1',
// parent: '1.1',
// name: 'SC'
// },

// {
// id: '3.1',
// parent: '2.1',
// name: 'Boys',
// value: 1
// }, {
// id: '3.2',
// parent: '2.1',
// name: 'Girls',
// value: 1
// },

// /* ST */

// {
// id: '2.2',
// parent: '1.1',
// name: 'ST'
// },
// {
// id: '4.1',
// parent: '2.2',
// name: 'Boys',
// value: 1
// }, {
// id: '4.2',
// parent: '2.2',
// name: 'Girls',
// value: 1
// },

// /* OBC */

// {
// id: '2.3',
// parent: '1.1',
// name: 'OBC'
// },
// {
// id: '5.1',
// parent: '2.3',
// name: 'Boys',
// value: 1
// }, {
// id: '5.2',
// parent: '2.3',
// name: 'Girls',
// value: 1
// },

// /* General */

// {
// id: '2.4',
// parent: '1.1',
// name: 'GENERAL'
// },
// {
// id: '5.1',
// parent: '2.4',
// name: 'Boys',
// value: 1
// }, {
// id: '5.2',
// parent: '2.4',
// name: 'Girls',
// value: 1
// },

// /* Higher Secondary*/

// /* SC */
// {
// id: '21.1',
// parent: '1.2',
// name: 'SC'
// },
// {
// id: '31.1',
// parent: '21.1',
// name: 'Boys',
// value: 1
// }, {
// id: '31.2',
// parent: '21.1',
// name: 'Girls',
// value: 1
// },

// /* ST */

// {
// id: '21.2',
// parent: '1.2',
// name: 'ST'
// },
// {
// id: '41.1',
// parent: '21.2',
// name: 'Boys',
// value: 1
// }, {
// id: '41.2',
// parent: '21.2',
// name: 'Girls',
// value: 1
// },

// /* OBC */

// {
// id: '21.3',
// parent: '1.2',
// name: 'OBC'
// },
// {
// id: '51.1',
// parent: '21.3',
// name: 'Boys',
// value: 1
// }, {
// id: '51.2',
// parent: '21.3',
// name: 'Girls',
// value: 1
// },

// /* General */

// {
// id: '21.4',
// parent: '1.2',
// name: 'GENERAL'
// },
// {
// id: '51.1',
// parent: '21.4',
// name: 'Boys',
// value: 1
// }, {
// id: '51.2',
// parent: '21.4',
// name: 'Girls',
// value: 1
// },

// /*Elementary*/

// /* SC */
// {
// id: '211.1',
// parent: '1.3',
// name: 'SC'
// },
// {
// id: '311.1',
// parent: '211.1',
// name: 'Boys',
// value: 1
// }, {
// id: '311.2',
// parent: '211.1',
// name: 'Girls',
// value: 1
// },

// /* ST */

// {
// id: '211.2',
// parent: '1.3',
// name: 'ST'
// },
// {
// id: '411.1',
// parent: '211.2',
// name: 'Boys',
// value: 1
// }, {
// id: '411.2',
// parent: '211.2',
// name: 'Girls',
// value: 1
// },

// /* OBC */

// {
// id: '211.3',
// parent: '1.3',
// name: 'OBC'
// },
// {
// id: '511.1',
// parent: '211.3',
// name: 'Boys',
// value: 1
// }, {
// id: '511.2',
// parent: '211.3',
// name: 'Girls',
// value: 1
// },

// /* General */

// {
// id: '211.4',
// parent: '1.3',
// name: 'GENERAL'
// },
// {
// id: '511.1',
// parent: '211.4',
// name: 'Boys',
// value: 1
// }, {
// id: '511.2',
// parent: '211.4',
// name: 'Girls',
// value: 1
// }],
//     allowDrillToNode: true,
//     cursor: 'pointer',
//     dataLabels: {
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
//             filter: {
//                 property: 'outerArcLength',
//                 operator: '>',
//                 value: 64
//             }
//         }
//     }, {
//         level: 2,
//         colorByPoint: false
//     },
//     {
//         level: 3,
//         colorVariation: {
//             key: 'brightness',
//             to: -0.5
//         }
//     }, {
//         level: 4,
//         colorVariation: {
//             key: 'brightness',
//             to: 0.5
//         }
//     }]

// }]
// }
// socioenrol(){
//   Highcharts.chart('socioenrol', this.socioenroltest);
// }

//Modal View
 
// mouseEnter(div : string){
//   //alert("enter div-->"+div);
//   //this.values = 1;
// if(div == "chart1"){
//   this.values = div;
//   // alert("entereddata-->"+this.values)
//   this.modalService.open(this.Graphical, { size: 'xl', backdrop: 'static', keyboard: false });
//   this.mystd();
//   this.stdmyExpanded();
    
// }
// if(div == "chart2"){
//   this.values = div;
//   alert("entereddata-->"+this.values)
//   this.modalService.open(this.Graphical, { size: 'xl', backdrop: 'static', keyboard: false });
//   this.mystd();
//   this.stdmyExpanded();
// }
// if(div == "chart3"){
//   this.values = div;
//   this.modalService.open(this.Graphical, { size: 'xl', backdrop: 'static', keyboard: false });
//   this.mystd();
//   this.stdmyExpanded();
// }
// if(div == "chart4"){
//   this.values = div;
//   this.modalService.open(this.Graphical, { size: 'xl', backdrop: 'static', keyboard: false });
//   this.stdmyExpanded();
// }
// if(div == "chart5"){
//   this.values = div;
//   this.modalService.open(this.Graphical, { size: 'xl', backdrop: 'static', keyboard: false });
//   this.stdmyExpanded();
// }
// if(div == "chart6"){
//   this.values = div;
//   this.modalService.open(this.Graphical, { size: 'xl', backdrop: 'static', keyboard: false });
//   this.stdmyExpanded();
// }
// if(div == "chart7"){
//   this.values = div;
//   this.modalService.open(this.Graphical, { size: 'xl', backdrop: 'static', keyboard: false });
//   this.stdmyExpanded();
// }
// if(div == "chart8"){
//   this.values = div;
//   this.modalService.open(this.Graphical, { size: 'xl', backdrop: 'static', keyboard: false });
//   this.stdmyExpanded();
// }
// if(div == "chart9"){
//   this.values = div;
//   this.modalService.open(this.Graphical, { size: 'xl', backdrop: 'static', keyboard: false });
//   this.stdmyExpanded();
// }
// if(div == "chart10"){
//   this.values = div;
//   this.modalService.open(this.Graphical, { size: 'xl', backdrop: 'static', keyboard: false });
//   this.stdmyExpanded();
// }
// if(div == "chart11"){
//   this.values = div;
//   this.modalService.open(this.Graphical, { size: 'xl', backdrop: 'static', keyboard: false });
//   this.stdmyExpanded();
// }
// if(div == "chart12"){
//   this.values = div;
//   this.modalService.open(this.Graphical, { size: 'xl', backdrop: 'static', keyboard: false });
//   this.stdmyExpanded();
// }
// }

// mouseLeave(div : string){
// }

// mystd(){
//   if (this.values == 'chart1'){
        
//     this.expstd61 = [];
//     this.expstd62 = [];
//     this.expstd63 = [];
//     this.expstd64 = [];

//     for (var i=0; i<studentdata.length; i++)
//     {

//     if(studentdata[i].testgdata1 != null){
//       this.expstd61.push(studentdata[i].testgdata1)
//     }
//     if(studentdata[i].testgdata2 != null){
//       this.expstd61.push(studentdata[i].testgdata2)
//     }
//     if(studentdata[i].testgdata3 != null){
//       this.expstd61.push(studentdata[i].testgdata3)
//     }
//     if(studentdata[i].testgdata4 != null){
//       this.expstd61.push(studentdata[i].testgdata4)
//     }
//     if(studentdata[i].testgdata5 != null){
//       this.expstd61.push(studentdata[i].testgdata5)
//     }
//     if(studentdata[i].testgdata6 != null){
//       this.expstd61.push(studentdata[i].testgdata6)
//     }
//     //Aided
//     if(studentdata[i].testadata1 != null){
//       this.expstd62.push(studentdata[i].testadata1)
//     }
//     if(studentdata[i].testadata2 != null){
//       this.expstd62.push(studentdata[i].testadata2)
//     }
//     if(studentdata[i].testadata3 != null){
//       this.expstd62.push(studentdata[i].testadata3)
//     }
//     if(studentdata[i].testadata4 != null){
//       this.expstd62.push(studentdata[i].testadata4)
//     }
//     if(studentdata[i].testadata5 != null){
//       this.expstd62.push(studentdata[i].testadata5)
//     }
//     if(studentdata[i].testadata6 != null){
//       this.expstd62.push(studentdata[i].testadata6)
//     }
//     //Private
//     if(studentdata[i].testpdata1 != null){
//       this.expstd63.push(studentdata[i].testpdata1)
//     }
//     if(studentdata[i].testpdata2 != null){
//       this.expstd63.push(studentdata[i].testpdata2)
//     }
//     if(studentdata[i].testpdata3 != null){
//       this.expstd63.push(studentdata[i].testpdata3)
//     }
//     if(studentdata[i].testpdata4 != null){
//       this.expstd63.push(studentdata[i].testpdata4)
//     }
//     if(studentdata[i].testpdata5 != null){
//       this.expstd63.push(studentdata[i].testpdata5)
//     }
//     if(studentdata[i].testpdata6 != null){
//       this.expstd63.push(studentdata[i].testpdata6)
//     }
//     //Others
//     if(studentdata[i].testodata1 != null){
//       this.expstd64.push(studentdata[i].testodata1)
//     }
//     if(studentdata[i].testodata2 != null){
//       this.expstd64.push(studentdata[i].testodata2)
//     }
//     if(studentdata[i].testodata3 != null){
//       this.expstd64.push(studentdata[i].testodata3)
//     }
//     if(studentdata[i].testodata4 != null){
//       this.expstd64.push(studentdata[i].testodata4)
//     }
//     if(studentdata[i].testodata5 != null){
//       this.expstd64.push(studentdata[i].testodata5)
//     }
//     if(studentdata[i].testodata6 != null){
//       this.expstd64.push(studentdata[i].testodata6)
//     }
//   }
// }
// else if (this.values == 'chart2'){
//   this.expstd61 = [];
//   this.expstd62 = [];
//   this.expstd63 = [];
//   this.expstd64 = [];
//   for (var i=0; i<studentdata.length; i++)
//     {
// //Testing for expanded graph chart2
//   //Govt
//   if(studentdata[i].testggdata1 != null){
//     this.expstd61.push(studentdata[i].testggdata1)
//   }
//   if(studentdata[i].testggdata2 != null){
//     this.expstd61.push(studentdata[i].testggdata2)
//   }
//   if(studentdata[i].testggdata3 != null){
//     this.expstd61.push(studentdata[i].testggdata3)
//   }
//   if(studentdata[i].testggdata4 != null){
//     this.expstd61.push(studentdata[i].testggdata4)
//   }
//   if(studentdata[i].testggdata5 != null){
//     this.expstd61.push(studentdata[i].testggdata5)
//   }
//   if(studentdata[i].testggdata6 != null){
//     this.expstd61.push(studentdata[i].testggdata6)
//   }
//   //Aided
//   if(studentdata[i].testaadata1 != null){
//     this.expstd62.push(studentdata[i].testaadata1)
//   }
//   if(studentdata[i].testaadata2 != null){
//     this.expstd62.push(studentdata[i].testaadata2)
//   }
//   if(studentdata[i].testaadata3 != null){
//     this.expstd62.push(studentdata[i].testaadata3)
//   }
//   if(studentdata[i].testaadata4 != null){
//     this.expstd62.push(studentdata[i].testaadata4)
//   }
//   if(studentdata[i].testaadata5 != null){
//     this.expstd62.push(studentdata[i].testaadata5)
//   }
//   if(studentdata[i].testaadata6 != null){
//     this.expstd62.push(studentdata[i].testaadata6)
//   }
//   //Private
//   if(studentdata[i].testppdata1 != null){
//     this.expstd63.push(studentdata[i].testppdata1)
//   }
//   if(studentdata[i].testppdata2 != null){
//     this.expstd63.push(studentdata[i].testppdata2)
//   }
//   if(studentdata[i].testppdata3 != null){
//     this.expstd63.push(studentdata[i].testppdata3)
//   }
//   if(studentdata[i].testppdata4 != null){
//     this.expstd63.push(studentdata[i].testppdata4)
//   }
//   if(studentdata[i].testppdata5 != null){
//     this.expstd63.push(studentdata[i].testppdata5)
//   }
//   if(studentdata[i].testppdata6 != null){
//     this.expstd63.push(studentdata[i].testppdata6)
//   }
//   //Others
//   if(studentdata[i].testoodata1 != null){
//     this.expstd64.push(studentdata[i].testoodata1)
//   }
//   if(studentdata[i].testoodata2 != null){
//     this.expstd64.push(studentdata[i].testoodata2)
//   }
//   if(studentdata[i].testoodata3 != null){
//     this.expstd64.push(studentdata[i].testoodata3)
//   }
//   if(studentdata[i].testoodata4 != null){
//     this.expstd64.push(studentdata[i].testoodata4)
//   }
//   if(studentdata[i].testoodata5 != null){
//     this.expstd64.push(studentdata[i].testoodata5)
//   }
//   if(studentdata[i].testoodata6 != null){
//     this.expstd64.push(studentdata[i].testoodata6)
//   }
//   }
// }
// else if (this.values == 'chart3'){
//   this.expstd61 = [];
//   this.expstd62 = [];
//   this.expstd63 = [];
//   this.expstd64 = [];
//   for (var i=0; i<studentdata.length; i++)
//     {

//   //Testing for expanded graph chart3
//   //Govt
//   if(studentdata[i].testgggdata1 != null){
//     this.expstd61.push(studentdata[i].testgggdata1)
//   }
//   if(studentdata[i].testgggdata2 != null){
//     this.expstd61.push(studentdata[i].testgggdata2)
//   }
//   if(studentdata[i].testgggdata3 != null){
//     this.expstd61.push(studentdata[i].testgggdata3)
//   }
//   if(studentdata[i].testgggdata4 != null){
//     this.expstd61.push(studentdata[i].testgggdata4)
//   }
//   if(studentdata[i].testgggdata5 != null){
//     this.expstd61.push(studentdata[i].testgggdata5)
//   }
//   if(studentdata[i].testgggdata6 != null){
//     this.expstd61.push(studentdata[i].testgggdata6)
//   }
//   //Aided
//   if(studentdata[i].testaaadata1 != null){
//     this.expstd62.push(studentdata[i].testaaadata1)
//   }
//   if(studentdata[i].testaaadata2 != null){
//     this.expstd62.push(studentdata[i].testaaadata2)
//   }
//   if(studentdata[i].testaaadata3 != null){
//     this.expstd62.push(studentdata[i].testaaadata3)
//   }
//   if(studentdata[i].testaaadata4 != null){
//     this.expstd62.push(studentdata[i].testaaadata4)
//   }
//   if(studentdata[i].testaaadata5 != null){
//     this.expstd62.push(studentdata[i].testaaadata5)
//   }
//   if(studentdata[i].testaaadata6 != null){
//     this.expstd62.push(studentdata[i].testaaadata6)
//   }
//   //Private
//   if(studentdata[i].testpppdata1 != null){
//     this.expstd63.push(studentdata[i].testpppdata1)
//   }
//   if(studentdata[i].testpppdata2 != null){
//     this.expstd63.push(studentdata[i].testpppdata2)
//   }
//   if(studentdata[i].testpppdata3 != null){
//     this.expstd63.push(studentdata[i].testpppdata3)
//   }
//   if(studentdata[i].testpppdata4 != null){
//     this.expstd63.push(studentdata[i].testpppdata4)
//   }
//   if(studentdata[i].testpppdata5 != null){
//     this.expstd63.push(studentdata[i].testpppdata5)
//   }
//   if(studentdata[i].testpppdata6 != null){
//     this.expstd63.push(studentdata[i].testpppdata6)
//   }
//   //Others
//   if(studentdata[i].testooodata1 != null){
//     this.expstd64.push(studentdata[i].testooodata1)
//   }
//   if(studentdata[i].testooodata2 != null){
//     this.expstd64.push(studentdata[i].testooodata2)
//   }
//   if(studentdata[i].testooodata3 != null){
//     this.expstd64.push(studentdata[i].testooodata3)
//   }
//   if(studentdata[i].testooodata4 != null){
//     this.expstd64.push(studentdata[i].testooodata4)
//   }
//   if(studentdata[i].testooodata5 != null){
//     this.expstd64.push(studentdata[i].testooodata5)
//   }
//   if(studentdata[i].testooodata6 != null){
//     this.expstd64.push(studentdata[i].testooodata6)
//   }
// }
// }
// }

//OnClick Expanded Graph

// stdmyExpanded(){
  
//   const myOption51:any = {
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
//     data: this.expstd61
//  }, {
//     name: 'Aided',
//     data: this.expstd62
//  }, {
//     name: 'Private',
//     data: this.expstd63
//  }, {
//     name: 'Others',
//     data: this.expstd64
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
//  alert("testing---->>>" + this.expstd61 + "testing---->>>" + this.expstd62 + "testing---->>>" + this.expstd63 + "testing---->>>" + this.expstd64)
//  alert("MyOptiontesting-->"+JSON.stringify(myOption51))
//  var lineChart = Highcharts.chart('stdmyExpanded', myOption51);
//  }
}
