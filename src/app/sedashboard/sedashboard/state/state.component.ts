
import { Component, OnInit } from '@angular/core';
import { HighchartsComponent } from 'src/app/shared/highcharts/highcharts.component';
import { LocationService } from 'src/app/services/location.service';
import { ReportServiceService } from 'src/app/services/report-service.service';
import Highcharts from 'highcharts';
declare var $: any;

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css','../../../../assets/newdashboard/css/style.css'],
})
export class StateComponent implements OnInit {

  stateListData:[]=[];

  constructor(private _highchart:HighchartsComponent, private reportService: ReportServiceService, public _loService:LocationService) { }
dashboardValue:any;
data1=[];  
data2:any=[];  
data3:any=[];
categories:any=[];  
manageCategories:any=[];
manageCategoriesUpdated:any = [];

schoolCount:number;
teachCount:number;
studentCount:number;
combinedyearListUpdated:any = [];

uniYear: any ="2019-20"
// uniYear: any ="2018-19"

combinedyearList:any=["2019-20"];

// this.combinedyearList 
isValid: any;
  ngOnInit() {

    Highcharts.setOptions({
      lang: {
        thousandsSep: ""
      }
    });

    this.getStateList();
    this.getSedashboardData("99" , this.uniYear);
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

   this.categories = ['Pre-Primary','Primary', 'Upper Primary', 'Secondary', 'Higher Secondary']
    this.manageCategories = ['Govt', 'Aided', 'Private', 'Others']
    this.manageCategoriesUpdated = ['Govt', 'Aided', 'Private', 'Others', 'Total']
    var data1 = [{
      name: 'Boys',
      data: [62403871, 33103512, 19967579, 13124077]
  }, {
      name: 'Girls',
      data: [57637224, 31056694, 18284871, 12275860]
  }]


  }

  getStateValue(event){
    this.getSedashboardData(event, this.uniYear)
  }

  getYear(event){
    this.uniYear = event;
    this.getSedashboardData("99", this.uniYear)
    this.getStateList();
  }


  getSedashboardData(stateCode , year){
    const data={'state_code':stateCode, 'year':year}
    alert(JSON.stringify(data));
   
    this.reportService.getSedashboardData(data).subscribe(res => {
alert("before")
// return true;
      // this.combinedyearList = res.yearListMap;  

    
      alert(JSON.stringify(this.combinedyearList))
      // this.combinedyearListUpdated = [];
      // for (let i = 0; i<this.combinedyearList.length; i++){
      //   if(this.combinedyearList[i] != "2019-20"){
      //     this.combinedyearListUpdated.push(this.combinedyearList[i])
      //   }
      // }    

      if (this.combinedyearList == null || this.combinedyearList == "" || res.columnName == null && res.status == 0) {
        this.isValid = true;
      } else {
        this.isValid = false;
      }
      this.dashboardValue=res.rowValue[0];
      this.schoolCount=res.rowValue[0].school_total;
      this.teachCount=res.rowValue[0].teacher_count;
      this.studentCount=res.rowValue[0].student_count;
      var data1=[['Govt',+this.dashboardValue.school_govt],['Aided',+this.dashboardValue.school_aided],['Private',+this.dashboardValue.school_private],['Other',+this.dashboardValue.school_other]];
      this.data2=[['Govt',+this.dashboardValue.teacher_govt],['Aided',+this.dashboardValue.teacher_aided],['Private',+this.dashboardValue.teacher_private],['Other',+this.dashboardValue.teacher_other]];
      this.data3=[['Govt',+this.dashboardValue.student_govt],['Aided',+this.dashboardValue.student_aided],['Private',+this.dashboardValue.student_private],['Other',+this.dashboardValue.student_other]];
     
      this._highchart.roundPieChart('schoolsPieState',data1,'Total number of Schools','')
      this._highchart.roundPieChart('teacherPieState',this.data2,'Total number of Teachers','')
      this._highchart.roundPieChart('studentPieState',this.data3,'Total number of Students','')

      var data4 = [{
        name: 'Boys',
        data: [+this.dashboardValue.cpp_b, +this.dashboardValue.boys_primary, +this.dashboardValue.boys_upperprimary, +this.dashboardValue.boys_secondary, +this.dashboardValue.boys_highersecondary]
    }, {
        name: 'Girls',
        data: [+this.dashboardValue.cpp_g, +this.dashboardValue.girls_primary, +this.dashboardValue.girls_upperprimary, +this.dashboardValue.girls_secondary, +this.dashboardValue.girls_highersecondary]
    }]
    this._highchart.multibarChart('enrolmentChartState',this.categories,data4,'Title','');
    //Girls Toilet
    var data5 = [{
      name: 'Not Available',
      data: [+this.dashboardValue.girl_toilet_n,+this.dashboardValue.girl_toilet_aided_n,+this.dashboardValue.girl_toilet_pvt_n,+this.dashboardValue.girl_toilet_other_n,
        +this.dashboardValue.girl_toilet_n],
    },{
      name: 'Available',
      data: [+this.dashboardValue.girl_toilet_govt_y,+this.dashboardValue.girl_toilet_aided_y,+this.dashboardValue.girl_toilet_pvt_y,+this.dashboardValue.girl_toilet_other_y, 
        +this.dashboardValue.girl_toilet_y],      
    }
    ]
    //Boys Toilet
    var data10 = [{
      name: 'Not Available',
      data: [+this.dashboardValue.boy_toilet_govt_n,+this.dashboardValue.boy_toilet_aided_n,+this.dashboardValue.boy_toilet_pvt_n,+this.dashboardValue.boy_toilet_other_n,
      +this.dashboardValue.boy_toilet_n]
    },{
      name: 'Available',
      data: [+this.dashboardValue.boy_toilet_govt_y,+this.dashboardValue.boy_toilet_aided_y,+this.dashboardValue.boy_toilet_pvt_y,+this.dashboardValue.boy_toilet_other_y,
      +this.dashboardValue.boy_toilet_y]
    }
    ]
    //CWSN Toilet
    var data6 = [
      {
        name: 'Not Available',
        data: [+this.dashboardValue.cwsn_toilet_n_govt_n,+this.dashboardValue.cwsn_toilet_n_aided_n,+this.dashboardValue.cwsn_toilet_n_pvt_n,+this.dashboardValue.cwsn_toilet_n_other_n,
        +this.dashboardValue.cwsn_toilet_n_n]
      },{
      name: 'Available',
      data: [+this.dashboardValue.cwsn_toilet_y_govt_y,+this.dashboardValue.cwsn_toilet_y_aided_y,+this.dashboardValue.cwsn_toilet_y_pvt_y,+this.dashboardValue.cwsn_toilet_y_other_y,
      +this.dashboardValue.cwsn_toilet_y_y]
    }
    ]
    //Libarary
    var data7 = [{
      name: 'Not Available',
      data: [+this.dashboardValue.library_yn_govt_n,+this.dashboardValue.library_yn_aided_n,+this.dashboardValue.library_yn_pvt_n,+this.dashboardValue.library_yn_other_n,
        +this.dashboardValue.library_yn_n]
    },{
      name: 'Available',
      data: [+this.dashboardValue.library_yn_govt_y,+this.dashboardValue.library_yn_aided_y,+this.dashboardValue.library_yn_pvt_y,+this.dashboardValue.library_yn_other_y,
      +this.dashboardValue.library_yn_y]
    }
    ]
    //Library with books
    var data10 = [
      {
        name: 'Not Available',
        data: [+this.dashboardValue.library_with_books_govt_n,+this.dashboardValue.library_with_books_aided_n,+this.dashboardValue.library_with_books_pvt_n,
          +this.dashboardValue.library_with_books_other_n, +this.dashboardValue.library_with_books_n]
      },{
      name: 'Available',
      data: [+this.dashboardValue.library_with_books_govt_y,+this.dashboardValue.library_with_books_aided_y,+this.dashboardValue.library_with_books_pvt_y,
      +this.dashboardValue.library_with_books_other_y, +this.dashboardValue.library_with_books_y]
    }
    ]
    //Electricity
    var data8 = [{
      name: 'Not Available',
      data: [+this.dashboardValue.electricity_available_govt_n,+this.dashboardValue.electricity_available_aided_n,+this.dashboardValue.electricity_available_pvt_n,
        +this.dashboardValue.electricity_available_other_n, +this.dashboardValue.electricity_available_n]
    },{
      name: 'Available',
      data: [+this.dashboardValue.electricity_available_govt_y,+this.dashboardValue.electricity_available_aided_y,+this.dashboardValue.electricity_available_pvt_y,
      +this.dashboardValue.electricity_available_other_y, +this.dashboardValue.electricity_available_y]
    }
    ]
    //Water
    var data9 = [
      {
        name: 'Not Available',
        data: [+this.dashboardValue.drink_water_yn_govt_n,+this.dashboardValue.drink_water_yn_aided_n,+this.dashboardValue.drink_water_yn_pvt_n,+this.dashboardValue.drink_water_yn_other_n,
          +this.dashboardValue.drink_water_yn_n]
      },{
      name: 'Available',
      data: [+this.dashboardValue.drink_water_yn_govt_y,+this.dashboardValue.drink_water_yn_aided_y,+this.dashboardValue.drink_water_yn_pvt_y,+this.dashboardValue.drink_water_yn_other_y,
      +this.dashboardValue.drink_water_yn_y]
    }
    ]
    //Handwash Facility
    var data11 = [
      {
        name: 'Not Available',
        data: [+this.dashboardValue.handwash_yn_govt_n,+this.dashboardValue.handwash_yn_aided_n,+this.dashboardValue.handwash_yn_pvt_n,+this.dashboardValue.handwash_yn_other_n,
          +this.dashboardValue.handwash_yn_n]
      },{
      name: 'Available',
      data: [+this.dashboardValue.handwash_yn_govt_y,+this.dashboardValue.handwash_yn_aided_y,+this.dashboardValue.handwash_yn_pvt_y,+this.dashboardValue.handwash_yn_other_y,
      +this.dashboardValue.handwash_yn_y]
    }
    ]
    //Medical Facility
    var data12 = [
      {
        name: 'Not Available',
        data: [+this.dashboardValue.medchk_yn_govt_n,+this.dashboardValue.medchk_yn_aided_n,+this.dashboardValue.medchk_yn_pvt_n,+this.dashboardValue.medchk_yn_other_n,
          +this.dashboardValue.medchk_yn_n]
      },{
      name: 'Available',
      data: [+this.dashboardValue.medchk_yn_govt_y,+this.dashboardValue.medchk_yn_aided_y,+this.dashboardValue.medchk_yn_pvt_y,+this.dashboardValue.medchk_yn_other_y,
      +this.dashboardValue.medchk_yn_y]
    }
    ]

      this._highchart.stackedBarChart('girlsToiletChartState',this.manageCategoriesUpdated,data5,'Title','');
      // this._highchart.stackedBarChart('boysToiletChartState',this.manageCategoriesUpdated,data10,'Title','');
      // this._highchart.stackedBarChart('cwsnToiletChartState',this.manageCategoriesUpdated,data6,'Title','');
      this._highchart.stackedBarChart('libraryChartState',this.manageCategoriesUpdated,data7,'Title','');
      this._highchart.stackedBarChart('libraryChartStateWithBooks',this.manageCategoriesUpdated,data10,'Title','');
      this._highchart.stackedBarChart('electricityChartState',this.manageCategoriesUpdated,data8,'Title','');
      this._highchart.stackedBarChart('waterChartState',this.manageCategoriesUpdated,data9,'Title','');
      this._highchart.stackedBarChart('hadwashFacilityChartState',this.manageCategoriesUpdated,data11,'Title','');
      this._highchart.stackedBarChart('MedicalFacilityChartState',this.manageCategoriesUpdated,data12,'Title','');
      
    })}

getStateList(){
  this._loService.getStateList().subscribe(res => {
this.stateListData=res;
  })
}



}

