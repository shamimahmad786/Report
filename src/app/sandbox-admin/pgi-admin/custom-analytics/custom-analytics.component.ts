import { Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { ReportAnalyticalService } from 'src/app/services/report-analytical.service';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { numberFormat } from 'highcharts';
export interface Food {
  value: string;
  viewValue: string;

}

export interface column {
  id: Number;
  itemName: String;
  columnName: String;
  columnDataType: String;
  tableName: String;
  masterFlag: String;
  tableView: String;
  columnType: String;
  columnView:String
  // itemView:String;
}

export interface Tables {
  tableId: Number;
  tableName: String;
  tableView: String;
}

export interface sqlQuery {
  tablesList: any;
  columnsList: any;
  filterData: any;
  aggrigationDatas: any;
  groupDatas: any;
}

export interface tableColumnMapping {
  tableView: any;
  columnList: any;
  tableName: any;
}

export interface filtermapping {
  conditionColumn: String;
  columnDataType: String;
  conditionTable: String;
  operator: String;
  optValue: String;
  columnType: String;
}

export interface aggrigationMapping {
  aggrigationName: String;
  aggrigationColumn: String;
  aggrigationDataType: String;
  aggrigationTable: String;
  aggrigationColumnType: String;
}

export interface masterColumnList {
  id: Number;
  columnId: Number;
  itemName: String;
  masterValue: String;
}


export interface colDefMapping {
  headerName: string;
  field: string;
  width: number;
  filter: String;
  sortable: boolean;
}

export interface rowDefMapping {
  make: string;
  model: string;
  price: string;
}




@Component({
  selector: 'app-custom-analytics',
  templateUrl: './custom-analytics.component.html',
  styleUrls: ['./custom-analytics.component.css']
})




export class CustomAnalyticsComponent implements OnInit {



  itemList = [];
  selectedItems = [];
  settings = {};
  joinForms = [1];
  rulesSize = [];
  summarizedSize = [];
  whereCondition = [];
  summarizedCondition = [];
  @ViewChild('appendRow', { static: true }) appendRow: ElementRef;
  constructor(private renderer: Renderer2, private reportAnalyticalService: ReportAnalyticalService,private ngxLoader: NgxUiLoaderService) { }
  foods: any = [];
  Food: Food;
  tableListValues: any;
  //tableColumnList:any;
  tableColumnList: column;
  tablesColumnList: any[] = [];
  tablesListValues: any[] = [];
  multiSelectedItems: any[] = [];
  table: Tables;
  tablesList = [];
  selectedTable: any[] = [];
  queryLists: sqlQuery;
  tableDetails = {};
  public listColumeNames: [];
  columnValues= [];
  originalData=[];
  originalHeader=[];
  tableColumnMapping: tableColumnMapping;
  listTableColumnMapping: any[] = [];
  operators: any;
  filterValue: filtermapping;
  selectedFilterValue: any[] = [];
  selectedFilterField: any[] = [];
  selectedFilterDataType: any[] = [];
  selectedFilterOperator: any[] = [];
  selectedFilterTableName: any = [];
  columnType: any[] = [];
  filterItem = [];
  aggrigationItem = [];
  filtermapping: filtermapping;
  summerizedQuery: any[] = [];
  summerizedSelectedData: any[] = [];
  selectedAggrigateField: any[] = [];
  manageAggrigationField=[];
  // manageAggrigationField:String;
  selectedAggrigateDataType: any[] = [];
  selectedAggrigateTableName: any[] = [];
  selectedAggrgateColumnType: any[] = [];
  aggrigationsMapping: aggrigationMapping;
  selectedTableId = [];
  materVisible = [];
  masterVisibleData: any[] = [];
  selectedMasterColumn: any[] = [];
  listMasterColumn = [];
  masterColumnJson: masterColumnList;
  inCommaSeparedValue: String;
  columnValidation: String;
  groupBySized = [];
  allColumnList: any[] = [];
  selectedGroups: any[] = [];
  selectedGroupArray = [];
  selectedGroupViewArray=[];
  colDefMapping: colDefMapping;
  rowDefMapping: rowDefMapping;
  columnDefss = [];
  private gridApi;
  private gridColumnApi;
  searchCount: number = 0;
  tableSelectionFlag: String = 'Y';
  agFilterType: String;
  summarizedValueCondition:boolean=true;
  numericColumnViewer:any[]=[];
  isChecked=[];
  ngOnInit() {
    this.tableList();
    this.settings = {
      text: "Select Parameters",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      classes: "myclass custom-class"
    };
    // this.isChecked=false
  }

  joinAppend() {
    // alert(this.selectedTableId[this.joinForms.length - 1]);
    this.listTableColumnMapping.length=this.listTableColumnMapping.length+1 // Added for remove button hide show 
    this.getDependentTable(this.selectedTableId[this.joinForms.length - 1]);
  }

  removeRow(j: number): void {
    console.log("this.allColumnList for group by--->"+JSON.stringify(this.allColumnList));
    console.log("column list for filter--->"+JSON.stringify(this.listTableColumnMapping))
    this.joinForms.splice(j, 1);
    this.tablesListValues.splice(j, 1);
    this.multiSelectedItems.splice(j, 1);
    this.selectedTable.splice(j, 1);
    this.selectedTableId.splice(j, 1);
    this.listTableColumnMapping.splice(j,1);
    this.allColumnList=[];
    for(let i=0;i<this.listTableColumnMapping.length;i++){
      for(let j=0;j<this.listTableColumnMapping[i].columnList.length;j++){
      this.tableColumnList = { id: this.listTableColumnMapping[i].columnList[j].id, itemName: this.listTableColumnMapping[i].columnList[j].tableView + "-" + this.listTableColumnMapping[i].columnList[j].columnView, columnName: this.listTableColumnMapping[i].columnList[j].columnName, columnDataType: this.listTableColumnMapping[i].columnList[j].columnDataType, tableName: this.listTableColumnMapping[i].columnList[j].tableName, masterFlag:this.listTableColumnMapping[i].columnList[j].masterFlag, tableView: this.listTableColumnMapping[i].columnList[j].tableView, columnType: this.listTableColumnMapping[i].columnList[j].columnType, columnView:  this.listTableColumnMapping[i].columnList[j].columnView};
      this.allColumnList.push(this.tableColumnList);
      }
    }
  }

  tableList() {
    this.reportAnalyticalService.tableList().subscribe(res => {
      this.tableListValues = res;
      for (let i = 0; i < res.length; i++) {
        this.table = { tableId: res[i].tableId, tableName: res[i].tableName, tableView: res[i].tableView }
        this.tablesList.push(this.table);
      }
      this.tablesListValues.push(this.tablesList);
    },
      error => {
        alert('error in get tableList');
      })
  }

  getColumn(event, j) {
    // alert("index--->"+j);
    this.selectedTableId[j] = this.tablesListValues[j][event].tableId;
    this.multiSelectedItems[j] = [];
    this.tableDetails = {
      tableId: this.tablesListValues[j][event].tableId,
      tableName: this.tablesListValues[j][event].tableName
    }
    this.selectedTable[j] = this.tableDetails;
    this.reportAnalyticalService.columnList(this.tablesListValues[j][event].tableId).subscribe(res => {
      this.selectedItems = [];
      this.itemList = [];
      for (let i = 0; i < res.length; i++) {
        columnType: String;
        this.tableColumnList = { id: res[i].columnId, itemName: res[i].columnView, columnName: res[i].columnName, columnDataType: res[i].columnDataType, tableName: res[i].tableName, masterFlag: res[i].masterFlag, tableView: res[i].tableView, columnType: res[i].columnType, columnView: res[i].columnView };
        this.itemList.push(this.tableColumnList);
        this.tableColumnList = { id: res[i].columnId, itemName: res[i].tableView + "-" + res[i].columnView, columnName: res[i].columnName, columnDataType: res[i].columnDataType, tableName: res[i].tableName, masterFlag: res[i].masterFlag, tableView: res[i].tableView, columnType: res[i].columnType, columnView:res[i].columnView };
        this.allColumnList.push(this.tableColumnList);
      }
      // this.tablesColumnList.push(this.itemList);
      this.tablesColumnList[j] = this.itemList;

      this.tableColumnMapping = { tableView: this.tablesListValues[j][event].tableView, columnList: this.itemList, tableName: this.tablesListValues[j][event].tableName };
      // this.listTableColumnMapping.push(this.tableColumnMapping);
      this.listTableColumnMapping[j]=this.tableColumnMapping;
    },
      error => {
        alert('error in get columnList');
      })
  }

  getDependentTable(tableId) {
    debugger;
    this.tablesList = [];
    // alert("final table id--->"+tableId)
    this.reportAnalyticalService.dependTable(tableId).subscribe(res => {
      for (let i = 0; i < res.length; i++) {
        this.table = { tableId: res[i].joinedTableId, tableName: res[i].joinTableName, tableView: res[i].joinTableView }
        this.tablesList.push(this.table);
      }
      if (res.length > 0) {
        this.joinForms.length = this.joinForms.length + 1;
      } else {
        alert('Dependency Table Not Available');
      }
      // alert("1--->"+JSON.stringify(this.tablesList))
      if(this.tablesList.length>0){
        this.tablesListValues.push(this.tablesList);
      }
      //  alert("2--->"+JSON.stringify( this.tablesListValues));
    },
      error => {
        alert('Dependency Table Not Available');
      })
      
  }
  columnDefs = [];
  rowData = [];

  searchResult() {

    this.searchCount = this.searchCount + 1;

    this.selectedFilterDataType
    this.filterItem = [];
    this.aggrigationItem = [];
    this.numericColumnViewer=[];
    for (let i = 0; i < this.selectedFilterField.length; i++) {
      console.log("column mapping--->" + this.selectedFilterDataType[i])
      this.filtermapping = { conditionColumn: this.selectedFilterField[i], conditionTable: this.selectedFilterTableName[i], operator: this.selectedFilterOperator[i], optValue: this.selectedFilterValue[i], columnDataType: this.selectedFilterDataType[i], columnType: this.columnType[i] };
      this.filterItem.push(this.filtermapping);
      // numericDataPercent
   
    }
    for (let i = 0; i < this.selectedAggrigateField.length; i++) {
      // alert(JSON.stringify(this.selectedAggrigateTableName))
      this.aggrigationsMapping = { aggrigationName: this.summerizedSelectedData[i], aggrigationColumn: this.selectedAggrigateField[i], aggrigationDataType: this.selectedAggrigateDataType[i], aggrigationTable: this.selectedAggrigateTableName[i], aggrigationColumnType: this.selectedAggrgateColumnType[i] };
      this.aggrigationItem.push(this.aggrigationsMapping);
    }
    for (let i = 0; i < this.selectedTable.length; i++) {
      // alert("table value test--->"+JSON.stringify(this.selectedTable[i]))
      if (this.selectedTable[i] == null) {
        this.tableSelectionFlag = 'N';
        // alert(JSON.stringify(this.selectedTable))
      }

    }

    console.log(JSON.stringify(this.multiSelectedItems))
    // alert(this.multiSelectedItems[0].length)

    for(let i=0; i<this.multiSelectedItems[0].length;i++){
      if(this.multiSelectedItems[0][i].columnDataType=="int"){
        // alert(this.selectedFilterField[i])
        let numericDataPercent={columnView:this.multiSelectedItems[0][i].itemName, columnIndex:i,columnName:this.multiSelectedItems[0][i].columnName}
        // alert(JSON.stringify(numericDataPercent))
        this.numericColumnViewer.push(numericDataPercent);
      }
    }

    this.queryLists = {
      tablesList: this.selectedTable,
      columnsList: this.multiSelectedItems,
      filterData: this.filterItem,
      aggrigationDatas: this.aggrigationItem,
      groupDatas: this.selectedGroupArray
    }
    // console.log("Before search data--->" + JSON.stringify(this.queryLists));
    // alert("Before search data--->" + JSON.stringify(this.queryLists))
    this.destroyDataTable("customTable");
    this.columnValidation = "Y";
    for (let i = 0; i < this.queryLists.columnsList.length; i++) {
      if (this.queryLists.columnsList[i].length == 0) {
        this.columnValidation = "N";
      }
    }

    this.columnDefs = [];
    this.rowData = [];
    this.columnDefss = [];
    // alert(JSON.stringify(this.queryLists))

    // if ((this.queryLists.tablesList.length == this.queryLists.columnsList.length && this.columnValidation == "Y" || this.aggrigationItem.length>0) && (this.aggrigationItem.length >= this.selectedGroupArray.length) && this.tableSelectionFlag == 'Y' && this.selectedTable.length > 0) {
    if ((this.queryLists.tablesList.length == this.queryLists.columnsList.length && this.columnValidation == "Y" || this.aggrigationItem.length > 0) && ((this.selectedGroupArray.length > 0 && this.aggrigationItem.length > 0) || (this.selectedGroupArray.length == 0)) && this.tableSelectionFlag == 'Y' && this.selectedTable.length > 0) {
      // this.ngxLoader.start();
      this.reportAnalyticalService.getSearchQuery(this.queryLists).subscribe(res => {
        // alert(JSON.stringify(res));
        // this.ngxLoader.stop();
        if(res.status !="0"){
        this.listColumeNames = res.columnName;
        this.columnValues = res.rowValue;
        this.originalData=JSON.parse(JSON.stringify(res.rowValue));
        this.originalHeader=JSON.parse(JSON.stringify(res.columnName));
        let groupIndex=0;
        for (let i = 0; i < res.columnName.length; i++) {
          if (res.columnDataType[i].includes('varchar') || res.columnDataType[i].includes('char')) {
            this.agFilterType = "agTextColumnFilter";
          } else if (res.columnDataType[i].includes('int')) {
            this.agFilterType = "agNumberColumnFilter";
          } else if (res.columnDataType[i].includes('date')) {
            this.agFilterType = "agDateColumnFilter";
          } else {
            this.agFilterType = "agTextColumnFilter";
          }
          filter: true
        // alert(JSON.stringify(this.allColumnList))
          if (this.aggrigationItem.length > 0  && this.aggrigationItem.length > i) {
            this.colDefMapping = { headerName: this.aggrigationItem[i].aggrigationName+"("+res.columnName[i]+")", field: res.columnName[i], width: $(window).width() / res.columnName.length, filter: this.agFilterType, sortable: true };
            this.columnDefss.push(this.colDefMapping);
          }else if((this.aggrigationItem.length+this.selectedGroupArray.length) > i){
            this.colDefMapping = { headerName:  this.selectedGroupViewArray[groupIndex], field: res.columnName[i], width: $(window).width() / res.columnName.length, filter: this.agFilterType, sortable: true };
            this.columnDefss.push(this.colDefMapping);
            ++groupIndex;
          } else {
            this.colDefMapping = { headerName: res.columnView[i], field: res.columnName[i], width: $(window).width() / res.columnName.length, filter: this.agFilterType, sortable: true };
            this.columnDefss.push(this.colDefMapping);
          }
        }
        this.columnDefs = this.columnDefss;
        this.rowData = res.rowValue;
        // alert(this.columnDefs.length)
      }else{
        alert("Error in getting data     : "+res.errorMessage);
      }
      },
      error => {
        alert("Getting error in serach");
        // this.ngxLoader.stop();
      })
    } else {
      // alert("In else condition");
      debugger;
      if (this.columnValidation == "N" || this.queryLists.tablesList.length != this.queryLists.columnsList.length && this.aggrigationItem.length > 0) {
        alert("Please select field you want to display");
      } else if (this.tableSelectionFlag == 'N') {
        alert("Please select perform on field")
      } else if (this.selectedTable.length == 0) {
        alert("Please select perform on field");
      } else if ((this.selectedGroupArray.length > 0 && this.aggrigationItem.length == 0)) {
        alert("Please select summarized field ")
      }

      // else if (this.aggrigationItem.length <= this.selectedGroupArray.length) {
      //   alert("Please select  "+(this.selectedGroupArray.length-this.aggrigationItem.length)+" more summarized field");
      // }
    }



    this.loadDataTable("customTable");
  }

  loadDataTable(tableClass) {
    //   setTimeout(function () {
    //     if ($.fn.dataTable.isDataTable($('.' + tableClass))) {
    //       this.destroyDataTable("customTable");
    //       $('.' + tableClass).DataTable({
    //         dom: 'Bfrtip',
    //         responsive: true,
    //         paging: true,
    //         "scrollY": "450px"
    //       });
    //     } else {
    //       $('.' + tableClass).DataTable({
    //         dom: 'Bfrtip',
    //         responsive: true,
    //         paging: true,
    //         "scrollY": "450px"
    //       });
    //     }
    //   }, 1000);
  }

  destroyDataTable(tableClass) {
    // if ($.fn.dataTable.isDataTable($('.' + tableClass))) {
    //   $('.' + tableClass).DataTable().destroy();
    // }
  }

  addRule() {
    this.rulesSize.push(1);
    this.whereCondition.length = this.whereCondition.length + 1;
    this.getOperator();
  }

  getOperator() {
    this.reportAnalyticalService.getOperator().subscribe(res => {
      this.operators = res;
    })
  }

  getFilterValue(event, index, masterFlag) {

    if (masterFlag == 'Y') {
      this.selectedFilterValue[index] = event;
    } else {
      this.selectedFilterValue[index] = event.target.value;
    }


  }

  getFilterFields(event, index, evnt) {
    // alert("1--->"+JSON.stringify(event))
    this.materVisible[index] = event.masterFlag;
    this.selectedFilterField[index] = event.columnName;
    this.selectedFilterDataType[index] = event.columnDataType;
    this.selectedFilterTableName[index] = event.tableName;
    this.columnType[index] = event.columnType;
    this.getMasterData(event.id, index);
  }
  getFilterOperator(event, index) {
    this.selectedFilterOperator[index] = event;
  }

  removeFilter(index) {
    this.rulesSize.pop();
    this.whereCondition.length = this.whereCondition.length - 1;
    this.whereCondition.splice(index, 1);
    // this.listTableColumnMapping.splice(index, 1);
    //this.operators.splice(index, 1);
    this.selectedFilterValue.splice(index, 1);
    this.masterVisibleData.splice(index, 1);
    this.materVisible.splice(index, 1);
    this.selectedFilterField.splice(index, 1);
    this.columnType.splice(index, 1);
    // addon 19/12/2019
    this.selectedFilterOperator.splice(index, 1);
  }

  Summarize() {
    this.summarizedSize.push(1);
    this.summarizedCondition.length = this.summarizedCondition.length + 1;
    this.getSummarized();
  }

  getSummarized() {
    this.reportAnalyticalService.getSummarized().subscribe(res => {
      this.summerizedQuery.push(res);
    })
  }

  getAggrigateValue(event, index) {
    // alert(event.summarizedName)
    this.summerizedSelectedData[index] = event.summarizedName;

    if(event.summarizedName=="Number of distinct values of"){
      this.summarizedValueCondition=false;
    }else{
      this.summarizedValueCondition=true
    }
  }

  getAggrigateColumn(event, index) {
    //  alert(index)
    //  alert("1--"+JSON.stringify(this.manageAggrigationField))
   debugger;
    if(event.columnDataType=="String"){
      
               if(this.summerizedSelectedData[index]=="Sum of" || this.summerizedSelectedData[index]=="Average of"){
                 alert("Not applicable "+this.summerizedSelectedData[index]+" operation on "+event.columnName);
                this.manageAggrigationField.splice(index, 1);
                this.manageAggrigationField[index]=null;
               }else{
                this.selectedAggrigateField[index] = event.columnName
                this.manageAggrigationField[index] = event
                this.selectedAggrigateDataType[index] = event.columnDataType
                this.selectedAggrigateTableName[index] = event.tableName
                this.selectedAggrgateColumnType[index] = event.columnType;
               }
    }else{
      this.selectedAggrigateField[index] = event.columnName
      this.selectedAggrigateDataType[index] = event.columnDataType
      this.selectedAggrigateTableName[index] = event.tableName
      this.selectedAggrgateColumnType[index] = event.columnType;
      this.manageAggrigationField[index] = event
    }

    
  }



  removeSummary(index) {
    this.summarizedCondition.splice(index, 1);
    this.summerizedQuery.splice(index, 1);
    // this.listTableColumnMapping.splice(index, 1); // commented by shamim on dated 10022020
    this.selectedAggrigateField.splice(index, 1);
    this.selectedAggrigateDataType.splice(index, 1);
    this.selectedAggrigateTableName.splice(index, 1);
    this.selectedAggrgateColumnType.splice(index, 1);
    this.summerizedSelectedData.splice(index, 1);
    this.summarizedSize.pop();
    // this.summarizedCondition.length = this.summarizedCondition.length - 1;
  }

  getMasterData(columnId, index) {
    //alert("get master data---->"+columnId);
    //alert("index--->"+index);
    // alert("column id--->"+columnId);
    this.reportAnalyticalService.getMasterData(columnId).subscribe(res => {
      // alert("master data--->"+res);
      this.listMasterColumn = [];
      for (let i = 0; i < res.length; i++) {
        this.masterColumnJson = { id: res[i].id, itemName: res[i].masterDetails, columnId: res[i].id, masterValue: res[i].masterValue };
        this.listMasterColumn.push(this.masterColumnJson)
        //this.listMasterColumn[index]=this.masterColumnJson;
      }
      // this.masterVisibleData.push(this.listMasterColumn);
      this.masterVisibleData[index] = this.listMasterColumn;
    })

  }

  onItemSelected(index) {
    this.multiSelectionFilter(index);
  }

  OnItemDeSelect(index) {
    this.multiSelectionFilter(index);
  }

  onSelectAllFilter(index) {
    this.multiSelectionFilter(index);
  }

  multiSelectionFilter(index) {
    this.inCommaSeparedValue = "";
    // alert(index)
    // alert(JSON.stringify(this.selectedMasterColumn))
    // console.log(this.selectedMasterColumn);
    // alert(JSON.stringify(this.selectedMasterColumn[index][0].masterValue))
    // alert(this.selectedMasterColumn[index].length)
    for (let i = 0; i < this.selectedMasterColumn[index].length; i++) {
      // this.inCommaSeparedValue += this.masterVisibleData[index][i].masterValue + " , ";
      this.inCommaSeparedValue += this.selectedMasterColumn[index][i].masterValue + " , ";
    }
    // alert(this.inCommaSeparedValue)
    this.selectedFilterValue[index] = this.inCommaSeparedValue.replace(/,\s*$/, "");
  }

  addGroupBy() {
    this.groupBySized.length = 1;
  }

  onGroupSelected() {
    for (let i = 0; i < this.selectedGroups.length; i++) {
      if (this.selectedGroups[i].columnType == "F") {
        this.selectedGroupArray[i] = this.selectedGroups[i].columnName;
      } else {
        this.selectedGroupArray[i] = this.selectedGroups[i].tableName + "." + this.selectedGroups[i].columnName;
      }
      // alert(JSON.stringify(this.selectedGroups))
      // alert(this.selectedGroups[i].itemName)
      // alert(this.selectedGroups[i].itemName.split("-")[1])
      this.selectedGroupViewArray[i]=this.selectedGroups[i].itemName.split("-")[1];
      // alert(JSON.stringify(this.selectedGroupViewArray));
    }
    //  alert(JSON.stringify(this.selectedGroupArray));
  }

  onGroupDeSelected() {
    this.selectedGroupArray = [];

    this.onGroupSelected()
  }
  onGroupAllSelected() {
    this.selectedGroupArray = [];
    this.onGroupSelected()
  }

  onGroupAllDeSelected() {
    this.selectedGroupArray = [];
    this.onGroupSelected()
  }


  onBtExport() {
    var params = {};
    this.gridApi.exportDataAsCsv(params);
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }

  removeGroup() {
    //alert("Group");
    this.groupBySized.length = this.groupBySized.length - 1;
    this.selectedGroups = [];
    this.selectedGroupArray = [];
  }

  customCheckValidation(event, index) {
    if (event == -1) {
      this.selectedTable[index] = null;
    }
    if(this.joinForms.length>index+1){
      this.joinForms.length=1;
this.multiSelectedItems=[];
this.rulesSize=[];
this.selectedFilterField=[];
this.summarizedSize=[];
this.selectedAggrigateField=[];
this.groupBySized=[];
this.selectedGroupArray=[];
this.whereCondition=[];
for(let i=this.selectedTable.length;i>0;i--){
  this.selectedTable.splice(i, 1);
}
for(let i=this.tablesListValues.length;i>0;i--){
  this.tablesListValues.splice(i, 1);
}

for(let i=this.listTableColumnMapping.length;i>0;i--){
  this.listTableColumnMapping.splice(i, 1);
}
    }

  

  }

  // perColumnName:String=null;
  totalValue:number=0;
  changePer(index,event){

this.totalValue=0;
    for(let i=0;i<this.columnValues.length;i++){
      for (var type in  this.columnValues[i]) {
       if(this.numericColumnViewer[index].columnName==type){
             this.totalValue +=+this.columnValues[i][type];
          }
    }
  }
  // alert(JSON.stringify(this.originalData))
  for(let i=0;i< this.rowData.length;i++){
    if(event==0){
    this.rowData[i][this.numericColumnViewer[index].columnName]=(+(this.columnValues[i][this.numericColumnViewer[index].columnName])*100)/ this.totalValue
    // this.gridApi.getColumnDef(this.columnDefs[index]["headerName"]).headerName = this.columnDefs[index]["headerName"]+"(in %)";
    this.gridApi.refreshCells() 
    // this.gridApi.refreshHeader();
    }else if(event==1){
      // alert("in event 1--"+this.columnValues[i][this.numericColumnViewer[index].columnName]);
      this.rowData[i][this.numericColumnViewer[index].columnName]=(this.originalData[i][this.numericColumnViewer[index].columnName])
      this.gridApi.refreshCells() 
      // this.gridApi.refreshHeader();
    }
  }
if(event==0){
  this.isChecked[index]="true";
}else{
  this.isChecked[index]="false";
}
  }
  
}
