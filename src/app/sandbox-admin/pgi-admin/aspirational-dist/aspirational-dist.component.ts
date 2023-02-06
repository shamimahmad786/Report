import { DatePipe, DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ReportServiceService } from 'src/app/services/report-service.service';


import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
import { ExcelGeneration } from '../static-report/utilities/excel-generation.service';
// import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

var alasql = require('alasql');
var db = new alasql.Database();


declare var require: any;


@Component({
  selector: 'app-aspirational-dist',
  templateUrl: './aspirational-dist.component.html',
  styleUrls: ['./aspirational-dist.component.css'],
  providers: [ExcelGeneration, DatePipe]
})
export class AspirationalDistComponent implements OnInit {

  columnLengthForExcel: any;

  reportDate: any;
  excelStyles;

  public staticReportValues: any;
  schoolReport: any[] = [];
  teacherReport: any[] = [];
  otherReport: any[] = [];
  aspirationalReport:any[]=[];
  frequentReport: any[] = [];
  enrollmentReport: any[] = [];
  infrastructureReport: any[] = [];
  filterReportCount: number;
  reportTag: any;
  tag: String;
  uniBlock: boolean = false;

  private pinnedBottomRowData;

  private agChange: boolean;
  private pdfRowData: any;
  finalJSONNew: any = [];

  jsonColumnName: string;

  currentDate: any;

  columnDefs: any [] =[] ;
  rowData: any [] = [];
  public gridApi: any;
  gridColumnApi: any;
  defaultColDef;
  autoGroupColumnDef;

  private universalAgGridColumnDefs: any[] = [];

  yearShow: boolean = true;

  staticReportDependency: any;
  uniYear: any = "2019-20";
  reportCode: any;
  uniDist: any;
  distShow: boolean;
  showGrid: boolean;
  blockShow: boolean;
  uniState: any;
  dataId: any;

  dataObjChart:any;
  showTableNote: boolean;
  thableNote: any;

  conditionObj = {};

  paramName: string;
  paramValue: string;
  schemaName: string;
  chartType: any;

  public combinedyearList: any;
  stateShow: boolean = true;
  errorDisplay: any;

  isValid: any;

  public columnValues: any;

  uniHeader: any;
  reportOrder: any;

  masterCondition = {};

  state: any = [];
  district: any;

  constructor(@Inject(DOCUMENT) document,private modalService: NgbModal,private excelGen: ExcelGeneration, private datePipe: DatePipe, private reportService: ReportServiceService, private http: HttpClient, private ngxLoader: NgxUiLoaderService) { 

    this.excelStyles = [
      {
        id: 'header',
        interior: {
          color: '#b4c5e8',
          pattern: 'Solid',
        },
        font: { size: 14 },
        borders: {
          borderBottom: {
            color: '#edf3ff',
            lineStyle: 'Continuous',
            weight: 1,
          },
          borderTop: {
            color: '#000000',
            lineStyle: 'Continuous',
            weight: 2,
          },
          borderLeft: {
            color: '#edf3ff',
            lineStyle: 'Continuous',
            weight: 1,
          },
          borderRight: {
            color: '#edf3ff',
            lineStyle: 'Continuous',
            weight: 1,
          },
        },
        alignment: {
          horizontal: 'Center'
        }
      },
      {
        id: 'ReportGenerateBy',
        interior: {
          color: '#b4c5e8',
          pattern: 'Solid',
        },
        font: { size: 16 },
        borders: {
          borderBottom: {
            color: '#edf3ff',
            lineStyle: 'Continuous',
            weight: 1,
          },
          borderLeft: {
            color: '#edf3ff',
            lineStyle: 'Continuous',
            weight: 1,
          },
          borderRight: {
            color: '#edf3ff',
            lineStyle: 'Continuous',
            weight: 1,
          },
          borderTop: {
            color: '#edf3ff',
            lineStyle: 'Continuous',
            weight: 1,
          },
        },
        alignment: {
          horizontal: 'Center'
        }

      }, {
        id: 'ReportDate',
        interior: {
          color: '#b4c5e8',
          pattern: 'Solid',
        },
        font: { size: 16 }, borders: {
          borderBottom: {
            color: '#edf3ff',
            lineStyle: 'Continuous',
            weight: 1,
          },
          borderLeft: {
            color: '#edf3ff',
            lineStyle: 'Continuous',
            weight: 1,
          },
          borderRight: {
            color: '#edf3ff',
            lineStyle: 'Continuous',
            weight: 1,
          },
          borderTop: {
            color: '#edf3ff',
            lineStyle: 'Continuous',
            weight: 1,
          },
        },
        alignment: {
          horizontal: 'Center'
        }
      }, {
        id: 'ReportName',
        interior: {
          color: '#b4c5e8',
          pattern: 'Solid',
        },
        font: { size: 20 },
        borders: {
          borderBottom: {
            color: '#edf3ff',
            lineStyle: 'Continuous',
            weight: 1,
          },
          borderLeft: {
            color: '#edf3ff',
            lineStyle: 'Continuous',
            weight: 1,
          },
          borderRight: {
            color: '#edf3ff',
            lineStyle: 'Continuous',
            weight: 1,
          },
          borderTop: {
            color: '#edf3ff',
            lineStyle: 'Continuous',
            weight: 1,
          },
        },
        alignment: {
          horizontal: 'Center'
        }
      }, {
        id: 'academicYear',
        interior: {
          color: '#b4c5e8',
          pattern: 'Solid',
        },
        font: { size: 16 }, borders: {
          borderBottom: {
            color: '#edf3ff',
            lineStyle: 'Continuous',
            weight: 1,
          },
          borderLeft: {
            color: '#edf3ff',
            lineStyle: 'Continuous',
            weight: 1,
          },
          borderRight: {
            color: '#edf3ff',
            lineStyle: 'Continuous',
            weight: 1,
          },
          borderTop: {
            color: '#edf3ff',
            lineStyle: 'Continuous',
            weight: 1,
          },
        },
      }, {
        id: 'ReportState',
        interior: {
          color: '#b4c5e8',
          pattern: 'Solid',
        },
        font: { size: 16 }, borders: {
          borderBottom: {
            color: '#edf3ff',
            lineStyle: 'Continuous',
            weight: 1,
          },
          borderLeft: {
            color: '#edf3ff',
            lineStyle: 'Continuous',
            weight: 1,
          },
          borderRight: {
            color: '#edf3ff',
            lineStyle: 'Continuous',
            weight: 1,
          },
          borderTop: {
            color: '#edf3ff',
            lineStyle: 'Continuous',
            weight: 1,
          },
        },
      }, {
        id: 'ReportDistrict',
        interior: {
          color: '#b4c5e8',
          pattern: 'Solid',
        },
        font: { size: 16 },
        borders: {
          borderBottom: {
            color: '#edf3ff',
            lineStyle: 'Continuous',
            weight: 1,
          },
          borderLeft: {
            color: '#edf3ff',
            lineStyle: 'Continuous',
            weight: 1,
          },
          borderRight: {
            color: '#edf3ff',
            lineStyle: 'Continuous',
            weight: 1,
          },
          borderTop: {
            color: '#edf3ff',
            lineStyle: 'Continuous',
            weight: 1,
          },
        },
      }, {
        id: 'ReportBlock',
        interior: {
          color: '#b4c5e8',
          pattern: 'Solid',
        },
        font: { size: 16 }, borders: {
          borderBottom: {
            color: '#edf3ff',
            lineStyle: 'Continuous',
            weight: 1,
          },
          borderLeft: {
            color: '#edf3ff',
            lineStyle: 'Continuous',
            weight: 1,
          },
          borderRight: {
            color: '#edf3ff',
            lineStyle: 'Continuous',
            weight: 1,
          },
          borderTop: {
            color: '#edf3ff',
            lineStyle: 'Continuous',
            weight: 1,
          },
        },
      }, {
        id: 'note',
        wrapText: true,
        interior: {
          color: '#b4c5e8',
          pattern: 'Solid',
        }
      }

      // {
      //   id: 'dateFormat',
      //   dataType: 'dateTime',
      //   numberFormat: { format: 'mm/dd/yyyy;@' },
      // },
      // {
      //   id: 'twoDecimalPlaces',
      //   numberFormat: { format: '#,##0.00' },
      // },
      // {
      //   id: 'textFormat',
      //   dataType: 'string',
      // },
      // {
      //   id: 'bigHeader',
      //   font: { size: 25 },
      // },
    ];

    
  }

  @ViewChild('aspirationalAgGridAllYear', { static: true }) aspirationalAgGridAllYear: TemplateRef<any>;
  @ViewChild('aspirationalAgGridSingleYear', { static: true }) aspirationalAgGridSingleYear: TemplateRef<any>;
  @ViewChild('aspirationalAgGridwithBlock', { static: true }) aspirationalAgGridwithBlock: TemplateRef<any>;
    
  ngOnInit() {
    // 
    if (sessionStorage.getItem('currentUser') == null) {
      // this.reportType = { paramName: 'civilian', paramValue: '' }
    } else if (JSON.parse(sessionStorage.getItem('currentUser')).paramName === 'STLU') {
      // this.reportType = { paramName: JSON.parse(sessionStorage.getItem('currentUser')).paramName, paramValue: JSON.parse(sessionStorage.getItem('currentUser')).paramValue }
    } else {
      // this.reportType = { paramName: 'civilian', paramValue: '' }
    }

    if (sessionStorage.getItem('currentUser') == null) {
      // this.loadstaticReportData('749');

      this.reportService.getPublicGroupId().subscribe(res => {
        
        this.loadstaticReportData(res);
      })
    } else {
      this.loadstaticReportData(JSON.parse(sessionStorage.getItem('currentUser')).groupId);
    }

    this.getReportTag();

    // this.loadstaticReportData(JSON.parse(sessionStorage.getItem('currentUser')).groupId);
    this.ngxLoader.start();   
  }


  loadstaticReportData(reportTypes) {
    // 
    this.reportService.getUserReport(reportTypes).subscribe(res => {
      this.staticReportValues = res;
    

      for (let i = 0; i < this.staticReportValues.length; i++) {
        if (this.staticReportValues[i].reportdomain.includes('school')) {
          this.staticReportValues[i]["chartFlag"] = this.chackChart(this.staticReportValues[i].id);
          this.schoolReport.push(this.staticReportValues[i]);
        } else if (this.staticReportValues[i].reportdomain.includes('enrollment')) {
          this.staticReportValues[i]["chartFlag"] = this.chackChart(this.staticReportValues[i].id);
          this.enrollmentReport.push(this.staticReportValues[i]);
        } else if (this.staticReportValues[i].reportdomain.includes('teacher')) {
          this.staticReportValues[i]["chartFlag"] = this.chackChart(this.staticReportValues[i].id);
          this.teacherReport.push(this.staticReportValues[i]);
        } else if (this.staticReportValues[i].reportdomain.includes('infrastructure')) {
          this.staticReportValues[i]["chartFlag"] = this.chackChart(this.staticReportValues[i].id);
          this.infrastructureReport.push(this.staticReportValues[i]);
        } else if (this.staticReportValues[i].reportdomain.includes('others')) {
          this.staticReportValues[i]["chartFlag"] = this.chackChart(this.staticReportValues[i].id);
          this.otherReport.push(this.staticReportValues[i]);
        } else if(this.staticReportValues[i].reportdomain.includes('aspirational')){
          this.staticReportValues[i]["chartFlag"] = this.chackChart(this.staticReportValues[i].id);
          this.aspirationalReport.push(this.staticReportValues[i]);
        } else if (this.staticReportValues[i].reportdomain.includes("frequently")) {
          this.staticReportValues[i]["chartFlag"] = this.chackChart(this.staticReportValues[i].id);
          this.frequentReport.push(this.staticReportValues[i]);
        }
      }
      this.filterReportCount = res.length;
    },
      error => {
        alert('get error in loadstaticReportData--->');
      })
  }

  selectReport(value) {
    this.tag = value.value;
    if (value == "All") {
      this.filterReportCount = this.staticReportValues.length
    } else {
      this.filterReportCount = this.staticReportValues.filter(singleItem => singleItem["reportTag"].toLowerCase().includes(value.toLowerCase())).length
    }
  }

  getReportTag() {
    this.reportService.getReportTag().subscribe(res => {
      this.reportTag = res.data;
    })
  }

  openPieXl(){

  }

  getChartsData(){

  }

  openXl(longContents, reportName, reportOrder) {
    this.uniHeader = reportName;
    this.reportOrder = reportOrder
    this.getMasterData('GET_ASPIRATIONAL', '');
    this.chartType = "T";
  }

  convert(){

  }

  getYear(event) {    
    
    this.uniYear = event.target.value;
    this.staticReportDependency = { "year": this.uniYear,"dist": "all", "block": "none" }
    let condtionsValue = JSON.stringify(this.staticReportDependency);
    this.uniDist = "none";
    let dataId = this.dataId;
    this.distShow = true;
    this.blockShow = false;
    this.uniBlock = false;
    // this.uniState = "national";
    this.showGrid = false;
    this.getTabularDataSingleYear(dataId, condtionsValue, 'Y', 'N');
  }

  getDistrict(event, flag) {
    
    this.uniDist = event.target.value;
    this.uniBlock = false;
    this.staticReportDependency = { "year": this.uniYear,"dist": event.target.value, "block": "none" }
    let condtionsValue = JSON.stringify(this.staticReportDependency);
    if (this.uniDist == "national" || this.uniDist == "all") {
      this.blockShow = false;
    } else {
        this.blockShow = true;
    }
    this.getMasterData('GET_BLOCK_ASPIRATIONAL', "where udise_dist_code= '" + event.target.value + "' and ac_year ='" + this.uniYear + "' order by block_name ");
    this.showGrid = false;
    this.getTabularDataSingleYear(this.dataId, condtionsValue, 'Y', 'N');
  }

  getRegion(event) {
    this.uniBlock = true;
    this.staticReportDependency = { "year": this.uniYear,"dist": this.uniDist, "block": event.target.value }
    let condtionsValue = JSON.stringify(this.staticReportDependency);
    this.showGrid = false;
    this.getTabularDataSingleYear(this.dataId, condtionsValue, 'Y', 'N');
  }

  getMasterData(extensionCall, condition) {
    this.masterCondition = {
      extensionCall: extensionCall,
      condition: condition
    };

    this.reportService.getMasterData(this.masterCondition).subscribe(res => {

      if (extensionCall == "GET_ASPIRATIONAL") {
        this.state = res.rowValue;
      } else if (extensionCall == "GET_BLOCK_ASPIRATIONAL") {
        this.district = res.rowValue;
      } 
    },
      error => {
        alert('error in getMasterData--->');
      })
  }

  onColumnVisible(event){
    
    this.columnLengthForExcel = event.columnApi.columnController.allDisplayedColumns.length;
    if (this.dataId == "300") {
      this.jsonColumnName = "";
      
      for (let i = 0; i < this.universalAgGridColumnDefs.length; i++) {
        if (event.columnApi.getColumn(this.universalAgGridColumnDefs[i].field).visible && (this.universalAgGridColumnDefs[i].field == "state_name" || this.universalAgGridColumnDefs[i].field == "district_name" || this.universalAgGridColumnDefs[i].field == "sch_mgmt_name" ||  this.universalAgGridColumnDefs[i].field == "category_name" ||  this.universalAgGridColumnDefs[i].field == "udise_block_name" )) {
          this.jsonColumnName += this.universalAgGridColumnDefs[i].field + ",";
        }
      }
      if (this.jsonColumnName != "") {
        this.jsonColumnName = "GROUP BY " + this.jsonColumnName;
      }
      let res = alasql("SELECT sum(no_of_school :: number) as no_of_school, sum(hm_room_yn :: number) as hm_room_yn, sum(land_avl_yn :: number) as land_avl_yn, sum(electricity_available :: number) as electricity_available, sum(electricity_yn :: number) as electricity_yn, sum(solarpanel_yn :: number) as solarpanel_yn, sum(playground_yn :: number) as playground_yn, sum(library_yn :: number) as library_yn, sum(librarian_yn :: number) as librarian_yn, sum(newspaper_yn :: number) as newspaper_yn, sum(kitchen_garden_yn :: number) as kitchen_garden_yn, sum(stus_hv_furnt :: number) as stus_hv_furnt, sum(boy_toilet :: number) as boy_toilet, sum(func_boy_toilet :: number) as func_boy_toilet, sum(girl_toilet :: number) as girl_toilet, sum(func_girl_toilet :: number) as func_girl_toilet, sum(toilet_facility :: number) as toilet_facility, sum(func_toilet_facility :: number) as func_toilet_facility, sum(func_urinal_boy :: number) as func_urinal_boy, sum(func_urinal_girl :: number) as func_urinal_girl, sum(func_urinal :: number) as func_urinal, sum(func_toilet_urinal :: number) as func_toilet_urinal, sum(drink_water_yn :: number) as drink_water_yn, sum(drink_water_func_yn :: number) as drink_water_func_yn, sum(water_purifier_yn :: number) as water_purifier_yn, sum(rain_harvest_yn :: number) as rain_harvest_yn, sum(water_tested_yn :: number) as water_tested_yn, sum(handwash_yn :: number) as handwash_yn, sum(incinerator_yn :: number) as incinerator_yn, sum(wash_facility :: number) as wash_facility, sum(ramps_yn :: number) as ramps_yn, sum(handrails_yn :: number) as handrails_yn, sum(medchk_yn :: number) as medchk_yn, sum(compl_medchk_yn :: number) as compl_medchk_yn, sum(internet_yn :: number) as internet_yn, sum(computer_available_yn :: number) as computer_available_yn," + this.jsonColumnName.replace(/,\s*$/, "").split("GROUP BY ")[1] + " FROM ? " + this.jsonColumnName.replace(/,\s*$/, ""), [this.columnValues]);
      this.rowData = res;
    }
    else if (this.dataId == "301") {
      this.jsonColumnName = "";
      
      for (let i = 0; i < this.universalAgGridColumnDefs.length; i++) {
        if (event.columnApi.getColumn(this.universalAgGridColumnDefs[i].field).visible && (this.universalAgGridColumnDefs[i].field == "loc1_name" || this.universalAgGridColumnDefs[i].field == "loc2_name" || this.universalAgGridColumnDefs[i].field == "sch_mgmt_name")) {
          this.jsonColumnName += this.universalAgGridColumnDefs[i].field + ",";
        }
      }
      if (this.jsonColumnName != "") {
        this.jsonColumnName = "GROUP BY " + this.jsonColumnName;
      }
      let res = alasql("SELECT SUM(no_of_school::number) as no_of_school,SUM(cat1::number) as cat1,SUM(cat2::number) as cat2,SUM(cat3::number) as cat3,SUM(cat4::number) as cat4,SUM(cat5::number) as cat5,SUM(cat6::number) as cat6,SUM(cat7::number) as cat7,SUM(cat8::number) as cat8,SUM(cat9::number) as cat9,SUM(cat10::number) as cat10,SUM(cat11::number) as cat11, " + this.jsonColumnName.replace(/,\s*$/, "").split("GROUP BY ")[1] + " FROM ? " + this.jsonColumnName.replace(/,\s*$/, ""), [this.columnValues]);
      this.rowData = res;
    }
    else if (this.dataId == "302") {
      this.jsonColumnName = "";
      
      for (let i = 0; i < this.universalAgGridColumnDefs.length-18; i++) {
        if (event.columnApi.getColumn(this.universalAgGridColumnDefs[i].field).visible && (this.universalAgGridColumnDefs[i].field == "state_name" || this.universalAgGridColumnDefs[i].field == "district_name" || this.universalAgGridColumnDefs[i].field == "sch_mgmt_name" || this.universalAgGridColumnDefs[i].field == "udise_block_name" )) {
          this.jsonColumnName += this.universalAgGridColumnDefs[i].field + ",";
        }
      }
      if (this.jsonColumnName != "") {
        this.jsonColumnName = "GROUP BY " + this.jsonColumnName;
      }
      let res = alasql("SELECT sum(totalf :: number) as totalf,sum(totalm :: number) as totalm,sum(total_teacher :: number) as total_teacher,sum(preprimaryonlyf :: number) as preprimaryonlyf,sum(preprimaryonlym :: number) as preprimaryonlym,sum(preprimaryonlytotal :: number) as preprimaryonlytotal,sum(preprimaryprimaryf :: number) as preprimaryprimaryf,sum(preprimaryprimarym :: number) as preprimaryprimarym,sum(preprimaryprimarytotal :: number) as preprimaryprimarytotal,sum(preprimaryftotal :: number) as preprimaryftotal,sum(preprimarymtotal :: number) as preprimarymtotal,sum(preprimarytotal :: number) as preprimarytotal,sum(primaryonlyf :: number) as primaryonlyf,sum(primaryonlym :: number) as primaryonlym,sum(primaryonlytotal :: number) as primaryonlytotal,sum(primaryandupperprimaryf :: number) as primaryandupperprimaryf,sum(primaryandupperprimarym :: number) as primaryandupperprimarym,sum(primaryandupperprimarytotal :: number) as primaryandupperprimarytotal,sum(primaryftotal :: number) as primaryftotal,sum(primarymtotal :: number) as primarymtotal,sum(primarytotal :: number) as primarytotal,sum(primaryandupperprimaryf :: number) as primaryandupperprimaryf,sum(primaryandupperprimarym :: number) as primaryandupperprimarym,sum(primaryandupperprimarytotal :: number) as primaryandupperprimarytotal,sum(upperprimaryonlyf :: number) as upperprimaryonlyf,sum(upperprimaryonlym :: number) as upperprimaryonlym,sum(upperprimaryonlytotal :: number) as upperprimaryonlytotal,sum(upperprimaryandsecondaryf :: number) as upperprimaryandsecondaryf,sum(upperprimaryandsecondarym :: number) as upperprimaryandsecondarym,sum(upperprimaryandsecondarytotal :: number) as upperprimaryandsecondarytotal,sum(upperprimaryftotal :: number) as upperprimaryftotal,sum(upperprimarymtotal :: number) as upperprimarymtotal,sum(upperprimarytotal :: number) as upperprimarytotal,sum(upperprimaryandsecondaryf :: number) as upperprimaryandsecondaryf,sum(upperprimaryandsecondarym :: number) as upperprimaryandsecondarym,sum(upperprimaryandsecondarytotal :: number) as upperprimaryandsecondarytotal,sum(secondaryonlyf :: number) as secondaryonlyf,sum(secondaryonlym :: number) as secondaryonlym,sum(secondaryonlytotal :: number) as secondaryonlytotal,sum(secondaryandhighersecondaryf :: number) as secondaryandhighersecondaryf,sum(secondaryandhighersecondarym :: number) as secondaryandhighersecondarym,sum(secondaryandhighersecondarytotal :: number) as secondaryandhighersecondarytotal,sum(secondaryftotal :: number) as secondaryftotal,sum(secondarymtotal :: number) as secondarymtotal,sum(secondarytotal :: number) as secondarytotal,sum(secondaryandhighersecondaryf :: number) as secondaryandhighersecondaryf,sum(secondaryandhighersecondarym :: number) as secondaryandhighersecondarym,sum(secondaryandhighersecondarytotal :: number) as secondaryandhighersecondarytotal,sum(highersecondaryonlyf :: number) as highersecondaryonlyf,sum(highersecondaryonlym :: number) as highersecondaryonlym,sum(highersecondaryonlytotal :: number) as highersecondaryonlytotal,sum(highersecondaryftotal :: number) as highersecondaryftotal,sum(highersecondarymtotal :: number) as highersecondarymtotal,sum(highersecondarytotal :: number) as highersecondarytotal, " + this.jsonColumnName.replace(/,\s*$/, "").split("GROUP BY ")[1] + " FROM ? " + this.jsonColumnName.replace(/,\s*$/, ""), [this.columnValues]);
      this.rowData = res;
    }
    else if (this.dataId == "303") {
      this.jsonColumnName = "";
      
      for (let i = 0; i < this.universalAgGridColumnDefs.length-19; i++) {
        if (event.columnApi.getColumn(this.universalAgGridColumnDefs[i].field).visible && (this.universalAgGridColumnDefs[i].field == "state_name" || this.universalAgGridColumnDefs[i].field == "district_name" || this.universalAgGridColumnDefs[i].field == "sch_mgmt_name"  || this.universalAgGridColumnDefs[i].field == "udise_block_name"  || this.universalAgGridColumnDefs[i].field == "loc_name"  || this.universalAgGridColumnDefs[i].field == "category_name"  )) {
          this.jsonColumnName += this.universalAgGridColumnDefs[i].field + ",";
        }
      }
      if (this.jsonColumnName != "") {
        this.jsonColumnName = "GROUP BY " + this.jsonColumnName;
      }
      let res = alasql("SELECT sum(cpp_g :: number) as cpp_g,sum(cpp_b :: number) as cpp_b,sum(cpp :: number) as cpp,sum(c1_g :: number) as c1_g,sum(c1_b :: number) as c1_b,sum(c1 :: number) as c1,sum(c2_g :: number) as c2_g,sum(c2_b :: number) as c2_b,sum(c2 :: number) as c2,sum(c3_g :: number) as c3_g,sum(c3_b :: number) as c3_b,sum(c3 :: number) as c3,sum(c4_g :: number) as c4_g,sum(c4_b :: number) as c4_b,sum(c4 :: number) as c4,sum(c5_g :: number) as c5_g,sum(c5_b :: number) as c5_b,sum(c5 :: number) as c5,sum(c6_g :: number) as c6_g,sum(c6_b :: number) as c6_b,sum(c6 :: number) as c6,sum(c7_g :: number) as c7_g,sum(c7_b :: number) as c7_b,sum(c7 :: number) as c7,sum(c8_g :: number) as c8_g,sum(c8_b :: number) as c8_b,sum(c8 :: number) as c8,sum(c9_g :: number) as c9_g,sum(c9_b :: number) as c9_b,sum(c9 :: number) as c9,sum(c10_g :: number) as c10_g,sum(c10_b :: number) as c10_b,sum(c10 :: number) as c10,sum(c11_g :: number) as c11_g,sum(c11_b :: number) as c11_b,sum(c11 :: number) as c11,sum(c12_g :: number) as c12_g,sum(c12_b :: number) as c12_b,sum(primary_g :: number) as primary_g,sum(primary_b :: number) as primary_b,sum(primary_total :: number) as primary_total,sum(upper_primary_g :: number) as upper_primary_g,sum(upper_primary_b :: number) as upper_primary_b,sum(upper_primary_total :: number) as upper_primary_total,sum(secondary_g :: number) as secondary_g,sum(secondary_b :: number) as secondary_b,sum(secondary_total :: number) as secondary_total,sum(higher_secondary_g :: number) as higher_secondary_g,sum(higher_secondary_b :: number) as higher_secondary_b,sum(higher_secondary_total :: number) as higher_secondary_total,sum(total_g :: number) as total_g,sum(total_b :: number) as total_b,sum(no_of_student :: number) as no_of_student,sum(total_with_pre_g :: number) as total_with_pre_g,sum(total_with_pre_b :: number) as total_with_pre_b,sum(no_of_student_pre :: number) as no_of_student_pre, " + this.jsonColumnName.replace(/,\s*$/, "").split("GROUP BY ")[1] + " FROM ? " + this.jsonColumnName.replace(/,\s*$/, ""), [this.columnValues]);
      this.rowData = res;
    }
  }


  onFilterChanged(event) {
    const arrayRowData: any[] = [];
    this.gridApi.forEachNodeAfterFilter(function (node, index) {

      arrayRowData.push(node.data);
    });
      setTimeout(() => {
        this.genericTotal(arrayRowData);
      }, 500)
  }


// Getting All Year Data in Tabular Form
  getTabularDataAllYear(event){
    
    this.dataId = event;
    this.modalService.open(this.aspirationalAgGridwithBlock, {size: 'xl', backdrop: 'static', keyboard: false});
    // this.modalService.open(this.aspirationalAgGridAllYear, { size: 'lg', backdrop: 'static', keyboard: false });

    // this.columnDefs = [
    //   {headerName: "Year", field: "year", rowGroup: true, hide: true,},
    //   {headerName: "Primary", field: "primary",aggFunc: 'sum', enableValue: true, allowedAggFuncs: ['sum', 'min', 'max'],},
    //   {headerName: "Elementary", field: "elem",aggFunc: 'sum', enableValue: true},
    //   {headerName: "Upper Primary", field: "upper_primary"},
    //   {headerName: "Secondary", field: "sec"},
    //   {headerName: "Higher Secondary", field: "hsec"}
    // ]

    // this.defaultColDef = {
    //   flex: 1,
    //   minWidth: 150,
    //   filter: true,
    //   sortable: true,
    //   resizable: true,
    // };


    // this.autoGroupColumnDef = {
    //   headerName: 'Year',
    //   field: 'year',
    //   minWidth: 250,
    //   // cellRenderer: 'agGroupCellRenderer',
    //   // cellRendererParams: { footerValueGetter: '"Total (" + x + ")"' },
    // };
  

    // this.rowData = [
    //   {year: "2014-15", primary: 12456, elem: 78963, upper_primary:584756, sec:658955, hsec:96325},
    //   {year: "2015-16", primary: 6546, elem: 32569,  upper_primary:584756, sec:658955, hsec:96325},
    //   {year: "2016-17", primary: 85695, elem: 145889,  upper_primary:584756, sec:658955, hsec:96325},
    //   {year: "2017-18", primary: 12456, elem: 78963,  upper_primary:584756, sec:658955, hsec:96325},
    //   {year: "2018-19", primary: 6546, elem: 32569,  upper_primary:584756, sec:658955, hsec:96325},
    //   {year: "2019-20", primary: 85695, elem: 145889,  upper_primary:584756, sec:658955, hsec:96325},
    //   {year: "2014-15", primary: 12456, elem: 78963, upper_primary:584756, sec:658955, hsec:96325},
    //   {year: "2015-16", primary: 6546, elem: 32569,  upper_primary:584756, sec:658955, hsec:96325},
    //   {year: "2016-17", primary: 85695, elem: 145889,  upper_primary:584756, sec:658955, hsec:96325},
    //   {year: "2017-18", primary: 12456, elem: 78963,  upper_primary:584756, sec:658955, hsec:96325},
    //   {year: "2018-19", primary: 6546, elem: 32569,  upper_primary:584756, sec:658955, hsec:96325},
    //   {year: "2019-20", primary: 85695, elem: 145889,  upper_primary:584756, sec:658955, hsec:96325}
    // ]

    this.staticReportDependency = { "year": this.uniYear,"dist": "all", "block": "none" }
    let condtionsValue = JSON.stringify(this.staticReportDependency);
    let dataId = this.dataId;
    this.distShow = true;
    this.blockShow = false;
    this.uniBlock = false;
    this.getTabularDataSingleYear(dataId, condtionsValue, 'Y', 'N');

  }

  onGridReady(params){
    this.gridApi = params.api;
     this.gridColumnApi = params.columnApi;
     this.gridApi.onFilterChanged();
   }

   // Geeting Selcted year from All year data
  //  getSelectedRowData(){
  //   let selectedNodes = this.gridApi.getSelectedNodes();
  //   let selectedData = selectedNodes.map(node => node.data);
  //   let selectDataStringPresentation = selectedData.map(node => node.year);
  //   this.uniYear = selectDataStringPresentation[0];
  //   this.staticReportDependency = { "year": this.uniYear, "state": "national", "dist": "none", "block": "none" }
  //   let condtionsValue = JSON.stringify(this.staticReportDependency);
  //   let dataId = this.dataId;
  //   this.getTabularDataSingleYear(dataId, condtionsValue, 'Y', 'N');
  //  }

   //Getting Selected year data from DB
   getTabularDataSingleYear(dataObj, dependencyValue,isDependency, chartFlag){

    this.universalAgGridColumnDefs = [];
     

    //  this.modalService.open(this.aspirationalAgGridSingleYear, {size: 'xl', backdrop: 'static', keyboard: false});
     this.dataObjChart = dataObj
     this.rowData = [];
     this.showTableNote = false;
     this.thableNote = "";
     if (isDependency != "Y" && dataObj == 81) {
      this.staticReportDependency = { "year": "2018-19", "state": "All" }
      dependencyValue = JSON.stringify(this.staticReportDependency);
    }

    if (JSON.parse(sessionStorage.getItem('currentUser')) == null) {
      this.paramName = "civilian";
      this.paramValue = "";
      this.schemaName = "national";
    } else {
      this.paramName = JSON.parse(sessionStorage.getItem('currentUser')).paramName;
      this.paramValue = JSON.parse(sessionStorage.getItem('currentUser')).paramValue;
      this.schemaName = JSON.parse(sessionStorage.getItem('currentUser')).schema_name;
    }
    this.conditionObj = {
      mapId: dataObj,
      dependencyValue: dependencyValue,
      isDependency: isDependency,
      paramName: this.paramName,
      paramValue: this.paramValue,
      schemaName: this.schemaName,
      reportType: this.chartType
    }

    this.ngxLoader.start();
    this.rowData = [];
    this.errorDisplay = "";
    this.reportService.getAspirationalData(this.conditionObj).subscribe(res => {
      this.combinedyearList = res.yearList;

      if (this.combinedyearList == null || this.combinedyearList == "" || res.columnName == null && res.status == 0) {
        this.isValid = true;
      } else {
        this.isValid = false;
      }

      if (res.columnName == null && res.status == 0) {
        this.errorDisplay = res.errorMessage;
        this.ngxLoader.stop();
      }

      this.rowData = res.rowValue;
      this.columnValues = res.rowValue;




      if (dataObj == 300) {
        if(this.uniBlock == false){
        this.universalAgGridColumnDefs = [
          { headerName: "State Name", field: "state_name", filter: 'agNumberColumnFilter', type: 'nonEditableColumn', width: 250 },
          { headerName: "District Name", field: "district_name", filter: 'agNumberColumnFilter', type: 'nonEditableColumn', width: 250  },                    
          { headerName: "School Category ", field: "category_name", width: 200, filter: 'agSetColumnFilter', type: 'nonEditableColumn', suppressMenu: false },
          { headerName: "School Management", field: "sch_mgmt_name", width: 250, filter: 'agSetColumnFilter', type: 'nonEditableColumn', suppressMenu: false },
          
          { headerName: "Total No. of Schools", field: "no_of_school", filter: 'agNumberColumnFilter', aggFunc: 'sum', type: 'numericColumn', suppressMenu: true, width: 140},
          { headerName: "Separate Room for Headmaster", field: "hm_room_yn", filter: 'agNumberColumnFilter', aggFunc: 'sum', type: 'numericColumn', suppressMenu: true, width: 120},
          { headerName: "Land Available", field: "land_avl_yn", filter: 'agNumberColumnFilter', aggFunc: 'sum', type: 'numericColumn', suppressMenu: true, width: 120},
          { headerName: "Electricity ", field: "electricity_available", filter: 'agNumberColumnFilter', aggFunc: 'sum', type: 'numericColumn', suppressMenu: true, width: 120 },
          { headerName: "Functional Electricity", field: "electricity_yn", filter: 'agNumberColumnFilter', aggFunc: 'sum', type: 'numericColumn', suppressMenu: true, width: 120 },
          { headerName: "Solar Panel", field: "solarpanel_yn", filter: 'agNumberColumnFilter', aggFunc: 'sum', type: 'numericColumn', suppressMenu: true, width: 120 },
          { headerName: "Playground", field: "playground_yn", filter: 'agNumberColumnFilter', aggFunc: 'sum', type: 'numericColumn', suppressMenu: true, width: 120 },
          { headerName: "Library or Reading Corner or Book Bank", field: "library_yn", filter: 'agNumberColumnFilter', aggFunc: 'sum', type: 'numericColumn', suppressMenu: true, width: 150 },
          { headerName: "Librarian", field: "librarian_yn", filter: 'agNumberColumnFilter', aggFunc: 'sum', type: 'numericColumn', suppressMenu: true, width: 100 },
          { headerName: "Newspaper", field: "newspaper_yn", filter: 'agNumberColumnFilter', aggFunc: 'sum', type: 'numericColumn', suppressMenu: true, width: 100 },
          { headerName: "Kitchen Garden", field: "kitchen_garden_yn", filter: 'agNumberColumnFilter', aggFunc: 'sum', type: 'numericColumn', suppressMenu: true, width: 120 },
          { headerName: "Furniture", field: "stus_hv_furnt", filter: 'agNumberColumnFilter', aggFunc: 'sum', type: 'numericColumn', suppressMenu: true, width: 100 },
          { headerName: "Boy's Toilet", field: "boy_toilet", filter: 'agNumberColumnFilter', aggFunc: 'sum', type: 'numericColumn', suppressMenu: true, width: 120 },
          { headerName: "Functional Boy's Toilet", field: "func_boy_toilet", filter: 'agNumberColumnFilter', aggFunc: 'sum', type: 'numericColumn', suppressMenu: true, width: 140 },
          { headerName: "Girl's Toilet", field: "girl_toilet", filter: 'agNumberColumnFilter', aggFunc: 'sum', type: 'numericColumn', suppressMenu: true, width: 120 },
          { headerName: "Functional Girl's Toilet", field: "func_girl_toilet", filter: 'agNumberColumnFilter', aggFunc: 'sum', type: 'numericColumn', suppressMenu: true, width: 140 },
          { headerName: "Toilet Facility", field: "toilet_facility", filter: 'agNumberColumnFilter', aggFunc: 'sum', type: 'numericColumn', suppressMenu: true, width: 120 },
          { headerName: "Functional Toilet Facility", field: "func_toilet_facility", filter: 'agNumberColumnFilter', aggFunc: 'sum', type: 'numericColumn', suppressMenu: true, width: 140 },
          { headerName: "Functional Urinal Boy's", field: "func_urinal_boy", filter: 'agNumberColumnFilter', aggFunc: 'sum', type: 'numericColumn', suppressMenu: true, width: 140 },
          { headerName: "Functional Urinal Girl's", field: "func_urinal_girl", filter: 'agNumberColumnFilter', aggFunc: 'sum', type: 'numericColumn', suppressMenu: true, width: 140 },
          { headerName: "Functional Urinal", field: "func_urinal", filter: 'agNumberColumnFilter', aggFunc: 'sum', type: 'numericColumn', suppressMenu: true, width: 120 },
          { headerName: "Functional Toilet and Urinal", field: "func_toilet_urinal", filter: 'agNumberColumnFilter', aggFunc: 'sum', type: 'numericColumn', suppressMenu: true, width: 150 },
          { headerName: "Drinking Water", field: "drink_water_yn", filter: 'agNumberColumnFilter', aggFunc: 'sum', type: 'numericColumn', suppressMenu: true, width: 120 },
          { headerName: "Functional Drinking Water ", field: "drink_water_func_yn", filter: 'agNumberColumnFilter', aggFunc: 'sum', type: 'numericColumn', suppressMenu: true, width: 120 },
          { headerName: "Water Purifier", field: "water_purifier_yn", filter: 'agNumberColumnFilter', aggFunc: 'sum', type: 'numericColumn', suppressMenu: true, width: 120 },
          { headerName: "Rain Water Harvesting", field: "rain_harvest_yn", filter: 'agNumberColumnFilter', aggFunc: 'sum', type: 'numericColumn', suppressMenu: true, width: 140 },
          { headerName: "Water Tested", field: "water_tested_yn", filter: 'agNumberColumnFilter', aggFunc: 'sum', type: 'numericColumn', suppressMenu: true, width: 120 },
          { headerName: "Handwash", field: "handwash_yn", filter: 'agNumberColumnFilter', aggFunc: 'sum', type: 'numericColumn', suppressMenu: true, width: 100 },
          { headerName: "Incinerator", field: "incinerator_yn", filter: 'agNumberColumnFilter', aggFunc: 'sum', type: 'numericColumn', suppressMenu: true, width: 100 },
          { headerName: "WASH Facility(Drinking Water, Toilet and Handwash)", field: "wash_facility", filter: 'agNumberColumnFilter', aggFunc: 'sum', type: 'numericColumn', suppressMenu: true, width: 200 },
          { headerName: "Ramps", field: "ramps_yn", filter: 'agNumberColumnFilter', aggFunc: 'sum', type: 'numericColumn', suppressMenu: true, width: 100 },
          { headerName: "Hand-Rails", field: "handrails_yn", filter: 'agNumberColumnFilter', aggFunc: 'sum', type: 'numericColumn', suppressMenu: true, width: 100 },
          { headerName: "Medical Checkup", field: "medchk_yn", filter: 'agNumberColumnFilter', aggFunc: 'sum', type: 'numericColumn', suppressMenu: true, width: 120 },
          { headerName: "Complete Medical Checkup", field: "compl_medchk_yn", filter: 'agNumberColumnFilter', aggFunc: 'sum', type: 'numericColumn', suppressMenu: true, width: 140 },
          { headerName: "Internet", field: "internet_yn", filter: 'agNumberColumnFilter', aggFunc: 'sum', type: 'numericColumn', suppressMenu: true, width: 100 },
          { headerName: "Computer Available", field: "computer_available_yn", filter: 'agNumberColumnFilter', aggFunc: 'sum', type: 'numericColumn', suppressMenu: true, width: 120 }

        ]
        this.columnLengthForExcel = this.universalAgGridColumnDefs.length;
        this.showGrid = true;
        setTimeout(() => {
          this.genericTotal(this.rowData);
        }, 500)
      }else{
        this.universalAgGridColumnDefs = [
          // { headerName: "State Name", field: "state_name", filter: 'agNumberColumnFilter', type: 'nonEditableColumn', width: 250 },
          { headerName: "District Name", field: "district_name", filter: 'agNumberColumnFilter', type: 'nonEditableColumn', width: 250  }, 
          { headerName: "Block Name", field: "udise_block_name", filter: 'agNumberColumnFilter', type: 'nonEditableColumn', width: 250  },                    
          { headerName: "School Category ", field: "category_name", width: 200, filter: 'agSetColumnFilter', type: 'nonEditableColumn', suppressMenu: false },
          { headerName: "School Management", field: "sch_mgmt_name", width: 250, filter: 'agSetColumnFilter', type: 'nonEditableColumn', suppressMenu: false },
          
          { headerName: "Total No. of Schools", field: "no_of_school", filter: 'agNumberColumnFilter', aggFunc: 'sum', type: 'numericColumn', suppressMenu: true, width: 140},
          { headerName: "Separate Room for Headmaster", field: "hm_room_yn", filter: 'agNumberColumnFilter', aggFunc: 'sum', type: 'numericColumn', suppressMenu: true, width: 120},
          { headerName: "Land Available", field: "land_avl_yn", filter: 'agNumberColumnFilter', aggFunc: 'sum', type: 'numericColumn', suppressMenu: true, width: 120},
          { headerName: "Electricity ", field: "electricity_available", filter: 'agNumberColumnFilter', aggFunc: 'sum', type: 'numericColumn', suppressMenu: true, width: 120 },
          { headerName: "Functional Electricity", field: "electricity_yn", filter: 'agNumberColumnFilter', aggFunc: 'sum', type: 'numericColumn', suppressMenu: true, width: 120 },
          { headerName: "Solar Panel", field: "solarpanel_yn", filter: 'agNumberColumnFilter', aggFunc: 'sum', type: 'numericColumn', suppressMenu: true, width: 120 },
          { headerName: "Playground", field: "playground_yn", filter: 'agNumberColumnFilter', aggFunc: 'sum', type: 'numericColumn', suppressMenu: true, width: 120 },
          { headerName: "Library or Reading Corner or Book Bank", field: "library_yn", filter: 'agNumberColumnFilter', aggFunc: 'sum', type: 'numericColumn', suppressMenu: true, width: 150 },
          { headerName: "Librarian", field: "librarian_yn", filter: 'agNumberColumnFilter', aggFunc: 'sum', type: 'numericColumn', suppressMenu: true, width: 100 },
          { headerName: "Newspaper", field: "newspaper_yn", filter: 'agNumberColumnFilter', aggFunc: 'sum', type: 'numericColumn', suppressMenu: true, width: 100 },
          { headerName: "Kitchen Garden", field: "kitchen_garden_yn", filter: 'agNumberColumnFilter', aggFunc: 'sum', type: 'numericColumn', suppressMenu: true, width: 120 },
          { headerName: "Furniture", field: "stus_hv_furnt", filter: 'agNumberColumnFilter', aggFunc: 'sum', type: 'numericColumn', suppressMenu: true, width: 100 },
          { headerName: "Boy's Toilet", field: "boy_toilet", filter: 'agNumberColumnFilter', aggFunc: 'sum', type: 'numericColumn', suppressMenu: true, width: 120 },
          { headerName: "Functional Boy's Toilet", field: "func_boy_toilet", filter: 'agNumberColumnFilter', aggFunc: 'sum', type: 'numericColumn', suppressMenu: true, width: 140 },
          { headerName: "Girl's Toilet", field: "girl_toilet", filter: 'agNumberColumnFilter', aggFunc: 'sum', type: 'numericColumn', suppressMenu: true, width: 120 },
          { headerName: "Functional Girl's Toilet", field: "func_girl_toilet", filter: 'agNumberColumnFilter', aggFunc: 'sum', type: 'numericColumn', suppressMenu: true, width: 140 },
          { headerName: "Toilet Facility", field: "toilet_facility", filter: 'agNumberColumnFilter', aggFunc: 'sum', type: 'numericColumn', suppressMenu: true, width: 120 },
          { headerName: "Functional Toilet Facility", field: "func_toilet_facility", filter: 'agNumberColumnFilter', aggFunc: 'sum', type: 'numericColumn', suppressMenu: true, width: 140 },
          { headerName: "Functional Urinal Boy's", field: "func_urinal_boy", filter: 'agNumberColumnFilter', aggFunc: 'sum', type: 'numericColumn', suppressMenu: true, width: 140 },
          { headerName: "Functional Urinal Girl's", field: "func_urinal_girl", filter: 'agNumberColumnFilter', aggFunc: 'sum', type: 'numericColumn', suppressMenu: true, width: 140 },
          { headerName: "Functional Urinal", field: "func_urinal", filter: 'agNumberColumnFilter', aggFunc: 'sum', type: 'numericColumn', suppressMenu: true, width: 120 },
          { headerName: "Functional Toilet and Urinal", field: "func_toilet_urinal", filter: 'agNumberColumnFilter', aggFunc: 'sum', type: 'numericColumn', suppressMenu: true, width: 150 },
          { headerName: "Drinking Water", field: "drink_water_yn", filter: 'agNumberColumnFilter', aggFunc: 'sum', type: 'numericColumn', suppressMenu: true, width: 120 },
          { headerName: "Functional Drinking Water ", field: "drink_water_func_yn", filter: 'agNumberColumnFilter', aggFunc: 'sum', type: 'numericColumn', suppressMenu: true, width: 120 },
          { headerName: "Water Purifier", field: "water_purifier_yn", filter: 'agNumberColumnFilter', aggFunc: 'sum', type: 'numericColumn', suppressMenu: true, width: 120 },
          { headerName: "Rain Water Harvesting", field: "rain_harvest_yn", filter: 'agNumberColumnFilter', aggFunc: 'sum', type: 'numericColumn', suppressMenu: true, width: 140 },
          { headerName: "Water Tested", field: "water_tested_yn", filter: 'agNumberColumnFilter', aggFunc: 'sum', type: 'numericColumn', suppressMenu: true, width: 120 },
          { headerName: "Handwash", field: "handwash_yn", filter: 'agNumberColumnFilter', aggFunc: 'sum', type: 'numericColumn', suppressMenu: true, width: 100 },
          { headerName: "Incinerator", field: "incinerator_yn", filter: 'agNumberColumnFilter', aggFunc: 'sum', type: 'numericColumn', suppressMenu: true, width: 100 },
          { headerName: "WASH Facility(Drinking Water, Toilet and Handwash)", field: "wash_facility", filter: 'agNumberColumnFilter', aggFunc: 'sum', type: 'numericColumn', suppressMenu: true, width: 200 },
          { headerName: "Ramps", field: "ramps_yn", filter: 'agNumberColumnFilter', aggFunc: 'sum', type: 'numericColumn', suppressMenu: true, width: 100 },
          { headerName: "Hand-Rails", field: "handrails_yn", filter: 'agNumberColumnFilter', aggFunc: 'sum', type: 'numericColumn', suppressMenu: true, width: 100 },
          { headerName: "Medical Checkup", field: "medchk_yn", filter: 'agNumberColumnFilter', aggFunc: 'sum', type: 'numericColumn', suppressMenu: true, width: 120 },
          { headerName: "Complete Medical Checkup", field: "compl_medchk_yn", filter: 'agNumberColumnFilter', aggFunc: 'sum', type: 'numericColumn', suppressMenu: true, width: 140 },
          { headerName: "Internet", field: "internet_yn", filter: 'agNumberColumnFilter', aggFunc: 'sum', type: 'numericColumn', suppressMenu: true, width: 100 },
          { headerName: "Computer Available", field: "computer_available_yn", filter: 'agNumberColumnFilter', aggFunc: 'sum', type: 'numericColumn', suppressMenu: true, width: 120 }

        ]
        this.columnLengthForExcel = this.universalAgGridColumnDefs.length;
        this.showGrid = true;
        setTimeout(() => {
          this.genericTotal(this.rowData);
        }, 500)
      }
      } else if(dataObj == 301) {
        if(this.uniBlock == false){
        this.universalAgGridColumnDefs = [
          { headerName: "State", field: "loc1_name", enableValue: true, type: 'nonEditableColumn', width: 200 },
          { headerName: "District", field: "loc2_name", enableValue: true, type: 'nonEditableColumn', width: 200 },          
          { headerName: "School Management", field: "sch_mgmt_name", enableValue: true, type: 'nonEditableColumn', width: 200 },
          { headerName: "No. of Schools", field: "no_of_school", enableValue: true, type: 'numericColumn', width: 200 },
          { headerName: "PS (I-V)", field: "cat1", enableValue: true, width: 140, type: 'numericColumn', suppressMenu: true },
          { headerName: "UPS (I-VIII)", field: "cat2", enableValue: true, width: 140, type: 'numericColumn', suppressMenu: true },
          { headerName: "HSS (I-XII)", field: "cat3", enableValue: true, width: 135, type: 'numericColumn', suppressMenu: true },
          { headerName: "UPS (VI-VIII)", field: "cat4", enableValue: true, width: 150, type: 'numericColumn', suppressMenu: true },
          { headerName: "HSS (VI-XII)", field: "cat5", enableValue: true, width: 140, type: 'numericColumn', suppressMenu: true },
          { headerName: "SS (I-X)", field: "cat6", enableValue: true, width: 140, type: 'numericColumn', suppressMenu: true },
          { headerName: "SS (VI-X)", field: "cat7", enableValue: true, width: 130, type: 'numericColumn', suppressMenu: true },
          { headerName: "SS (IX-X)", field: "cat8", enableValue: true, width: 140, type: 'numericColumn', suppressMenu: true },
          { headerName: "HSS (IX-XII)", field: "cat10", enableValue: true, width: 140, type: 'numericColumn', suppressMenu: true },
          { headerName: "HSS (XI-XII)", field: "cat11", enableValue: true, width: 140, type: 'numericColumn', suppressMenu: true },
          // { headerName: "Total", field: "Total", enableValue: true, width: 140, type: 'numericColumn', suppressMenu: true },
        ]
        this.finalJSONNew = [];
        this.columnLengthForExcel = this.universalAgGridColumnDefs.length;
        this.showGrid = true;
        setTimeout(() => {
          this.genericTotal(this.rowData);
        }, 500)
      }else{
        this.universalAgGridColumnDefs = [
          { headerName: "District", field: "loc1_name", enableValue: true, type: 'nonEditableColumn', width: 200 },
          { headerName: "Block", field: "loc2_name", enableValue: true, type: 'nonEditableColumn', width: 200 },          
          { headerName: "School Management", field: "sch_mgmt_name", enableValue: true, type: 'nonEditableColumn', width: 200 },
          { headerName: "No. of Schools", field: "no_of_school", enableValue: true, type: 'nonEditableColumn', width: 200 },
          { headerName: "PS (I-V)", field: "cat1", enableValue: true, width: 140, type: 'numericColumn', suppressMenu: true },
          { headerName: "UPS (I-VIII)", field: "cat2", enableValue: true, width: 140, type: 'numericColumn', suppressMenu: true },
          { headerName: "HSS (I-XII)", field: "cat3", enableValue: true, width: 135, type: 'numericColumn', suppressMenu: true },
          { headerName: "UPS (VI-VIII)", field: "cat4", enableValue: true, width: 150, type: 'numericColumn', suppressMenu: true },
          { headerName: "HSS (VI-XII)", field: "cat5", enableValue: true, width: 140, type: 'numericColumn', suppressMenu: true },
          { headerName: "SS (I-X)", field: "cat6", enableValue: true, width: 140, type: 'numericColumn', suppressMenu: true },
          { headerName: "SS (VI-X)", field: "cat7", enableValue: true, width: 130, type: 'numericColumn', suppressMenu: true },
          { headerName: "SS (IX-X)", field: "cat8", enableValue: true, width: 140, type: 'numericColumn', suppressMenu: true },
          { headerName: "HSS (IX-XII)", field: "cat10", enableValue: true, width: 140, type: 'numericColumn', suppressMenu: true },
          { headerName: "HSS (XI-XII)", field: "cat11", enableValue: true, width: 140, type: 'numericColumn', suppressMenu: true },
          // { headerName: "Total", field: "Total", enableValue: true, width: 140, type: 'numericColumn', suppressMenu: true },
        ]
        this.finalJSONNew = [];
        this.columnLengthForExcel = this.universalAgGridColumnDefs.length;
        this.showGrid = true;
        setTimeout(() => {
          this.genericTotal(this.rowData);
        }, 500)
      }
    } else if(dataObj == 302){
      if(this.uniBlock ==  false){
        this.universalAgGridColumnDefs = [
          { headerName: "State", field: "state_name", enableValue: true, width: 200, type: 'nonEditableColumn' },
          { headerName: "District", field: "district_name", enableValue: true, width: 200, type: 'nonEditableColumn' },
          { headerName: "Management", field: "sch_mgmt_name", enableValue: true, width: 200, type: 'nonEditableColumn' },
          {
            headerName: 'Total Teacher',
            children: [
              { headerName: "Female", field: "totalf", enableValue: true, width: 100, type: 'numericColumn', suppressMenu: true },
              { headerName: "Male ", field: "totalm", enableValue: true, width: 100, type: 'numericColumn', suppressMenu: true },
              { headerName: "Total", field: "total_teacher", enableValue: true, width: 110, type: 'numericColumn', suppressMenu: true },]


          },
          {
            headerName: 'Pre-Primary Only(A)',
            children: [
              { headerName: "Female", field: "preprimaryonlyf", enableValue: true, width: 100, type: 'numericColumn', suppressMenu: true },
              { headerName: "Male ", field: "preprimaryonlym", enableValue: true, width: 100, type: 'numericColumn', suppressMenu: true },
              { headerName: "Total", field: "preprimaryonlytotal", enableValue: true, width: 110, type: 'numericColumn', suppressMenu: true },]


          },
          {
            headerName: 'Pre-Primary & Primary(I-V)(B)',
            children: [

              { headerName: "Female", field: "preprimaryprimaryf", enableValue: true, width: 100, type: 'numericColumn', suppressMenu: true },
              { headerName: "Male", field: "preprimaryprimarym", enableValue: true, width: 100, type: 'numericColumn', suppressMenu: true },
              { headerName: "Total", field: "preprimaryprimarytotal", enableValue: true, width: 110, type: 'numericColumn', suppressMenu: true },
            ]
          },
          {
            headerName: "Pre-Primary Total(A+B)",
            children: [

              { headerName: "Female", field: "preprimaryftotal", enableValue: true, width: 100, type: 'numericColumn', suppressMenu: true },
              { headerName: "Male", field: "preprimarymtotal", enableValue: true, width: 100, type: 'numericColumn', suppressMenu: true },
              { headerName: "Total", field: "preprimarytotal", enableValue: true, width: 110, type: 'numericColumn', suppressMenu: true }
            ]

          },
          {
            headerName: 'Primary Only(I-V)(C)',
            children: [

              { headerName: "Female", field: "primaryonlyf", enableValue: true, width: 100, type: 'numericColumn', suppressMenu: true },
              { headerName: "Male", field: "primaryonlym", enableValue: true, width: 100, type: 'numericColumn', suppressMenu: true },
              { headerName: "Total", field: "primaryonlytotal", enableValue: true, width: 110, type: 'numericColumn', suppressMenu: true },
            ]
          },
          {
            headerName: 'Primary(I-V) & Upper Primary(VI-VIII)(D)',
            children: [

              { headerName: "Female", field: "primaryandupperprimaryf", enableValue: true, width: 120, type: 'numericColumn', suppressMenu: true },
              { headerName: "Male", field: "primaryandupperprimarym", enableValue: true, width: 110, type: 'numericColumn', suppressMenu: true },
              { headerName: "Total", field: "primaryandupperprimarytotal", enableValue: true, width: 120, type: 'numericColumn', suppressMenu: true },
            ]
          },
          {
            headerName: 'Primary Total(I-V)(B+C+D)',
            children: [

              { headerName: "Female", field: "primaryftotal", enableValue: true, width: 100, type: 'numericColumn', suppressMenu: true },
              { headerName: "Male", field: "primarymtotal", enableValue: true, width: 100, type: 'numericColumn', suppressMenu: true },
              { headerName: "Total", field: "primarytotal", enableValue: true, width: 110, type: 'numericColumn', suppressMenu: true },
            ]
          },
          {
            headerName: 'Primary(I-V) & Upper Primary(VI-VIII)(E)',
            children: [

              { headerName: "Female", field: "primaryandupperprimaryf", enableValue: true, width: 120, type: 'numericColumn', suppressMenu: true },
              { headerName: "Male", field: "primaryandupperprimarym", enableValue: true, width: 110, type: 'numericColumn', suppressMenu: true },
              { headerName: "Total", field: "primaryandupperprimarytotal", enableValue: true, width: 120, type: 'numericColumn', suppressMenu: true },
            ]
          },
          {
            headerName: 'Upper Primary Only(VI-VIII)(F)',
            children: [

              { headerName: "Female", field: "upperprimaryonlyf", enableValue: true, width: 100, type: 'numericColumn', suppressMenu: true },
              { headerName: "Male", field: "upperprimaryonlym", enableValue: true, width: 100, type: 'numericColumn', suppressMenu: true },
              { headerName: "Total", field: "upperprimaryonlytotal", enableValue: true, width: 110, type: 'numericColumn', suppressMenu: true },
            ]
          },
          {
            headerName: 'Upper Primary(VI-VIII) & Secondary(IX-X)(G)',
            children: [

              { headerName: "Female", field: "upperprimaryandsecondaryf", enableValue: true, width: 120, type: 'numericColumn', suppressMenu: true },
              { headerName: "Male", field: "upperprimaryandsecondarym", enableValue: true, width: 110, type: 'numericColumn', suppressMenu: true },
              { headerName: "Total", field: "upperprimaryandsecondarytotal", enableValue: true, width: 120, type: 'numericColumn', suppressMenu: true },
            ]
          },
          {
            headerName: 'Upper Primary Total(VI-VIII)(E+F+G)',
            children: [

              { headerName: "Female", field: "upperprimaryftotal", enableValue: true, width: 120, type: 'numericColumn', suppressMenu: true },
              { headerName: "Male", field: "upperprimarymtotal", enableValue: true, width: 110, type: 'numericColumn', suppressMenu: true },
              { headerName: "Total", field: "upperprimarytotal", enableValue: true, width: 120, type: 'numericColumn', suppressMenu: true },
            ]
          },
          {
            headerName: 'Upper Primary(VI-VIII) & Secondary(IX-X)(H)',
            children: [

              { headerName: "Female", field: "upperprimaryandsecondaryf", enableValue: true, width: 120, type: 'numericColumn', suppressMenu: true },
              { headerName: "Male", field: "upperprimaryandsecondarym", enableValue: true, width: 110, type: 'numericColumn', suppressMenu: true },
              { headerName: "Total", field: "upperprimaryandsecondarytotal", enableValue: true, width: 120, type: 'numericColumn', suppressMenu: true },
            ]
          },
          {
            headerName: 'Secondary Only(IX-X)(I)',
            children: [

              { headerName: "Female", field: "secondaryonlyf", enableValue: true, width: 100, type: 'numericColumn', suppressMenu: true },
              { headerName: "Male", field: "secondaryonlym", enableValue: true, width: 100, type: 'numericColumn', suppressMenu: true },
              { headerName: "Total", field: "secondaryonlytotal", enableValue: true, width: 110, type: 'numericColumn', suppressMenu: true },
            ]
          },
          {
            headerName: ' Secondary(IX-X) & Higher Secondary(XI-XII)(J)',
            children: [

              { headerName: "Female", field: "secondaryandhighersecondaryf", enableValue: true, width: 120, type: 'numericColumn', suppressMenu: true },
              { headerName: "Male", field: "secondaryandhighersecondarym", enableValue: true, width: 110, type: 'numericColumn', suppressMenu: true },
              { headerName: "Total", field: "secondaryandhighersecondarytotal", enableValue: true, width: 120, type: 'numericColumn', suppressMenu: true },
            ]
          },
          {
            headerName: 'Secondary Total(IX-X)(H+I+J)',
            children: [

              { headerName: "Female", field: "secondaryftotal", enableValue: true, width: 100, type: 'numericColumn', suppressMenu: true },
              { headerName: "Male", field: "secondarymtotal", enableValue: true, width: 100, type: 'numericColumn', suppressMenu: true },
              { headerName: "Total", field: "secondarytotal", enableValue: true, width: 110, type: 'numericColumn', suppressMenu: true },
            ]
          },
          {
            headerName: ' Secondary(IX-X) & Higher Secondary(XI-XII)(K)',
            children: [

              { headerName: "Female", field: "secondaryandhighersecondaryf", enableValue: true, width: 120, type: 'numericColumn', suppressMenu: true },
              { headerName: "Male", field: "secondaryandhighersecondarym", enableValue: true, width: 110, type: 'numericColumn', suppressMenu: true },
              { headerName: "Total", field: "secondaryandhighersecondarytotal", enableValue: true, width: 120, type: 'numericColumn', suppressMenu: true },
            ]
          },
          {
            headerName: ' Higher Secondary Only(XI-XII)(L)',
            children: [

              { headerName: "Female", field: "highersecondaryonlyf", enableValue: true, width: 100, type: 'numericColumn', suppressMenu: true },
              { headerName: "Male", field: "highersecondaryonlym", enableValue: true, width: 100, type: 'numericColumn', suppressMenu: true },
              { headerName: "Total", field: "highersecondaryonlytotal", enableValue: true, width: 110, type: 'numericColumn', suppressMenu: true },
            ]
          },
          {
            headerName: ' Higher Secondary Total(XI-XII)(K+L)',
            children: [

              { headerName: "Female", field: "highersecondaryftotal", enableValue: true, width: 120, type: 'numericColumn', suppressMenu: true },
              { headerName: "Male", field: "highersecondarymtotal", enableValue: true, width: 110, type: 'numericColumn', suppressMenu: true },
              { headerName: "Total", field: "highersecondarytotal", enableValue: true, width: 120, type: 'numericColumn', suppressMenu: true },
            ]
          },
        ]
      }else{
        this.universalAgGridColumnDefs = [
          // { headerName: "State", field: "state_name", enableValue: true, width: 200, type: 'nonEditableColumn' },
          { headerName: "District", field: "district_name", enableValue: true, width: 200, type: 'nonEditableColumn' },
          { headerName: "Block", field: "udise_block_name", enableValue: true, width: 200, type: 'nonEditableColumn' },
          { headerName: "Management", field: "sch_mgmt_name", enableValue: true, width: 200, type: 'nonEditableColumn' },
          {
            headerName: 'Total Teacher',
            children: [
              { headerName: "Female", field: "totalf", enableValue: true, width: 100, type: 'numericColumn', suppressMenu: true },
              { headerName: "Male ", field: "totalm", enableValue: true, width: 100, type: 'numericColumn', suppressMenu: true },
              { headerName: "Total", field: "total_teacher", enableValue: true, width: 110, type: 'numericColumn', suppressMenu: true },]


          },
          {
            headerName: 'Pre-Primary Only(A)',
            children: [
              { headerName: "Female", field: "preprimaryonlyf", enableValue: true, width: 100, type: 'numericColumn', suppressMenu: true },
              { headerName: "Male ", field: "preprimaryonlym", enableValue: true, width: 100, type: 'numericColumn', suppressMenu: true },
              { headerName: "Total", field: "preprimaryonlytotal", enableValue: true, width: 110, type: 'numericColumn', suppressMenu: true },]


          },
          {
            headerName: 'Pre-Primary & Primary(I-V)(B)',
            children: [

              { headerName: "Female", field: "preprimaryprimaryf", enableValue: true, width: 100, type: 'numericColumn', suppressMenu: true },
              { headerName: "Male", field: "preprimaryprimarym", enableValue: true, width: 100, type: 'numericColumn', suppressMenu: true },
              { headerName: "Total", field: "preprimaryprimarytotal", enableValue: true, width: 110, type: 'numericColumn', suppressMenu: true },
            ]
          },
          {
            headerName: "Pre-Primary Total(A+B)",
            children: [

              { headerName: "Female", field: "preprimaryftotal", enableValue: true, width: 100, type: 'numericColumn', suppressMenu: true },
              { headerName: "Male", field: "preprimarymtotal", enableValue: true, width: 100, type: 'numericColumn', suppressMenu: true },
              { headerName: "Total", field: "preprimarytotal", enableValue: true, width: 110, type: 'numericColumn', suppressMenu: true }
            ]

          },
          {
            headerName: 'Primary Only(I-V)(C)',
            children: [

              { headerName: "Female", field: "primaryonlyf", enableValue: true, width: 100, type: 'numericColumn', suppressMenu: true },
              { headerName: "Male", field: "primaryonlym", enableValue: true, width: 100, type: 'numericColumn', suppressMenu: true },
              { headerName: "Total", field: "primaryonlytotal", enableValue: true, width: 110, type: 'numericColumn', suppressMenu: true },
            ]
          },
          {
            headerName: 'Primary(I-V) & Upper Primary(VI-VIII)(D)',
            children: [

              { headerName: "Female", field: "primaryandupperprimaryf", enableValue: true, width: 120, type: 'numericColumn', suppressMenu: true },
              { headerName: "Male", field: "primaryandupperprimarym", enableValue: true, width: 110, type: 'numericColumn', suppressMenu: true },
              { headerName: "Total", field: "primaryandupperprimarytotal", enableValue: true, width: 120, type: 'numericColumn', suppressMenu: true },
            ]
          },
          {
            headerName: 'Primary Total(I-V)(B+C+D)',
            children: [

              { headerName: "Female", field: "primaryftotal", enableValue: true, width: 100, type: 'numericColumn', suppressMenu: true },
              { headerName: "Male", field: "primarymtotal", enableValue: true, width: 100, type: 'numericColumn', suppressMenu: true },
              { headerName: "Total", field: "primarytotal", enableValue: true, width: 110, type: 'numericColumn', suppressMenu: true },
            ]
          },
          {
            headerName: 'Primary(I-V) & Upper Primary(VI-VIII)(E)',
            children: [

              { headerName: "Female", field: "primaryandupperprimaryf", enableValue: true, width: 120, type: 'numericColumn', suppressMenu: true },
              { headerName: "Male", field: "primaryandupperprimarym", enableValue: true, width: 110, type: 'numericColumn', suppressMenu: true },
              { headerName: "Total", field: "primaryandupperprimarytotal", enableValue: true, width: 120, type: 'numericColumn', suppressMenu: true },
            ]
          },
          {
            headerName: 'Upper Primary Only(VI-VIII)(F)',
            children: [

              { headerName: "Female", field: "upperprimaryonlyf", enableValue: true, width: 100, type: 'numericColumn', suppressMenu: true },
              { headerName: "Male", field: "upperprimaryonlym", enableValue: true, width: 100, type: 'numericColumn', suppressMenu: true },
              { headerName: "Total", field: "upperprimaryonlytotal", enableValue: true, width: 110, type: 'numericColumn', suppressMenu: true },
            ]
          },
          {
            headerName: 'Upper Primary(VI-VIII) & Secondary(IX-X)(G)',
            children: [

              { headerName: "Female", field: "upperprimaryandsecondaryf", enableValue: true, width: 120, type: 'numericColumn', suppressMenu: true },
              { headerName: "Male", field: "upperprimaryandsecondarym", enableValue: true, width: 110, type: 'numericColumn', suppressMenu: true },
              { headerName: "Total", field: "upperprimaryandsecondarytotal", enableValue: true, width: 120, type: 'numericColumn', suppressMenu: true },
            ]
          },
          {
            headerName: 'Upper Primary Total(VI-VIII)(E+F+G)',
            children: [

              { headerName: "Female", field: "upperprimaryftotal", enableValue: true, width: 120, type: 'numericColumn', suppressMenu: true },
              { headerName: "Male", field: "upperprimarymtotal", enableValue: true, width: 110, type: 'numericColumn', suppressMenu: true },
              { headerName: "Total", field: "upperprimarytotal", enableValue: true, width: 120, type: 'numericColumn', suppressMenu: true },
            ]
          },
          {
            headerName: 'Upper Primary(VI-VIII) & Secondary(IX-X)(H)',
            children: [

              { headerName: "Female", field: "upperprimaryandsecondaryf", enableValue: true, width: 120, type: 'numericColumn', suppressMenu: true },
              { headerName: "Male", field: "upperprimaryandsecondarym", enableValue: true, width: 110, type: 'numericColumn', suppressMenu: true },
              { headerName: "Total", field: "upperprimaryandsecondarytotal", enableValue: true, width: 120, type: 'numericColumn', suppressMenu: true },
            ]
          },
          {
            headerName: 'Secondary Only(IX-X)(I)',
            children: [

              { headerName: "Female", field: "secondaryonlyf", enableValue: true, width: 100, type: 'numericColumn', suppressMenu: true },
              { headerName: "Male", field: "secondaryonlym", enableValue: true, width: 100, type: 'numericColumn', suppressMenu: true },
              { headerName: "Total", field: "secondaryonlytotal", enableValue: true, width: 110, type: 'numericColumn', suppressMenu: true },
            ]
          },
          {
            headerName: ' Secondary(IX-X) & Higher Secondary(XI-XII)(J)',
            children: [

              { headerName: "Female", field: "secondaryandhighersecondaryf", enableValue: true, width: 120, type: 'numericColumn', suppressMenu: true },
              { headerName: "Male", field: "secondaryandhighersecondarym", enableValue: true, width: 110, type: 'numericColumn', suppressMenu: true },
              { headerName: "Total", field: "secondaryandhighersecondarytotal", enableValue: true, width: 120, type: 'numericColumn', suppressMenu: true },
            ]
          },
          {
            headerName: 'Secondary Total(IX-X)(H+I+J)',
            children: [

              { headerName: "Female", field: "secondaryftotal", enableValue: true, width: 100, type: 'numericColumn', suppressMenu: true },
              { headerName: "Male", field: "secondarymtotal", enableValue: true, width: 100, type: 'numericColumn', suppressMenu: true },
              { headerName: "Total", field: "secondarytotal", enableValue: true, width: 110, type: 'numericColumn', suppressMenu: true },
            ]
          },
          {
            headerName: ' Secondary(IX-X) & Higher Secondary(XI-XII)(K)',
            children: [

              { headerName: "Female", field: "secondaryandhighersecondaryf", enableValue: true, width: 120, type: 'numericColumn', suppressMenu: true },
              { headerName: "Male", field: "secondaryandhighersecondarym", enableValue: true, width: 110, type: 'numericColumn', suppressMenu: true },
              { headerName: "Total", field: "secondaryandhighersecondarytotal", enableValue: true, width: 120, type: 'numericColumn', suppressMenu: true },
            ]
          },
          {
            headerName: ' Higher Secondary Only(XI-XII)(L)',
            children: [

              { headerName: "Female", field: "highersecondaryonlyf", enableValue: true, width: 100, type: 'numericColumn', suppressMenu: true },
              { headerName: "Male", field: "highersecondaryonlym", enableValue: true, width: 100, type: 'numericColumn', suppressMenu: true },
              { headerName: "Total", field: "highersecondaryonlytotal", enableValue: true, width: 110, type: 'numericColumn', suppressMenu: true },
            ]
          },
          {
            headerName: ' Higher Secondary Total(XI-XII)(K+L)',
            children: [

              { headerName: "Female", field: "highersecondaryftotal", enableValue: true, width: 120, type: 'numericColumn', suppressMenu: true },
              { headerName: "Male", field: "highersecondarymtotal", enableValue: true, width: 110, type: 'numericColumn', suppressMenu: true },
              { headerName: "Total", field: "highersecondarytotal", enableValue: true, width: 120, type: 'numericColumn', suppressMenu: true },
            ]
          },
        ]
      }
    } else if (dataObj == 303){
      if (this.uniBlock == false){

        this.universalAgGridColumnDefs = [
          { headerName: "State", field: "state_name", type: 'nonEditableColumn', suppressMenu: false, width: 200 },
          { headerName: "District", field: "district_name", type: 'nonEditableColumn', suppressMenu: false, width: 200 },
          { headerName: "Rural/Urban", field: "loc_name", type: 'nonEditableColumn', filter: 'agSetColumnFilter', suppressMenu: false, width: 100},
          { headerName: "School Category ", field: "category_name", type: 'nonEditableColumn', width: 120, filter: 'agSetColumnFilter', suppressMenu: false },
          { headerName: "School Management", field: "sch_mgmt_name", type: 'nonEditableColumn', width: 200, filter: 'agSetColumnFilter', suppressMenu: false },

          {
            headerName: 'Pre-Primary',
            children: [
              { headerName: "Girls", field: "cpp_g", columnGroupShow: 'open', suppressMenu: true, type: 'numericColumn', width: 100 },
              { headerName: "Boys ", field: "cpp_b", columnGroupShow: 'open', suppressMenu: true, type: 'numericColumn', width: 100 },
              { headerName: "Total ", field: "cpp", columnGroupShow: 'open', suppressMenu: true, type: 'numericColumn', width: 110 },
            ]
          },
          {
            headerName: 'Class-I',
            children: [
              { headerName: "Girls", field: "c1_g", columnGroupShow: 'open', suppressMenu: true, type: 'numericColumn', width: 100 },
              { headerName: "Boys ", field: "c1_b", columnGroupShow: 'open', suppressMenu: true, type: 'numericColumn', width: 100 },
              { headerName: "Total ", field: "c1", columnGroupShow: 'open', suppressMenu: true, type: 'numericColumn', width: 110 },
            ]
          },
          {
            headerName: 'Class-II',
            children: [
              { headerName: "Girls", field: "c2_g", columnGroupShow: 'open', suppressMenu: true, type: 'numericColumn', width: 100 },
              { headerName: "Boys ", field: "c2_b", columnGroupShow: 'open', suppressMenu: true, type: 'numericColumn', width: 100 },
              { headerName: "Total ", field: "c2", columnGroupShow: 'open', suppressMenu: true, type: 'numericColumn', width: 110 },
            ]
          },
          {
            headerName: 'Class-III',
            children: [
              { headerName: "Girls", field: "c3_g", columnGroupShow: 'open', suppressMenu: true, type: 'numericColumn', width: 100 },
              { headerName: "Boys ", field: "c3_b", columnGroupShow: 'open', suppressMenu: true, type: 'numericColumn', width: 100 },
              { headerName: "Total ", field: "c3", columnGroupShow: 'open', suppressMenu: true, type: 'numericColumn', width: 110 },
            ]
          },
          {
            headerName: 'Class-IV',
            children: [
              { headerName: "Girls", field: "c4_g", columnGroupShow: 'open', suppressMenu: true, type: 'numericColumn', width: 100 },
              { headerName: "Boys ", field: "c4_b", columnGroupShow: 'open', suppressMenu: true, type: 'numericColumn', width: 100 },
              { headerName: "Total ", field: "c4", columnGroupShow: 'open', suppressMenu: true, type: 'numericColumn', width: 110 },
            ]
          },
          {
            headerName: 'Class-V',
            children: [
              { headerName: "Girls", field: "c5_g", columnGroupShow: 'open', suppressMenu: true, type: 'numericColumn', width: 100 },
              { headerName: "Boys ", field: "c5_b", columnGroupShow: 'open', suppressMenu: true, type: 'numericColumn', width: 100 },
              { headerName: "Total ", field: "c5", columnGroupShow: 'open', suppressMenu: true, type: 'numericColumn', width: 110 },
            ]
          },
          {
            headerName: 'Class-VI',
            children: [
              { headerName: "Girls", field: "c6_g", columnGroupShow: 'open', suppressMenu: true, type: 'numericColumn', width: 100 },
              { headerName: "Boys ", field: "c6_b", columnGroupShow: 'open', suppressMenu: true, type: 'numericColumn', width: 100 },
              { headerName: "Total ", field: "c6", columnGroupShow: 'open', suppressMenu: true, type: 'numericColumn', width: 110 },
            ]
          },
          {
            headerName: 'Class-VII',
            children: [
              { headerName: "Girls", field: "c7_g", columnGroupShow: 'open', suppressMenu: true, type: 'numericColumn', width: 100 },
              { headerName: "Boys ", field: "c7_b", columnGroupShow: 'open', suppressMenu: true, type: 'numericColumn', width: 100 },
              { headerName: "Total ", field: "c7", columnGroupShow: 'open', suppressMenu: true, type: 'numericColumn', width: 110 },
            ]
          },
          {
            headerName: 'Class-VIII',
            children: [
              { headerName: "Girls", field: "c8_g", columnGroupShow: 'open', suppressMenu: true, type: 'numericColumn', width: 100 },
              { headerName: "Boys ", field: "c8_b", columnGroupShow: 'open', suppressMenu: true, type: 'numericColumn', width: 100 },
              { headerName: "Total ", field: "c8", columnGroupShow: 'open', suppressMenu: true, type: 'numericColumn', width: 110 },
            ]
          },
          {
            headerName: 'Class-IX',
            children: [
              { headerName: "Girls", field: "c9_g", columnGroupShow: 'open', suppressMenu: true, type: 'numericColumn', width: 100 },
              { headerName: "Boys ", field: "c9_b", columnGroupShow: 'open', suppressMenu: true, type: 'numericColumn', width: 100 },
              { headerName: "Total ", field: "c9", columnGroupShow: 'open', suppressMenu: true, type: 'numericColumn', width: 110 },
            ]
          },
          {
            headerName: 'Class-X',
            children: [
              { headerName: "Girls", field: "c10_g", columnGroupShow: 'open', suppressMenu: true, type: 'numericColumn', width: 100 },
              { headerName: "Boys ", field: "c10_b", columnGroupShow: 'open', suppressMenu: true, type: 'numericColumn', width: 100 },
              { headerName: "Total ", field: "c10", columnGroupShow: 'open', suppressMenu: true, type: 'numericColumn', width: 110 },
            ]
          },
          {
            headerName: 'Class-XI',
            children: [
              { headerName: "Girls", field: "c11_g", columnGroupShow: 'open', suppressMenu: true, type: 'numericColumn', width: 100 },
              { headerName: "Boys ", field: "c11_b", columnGroupShow: 'open', suppressMenu: true, type: 'numericColumn', width: 100 },
              { headerName: "Total ", field: "c11", columnGroupShow: 'open', suppressMenu: true, type: 'numericColumn', width: 110 },
            ]
          },
          {
            headerName: 'Class-XII',
            children: [
              { headerName: "Girls", field: "c12_g", columnGroupShow: 'open', suppressMenu: true, type: 'numericColumn', width: 100 },
              { headerName: "Boys ", field: "c12_b", columnGroupShow: 'open', suppressMenu: true, type: 'numericColumn', width: 100 },
              { headerName: "Total ", field: "c12", columnGroupShow: 'open', suppressMenu: true, type: 'numericColumn', width: 110 },
            ]
          },
          {
            headerName: 'Primary (I-V)',
            children: [
              { headerName: "Girls", field: "primary_g", columnGroupShow: 'open', suppressMenu: true, type: 'numericColumn', width: 100 },
              { headerName: "Boys ", field: "primary_b", columnGroupShow: 'open', suppressMenu: true, type: 'numericColumn', width: 100 },
              { headerName: "Total ", field: "primary_total", columnGroupShow: 'open', suppressMenu: true, type: 'numericColumn', width: 110 },
            ]
          },
          {
            headerName: 'Upper Primary (VI-VIII)',
            children: [
              { headerName: "Girls", field: "upper_primary_g", columnGroupShow: 'open', suppressMenu: true, type: 'numericColumn', width: 100 },
              { headerName: "Boys ", field: "upper_primary_b", columnGroupShow: 'open', suppressMenu: true, type: 'numericColumn', width: 100 },
              { headerName: "Total ", field: "upper_primary_total", columnGroupShow: 'open', suppressMenu: true, type: 'numericColumn', width: 110 },
            ]
          },
          {
            headerName: 'Secondary (IX-X)',
            children: [
              { headerName: "Girls", field: "secondary_g", columnGroupShow: 'open', suppressMenu: true, type: 'numericColumn', width: 100 },
              { headerName: "Boys ", field: "secondary_b", columnGroupShow: 'open', suppressMenu: true, type: 'numericColumn', width: 100 },
              { headerName: "Total ", field: "secondary_total", columnGroupShow: 'open', suppressMenu: true, type: 'numericColumn', width: 110 },
            ]
          },
          {
            headerName: 'Higher Secondary (XI-XII)',
            children: [
              { headerName: "Girls", field: "higher_secondary_g", columnGroupShow: 'open', suppressMenu: true, type: 'numericColumn', width: 100 },
              { headerName: "Boys ", field: "higher_secondary_b", columnGroupShow: 'open', suppressMenu: true, type: 'numericColumn', width: 100 },
              { headerName: "Total ", field: "higher_secondary_total", columnGroupShow: 'open', suppressMenu: true, type: 'numericColumn', width: 110 },
            ]
          },
          {
            headerName: 'Total Without Pre-Primary',
            children: [
              { headerName: "Girls", field: "total_g", columnGroupShow: 'open', suppressMenu: true, type: 'numericColumn', width: 100 },
              { headerName: "Boys ", field: "total_b", columnGroupShow: 'open', suppressMenu: true, type: 'numericColumn', width: 100 },
              { headerName: "Total ", field: "no_of_student", columnGroupShow: 'open', suppressMenu: true, type: 'numericColumn', width: 110 },
            ]
          },
          {
            headerName: 'Total With Pre-Primary',
            children: [
              { headerName: "Girls", field: "total_with_pre_g", columnGroupShow: 'open', suppressMenu: true, type: 'numericColumn', width: 100 },
              { headerName: "Boys ", field: "total_with_pre_b", columnGroupShow: 'open', suppressMenu: true, type: 'numericColumn', width: 100 },
              { headerName: "Total ", field: "no_of_student_pre", columnGroupShow: 'open', suppressMenu: true, type: 'numericColumn', width: 110 },
            ]
          }
        ]
      } else{

        this.universalAgGridColumnDefs = [
          // { headerName: "State", field: "state_name", type: 'nonEditableColumn', suppressMenu: false, width: 200 },
          { headerName: "District", field: "district_name", type: 'nonEditableColumn', suppressMenu: false, width: 200 },
          { headerName: "Block", field: "udise_block_name", type: 'nonEditableColumn', suppressMenu: false, width: 200 },
          { headerName: "Rural/Urban", field: "loc_name", type: 'nonEditableColumn', filter: 'agSetColumnFilter', suppressMenu: false, width: 100},
          { headerName: "School Category ", field: "category_name", type: 'nonEditableColumn', width: 120, filter: 'agSetColumnFilter', suppressMenu: false },
          { headerName: "School Management", field: "sch_mgmt_name", type: 'nonEditableColumn', width: 200, filter: 'agSetColumnFilter', suppressMenu: false },

          {
            headerName: 'Pre-Primary',
            children: [
              { headerName: "Girls", field: "cpp_g", columnGroupShow: 'open', suppressMenu: true, type: 'numericColumn', width: 100 },
              { headerName: "Boys ", field: "cpp_b", columnGroupShow: 'open', suppressMenu: true, type: 'numericColumn', width: 100 },
              { headerName: "Total ", field: "cpp", columnGroupShow: 'open', suppressMenu: true, type: 'numericColumn', width: 110 },
            ]
          },
          {
            headerName: 'Class-I',
            children: [
              { headerName: "Girls", field: "c1_g", columnGroupShow: 'open', suppressMenu: true, type: 'numericColumn', width: 100 },
              { headerName: "Boys ", field: "c1_b", columnGroupShow: 'open', suppressMenu: true, type: 'numericColumn', width: 100 },
              { headerName: "Total ", field: "c1", columnGroupShow: 'open', suppressMenu: true, type: 'numericColumn', width: 110 },
            ]
          },
          {
            headerName: 'Class-II',
            children: [
              { headerName: "Girls", field: "c2_g", columnGroupShow: 'open', suppressMenu: true, type: 'numericColumn', width: 100 },
              { headerName: "Boys ", field: "c2_b", columnGroupShow: 'open', suppressMenu: true, type: 'numericColumn', width: 100 },
              { headerName: "Total ", field: "c2", columnGroupShow: 'open', suppressMenu: true, type: 'numericColumn', width: 110 },
            ]
          },
          {
            headerName: 'Class-III',
            children: [
              { headerName: "Girls", field: "c3_g", columnGroupShow: 'open', suppressMenu: true, type: 'numericColumn', width: 100 },
              { headerName: "Boys ", field: "c3_b", columnGroupShow: 'open', suppressMenu: true, type: 'numericColumn', width: 100 },
              { headerName: "Total ", field: "c3", columnGroupShow: 'open', suppressMenu: true, type: 'numericColumn', width: 110 },
            ]
          },
          {
            headerName: 'Class-IV',
            children: [
              { headerName: "Girls", field: "c4_g", columnGroupShow: 'open', suppressMenu: true, type: 'numericColumn', width: 100 },
              { headerName: "Boys ", field: "c4_b", columnGroupShow: 'open', suppressMenu: true, type: 'numericColumn', width: 100 },
              { headerName: "Total ", field: "c4", columnGroupShow: 'open', suppressMenu: true, type: 'numericColumn', width: 110 },
            ]
          },
          {
            headerName: 'Class-V',
            children: [
              { headerName: "Girls", field: "c5_g", columnGroupShow: 'open', suppressMenu: true, type: 'numericColumn', width: 100 },
              { headerName: "Boys ", field: "c5_b", columnGroupShow: 'open', suppressMenu: true, type: 'numericColumn', width: 100 },
              { headerName: "Total ", field: "c5", columnGroupShow: 'open', suppressMenu: true, type: 'numericColumn', width: 110 },
            ]
          },
          {
            headerName: 'Class-VI',
            children: [
              { headerName: "Girls", field: "c6_g", columnGroupShow: 'open', suppressMenu: true, type: 'numericColumn', width: 100 },
              { headerName: "Boys ", field: "c6_b", columnGroupShow: 'open', suppressMenu: true, type: 'numericColumn', width: 100 },
              { headerName: "Total ", field: "c6", columnGroupShow: 'open', suppressMenu: true, type: 'numericColumn', width: 110 },
            ]
          },
          {
            headerName: 'Class-VII',
            children: [
              { headerName: "Girls", field: "c7_g", columnGroupShow: 'open', suppressMenu: true, type: 'numericColumn', width: 100 },
              { headerName: "Boys ", field: "c7_b", columnGroupShow: 'open', suppressMenu: true, type: 'numericColumn', width: 100 },
              { headerName: "Total ", field: "c7", columnGroupShow: 'open', suppressMenu: true, type: 'numericColumn', width: 110 },
            ]
          },
          {
            headerName: 'Class-VIII',
            children: [
              { headerName: "Girls", field: "c8_g", columnGroupShow: 'open', suppressMenu: true, type: 'numericColumn', width: 100 },
              { headerName: "Boys ", field: "c8_b", columnGroupShow: 'open', suppressMenu: true, type: 'numericColumn', width: 100 },
              { headerName: "Total ", field: "c8", columnGroupShow: 'open', suppressMenu: true, type: 'numericColumn', width: 110 },
            ]
          },
          {
            headerName: 'Class-IX',
            children: [
              { headerName: "Girls", field: "c9_g", columnGroupShow: 'open', suppressMenu: true, type: 'numericColumn', width: 100 },
              { headerName: "Boys ", field: "c9_b", columnGroupShow: 'open', suppressMenu: true, type: 'numericColumn', width: 100 },
              { headerName: "Total ", field: "c9", columnGroupShow: 'open', suppressMenu: true, type: 'numericColumn', width: 110 },
            ]
          },
          {
            headerName: 'Class-X',
            children: [
              { headerName: "Girls", field: "c10_g", columnGroupShow: 'open', suppressMenu: true, type: 'numericColumn', width: 100 },
              { headerName: "Boys ", field: "c10_b", columnGroupShow: 'open', suppressMenu: true, type: 'numericColumn', width: 100 },
              { headerName: "Total ", field: "c10", columnGroupShow: 'open', suppressMenu: true, type: 'numericColumn', width: 110 },
            ]
          },
          {
            headerName: 'Class-XI',
            children: [
              { headerName: "Girls", field: "c11_g", columnGroupShow: 'open', suppressMenu: true, type: 'numericColumn', width: 100 },
              { headerName: "Boys ", field: "c11_b", columnGroupShow: 'open', suppressMenu: true, type: 'numericColumn', width: 100 },
              { headerName: "Total ", field: "c11", columnGroupShow: 'open', suppressMenu: true, type: 'numericColumn', width: 110 },
            ]
          },
          {
            headerName: 'Class-XII',
            children: [
              { headerName: "Girls", field: "c12_g", columnGroupShow: 'open', suppressMenu: true, type: 'numericColumn', width: 100 },
              { headerName: "Boys ", field: "c12_b", columnGroupShow: 'open', suppressMenu: true, type: 'numericColumn', width: 100 },
              { headerName: "Total ", field: "c12", columnGroupShow: 'open', suppressMenu: true, type: 'numericColumn', width: 110 },
            ]
          },
          {
            headerName: 'Primary (I-V)',
            children: [
              { headerName: "Girls", field: "primary_g", columnGroupShow: 'open', suppressMenu: true, type: 'numericColumn', width: 100 },
              { headerName: "Boys ", field: "primary_b", columnGroupShow: 'open', suppressMenu: true, type: 'numericColumn', width: 100 },
              { headerName: "Total ", field: "primary_total", columnGroupShow: 'open', suppressMenu: true, type: 'numericColumn', width: 110 },
            ]
          },
          {
            headerName: 'Upper Primary (VI-VIII)',
            children: [
              { headerName: "Girls", field: "upper_primary_g", columnGroupShow: 'open', suppressMenu: true, type: 'numericColumn', width: 100 },
              { headerName: "Boys ", field: "upper_primary_b", columnGroupShow: 'open', suppressMenu: true, type: 'numericColumn', width: 100 },
              { headerName: "Total ", field: "upper_primary_total", columnGroupShow: 'open', suppressMenu: true, type: 'numericColumn', width: 110 },
            ]
          },
          {
            headerName: 'Secondary (IX-X)',
            children: [
              { headerName: "Girls", field: "secondary_g", columnGroupShow: 'open', suppressMenu: true, type: 'numericColumn', width: 100 },
              { headerName: "Boys ", field: "secondary_b", columnGroupShow: 'open', suppressMenu: true, type: 'numericColumn', width: 100 },
              { headerName: "Total ", field: "secondary_total", columnGroupShow: 'open', suppressMenu: true, type: 'numericColumn', width: 110 },
            ]
          },
          {
            headerName: 'Higher Secondary (XI-XII)',
            children: [
              { headerName: "Girls", field: "higher_secondary_g", columnGroupShow: 'open', suppressMenu: true, type: 'numericColumn', width: 100 },
              { headerName: "Boys ", field: "higher_secondary_b", columnGroupShow: 'open', suppressMenu: true, type: 'numericColumn', width: 100 },
              { headerName: "Total ", field: "higher_secondary_total", columnGroupShow: 'open', suppressMenu: true, type: 'numericColumn', width: 110 },
            ]
          },
          {
            headerName: 'Total Without Pre-Primary',
            children: [
              { headerName: "Girls", field: "total_g", columnGroupShow: 'open', suppressMenu: true, type: 'numericColumn', width: 100 },
              { headerName: "Boys ", field: "total_b", columnGroupShow: 'open', suppressMenu: true, type: 'numericColumn', width: 100 },
              { headerName: "Total ", field: "no_of_student", columnGroupShow: 'open', suppressMenu: true, type: 'numericColumn', width: 110 },
            ]
          },
          {
            headerName: 'Total With Pre-Primary',
            children: [
              { headerName: "Girls", field: "total_with_pre_g", columnGroupShow: 'open', suppressMenu: true, type: 'numericColumn', width: 100 },
              { headerName: "Boys ", field: "total_with_pre_b", columnGroupShow: 'open', suppressMenu: true, type: 'numericColumn', width: 100 },
              { headerName: "Total ", field: "no_of_student_pre", columnGroupShow: 'open', suppressMenu: true, type: 'numericColumn', width: 110 },
            ]
          }
        ]
      }
    }
      

      this.defaultColDef = {
        flex: 1,
        minWidth: 150,
        filter: true,
        sortable: true,
        resizable: true,
      };
  
  
      this.autoGroupColumnDef = {
        // headerName: 'Year',
        // field: 'year',
        minWidth: 250,
        cellRendererParams: {
          suppressCount: true, // turn off the row count
      }
        // cellRenderer: 'agGroupCellRenderer',
        // cellRendererParams: { footerValueGetter: '"Total (" + x + ")"' },
      };
        // setTimeout(() => {
        //   this.genericTotal(this.rowData);
        // }, 500)

    });


   }

   onBtExport() {

    this.dateTime();

    const uniState = "";
    const uniDist = "";
    const uniBlock = "";

    this.excelGen.excelGen(this.gridApi, this.uniHeader, this.uniYear, uniState, uniDist, uniBlock, this.thableNote, this.reportDate, this.columnLengthForExcel, this.reportOrder)

  }

  dateTime() {
    this.currentDate = new Date();
    this.reportDate = this.datePipe.transform(this.currentDate, 'dd MMM yyyy hh:mm a');
  }

  chackChart(id) {
    // if(id=='97' || id=='43' || id=='82' || id=='83' || id=='50' || id=='51' || id=='52' || id=='53' || id=='54' || id=='55' || id=='56' || id=='57' || id=='58' || id=='59' || id=='60' || id=='61' || id=='62' || id=='63' || id=='64' || id=='65' || id=='66' || id=='67' || id=='68' || id=='69' || id=='70' || id=='71' || id=='72' || id=='73' || id=='74' || id=='75' || id=='76' || id=='77' || id=='78' || id=='79' || id=='80' || id=="49" || id=="42" || id=="81" || id=="86" || id=="91" || id=="90" || id=="87" || id=="92" || id=="88" || id=="89" || id=="93" || id=="94" || id=="85"){
    // return true;
    // }else{
    // return false;
    // }
    // return false;
  }

  totalValue: any[] = [];
  prepareJson: any[] = [];
  zeroindexData: any[] = [];
  finalJSON: any[] = [];
  genericTotal(rowData) {
    

    var col = [];
    var columnKey = [];
    var stringColumnKey = [];
    var temps = [];
    this.jsonColumnName = "";    

    console.log(this.universalAgGridColumnDefs)
      for (let i = 0; i < this.universalAgGridColumnDefs.length; i++) {
        if (this.universalAgGridColumnDefs[i].field === undefined) {
          for (let j = 0; j < this.universalAgGridColumnDefs[i].children.length; j++) {
            if (this.universalAgGridColumnDefs[i].children[j].field === undefined) {

              for (let k = 0; k < this.universalAgGridColumnDefs[i].children[j].children.length; k++) {
                if (this.reportCode == 'R146' || this.reportCode == 'R145' || this.reportCode == 'R144') {

                  if (this.gridColumnApi.getColumn(this.universalAgGridColumnDefs[i].children[j].children[k].field).visible && this.universalAgGridColumnDefs[i].children[j].children[k].type == "numericColumn" && this.universalAgGridColumnDefs[i].children[j].children[k].field) {
                    this.jsonColumnName += this.universalAgGridColumnDefs[i].children[j].children[k].field + ",";
                    col.push(this.universalAgGridColumnDefs[i].children[j].children[k].headerName);
                    columnKey.push(this.universalAgGridColumnDefs[i].children[j].children[k].field);

                  } else if (this.universalAgGridColumnDefs[i].children[j].children[k].type == "numericColumn" && this.universalAgGridColumnDefs[i].children[j].children[k].field) {
                    this.jsonColumnName += this.universalAgGridColumnDefs[i].children[j].children[k].field + ",";
                    col.push(this.universalAgGridColumnDefs[i].children[j].children[k].headerName);
                    columnKey.push(this.universalAgGridColumnDefs[i].children[j].children[k].field);

                  } else {
                    stringColumnKey.push(this.universalAgGridColumnDefs[i].children[j].children[k].field);
                  }

                } else {
                  if (this.gridColumnApi.getColumn(this.universalAgGridColumnDefs[i].children[j].children[k].field).visible && this.universalAgGridColumnDefs[i].children[j].children[k].type == "numericColumn" && this.universalAgGridColumnDefs[i].children[j].children[k].field) {
                    this.jsonColumnName += this.universalAgGridColumnDefs[i].children[j].children[k].field + ",";
                    col.push(this.universalAgGridColumnDefs[i].children[j].children[k].headerName);
                    columnKey.push(this.universalAgGridColumnDefs[i].children[j].children[k].field);
                  } else {
                    stringColumnKey.push(this.universalAgGridColumnDefs[i].children[j].children[k].field);
                  }
                }
              }
            } else {
              if (this.gridColumnApi.getColumn(this.universalAgGridColumnDefs[i].children[j].field).visible && this.universalAgGridColumnDefs[i].children[j].type == "numericColumn" && this.universalAgGridColumnDefs[i].children[j].field) {
                this.jsonColumnName += this.universalAgGridColumnDefs[i].children[j].field + ",";
                col.push(this.universalAgGridColumnDefs[i].children[j].headerName);
                columnKey.push(this.universalAgGridColumnDefs[i].children[j].field);
              } else {
                stringColumnKey.push(this.universalAgGridColumnDefs[i].children[j].field);
              }
            }
          }
        } else {
          if (this.universalAgGridColumnDefs[i].field && this.universalAgGridColumnDefs[i].type == "numericColumn") {
            this.jsonColumnName += this.universalAgGridColumnDefs[i].field + ",";
            col.push(this.universalAgGridColumnDefs[i].headerName);
            columnKey.push(this.universalAgGridColumnDefs[i].field);

          } else {
            stringColumnKey.push(this.universalAgGridColumnDefs[i].field);
          }
        }

      }

    var rows = [];
    var itemNew;
    if (this.agChange) {
      itemNew = this.pdfRowData;
    } else {
      itemNew = rowData;

    }

    // itemNew=this.gridApi.getModel().gridOptionsWrapper.gridOptions.rowData;
    itemNew.forEach(element => {
      var temp = [];
      if (element["locn_name"] != "total" && element["locn_name"] != "Total" && element["loc_name"] != "total" && element["loc_name"] != "Total") {
        for (let i = 0; i < columnKey.length; i++) {
          // if(rows[i].locn_name !="total" &&  rows[i].locn_name !="Total"){
          temp.push(element[columnKey[i]]);
          // }
        }
      }
      rows.push(temp);
    });

    this.totalValue = [];
    this.prepareJson = [];
    this.finalJSON = [];

    for (let i = 0; i < columnKey.length; i++) {

      for (let j = 0; j < rows.length; j++) {

        if (this.totalValue[i] == "undefined" || this.totalValue[i] == null) {

          this.totalValue[i] = 0;

          if (+rows[j][i] >= 0) {
            this.totalValue[i] = (+this.totalValue[i]) + (+rows[j][i]);

          }
        } else {
          if (+rows[j][i] >= 0) {
            this.totalValue[i] = (+this.totalValue[i]) + (+rows[j][i]);

          } else {

          }
        }

      }

      this.prepareJson[i] = { 'key': columnKey[i], 'value': this.totalValue[i] }

    }

    const zeroindexData = rowData[0];

    this.finalJSON[0] = JSON.parse(JSON.stringify(rowData[0]));


    var k = 0;

    for (var item in this.finalJSON[0]) {

      for (let m = 0; m < this.prepareJson.length; m++) {

        if (item === this.prepareJson[m].key) {

          if (isInt(this.prepareJson[m].value)) {
            this.finalJSON[0][item] = this.prepareJson[m].value;

          } else {
            this.finalJSON[0][item] = this.prepareJson[m].value.toFixed(2);
          }

        }
      }
      function isInt(n) {
        return Number(n) === n && n % 1 === 0;
      }
      ++k;
    }
    var l = 0;
    var checkVariable = 0;
    for (var item in this.finalJSON[0]) {



      for (let m = 0; m < stringColumnKey.length; m++) {

        if (item === stringColumnKey[m]) {

          
          if (stringColumnKey[m] == 'state_name' || stringColumnKey[m] == 'loc1_name' || stringColumnKey[m] == 'location_name' || stringColumnKey[m] == 'locn_name' || stringColumnKey[m] == 'broad_mgmt_name' || stringColumnKey[m] == 'status_15_16') {
            if (checkVariable == 1) {
              this.finalJSON[0][item] = "";
            }
            else if (stringColumnKey.some((item1) => item1 == 'location')) {
              this.finalJSON[0][item] = "";
            }
            else {
              this.finalJSON[0][item] = "Total";
              checkVariable = 1;
            }

          }
          else if (stringColumnKey[m] == 'sch_mgmt_name' || stringColumnKey[m] == 'item' || stringColumnKey[m] == 'acad_qual_name') {
            if (checkVariable == 1) {
              this.finalJSON[0][item] = "";
            }
            else {
              this.finalJSON[0][item] = "Total";
              checkVariable = 1;
            }
          }
          else if (stringColumnKey[m] == 'location') {
            if (checkVariable == 1) {
              this.finalJSON[0][item] = "";
            }
            else {
              this.finalJSON[0][item] = "Total";
              checkVariable = 1;
            }
          }
          else if (stringColumnKey[m] == 'state_name') {
            if (checkVariable == 1) {
              this.finalJSON[0][item] = "";
            }
            else {
              this.finalJSON[0][item] = "Total";
              checkVariable = 1;
            }
          }
          else if (stringColumnKey[m] == 'estd_year') {
            if (checkVariable == 1) {
              this.finalJSON[0][item] = "";
            }
            else {
              this.finalJSON[0][item] = "Total";
              checkVariable = 1;
            }
          }
          else if (stringColumnKey[m] == 'loc_name') {
            if (checkVariable == 1) {
              this.finalJSON[0][item] = "";
            }
            else if (stringColumnKey.some((item1) => item1 == 'location_name')) {
              this.finalJSON[0][item] = "";
            }
            else {
              this.finalJSON[0][item] = "Total";
              checkVariable = 1;
            }
          }
          else {
            this.finalJSON[0][item] = "";
          }
        }
      }

      ++l;
    }

    setTimeout(() => {

      this.finalJSONNew = [this.finalJSON[0]];
      const res = this.finalJSONNew

      this.gridApi.setPinnedBottomRowData(res);
    }, 500)
    this.gridApi.refreshCells();
  }



}
