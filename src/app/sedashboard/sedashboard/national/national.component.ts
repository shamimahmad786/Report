import { Component, OnInit } from '@angular/core';
import { HighchartsComponent } from 'src/app/shared/highcharts/highcharts.component';
declare var $: any;
import { ReportServiceService } from 'src/app/services/report-service.service';
@Component({
  selector: 'app-national',
  styleUrls: ['./national.component.css','../../../../assets/newdashboard/css/style.css'],
  templateUrl: './national.component.html'
  
})
export class NationalComponent implements OnInit {

  constructor(private _highchart:HighchartsComponent, private reportService: ReportServiceService) { }
dashboardValue:any;
data1=[];  
data2:any=[];  
data3:any=[];
categories:any=[];  
manageCategories:any=[];
schoolCount:number;
teachCount:number;
studentCount:number;
//   data1 = [
//     ['Govt', 1083678],
//     ['Aided', 84614],
//     ['Private', 325560],
//     ['Other', 55954]
// ]
// data2 = [
//   ['Govt', 4945827],
//   ['Aided', 815212],
//   ['Private', 3300449],
//   ['Other', 355407]
// ]

// data3 = [
//   ['Govt', 128497792],
//   ['Private', 83950592],
//   ['Aided', 27525717],
//   ['Other', 7879587]
// ]

  ngOnInit() {
    // alert("called");
this.getSedashboardData();
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



    // this._highchart.roundPieChart('schoolsPie',this.data1,'','')
    // this._highchart.roundPieChart('teacherPie',this.data2,'','')
    // this._highchart.roundPieChart('studentPie',this.data3,'','')

   this.categories = ['Primary', 'Upper Primary', 'Secondary', 'Higher Secondary']
    this.manageCategories = ['Govt', 'Aided', 'Private', 'Others']
    var data1 = [{
      name: 'Boys',
      data: [62403871, 33103512, 19967579, 13124077]
  }, {
      name: 'Girls',
      data: [57637224, 31056694, 18284871, 12275860]
  }]

//   var data2 = [{
//     name: '',
//     data: [95.18, 97.24, 96.97, 95.38]
// }]
    // this._highchart.multibarChart('enrolmentChart',categories,data1,'Title','')
    // this._highchart.barChart('girlsToiletChart',manageCategories,data2,'Title','')
  }


  getSedashboardData(){
    const data={'state_code':'99'}
    this.reportService.getSedashboardData(data).subscribe(res => {
      // alert("Response data--->"+JSON.stringify(res));
      console.log(JSON.stringify(res.rowValue));
      this.dashboardValue=res.rowValue[0];
      this.schoolCount=res.rowValue[0].school_count;
      this.teachCount=res.rowValue[0].teacher_count;
      this.studentCount=res.rowValue[0].student_count;
      var data1=[['Govt',+this.dashboardValue.school_govt],['Aided',+this.dashboardValue.school_aided],['Private',+this.dashboardValue.school_private],['Other',+this.dashboardValue.school_other]];
      this.data2=[['Govt',+this.dashboardValue.teacher_govt],['Aided',+this.dashboardValue.teacher_aided],['Private',+this.dashboardValue.teacher_private],['Other',+this.dashboardValue.teacher_other]];
      this.data3=[['Govt',+this.dashboardValue.student_govt],['Aided',+this.dashboardValue.student_aided],['Private',+this.dashboardValue.student_private],['Other',+this.dashboardValue.student_other]];
      // this.data1 = [
      //       ['Govt', 1083678],
      //       ['Aided', 84614],
      //       ['Private', 325560],
      //       ['Other', 55954]
      //   ]
      // alert("called--->"+data1);
      this._highchart.roundPieChart('schoolsPie',data1,'','')
      this._highchart.roundPieChart('teacherPie',this.data2,'','')
      this._highchart.roundPieChart('studentPie',this.data3,'','')

      var data4 = [{
        name: 'Boys',
        data: [+this.dashboardValue.boys_primary, +this.dashboardValue.boys_upperprimary, +this.dashboardValue.boys_secondary, +this.dashboardValue.boys_highersecondary]
    }, {
        name: 'Girls',
        data: [+this.dashboardValue.girls_primary, +this.dashboardValue.girls_upperprimary, +this.dashboardValue.girls_secondary, +this.dashboardValue.girls_highersecondary]
    }]

    this._highchart.multibarChart('enrolmentChart',this.categories,data4,'Title','');

    var data5 = [{
      name: '',
      data: [+this.dashboardValue.girls_toilet_govt,+this.dashboardValue.girls_toilet_aided,+this.dashboardValue.girls_toilet_private,+this.dashboardValue.girls_toilet_other]
    }]
    var data10 = [{
      name: '',
      data: [+this.dashboardValue.boys_toilet_govt,+this.dashboardValue.boys_toilet_aided,+this.dashboardValue.boys_toilet_private,+this.dashboardValue.boys_toilet_other]
    }]
    var data6 = [{
      name: '',
      data: [+this.dashboardValue.cwsn_toilet_govt,+this.dashboardValue.cwsn_toilet_aided,+this.dashboardValue.cwsn_toilet_private,+this.dashboardValue.cwsn_toilet_other]
    }]
    var data7 = [{
      name: '',
      data: [+this.dashboardValue.library_govt,+this.dashboardValue.library_aided,+this.dashboardValue.library_private,+this.dashboardValue.library_other]
    }]
    var data8 = [{
      name: '',
      data: [+this.dashboardValue.electricity_govt,+this.dashboardValue.electricity_aided,+this.dashboardValue.electricity_private,+this.dashboardValue.electricity_other]
    }]
    var data9 = [{
      name: '',
      data: [+this.dashboardValue.water_govt,+this.dashboardValue.water_aided,+this.dashboardValue.water_private,+this.dashboardValue.water_other]
    }]

    // alert("infrastructure data--->"+JSON.stringify(data5))
      this._highchart.barChart('girlsToiletChart',this.manageCategories,data5,'Title','');
      this._highchart.barChart('boysToiletChart',this.manageCategories,data10,'Title','');
      this._highchart.barChart('cwsnToiletChart',this.manageCategories,data6,'Title','');
      this._highchart.barChart('libraryChart',this.manageCategories,data7,'Title','');
      this._highchart.barChart('electricityChart',this.manageCategories,data8,'Title','');
      this._highchart.barChart('waterChart',this.manageCategories,data9,'Title','');
      
  // }]

    })
}


}
