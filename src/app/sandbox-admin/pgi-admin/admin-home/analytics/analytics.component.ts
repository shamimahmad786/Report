import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data-service.service';
import { KeysPipe } from 'src/app/pipes/safe-svg.pipe';


@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent implements OnInit {

  constructor(private dataService: DataService) { }

  tables: any = [];
  tableFields: any = {};
  scores: any = [];
  queryModel: any[] = [{
    tableId: "",
    tableField: "",
    operation: "",
    value: "",
    operator: ""
  }];
  masterQueryModel: any = {};
  masterTables: any = {};
  joinForms = [1];
  filtersModel: any = {};
  showFilters = true;
  operators = [
    "and", "or"
  ]
  operations = [
    { key: "equal", value: "equal", type: "S" },
    { key: "greater than", value: "greater", type: "I" },
    { key: "less than", value: "less", type: "I" },
    { key: "not equal", value: "notEqual", type: "S" },
    { key: "like", value: "like", type: "S" }
  ];
  joinResultSet;
  tableColumns: any = [];
  column: any = [];
  removeColumn: any = [];
  joinScores: any = {};
  columnWidth;


  ngOnInit() {
    this.singleTable();
  }

  singleTable() {
    this.getTables(0);
    this.masterQueryModel['qm1'] = [];
    this.addRuleRow(1);
  }

  getTables(tableId) {
    this.dataService.getAllTables(tableId).subscribe(res => {
      this.masterTables['tables1'] = res;
    })
  }

  getTableFields(i) {
    this.dataService.getTableFields(this.masterQueryModel['qm' + i][0].table.tableId).subscribe(res => {
      this.tableFields['table' + i] = [];
      this.tableFields['table' + i] = res;
      this.tableColumns = [];
      for (let l = 0; l < this.joinForms.length; l++) {
        console.log(this.tableFields['table' + (l + 1)]);
        if (this.tableFields.hasOwnProperty('table' + (l + 1))) {
          for (let j = 0; j < this.tableFields['table' + (l + 1)].length; j++) {
            this.tableColumns.push(this.tableFields['table' + (l + 1)][j].fieldName);
          }
        }
      }
    });
    if (this.joinForms.length > 1) {
      this.dataService.getJoinDetails(this.masterQueryModel['qm' + i][0].table.tableId).subscribe(joinRes => {
        console.log(joinRes);
        if (joinRes.length) {
          this.masterTables['tables' + (i + 1)] = [];
          for (let k = 0; k < joinRes.length; k++) {
            this.dataService.getAllTables(joinRes[k].joinTableId).subscribe(tableRes => {
              console.log(tableRes);
              if (tableRes.length) {
                tableRes[0].joinFieldName = joinRes[k].joinFieldName;
                this.masterTables['tables' + (i + 1)][k] = tableRes[0];
              }
              console.log(this.masterTables['tables' + (i + 1)]);
            });
          }
        }
      });

    }
  }

  getQueryResult() {

    let queryModelList: any = [];
    let indReqDto: any = {};

    console.log(this.masterQueryModel);

    for (let i = 1; i <= this.joinForms.length; i++) {

      for (let j = 0; j < this.masterQueryModel['qm' + i].length; j++) {
        let queryModel: any = {};
        queryModel.fieldName = this.masterQueryModel['qm' + i][j].tableField.fieldName;
        queryModel.fielType = this.masterQueryModel['qm' + i][j].tableField.fieldType;
        queryModel.className = this.masterQueryModel['qm' + i][0].table.className
        queryModel.filterName = this.masterQueryModel['qm' + i][j].operation;
        queryModel.fieldValue = this.masterQueryModel['qm' + i][j].value;

        if (this.masterQueryModel.hasOwnProperty('qm' + (i + 1))) {
          if (this.masterQueryModel['qm' + (i + 1)].length > 0) {
            queryModel.joinDetails = {};
            queryModel.joinDetails.joinTableClassName = this.masterQueryModel['qm' + (i + 1)][0].table.className;
            queryModel.joinDetails.joinFieldName = this.masterQueryModel['qm' + (i + 1)][0].table.joinFieldName;
          }
        }
        queryModelList.push(queryModel);
      }
    }
    // conditionMap[this.filter.operation] =  this.filter.value;
    // queryMap[this.filter.tableField] =  conditionMap;
    indReqDto.queryModel = queryModelList;
    if (this.joinForms.length > 1) {
      this.removeColumn = [];
      this.dataService.getJoinResultSet(indReqDto).subscribe(joinResultRes => {
        console.log(joinResultRes);
        // this.joinResultSet = JSON.stringify(joinResultRes, undefined, 4);
        this.joinScores = joinResultRes;

        for (let i = 0; i < queryModelList.length; i++) {
          if (queryModelList[i].hasOwnProperty('joinDetails')) {
            for (let j = 0; j < this.joinScores.length; j++) {
              if (this.joinScores[j].hasOwnProperty(queryModelList[i].joinDetails.joinFieldName)) {
                this.joinScores[j]['JoinProp' + i] = queryModelList[i].joinDetails.joinFieldName;
                this.removeColumn.push(this.joinScores[j]['JoinProp' + i]);
                this.removeColumn.push("JoinProp" + i);
                this.removeColumn.push("path");
              }
            }
          }
        }
      })
    }
    else {
      this.dataService.getResultSet(indReqDto).subscribe(res => {
        console.log(res);
        this.scores = res;
      },
        error => {
          this.scores = [];
        })
    }

  }

  addRuleRow(i) {
    alert("Add row--->"+i)
    this.masterQueryModel['qm' + i].push(
      {
        tableId: "",
        tableField: "",
        operation: "",
        value: "",
        operator: ""
      }
    )
  }

  addJoinForm() {
    this.scores = [];
    this.joinScores = [];
    let length = this.joinForms.length + 1;
    this.joinForms.push(length);
    this.masterQueryModel['qm' + length] = [];
    this.masterQueryModel['qm' + (length - 1)] = [];
    this.column = [];
    this.addRuleRow(length - 1);
    this.addRuleRow(length);
  }

  showColumns() {
    console.log(this.column);
    this.columnWidth = (100 / (this.column.length)) + '%';
  }

  showTab(event) {
    //alert("analitics")
    if (event.index == 1) {
      this.addJoinForm();
    }
    else {
      this.masterQueryModel = {};
      this.joinForms = [1];
      this.scores = [];
      this.joinScores = [];
      this.singleTable();
    }
  }

  removeRule(i) {
    this.masterQueryModel['qm' + i].pop();
  }
}


