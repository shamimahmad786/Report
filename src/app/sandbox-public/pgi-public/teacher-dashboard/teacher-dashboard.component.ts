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
import teacherdata from 'src/app/_file/testData.json';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

HC_exportData(Highcharts);
HC_solidgauge(Highcharts);
HC_highcharts3d(Highcharts);
HC_cylinder(Highcharts);
HC_exporting(Highcharts);
HC_variwide(Highcharts);
HC_exportData1(Highcharts);
HC_series(Highcharts)

@Component({
  selector: 'app-teacher-dashboard',
  templateUrl: './teacher-dashboard.component.html',
  styleUrls: ['./teacher-dashboard.component.css']
})
export class TeacherDashboardComponent implements OnInit {
  managvscatDrilldownSerisData:any[]=[];
  managvscatSeriesData:any[]=[];
  managvscatDrilldownSerisArrayData:any[]=[];
  masterCondition;

  state;
  district;
  block;
  test = 0;
  values: any;
  uniState = 'national';
  uniDist = 'all';
  uniYear = '2018-19';
  uniBlock = 'all';
  query = JSON.stringify({year:'2018-19',state:'national',dist:'none',block:'none'});;

  years = [{name:'2018-19',value:'2018-19'},{name:'2017-18',value:'2017-18'},{name:'2016-17',value:'2016-17'}]
  reportList = new Array(4);
  currentUser;

  totaltchschtype =[];
  totalteacher = [];
  totaltchschcat = [];
  femaleteacher = [];
  maleteacher = [];
  ptr = [];
  // twthtfemale = [];
  // engteachers = [];
  // mathteachers =[];
  // sstteachers = [];
  // maleteacherele =[];
  // maleteachersec = [];
  // maleteacherhsec = [];
  ptrratio = [];
  // noprofqual = [];
  // thead100govt = [];
  // thead100aided = [];
  // thead100pvt = [];
  // thead100oth = [];
  // thead150govt = [];
  // thead150aided = [];
  // thead150pvt = [];
  // thead150oth = [];
  // exptch61 = [];
  // exptch62 = [];
  // exptch63 = [];
  // exptch64 = [];
  


  constructor(private _reportServiceService: ReportServiceService,
  private _highchart:HighchartsComponent,private reportService: ReportServiceService,private modalService: NgbModal) { }

  @ViewChild('Graphical', { static: true }) Graphical: TemplateRef<any>;

  ngOnInit() {

    // $('#ttotalNoOfTeachers').highcharts({this.Options61});
    // window.dispatchEvent(new Event('1550'));

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


    for (var i=0; i<teacherdata.length; i++)
    {
      if(teacherdata[i].year == "2021-22"){
      //Total NUmber of Teachers Management-Wise
      var a = [];
      a.push(teacherdata[i].teachername);
      a.push(teacherdata[i].teachernumber);
      if (a[0] != null){
        this.totalteacher.push(a);
      }
      //Total NUmber of Teachers Management-Wise
      var a = [];
      a.push(teacherdata[i].tottchschcatname);
      a.push(teacherdata[i].tottchschcatnum);
      if (a[0] != null){
        this.totaltchschcat.push(a);
      }

      //Total number of teachers by school types
      var a = [];
      a.push(teacherdata[i].tottschtypesname);
      a.push(teacherdata[i].tottschtypesnum);
      if (a[0] != null){
        this.totaltchschtype.push(a);
      }

      //PTR
      if(teacherdata[i].ptrprimary != null){
        this.ptr.push(teacherdata[i].ptrprimary);
      }
      if(teacherdata[i].ptrupperprimary != null){
        this.ptr.push(teacherdata[i].ptrupperprimary);
      }
      if(teacherdata[i].ptrsec != null){
        this.ptr.push(teacherdata[i].ptrsec);
      }
      if(teacherdata[i].ptrhs != null){
        this.ptr.push(teacherdata[i].ptrhs);
      }
      
      // Male and Female Teachers

      if(teacherdata[i].malegovtteachergovt != null){
        this.maleteacher.push(teacherdata[i].malegovtteachergovt);
      }
      if(teacherdata[i].malegovtteacheraided != null)
      {
        this.maleteacher.push(teacherdata[i].malegovtteacheraided);
      }
      if(teacherdata[i].malegovtteacherpvt != null)
      {
        this.maleteacher.push(teacherdata[i].malegovtteacherpvt);
      }
      if(teacherdata[i].malegovtteacheroth != null)
      {
        this.maleteacher.push(teacherdata[i].malegovtteacheroth);
      }


      if(teacherdata[i].femalegovtteachergovt != null){
        this.femaleteacher.push(teacherdata[i].femalegovtteachergovt);
      }
      if(teacherdata[i].femalegovtteacheraided != null)
      {
        this.femaleteacher.push(teacherdata[i].femalegovtteacheraided);
      }
      if(teacherdata[i].femalegovtteacherpvt != null)
      {
        this.femaleteacher.push(teacherdata[i].femalegovtteacherpvt);
      }
      if(teacherdata[i].femalegovtteacheroth != null)
      {
        this.femaleteacher.push(teacherdata[i].femalegovtteacheroth);
      }


      // Male Teachers Elementary
      // if(teacherdata[i].malegovtteacherele != null){
      //   this.maleteacherele.push(teacherdata[i].malegovtteacherele);
      // }
      // if(teacherdata[i].maleaidedteacherele != null){
      //   this.maleteacherele.push(teacherdata[i].maleaidedteacherele);
      // }
      // if(teacherdata[i].maleprivateteacherele != null){
      //   this.maleteacherele.push(teacherdata[i].maleprivateteacherele);
      // }
      // if(teacherdata[i].maleothersteacherele != null){
      //   this.maleteacherele.push(teacherdata[i].maleothersteacherele);
      // }

      // if(teacherdata[i].malegovtteachersec != null){
      //   this.maleteachersec.push(teacherdata[i].malegovtteachersec);
      // }
      // if(teacherdata[i].maleaidedteachersec != null){
      //   this.maleteachersec.push(teacherdata[i].maleaidedteachersec);
      // }
      // if(teacherdata[i].maleprivateteachersec != null){
      //   this.maleteachersec.push(teacherdata[i].maleprivateteachersec);
      // }
      // if(teacherdata[i].maleothersteachersec != null){
      //   this.maleteachersec.push(teacherdata[i].maleothersteachersec);
      // }

      // if(teacherdata[i].malegovtteacherhsec != null){
      //   this.maleteacherhsec.push(teacherdata[i].malegovtteacherhsec);
      // }
      // if(teacherdata[i].maleaidedteacherhsec != null){
      //   this.maleteacherhsec.push(teacherdata[i].maleaidedteacherhsec);
      // }
      // if(teacherdata[i].maleprivateteacherhsec != null){
      //   this.maleteacherhsec.push(teacherdata[i].maleprivateteacherhsec);
      // }
      // if(teacherdata[i].maleothersteacherhsec != null){
      //   this.maleteacherhsec.push(teacherdata[i].maleothersteacherhsec);
      // }
      
      // alert("boys-->" + this.boystoilet)
      // Female Teachers
      // if(teacherdata[i].femalegovtteacher != null){
      //   this.femaleteacher.push(teacherdata[i].femalegovtteacher);
      // }
      // if(teacherdata[i].femaleaidedteacher != null){
      //   this.femaleteacher.push(teacherdata[i].femaleaidedteacher);
      // }
      // if(teacherdata[i].femaleprivateteacher != null){
      //   this.femaleteacher.push(teacherdata[i].femaleprivateteacher);
      // }
      // if(teacherdata[i].femaleothersteacher != null){
      //   this.femaleteacher.push(teacherdata[i].femaleothersteacher);
      // }

      //School Without Female Teacher

      // var a = [];
      // a.push(teacherdata[i].twthtfemalename); 
      // a.push(teacherdata[i].twthtfemaleper)
      // a.push(teacherdata[i].twthtfemalepernumber);
      // if (a[0] != null){
      //   this.twthtfemale.push(a);
      // }

      // PTR Ratio

      var a = [];
      a.push(teacherdata[i].ptrname);
      a.push(teacherdata[i].ptrnumber);
      if (a[0] != null){
        this.ptrratio.push(a);
      }

      // English Maths Social-Science Graduate Teachers
      // English Teachers
      // if(teacherdata[i].enggovtteacher != null){
      //   this.engteachers.push(teacherdata[i].enggovtteacher);
      // }
      // if(teacherdata[i].engaidedteacher != null){
      //   this.engteachers.push(teacherdata[i].engaidedteacher);
      // }
      // if(teacherdata[i].engprivateteacher != null){
      //   this.engteachers.push(teacherdata[i].engprivateteacher);
      // }
      // if(teacherdata[i].engothersteacher != null){
      //   this.engteachers.push(teacherdata[i].engothersteacher);
      // }
      
      // // alert("boys-->" + this.boystoilet)
      // // Maths Teachers
      // if(teacherdata[i].mathgovtteacher != null){
      //   this.mathteachers.push(teacherdata[i].mathgovtteacher);
      // }
      // if(teacherdata[i].mathaidedteacher != null){
      //   this.mathteachers.push(teacherdata[i].mathaidedteacher);
      // }
      // if(teacherdata[i].mathprivateteacher != null){
      //   this.mathteachers.push(teacherdata[i].mathprivateteacher);
      // }
      // if(teacherdata[i].mathothersteacher != null){
      //   this.mathteachers.push(teacherdata[i].mathothersteacher);
      // }

      // alert("boys-->" + this.boystoilet)
      // SocialScience Teachers
      // if(teacherdata[i].sstgovtteacher != null){
      //   this.sstteachers.push(teacherdata[i].sstgovtteacher);
      // }
      // if(teacherdata[i].sstaidedteacher != null){
      //   this.sstteachers.push(teacherdata[i].sstaidedteacher);
      // }
      // if(teacherdata[i].sstprivateteacher != null){
      //   this.sstteachers.push(teacherdata[i].sstprivateteacher);
      // }
      // if(teacherdata[i].sstothersteacher != null){
      //   this.sstteachers.push(teacherdata[i].sstothersteacher);
      // }

      // Teachers with no professional qualification

      // if(teacherdata[i].noprofgovtteacher != null){
      //   this.noprofqual.push(teacherdata[i].noprofgovtteacher);
      // }
      // if(teacherdata[i].noprofaidedteacher != null){
      //   this.noprofqual.push(teacherdata[i].noprofaidedteacher);
      // }
      // if(teacherdata[i].noprofprivateteacher != null){
      //   this.noprofqual.push(teacherdata[i].noprofprivateteacher);
      // }
      // if(teacherdata[i].noprofothersteacher != null){
      //   this.noprofqual.push(teacherdata[i].noprofothersteacher);
      // }

      ///---Having Head Teacher where Enrolment is 100----
      // //Head Teacher where Enrolment is 100- Govt.
      // if(teacherdata[i].th100govtelem != null){
      //   this.thead100govt.push(teacherdata[i].th100govtelem);
      // }
      // if(teacherdata[i].th100govtsec != null){
      //   this.thead100govt.push(teacherdata[i].th100govtsec);
      // }
      // if(teacherdata[i].th100govthsec != null){
      //   this.thead100govt.push(teacherdata[i].th100govthsec);
      // }
      // //Head Teacher where Enrolment is 100-Ground Aided
      // if(teacherdata[i].th100aidedelem != null){
      //   this.thead100aided.push(teacherdata[i].th100aidedelem);
      // }
      // if(teacherdata[i].th100aidedsec != null){
      //   this.thead100aided.push(teacherdata[i].th100aidedsec);
      // }
      // if(teacherdata[i].th100aidedhsec != null){
      //   this.thead100aided.push(teacherdata[i].th100aidedhsec);
      // }
      // //Head Teacher where Enrolment is 100-Ground Private
      // if(teacherdata[i].th100pvtelem != null){
      //   this.thead100pvt.push(teacherdata[i].th100pvtelem);
      // }
      // if(teacherdata[i].th100pvtsec != null){
      //   this.thead100pvt.push(teacherdata[i].th100pvtsec);
      // }
      // if(teacherdata[i].th100pvthsec != null){
      //   this.thead100pvt.push(teacherdata[i].th100pvthsec);
      // }
      // //Head Teacher where Enrolment is 100-Ground Others
      // if(teacherdata[i].th100othelem != null){
      //   this.thead100oth.push(teacherdata[i].th100othelem);
      // }
      // if(teacherdata[i].th100othsec != null){
      //   this.thead100oth.push(teacherdata[i].th100othsec);
      // }
      // if(teacherdata[i].th100othhsec != null){
      //   this.thead100oth.push(teacherdata[i].th100othhsec);
      // }

      //Head Teacher where Enrolment is 150- Govt.
      // if(teacherdata[i].th150govtelem != null){
      //   this.thead150govt.push(teacherdata[i].th150govtelem);
      // }
      // if(teacherdata[i].th150govtsec != null){
      //   this.thead150govt.push(teacherdata[i].th150govtsec);
      // }
      // if(teacherdata[i].th150govthsec != null){
      //   this.thead150govt.push(teacherdata[i].th150govthsec);
      // }
      // //Head Teacher where Enrolment is 150-Ground Aided
      // if(teacherdata[i].th150aidedelem != null){
      //   this.thead150aided.push(teacherdata[i].th150aidedelem);
      // }
      // if(teacherdata[i].th150aidedsec != null){
      //   this.thead150aided.push(teacherdata[i].th150aidedsec);
      // }
      // if(teacherdata[i].th150aidedhsec != null){
      //   this.thead150aided.push(teacherdata[i].th150aidedhsec);
      // }
      // //Head Teacher where Enrolment is 150-Ground Private
      // if(teacherdata[i].th150pvtelem != null){
      //   this.thead150pvt.push(teacherdata[i].th150pvtelem);
      // }
      // if(teacherdata[i].th150pvtsec != null){
      //   this.thead150pvt.push(teacherdata[i].th150pvtsec);
      // }
      // if(teacherdata[i].th150pvthsec != null){
      //   this.thead150pvt.push(teacherdata[i].th150pvthsec);
      // }
      // //Head Teacher where Enrolment is 150-Ground Others
      // if(teacherdata[i].th150othelem != null){
      //   this.thead150oth.push(teacherdata[i].th150othelem);
      // }
      // if(teacherdata[i].th150othsec != null){
      //   this.thead150oth.push(teacherdata[i].th150othsec);
      // }
      // if(teacherdata[i].th150othhsec != null){
      //   this.thead150oth.push(teacherdata[i].th150othhsec);
      // }
    }
    }

    this.ttotalNoOfTeachers();
    // this.tFemale();
    // this.tMale();
    this.tMaleFemaleRatio();
    this.tPTR();
    // this.twithoutFemale();
    // this.tpupilTeacherRatio();
    // this.tengmathssc();
    // this.tqualification();
    // this.theadTeacher100();
    // this.theadTeacher150();
    // this.ttesting1();
    this.ttchnumschcat();
    this.ttchschoolTypes();
    
    

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
    this._reportServiceService.getDashboardbyCategory('teacher').subscribe(res => 
      {
        //console.log('getDashboard:----',res)
// alert(JSON.stringify(res))
        for(var i=0;i<res.length;i++)
        {
          // alert(res[i].reportSequence)
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

//:::::::::::::::::::::New DashBoard::::::::::::::::::::::::


Options61:any ={
  colors:['#07afd4','#3a7e8b','#ef666d','#857c6c'],
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
      data:  this.totalteacher
     
  }],

  reflow:true
}
ttotalNoOfTeachers(){ 
// alert(JSON.stringify(this.totalschool));
  Highcharts.chart('ttotalNoOfTeachers', this.Options61);
  // alert("test-->" + totalschool)
}

// Total NUmber of Teachers on school category

Options70:any ={
  colors: ['#00acc0','#3a7e8b','#c7f578'],
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
      data:  this.totaltchschcat
     
  }]
}
ttchnumschcat(){ 

// alert(JSON.stringify(this.totalschool));
  Highcharts.chart('ttchnumschcat', this.Options70);
  // alert("test-->" + totalschool)
}

// Number of Teachers based on School Types
myOption71: any = {
  colors:['#1bbc9b','#f9a825','#6e848f'],
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: 'pie',
    height: 425
  },
  title: {
    text: 'Number of Teachers based on School Types',
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
    name: 'Number of Teachers',
    colorByPoint: true,
    data: this.totaltchschtype
  }]
}
ttchschoolTypes(){
  Highcharts.chart('ttchschoolTypes', this.myOption71);
}

// Female percentage

// tFemale1: any = {
//   chart: {
//     type: 'column'
// },
// title: {
//     text: 'Number of Schools Female teachers'
// },
// xAxis: {
//     categories: ['Govt.', 'Aided', 'Private', 'Others']
// },
// yAxis: {
//     min: 0,
//     title: {
//         text: 'Total female teachers ( % out of 100 )'
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
// tFemale(){
//   Highcharts.chart('tFemale', this.tFemale1);
// }

// Male percentage

// tMale1: any = {
//   chart: {
//     type: 'column'
// },
// title: {
//     text: 'Number of Schools having Male teachers'
// },
// xAxis: {
//     categories: ['Govt.', 'Aided', 'Private', 'Others']
// },
// yAxis: {
//     min: 0,
//     title: {
//         text: 'Total Male teachers ( % out of 100 )'
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
// tMale(){
//   Highcharts.chart('tMale', this.tMale1);
// }


// Percentage of Schools without Female Teacher

// twithoutFemale(){
//   const myOptiont63: any = {

//     chart: {
//       type: 'variwide',
//       height: 425
//   },

//   title: {
//       text: 'Percentage of Schools without Female Teacher',
//       verticalAlign: 'bottom'
//   },

  
//   xAxis: {
//       type: 'category'
//   },

//   legend: {
//       enabled: false
//   },

//   series: [{
//       name: 'Percentage of Schools without Female Teacher',
//       data: this.twthtfemale,
//       dataLabels: {
//           enabled: true,
//           format: '{point.y:.0f}'
//       },
//       tooltip: {
//           pointFormat: 'Without Female Teacher: <b> {point.y}%</b><br>'
//       },
//       colorByPoint: true
//   }]
    
//   }
//   var lineChart = Highcharts.chart('twithoutfemale', myOptiont63);
// }

// Pupil Teacher Ratio

// tpupilTeacherRatio(){
//   const myOptiont64:any = {
//     colors:['#ef666d','#3a7e8b','#a3b0b7'],
//     chart: {
//       plotBackgroundColor: null,
//       plotBorderWidth: 0,
//       plotShadow: false,
//       height: 425
      
//   },
//   title: {
//       text: 'Pupil Teacher Ratio',
//       align: 'center',
//       verticalAlign: 'bottom',
//       y: 20,
//       style: {

//         font: 'normal 25px Verdana, sans-serif',

//         color : 'black'

//     }
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
//     series: {
//       animation: {
//         duration: 2200
//     }},
//       pie: {
//           dataLabels: {
//               enabled: true,
//               distance: -50,
//               style: {
//                   fontWeight: 'bold',
//                   color: 'white',
//                     fontSize: '15px'
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
//       name: 'Pupil Teacher Ratio',
//       innerSize: '50%',
//       data: this.ptrratio
//   }]
//   }
//   var lineChart = Highcharts.chart('tpupilteacher', myOptiont64);
//  }

//Percentage of schools/section with teacher who is graduate or more qualification in English/Language

// tengmathssc(){
//   const myOptiont65:any = {
//     chart: {
//       type: 'column',
//       height: 425
//   },
//   title: {
//       text: 'Percentage of schools with teacher who is graduate in English, Mathematics, Social Science',
//       verticalAlign: 'bottom',
//       style: {
//         fontSize: '16px'
//     }
//   },
//   xAxis: {
//       categories: ['Govt.', 'Aided', 'Private', 'Others']
//   },
//   yAxis: {
//       min: 0,
//       title: {
//           text: 'Total'
//       }
//   },
//   tooltip: {
//       pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
//       shared: true
//   },
//   plotOptions: {
//       column: {
//           stacking: 'percent'
//       }
//   },
//   series: [{
//       name: 'English/Language',
//       data: this.engteachers
//   }, {
//       name: 'Mathematics',
//       data: this.mathteachers
//   }, {
//       name: 'Social Science',
//       data: this.sstteachers
//   }]
//   }
//   var lineChart = Highcharts.chart('tengmathssc', myOptiont65);
// }

//Percentage of teachers do not have professional qualification

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

// myOptiont66:any = {
//   colors: ['#4c32cd'],
//     chart: {
//         type: 'column',
//         inverted: true,
//         polar: true,
//         height:425
//     },
//     title: {
//         text: 'Percentage of teachers do not have professional qualification',
//         verticalAlign: 'bottom',
//         style: {
//           fontSize: '16px'
//       }
//     },
//     tooltip: {
//         outside: true
//     },
//     pane: {
//         size: '100%',
//         innerSize: '30%',
//         endAngle: 360
//     },
//     xAxis: {
//         tickInterval: 1,
//         labels: {
//             align: 'right',
//             useHTML: true,
//             allowOverlap: true,
//             step: 1,
//             y: 4,
//             style: {
//                 fontSize: '13px'
//             }
//         },
//         lineWidth: 0,
//         categories: [
//             'Govt. <span class="f16"><span id="flag" class="flag no">' +
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
//             color: '#339'
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
//             groupPadding: 0.1
//         }
//     },
//     series: [{
//         name: 'Gold medals',
//         data: this.noprofqual
//     }]
//   }
//   tqualification(){
//     Highcharts.chart('tqualification', this.myOptiont66);
//   }


//Percentage of Upper Primary schools/section having Enrolment 100 and above and have Head Teacher

// theadTeacher100(){

//   const myOptiont67:any ={

//   chart: {
//     type: 'area',
//     height: 425
// },
// title: {
//     text: 'Percentage of Upper Primary schoolshaving Enrolment 100 and above and have Head Teacher',
//     verticalAlign: 'bottom',
//     style: {
//       fontSize: '16px'
//   }
// },
// xAxis: {
//     categories: ['Elementary', 'Secondary', 'Higher Secondary']
// },
// credits: {
//     enabled: false
// },
// series: [{
//     name: 'Govt.',
//     data: this.thead100govt
// }, {
//     name: 'Aided',
//     data: this.thead100aided
// }, {
//     name: 'Private',
//     data: this.thead100pvt
// },{
//     name: 'Others',
//     data: this.thead100oth
// }]
 
// }
  
//   var lineChart = Highcharts.chart('theadTeacher100', myOptiont67);
// }

//Percentage of Primary only schools having enrolment 150 and above and have Head Teacher

// theadTeacher150(){

//   const myOptiont68:any ={

//   chart: {
//     type: 'area',
//     height: 425
// },
// title: {
//     text: 'Percentage of Upper Primary schoolshaving Enrolment 150 and above and have Head Teacher',
//     verticalAlign: 'bottom',
//     style: {
//       fontSize: '16px'
//   }
// },
// xAxis: {
//     categories: ['Elementary', 'Secondary', 'Higher Secondary']
// },
// credits: {
//     enabled: false
// },
// series: [{
//     name: 'Govt.',
//     data: this.thead150govt
// }, {
//     name: 'Aided',
//     data: this.thead150aided
// }, {
//     name: 'Private',
//     data: this.thead150pvt
// },{
//     name: 'Others',
//     data: this.thead150oth
// }]
// }
//   var lineChart = Highcharts.chart('theadTeacher150', myOptiont68);
// }


tMaleFemaleRatio1:any ={
  colors:['#749cd6','#8ecb91'],
chart: {
  type: 'column',
  height:425,
  // spacingTop: 30
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
      'Govt.','Aided','Private','Others'
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
  tickInterval: 700000,
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
      rotation: -90,
        align:'left',
        y: 0,
      style: {
        fontSize: '10px'
    }
  },
      pointPadding: 0.1,
      borderWidth: 0
  }
},
series: [{
  name: 'Female Teachers',
  data: this.femaleteacher

}, {
  name: 'Male Teachers',
  data: this.maleteacher

}]
}
tMaleFemaleRatio(){
Highcharts.chart('tMaleFemaleRatio', this.tMaleFemaleRatio1)
}



//PTR

tPTR1:any ={
  colors:['#fed061','#f8728b','#7851aa','#749cd7'],
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
      'Primary','Upper Primary','Secondary','Higher Secondarys'
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
  shared: true,
  useHTML: true
},
plotOptions: {
  series: {
    colorByPoint:true,
    animation: {
      duration: 2200
  }},
  column: {
    dataLabels: {
      enabled: true,
      style: {
        fontSize: '12px'
    }
  },
      pointPadding: 0.1,
      borderWidth: 0
  }
},
series: [{
  name: 'PTR',
  data: this.ptr

}]
}
tPTR(){
Highcharts.chart('tPTR', this.tPTR1)
// reflow:true
}

//resize

onResize(event) {
  // this.test = (event.target.innerWidth)
  // alert(this.test)
//   // this.studentWidth=event.target.innerWidth-50
  $("#ttotalNoOfTeachers").attr("style","width:100%");
  $("#ttchnumschcat").attr("style","width:100%");
  $("#tMaleFemaleRatio").attr("style","width:100%");
  $("#tPTR").attr("style","width:100%");
//   // $("#tBoysGirlsRatio").attr("style","width:100%");
//   // $("#scomputerFacility").attr("style","width:100%");
//   // $("#sdrinkingWater5").attr("style","width:100%");
}

onLoad(){
  // const test2 = (event.target.innerWidth)
  // alert("onload-->>" + test2 / 2)
  // const test3 = test2 -400
  // alert("onloadtest3-->>" + test3 / 2)
 $("#ttotalNoOfTeachers").attr("style","width:100%");
 $("#ttchnumschcat").attr("style","width:100%");
 $("#tMaleFemaleRatio").attr("style","width:100%");
 $("#tPTR").attr("style","width:100%");
// //  $("#tBoysGirlsRatio").attr("style","width:600px");
// //  $("#scomputerFacility").attr("style","width:600px");
// //  $("#sdrinkingWater5").attr("style","width:1250px");
}

// myoption98:any{
//   this.containerHeight = this.options.chart.height || window.window.HighchartsAdapter.adapterRun(this.renderTo, 'height');
//   this.containerWidth = this.options.chart.width || window.window.HighchartsAdapter.adapterRun(this.renderTo, 'width');
//   this.setSize(this.containerWidth, this.containerHeight, false);
//   this.hasUserSize = null;
// }

// ttesting1(){
//     const myOption69: any = {
//        chart: {
//          type: 'area',
//          zoomType: 'x',
//          panning: true,
//          panKey: 'shift',
//          height: 220,
//          scrollablePlotArea: {
//              minWidth: 2200
//          }
//      },
   
//      title: {
//          text: 'Total Number of Teachers year-wise',
//          verticalAlign: 'bottom',
//          floating: true,
//      },
   
//      credits: {
//          enabled: false
//      },
   
//      xAxis: {
//          labels: {
//              format: '{value}'
//          },
//          minRange: 5,
//          title: {
//              text: 'Year'
//          }
//      },
   
//      yAxis: {
//          startOnTick: true,
//          endOnTick: false,
//          maxPadding: 3,
//          title: {
//              text: null
//          },
//          labels: {
//              format: '{value}'
//          }
//      },
   
//      tooltip: {
//          headerFormat: 'Year : {point.x}<br>',
//          pointFormat: 'No. Of Schools : {point.y}',
//          shared: true
//      },
   
//      legend: {
//          enabled: false
//      },
   
//      series: [{
//          accessibility: {
//              keyboardNavigation: {
//                  enabled: false
//              }
//          },
//          data: [
//            [1770,200],
//            [1780,250],
//            [1790,300],
//            [1800,350],
//            [1810,400],
//            [1820,450],
//            [1830,1500],
//            [1840,550],
//            [1850,600],
//            [1860,400],
//            [1870,405],
//            [1880,410],
//            [1890,415],
//            [1900,420],
//            [1910,425],
//            [1920,430],
//            [1930,435],
//            [1940,1000],
//            [1950,1020],
//            [1960,1040],
//            [1970,1060],
//            [1980,1080],
//            [1990,1100],
//            [2200,1120],
//            [2010,1140],
//            [2020,1560],
//            ],
//          lineColor: Highcharts.getOptions().colors[1],
//          color: Highcharts.getOptions().colors[25],
//          fillOpacity: 0.4,
//              marker: {
//              enabled: false
//          },
//          threshold: null
//      }]
//      }
//      var lineChart = Highcharts.chart('ttesting1', myOption69);
//    }


//Modal View
 
// mouseEnter(div : string){
//   //alert("enter div-->"+div);
//   //this.values = 1;
// if(div == "chart1"){
//   this.values = div;
//   // alert("entereddata-->"+this.values)
//   this.modalService.open(this.Graphical, { size: 'xl', backdrop: 'static', keyboard: false });
//   this.mystd();
//   this.tchmyExpanded();
    
// }
// if(div == "chart2"){
//   this.values = div;
//   alert("entereddata-->"+this.values)
//   this.modalService.open(this.Graphical, { size: 'xl', backdrop: 'static', keyboard: false });
//   this.mystd();
//   this.tchmyExpanded();
// }
// if(div == "chart3"){
//   this.values = div;
//   this.modalService.open(this.Graphical, { size: 'xl', backdrop: 'static', keyboard: false });
//   this.mystd();
//   this.tchmyExpanded();
// }
// if(div == "chart4"){
//   this.values = div;
//   this.modalService.open(this.Graphical, { size: 'xl', backdrop: 'static', keyboard: false });
//   this.tchmyExpanded();
// }
// if(div == "chart5"){
//   this.values = div;
//   this.modalService.open(this.Graphical, { size: 'xl', backdrop: 'static', keyboard: false });
//   this.tchmyExpanded();
// }
// if(div == "chart6"){
//   this.values = div;
//   this.modalService.open(this.Graphical, { size: 'xl', backdrop: 'static', keyboard: false });
//   this.tchmyExpanded();
// }
// if(div == "chart7"){
//   this.values = div;
//   this.modalService.open(this.Graphical, { size: 'xl', backdrop: 'static', keyboard: false });
//   this.tchmyExpanded();
// }
// if(div == "chart8"){
//   this.values = div;
//   this.modalService.open(this.Graphical, { size: 'xl', backdrop: 'static', keyboard: false });
//   this.tchmyExpanded();
// }
// if(div == "chart9"){
//   this.values = div;
//   this.modalService.open(this.Graphical, { size: 'xl', backdrop: 'static', keyboard: false });
//   this.tchmyExpanded();
// }
// if(div == "chart10"){
//   this.values = div;
//   this.modalService.open(this.Graphical, { size: 'xl', backdrop: 'static', keyboard: false });
//   this.tchmyExpanded();
// }
// if(div == "chart11"){
//   this.values = div;
//   this.modalService.open(this.Graphical, { size: 'xl', backdrop: 'static', keyboard: false });
//   this.tchmyExpanded();
// }
// if(div == "chart12"){
//   this.values = div;
//   this.modalService.open(this.Graphical, { size: 'xl', backdrop: 'static', keyboard: false });
//   this.tchmyExpanded();
// }
// }

// mouseLeave(div : string){
// }

// mystd(){
//   if (this.values == 'chart1'){
        
//     this.exptch61 = [];
//     this.exptch62 = [];
//     this.exptch63 = [];
//     this.exptch64 = [];

//     for (var i=0; i<teacherdata.length; i++)
//     {

//     if(teacherdata[i].testgdata1 != null){
//       this.exptch61.push(teacherdata[i].testgdata1)
//     }
//     if(teacherdata[i].testgdata2 != null){
//       this.exptch61.push(teacherdata[i].testgdata2)
//     }
//     if(teacherdata[i].testgdata3 != null){
//       this.exptch61.push(teacherdata[i].testgdata3)
//     }
//     if(teacherdata[i].testgdata4 != null){
//       this.exptch61.push(teacherdata[i].testgdata4)
//     }
//     if(teacherdata[i].testgdata5 != null){
//       this.exptch61.push(teacherdata[i].testgdata5)
//     }
//     if(teacherdata[i].testgdata6 != null){
//       this.exptch61.push(teacherdata[i].testgdata6)
//     }
//     //Aided
//     if(teacherdata[i].testadata1 != null){
//       this.exptch62.push(teacherdata[i].testadata1)
//     }
//     if(teacherdata[i].testadata2 != null){
//       this.exptch62.push(teacherdata[i].testadata2)
//     }
//     if(teacherdata[i].testadata3 != null){
//       this.exptch62.push(teacherdata[i].testadata3)
//     }
//     if(teacherdata[i].testadata4 != null){
//       this.exptch62.push(teacherdata[i].testadata4)
//     }
//     if(teacherdata[i].testadata5 != null){
//       this.exptch62.push(teacherdata[i].testadata5)
//     }
//     if(teacherdata[i].testadata6 != null){
//       this.exptch62.push(teacherdata[i].testadata6)
//     }
//     //Private
//     if(teacherdata[i].testpdata1 != null){
//       this.exptch63.push(teacherdata[i].testpdata1)
//     }
//     if(teacherdata[i].testpdata2 != null){
//       this.exptch63.push(teacherdata[i].testpdata2)
//     }
//     if(teacherdata[i].testpdata3 != null){
//       this.exptch63.push(teacherdata[i].testpdata3)
//     }
//     if(teacherdata[i].testpdata4 != null){
//       this.exptch63.push(teacherdata[i].testpdata4)
//     }
//     if(teacherdata[i].testpdata5 != null){
//       this.exptch63.push(teacherdata[i].testpdata5)
//     }
//     if(teacherdata[i].testpdata6 != null){
//       this.exptch63.push(teacherdata[i].testpdata6)
//     }
//     //Others
//     if(teacherdata[i].testodata1 != null){
//       this.exptch64.push(teacherdata[i].testodata1)
//     }
//     if(teacherdata[i].testodata2 != null){
//       this.exptch64.push(teacherdata[i].testodata2)
//     }
//     if(teacherdata[i].testodata3 != null){
//       this.exptch64.push(teacherdata[i].testodata3)
//     }
//     if(teacherdata[i].testodata4 != null){
//       this.exptch64.push(teacherdata[i].testodata4)
//     }
//     if(teacherdata[i].testodata5 != null){
//       this.exptch64.push(teacherdata[i].testodata5)
//     }
//     if(teacherdata[i].testodata6 != null){
//       this.exptch64.push(teacherdata[i].testodata6)
//     }
//   }
// }
// else if (this.values == 'chart2'){
//   this.exptch61 = [];
//   this.exptch62 = [];
//   this.exptch63 = [];
//   this.exptch64 = [];
//   for (var i=0; i<teacherdata.length; i++)
//     {
// //Testing for expanded graph chart2
//   //Govt
//   if(teacherdata[i].testggdata1 != null){
//     this.exptch61.push(teacherdata[i].testggdata1)
//   }
//   if(teacherdata[i].testggdata2 != null){
//     this.exptch61.push(teacherdata[i].testggdata2)
//   }
//   if(teacherdata[i].testggdata3 != null){
//     this.exptch61.push(teacherdata[i].testggdata3)
//   }
//   if(teacherdata[i].testggdata4 != null){
//     this.exptch61.push(teacherdata[i].testggdata4)
//   }
//   if(teacherdata[i].testggdata5 != null){
//     this.exptch61.push(teacherdata[i].testggdata5)
//   }
//   if(teacherdata[i].testggdata6 != null){
//     this.exptch61.push(teacherdata[i].testggdata6)
//   }
//   //Aided
//   if(teacherdata[i].testaadata1 != null){
//     this.exptch62.push(teacherdata[i].testaadata1)
//   }
//   if(teacherdata[i].testaadata2 != null){
//     this.exptch62.push(teacherdata[i].testaadata2)
//   }
//   if(teacherdata[i].testaadata3 != null){
//     this.exptch62.push(teacherdata[i].testaadata3)
//   }
//   if(teacherdata[i].testaadata4 != null){
//     this.exptch62.push(teacherdata[i].testaadata4)
//   }
//   if(teacherdata[i].testaadata5 != null){
//     this.exptch62.push(teacherdata[i].testaadata5)
//   }
//   if(teacherdata[i].testaadata6 != null){
//     this.exptch62.push(teacherdata[i].testaadata6)
//   }
//   //Private
//   if(teacherdata[i].testppdata1 != null){
//     this.exptch63.push(teacherdata[i].testppdata1)
//   }
//   if(teacherdata[i].testppdata2 != null){
//     this.exptch63.push(teacherdata[i].testppdata2)
//   }
//   if(teacherdata[i].testppdata3 != null){
//     this.exptch63.push(teacherdata[i].testppdata3)
//   }
//   if(teacherdata[i].testppdata4 != null){
//     this.exptch63.push(teacherdata[i].testppdata4)
//   }
//   if(teacherdata[i].testppdata5 != null){
//     this.exptch63.push(teacherdata[i].testppdata5)
//   }
//   if(teacherdata[i].testppdata6 != null){
//     this.exptch63.push(teacherdata[i].testppdata6)
//   }
//   //Others
//   if(teacherdata[i].testoodata1 != null){
//     this.exptch64.push(teacherdata[i].testoodata1)
//   }
//   if(teacherdata[i].testoodata2 != null){
//     this.exptch64.push(teacherdata[i].testoodata2)
//   }
//   if(teacherdata[i].testoodata3 != null){
//     this.exptch64.push(teacherdata[i].testoodata3)
//   }
//   if(teacherdata[i].testoodata4 != null){
//     this.exptch64.push(teacherdata[i].testoodata4)
//   }
//   if(teacherdata[i].testoodata5 != null){
//     this.exptch64.push(teacherdata[i].testoodata5)
//   }
//   if(teacherdata[i].testoodata6 != null){
//     this.exptch64.push(teacherdata[i].testoodata6)
//   }
//   }
// }
// else if (this.values == 'chart3'){
//   this.exptch61 = [];
//   this.exptch62 = [];
//   this.exptch63 = [];
//   this.exptch64 = [];
//   for (var i=0; i<teacherdata.length; i++)
//     {

//   //Testing for expanded graph chart3
//   //Govt
//   if(teacherdata[i].testgggdata1 != null){
//     this.exptch61.push(teacherdata[i].testgggdata1)
//   }
//   if(teacherdata[i].testgggdata2 != null){
//     this.exptch61.push(teacherdata[i].testgggdata2)
//   }
//   if(teacherdata[i].testgggdata3 != null){
//     this.exptch61.push(teacherdata[i].testgggdata3)
//   }
//   if(teacherdata[i].testgggdata4 != null){
//     this.exptch61.push(teacherdata[i].testgggdata4)
//   }
//   if(teacherdata[i].testgggdata5 != null){
//     this.exptch61.push(teacherdata[i].testgggdata5)
//   }
//   if(teacherdata[i].testgggdata6 != null){
//     this.exptch61.push(teacherdata[i].testgggdata6)
//   }
//   //Aided
//   if(teacherdata[i].testaaadata1 != null){
//     this.exptch62.push(teacherdata[i].testaaadata1)
//   }
//   if(teacherdata[i].testaaadata2 != null){
//     this.exptch62.push(teacherdata[i].testaaadata2)
//   }
//   if(teacherdata[i].testaaadata3 != null){
//     this.exptch62.push(teacherdata[i].testaaadata3)
//   }
//   if(teacherdata[i].testaaadata4 != null){
//     this.exptch62.push(teacherdata[i].testaaadata4)
//   }
//   if(teacherdata[i].testaaadata5 != null){
//     this.exptch62.push(teacherdata[i].testaaadata5)
//   }
//   if(teacherdata[i].testaaadata6 != null){
//     this.exptch62.push(teacherdata[i].testaaadata6)
//   }
//   //Private
//   if(teacherdata[i].testpppdata1 != null){
//     this.exptch63.push(teacherdata[i].testpppdata1)
//   }
//   if(teacherdata[i].testpppdata2 != null){
//     this.exptch63.push(teacherdata[i].testpppdata2)
//   }
//   if(teacherdata[i].testpppdata3 != null){
//     this.exptch63.push(teacherdata[i].testpppdata3)
//   }
//   if(teacherdata[i].testpppdata4 != null){
//     this.exptch63.push(teacherdata[i].testpppdata4)
//   }
//   if(teacherdata[i].testpppdata5 != null){
//     this.exptch63.push(teacherdata[i].testpppdata5)
//   }
//   if(teacherdata[i].testpppdata6 != null){
//     this.exptch63.push(teacherdata[i].testpppdata6)
//   }
//   //Others
//   if(teacherdata[i].testooodata1 != null){
//     this.exptch64.push(teacherdata[i].testooodata1)
//   }
//   if(teacherdata[i].testooodata2 != null){
//     this.exptch64.push(teacherdata[i].testooodata2)
//   }
//   if(teacherdata[i].testooodata3 != null){
//     this.exptch64.push(teacherdata[i].testooodata3)
//   }
//   if(teacherdata[i].testooodata4 != null){
//     this.exptch64.push(teacherdata[i].testooodata4)
//   }
//   if(teacherdata[i].testooodata5 != null){
//     this.exptch64.push(teacherdata[i].testooodata5)
//   }
//   if(teacherdata[i].testooodata6 != null){
//     this.exptch64.push(teacherdata[i].testooodata6)
//   }
// }
// }
// }

//OnClick Expanded Graph

// tchmyExpanded(){
  
//   const myOption51:any = {
//    chart:{
//      width:1670
//    },
//   title: {
//     text: 'School Growth by Management, 2012-2020',
//     style: {

//       font: 'normal 25px Verdana, sans-serif',

//       color : 'black'

//   }
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
//     data: this.exptch61
//  }, {
//     name: 'Aided',
//     data: this.exptch62
//  }, {
//     name: 'Private',
//     data: this.exptch63
//  }, {
//     name: 'Others',
//     data: this.exptch64
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
// //  alert("testing---->>>" + this.exptch61 + "testing---->>>" + this.exptch62 + "testing---->>>" + this.exptch63 + "testing---->>>" + this.exptch64)
// //  alert("MyOptiontesting-->"+JSON.stringify(myOption51))
//  var lineChart = Highcharts.chart('tchmyExpanded', myOption51);
//  }
}
