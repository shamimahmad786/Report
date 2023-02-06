import { Component, OnInit } from '@angular/core';
import { ReportServiceService } from 'src/app/services/report-service.service';


@Component({
  selector: 'app-report-query',
  templateUrl: './report-query.component.html',
  styleUrls: ['./report-query.component.css'],
  
})
export class ReportQueryComponent implements OnInit {
  public listColumeNames: [];
  public columnValues: [];
  queryString:String;
  constructor(private reportService: ReportServiceService) { }
  //dtOptions: DataTables.Settings = {};
  public tableWidget: any;
  ngOnInit() {
  }

  executeQuery(){
    this.reportService.getExecutedData(this.queryString).subscribe(res => {

      this.listColumeNames=res.columnName;
      this.columnValues=res.rowValue;
      alert(JSON.stringify(res.rowValue));
      console.log(JSON.stringify(res.rowValue));
   
      let table = $('#queryData')
     //.DataTable();
  
     if ( $.fn.dataTable.isDataTable(table) ) {
      //  alert('in if condition')
      $( '#queryData' ).DataTable().destroy();
      let table = $( '#queryData' ).DataTable( {
          dom: 'Bfrtip',
          responsive: true,
          paging: true,
       //   buttons: [
        //         'copy', 'csv', 'excel', 'pdf', 'print'
//],
          "scrollY": "320px"
      } );
  } else {
   // alert('called');
    setTimeout (() => {
   // $( '#queryData' ).DataTable();
       let table = $( '#queryData' ).DataTable( {
           dom: 'Bfrtip',
           responsive: true,
           paging: true,
//buttons: [
//'copy', 'csv', 'excel', 'pdf', 'print'
         //  ],
           "scrollY": "320px"
       } );
   }, 200);

//alert('');
//$( '#queryData' ).DataTable();
    //   let table = $( '#queryData' ).DataTable( {
    //       dom: 'Bfrtip',
    //       responsive: true,
    //       paging: true,
    //  //     buttons: [
    //   //            'copy', 'csv', 'excel', 'pdf', 'print'
    //    //   ],
    //       "scrollY": "320px"
    //   } );
  }
    
     // alert('data come through--->'+JSON.stringify(res));
         // this.listReports=res;
          },
            error => { 
              alert('error--->');
        } )
  }


  saveReport(){
    alert('save query');
  }

}
