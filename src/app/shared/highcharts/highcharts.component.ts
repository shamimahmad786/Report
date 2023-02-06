import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exportData from 'highcharts/modules/exporting';
import exportData from 'highcharts/modules/export-data';
import accessibility from 'highcharts/modules/accessibility'
HC_exportData(Highcharts);
exportData(Highcharts);
accessibility(Highcharts);
// require('highcharts/modules/exporting')(Highcharts);

@Component({
  selector: 'app-highcharts',
  templateUrl: './highcharts.component.html',
  styleUrls: ['./highcharts.component.css']
})
export class HighchartsComponent implements OnInit {

  //column drilldown
  managvscatDrilldownSerisData:any[]=[];
  managvscatSeriesData:any[]=[];
  managvscatDrilldownSerisArrayData:any[]=[];

//linechart
   yearList = [];
   noofSchool = [];
   cumulative_noofschool = [];
   highChartsRef:any;


  constructor() { }

  ngOnInit() {

    Highcharts.setOptions({
        lang: {
          thousandsSep: ""
        }
      });
      
  }


  highchart1(id,divId,rowData,title, location){
    // 
    this.stackAreaInverted("id97",rowData,"Number of Teachers by Gender and Classes Taught", location,id);
    
  }

  

  highchart(id,divId,rowData,title, location, type)
  {
    //   alert("in highchart"+"--"+id+"----"+divId+"---"+title+"----"+location+"---"+type)
    //   alert("rowData---"+JSON.stringify(rowData))
    if(id=='83' || id=='82' || id=='67' || id=='66' || id=='65' || id=='64' || id=='63' || id=='62' || id=='61' || id=='60' || id=='59' || id=='58' || id=='57' || id=='56' || id=='55' || id=='54' || id=='53' || id=='53' || id=='52' || id=='51' || id=='50' || id=='49'||id=='81' || id=='86' || id=='90' || id=='87' || id=='88' || id=='89' || id=='85' || id=='93' || id=='49' || id=='50' || id=='51' || id=='52' || id=='53' || id=='54' || id=='55' || id=='56' || id=='57' || id=='58' || id=='59' || id=='60' || id=='61' || id=='62' || id=='63' || id=='64' || id=='65' || id=='66' || id=='67' || id=='68' || id=='69' || id=='70' || id=='71' || id=='72' || id=='73' || id=='74' || id=='75' || id=='76' || id=='77' || id=='78' || id=='79' || id=='80')
    {
        if(location=="D"){
      this.columnDrilldown(divId,rowData,title, location);
        }else{
            this.columnDrilldown(divId,rowData,title, location);
      if(id=='83' || id=='82' || id=='85' || id=='86' || id=='90' || id=='87' || id=='88'  || id=='89' || id=='93'|| id=='49' || id=='50' || id=='51' || id=='52' || id=='53' || id=='54' || id=='55' || id=='56' || id=='57' || id=='58' || id=='59' || id=='60' || id=='61' || id=='62' || id=='63' || id=='64' || id=='65' || id=='66' || id=='67' || id=='68' || id=='69' || id=='70' || id=='71' || id=='72' || id=='73' || id=='74' || id=='75' || id=='76' || id=='77' || id=='78' || id=='79' || id=='80' ){
      this.pieChartPercentData("id2",rowData,"% Distribution Total", location,id)
      this.stackChartData("id3",rowData,"% Distribution Category Wise", location,id);
      }
    }
    }
    else if(id=='42' || id=='101')
    {
        // alert("in line chart")
      this.linechartFormat(divId,rowData,title, location, type)
    }else if(id=='43'){
     if(location=="D"){   
        this.stackChartData("id3",rowData,"Enrollment by Gender for Each Class & Level of Education", location,id);
     }else{
        this.stackChartData("id3",rowData,"Enrollment by Gender for Each Class & Level of Education", location,id);
     }
    }else if(id=='97'){
        // 
        if(location=="D"){   
            this.stackChartData("id2",rowData,"Number of Teachers by Gender and Classes Taught", location,id);
         }else{
            this.stackChartData("id3",rowData,"Number of Teachers by Gender and Classes Taught", location,id);
            
         }  
    }
    else if(id=='91' || id=='92')
    {
    if(location=="D"){
      this.multibarFormat(id,divId,rowData,title, location)
    }else{
        this.multibarFormat(id,divId,rowData,title, location)
       if(id=='91'){
        this.pieChartPercentData("id2",rowData,"% Distribution Total", location,id);
        this.stackChartData("id3",rowData,"% Distribution Category Wise", location,id);
      }else if(id=='92'){
        this.pieChartPercentData("id2",rowData,"% Distribution Type of School", location,id);
        this.stackChartData("id3",rowData,"% Distribution Type of school Category Wise", location,id);
      }
    }
  
  }  else if(id=='94')
    {
      this.bubbleFormat(divId,rowData,title, location)
    }
    else if(id=='37')
    {
      this.formatfor37(divId,rowData,title, location)
    }
  }
  
  formatfor37(divId,rowData,title, location)
  {
    var series = []
    var ruralSchool = 0
    var ruralStudent = 0
    var ruralTeacher = 0

    var urbanSchool = 0
    var urbanStudent = 0
    var urbanTeacher = 0

    var xAxisData = [
    'School','Student','Teacher'];
    for(var i=0;i<rowData.length;i++)
    {

        if(rowData[i].loc_name=='Rural')
        {
            if(rowData[i].no_of_school!=undefined)
            {
                ruralSchool = parseInt(rowData[i].no_of_school) + ruralSchool; 
            } 
             if(rowData[i].no_of_student!=undefined)
            {
                ruralStudent = parseInt(rowData[i].no_of_student) + ruralStudent;
            }
            
            if(rowData[i].no_of_teacher!=undefined)
            {
                ruralTeacher = parseInt(rowData[i].no_of_teacher) + ruralTeacher;
            }
            
         
           

            // if(rowData[i].no_of_teacher==undefined || rowData[i].no_of_teacher=='')
            // {
            //     console.log(rowData[i].no_of_teacher)
            // }
        }
        else if(rowData[i].loc_name=='Urban')
        {
            if(rowData[i].no_of_school!=undefined)
            {
                urbanSchool = parseInt(rowData[i].no_of_school) + urbanSchool;
            } 
            if(rowData[i].no_of_student!=undefined)
            {
                urbanStudent = parseInt(rowData[i].no_of_student) + urbanStudent;
            }
            if(rowData[i].no_of_teacher!=undefined)
            {
                urbanTeacher = parseInt(rowData[i].no_of_teacher) + urbanTeacher;
            }
        }
    }
    series.push({name:'Rural',data:[ruralSchool,ruralStudent,ruralTeacher]})
    series.push({name:'Urban',data:[urbanSchool,urbanStudent,urbanTeacher]})

    this.columnChart(divId,xAxisData,series,title, location)
  }

  linechartFormat(divId,rowData,title, location,type)
  {
    //   alert("In line chart 2")
    var data = [];
    // var a=0;
    for(var i=0;i<8;i++)
    {
      this.yearList.push(rowData[i].reference_year);
    }
    
    
    for (var i=0; i<rowData.length; i+=8) 
    {
        var primaryTotal = [];  
        var stateName = [];      
        stateName.push(rowData[i].state_name)

        for(var j=i; j<rowData.length; j++)
        {   
            if(rowData[j].state_name == stateName[0]){     
                if(type=="1"){
            primaryTotal.push(rowData[j].primary_total)
            }else if(type=="2"){
                primaryTotal.push(rowData[j].upper_primary)
            }else if(type=="3"){
                primaryTotal.push(rowData[j].secondary)                   

            }else if(type=="4"){
                primaryTotal.push(rowData[j].higher_secondary)
            }
            }
        }
    data.push({name:stateName, data:primaryTotal}) 
  }
//   console.log("final data----"+JSON.stringify(data))
  this.linechart(divId,this.yearList,data,title, location)
}

  multibarFormat(id,divId,rowData,title, location)
  {
    var series = []

    var xAxisData = [
       'PS (I-V)', 
       'UPS (I-VIII)',
       'HSS (VI-XII)',
       'SS (I-X)',
       'HSS (I-XII)',
       'HSS (IX-XII)',
       'SS (VI-X)',
       'UPS (VI-VIII)',
       'HSS (XI-XII)',
       'SS (IX-X)'];
    
    for(var i=0; i<rowData.length;i++)
    {
      if(id=='91')
      {
        series.push({name:rowData[i].loc_name,data:[]})
      }
      else if(id=='92')
      {
        series.push({name:rowData[i].school_type,data:[]})
      }

      series[i].data.push(rowData[i].cat1,rowData[i].cat2,rowData[i].cat3,rowData[i].cat4,rowData[i].cat5,rowData[i].cat6,
        rowData[i].cat7,rowData[i].cat8,rowData[i].cat10,rowData[i].cat11)
    }

    this.columnChart(divId,xAxisData,series,title, location)
    
  }

  bubbleFormat(divId,rowData,title, location)
  {
    var series = [{
      name:"Secondary",
      data:[]    
    },
    {
      name:"Higher Secondary",
      data:[]    
    }
    ]

    for(var i = 0; i<rowData.length; i++)
    {
    
      if(rowData[i].board_class=="Secondary")
      {
        series[0].data.push({name:rowData[i].loc_name,value:rowData[i].totalschool})
      }
      else if(rowData[i].board_class=="Higher Secondary")
      {
        series[1].data.push({name:rowData[i].loc_name,value:rowData[i].totalschool})
      }
    }

    this.bubbleChart(divId,series,title, location)
  }

  columnDrilldown(divId,rowData,title, location)
  {
    
    for(let i=0;i<rowData.length;i++){
      if(rowData[i].sch_mgmt_name==="Total" || rowData[i].item==="Toatl Minority"){
        // alert("match condition");
           this.getDataCatTotalData(divId,rowData[i],rowData,title, location);
      }
  }
  }

  pieChartPercentData(divId,rowData,title, location,id){
    var enableData;
    var collectionData:any[]=[];
    var disableData;
    if(id=='86' || id=='90' || id=='87' || id=='88' || id=='89' || id=='85' || id=='49' || id=='50' || id=='51' || id=='52' || id=='53' || id=='54' || id=='55' || id=='56' || id=='57' || id=='58' || id=='59' || id=='60' || id=='61' || id=='62' || id=='63' || id=='64' || id=='65' || id=='66' || id=='67' || id=='68' || id=='69' || id=='70' || id=='71' || id=='72' || id=='73' || id=='74' || id=='75' || id=='76' || id=='77' || id=='78' || id=='79' || id=='80'){
    for(let i=0;i<rowData.length;i++){ 
        if(rowData[i].sch_mgmt_name==="Total"){
            enableData =rowData[i].Total;
        }else if(rowData[i].sch_mgmt_id=="00"){
            disableData=rowData[i].Total;
        }
    }
    if(id=='86'){
    this.roundPieChart(divId,[{name:'Special School for CWSN',y:(+((+enableData)*100)/disableData),color:'green'},{name:'Other School',y:+(+(disableData-enableData)*100)/disableData,color:'#FF5833'}],title, location);
    }else if(id=='90'){
    this.roundPieChart(divId,[{name:'CCE',y:(+((+enableData)*100)/disableData),color:'green'},{name:'Non CCE',y:+(+(disableData-enableData)*100)/disableData,color:'#FF5833'}],title, location);
    }else if(id=='87'){
         this.roundPieChart(divId,[{name:'Shift School',y:(+((+enableData)*100)/disableData),color:'green'},{name:'Non Shift School',y:+(+(disableData-enableData)*100)/disableData,color:'#FF5833'}],title, location);
    }else if(id=='88'){
        this.roundPieChart(divId,[{name:'Boarding Facility',y:(+((+enableData)*100)/disableData),color:'green'},{name:'Boarding Facility not Available',y:+(+(disableData-enableData)*100)/disableData,color:'#FF5833'}],title, location);
    }else if(id=='89'){
        this.roundPieChart(divId,[{name:'Minority Managed schools',y:(+((+enableData)*100)/disableData),color:'green'},{name:'Non Minority Managed schools',y:+(+(disableData-enableData)*100)/disableData,color:'#FF5833'}],"% of School Managed by Minority", location);
    }else if(id=='85'){
        this.roundPieChart(divId,[{name:'Schools Approachable by All-Weather Roads',y:(+((+enableData)*100)/disableData),color:'green'},{name:'Non Schools Approachable by All-Weather Roads',y:+(+(disableData-enableData)*100)/disableData,color:'#FF5833'}],title, location);
    }   
    else if(id=='49'){
        this.roundPieChart(divId,[{name:'schools having Electricity Connection',y:(+((+enableData)*100)/disableData),color:'green'},{name:'Non schools having Electricity Connection',y:+(+(disableData-enableData)*100)/disableData,color:'#FF5833'}],title, location);
    }
    else if(id=='50'){
        this.roundPieChart(divId,[{name:'schools having Head Master Room',y:(+((+enableData)*100)/disableData),color:'green'},{name:'Non schools having Head Master Room',y:+(+(disableData-enableData)*100)/disableData,color:'#FF5833'}],title, location);  
    }
    else if(id=='51'){
        this.roundPieChart(divId,[{name:'Schools having Land',y:(+((+enableData)*100)/disableData),color:'green'},{name:'Non schools having Land',y:+(+(disableData-enableData)*100)/disableData,color:'#FF5833'}],title, location);
    }
    else if(id=='52'){
        this.roundPieChart(divId,[{name:'Schools having Solar Panel',y:(+((+enableData)*100)/disableData),color:'green'},{name:'Non schools having Solar Panel',y:+(+(disableData-enableData)*100)/disableData,color:'#FF5833'}],title, location);
    }
    else if(id=='53'){
        this.roundPieChart(divId,[{name:'Schools having Playground',y:(+((+enableData)*100)/disableData),color:'green'},{name:'Non schools having Playground',y:+(+(disableData-enableData)*100)/disableData,color:'#FF5833'}],title, location);
    }
    else if(id=='54'){
        this.roundPieChart(divId,[{name:'Schools having Library',y:(+((+enableData)*100)/disableData),color:'green'},{name:'Non schools having Library',y:+(+(disableData-enableData)*100)/disableData,color:'#FF5833'}],title, location);
    }
    else if(id=='55'){
        this.roundPieChart(divId,[{name:'Schools having Librarian',y:(+((+enableData)*100)/disableData),color:'green'},{name:'Non schools having Librarian',y:+(+(disableData-enableData)*100)/disableData,color:'#FF5833'}],title, location);
    }
    else if(id=='56'){
        this.roundPieChart(divId,[{name:'Schools having Newspaper',y:(+((+enableData)*100)/disableData),color:'green'},{name:'Non schools having Newspaper',y:+(+(disableData-enableData)*100)/disableData,color:'#FF5833'}],title, location);
    }
    else if(id=='57'){
        this.roundPieChart(divId,[{name:'Schools having Kitchen Garden',y:(+((+enableData)*100)/disableData),color:'green'},{name:'Non Schools having Kitchen Garden',y:+(+(disableData-enableData)*100)/disableData,color:'#FF5833'}],title, location);
    }
    else if(id=='58'){
        this.roundPieChart(divId,[{name:'Schools having Furniture',y:(+((+enableData)*100)/disableData),color:'green'},{name:'Non schools having Furniture',y:+(+(disableData-enableData)*100)/disableData,color:'#FF5833'}],title, location);
    }
    else if(id=='59'){
        this.roundPieChart(divId,[{name:'School having boy toilet',y:(+((+enableData)*100)/disableData),color:'green'},{name:'Non school having boy toilet',y:+(+(disableData-enableData)*100)/disableData,color:'#FF5833'}],title, location);
    }
    else if(id=='60'){
        this.roundPieChart(divId,[{name:'School having functional boy toilet',y:(+((+enableData)*100)/disableData),color:'green'},{name:'Non school having functional boy toilet',y:+(+(disableData-enableData)*100)/disableData,color:'#FF5833'}],title, location);
    }
    else if(id=='61'){
        this.roundPieChart(divId,[{name:'School having girl toilet',y:(+((+enableData)*100)/disableData),color:'green'},{name:'Non school having girl toilet',y:+(+(disableData-enableData)*100)/disableData,color:'#FF5833'}],title, location);
    }
    else if(id=='62'){
        this.roundPieChart(divId,[{name:'School having functional girl toilet',y:(+((+enableData)*100)/disableData),color:'green'},{name:'Non school having functional girl toilet',y:+(+(disableData-enableData)*100)/disableData,color:'#FF5833'}],title, location);
    }
    else if(id=='63'){
        this.roundPieChart(divId,[{name:'School having toilet facility',y:(+((+enableData)*100)/disableData),color:'green'},{name:'Non school having toilet facility',y:+(+(disableData-enableData)*100)/disableData,color:'#FF5833'}],title, location);
    }
    else if(id=='64'){
        this.roundPieChart(divId,[{name:'School having functional toilet facility',y:(+((+enableData)*100)/disableData),color:'green'},{name:'Non school having functional toilet facility',y:+(+(disableData-enableData)*100)/disableData,color:'#FF5833'}],title, location);
    }
    else if(id=='65'){
        this.roundPieChart(divId,[{name:'School having functional urinal boy',y:(+((+enableData)*100)/disableData),color:'green'},{name:'Non school having functional urinal boy',y:+(+(disableData-enableData)*100)/disableData,color:'#FF5833'}],title, location);
    }
    else if(id=='66'){
        this.roundPieChart(divId,[{name:'School having functional urinal girl',y:(+((+enableData)*100)/disableData),color:'green'},{name:'Non school having functional urinal girl',y:+(+(disableData-enableData)*100)/disableData,color:'#FF5833'}],title, location);
    } 
    else if(id=='67'){
        this.roundPieChart(divId,[{name:'School having functional urinal',y:(+((+enableData)*100)/disableData),color:'green'},{name:'Non School having functional urinal',y:+(+(disableData-enableData)*100)/disableData,color:'#FF5833'}],title, location);
    } 
    else if(id=='68'){
        this.roundPieChart(divId,[{name:'School having functional toilet urinal',y:(+((+enableData)*100)/disableData),color:'green'},{name:'Non school having functional toilet urinal',y:+(+(disableData-enableData)*100)/disableData,color:'#FF5833'}],title, location);
    } 
    else if(id=='69'){
        this.roundPieChart(divId,[{name:'School having Drinking water',y:(+((+enableData)*100)/disableData),color:'green'},{name:'Non school having Drinking water',y:+(+(disableData-enableData)*100)/disableData,color:'#FF5833'}],title, location);
    } 
    else if(id=='70'){
        this.roundPieChart(divId,[{name:'School having Water purifier',y:(+((+enableData)*100)/disableData),color:'green'},{name:'Non school having Water purifier',y:+(+(disableData-enableData)*100)/disableData,color:'#FF5833'}],title, location);
    } 
    else if(id=='71'){
        this.roundPieChart(divId,[{name:'School having Rain Water Harvesting Facility',y:(+((+enableData)*100)/disableData),color:'green'},{name:'Non school having Rain Water Harvesting Facility',y:+(+(disableData-enableData)*100)/disableData,color:'#FF5833'}],title, location);
    } 
    else if(id=='72'){
        this.roundPieChart(divId,[{name:'School having Water testing Facility',y:(+((+enableData)*100)/disableData),color:'green'},{name:'Non school having Water testing Facility',y:+(+(disableData-enableData)*100)/disableData,color:'#FF5833'}],title, location);
    } 
    else if(id=='73'){
        this.roundPieChart(divId,[{name:'School having Handwash',y:(+((+enableData)*100)/disableData),color:'green'},{name:'Non  school having Handwash',y:+(+(disableData-enableData)*100)/disableData,color:'#FF5833'}],title, location);
    } 
    else if(id=='74'){
        this.roundPieChart(divId,[{name:'School having Incinerator',y:(+((+enableData)*100)/disableData),color:'green'},{name:'Non school having Incinerator',y:+(+(disableData-enableData)*100)/disableData,color:'#FF5833'}],title, location);
    } 
    else if(id=='75'){
        this.roundPieChart(divId,[{name:'School having WASH facility',y:(+((+enableData)*100)/disableData),color:'green'},{name:'Non school having WASH facility',y:+(+(disableData-enableData)*100)/disableData,color:'#FF5833'}],title, location);
    } 
    else if(id=='76'){
        this.roundPieChart(divId,[{name:'School having Ramps',y:(+((+enableData)*100)/disableData),color:'green'},{name:'Non school having Ramps',y:+(+(disableData-enableData)*100)/disableData,color:'#FF5833'}],title, location);
    } 
    else if(id=='77'){
        this.roundPieChart(divId,[{name:'School having Medical Checkup',y:(+((+enableData)*100)/disableData),color:'green'},{name:'Non school having Medical Checkup',y:+(+(disableData-enableData)*100)/disableData,color:'#FF5833'}],title, location);
    } 
    else if(id=='78'){
        this.roundPieChart(divId,[{name:'School having complete Medical Checkup',y:(+((+enableData)*100)/disableData),color:'green'},{name:'Non school having complete Medical Checkup',y:+(+(disableData-enableData)*100)/disableData,color:'#FF5833'}],title, location);
    } 
    else if(id=='79'){
        this.roundPieChart(divId,[{name:'School having internet',y:(+((+enableData)*100)/disableData),color:'green'},{name:'Non school having internet',y:+(+(disableData-enableData)*100)/disableData,color:'#FF5833'}],title, location);
    } 
    else if(id=='80'){
        this.roundPieChart(divId,[{name:'School having computer available',y:(+((+enableData)*100)/disableData),color:'green'},{name:'Non school having computer available',y:+(+(disableData-enableData)*100)/disableData,color:'#FF5833'}],title, location);
    }  
    else if(id=='82'){
        // this.roundPieChart(divId,[{name:'School having computer available',y:(+((+enableData)*100)/disableData),color:'green'},{name:'Non school having computer available',y:+(+(disableData-enableData)*100)/disableData,color:'#FF5833'}],title, location);
    }  
}else if(id=='91'){
        for(let i=0;i<rowData.length;i++){
            if(rowData[i].loc_name==="Urban"){
                enableData =rowData[i].Total;
            }else if(rowData[i].loc_name=="Rural"){
                disableData=rowData[i].Total;
            }
        }
        this.roundPieChart(divId,[{name:'Urban',y:+enableData,color:'green'},{name:'Rural',y:disableData,color:'#FF5833'}],title, location);
      }else if(id=='92'){
          
        for(let i=0;i<rowData.length;i++){
            if(rowData[i].school_type==="Co-Ed"){
                collectionData[0]=rowData[i].Total;
            }else if(rowData[i].school_type=="Boys"){
                collectionData[1] =rowData[i].Total;
            }else if(rowData[i].school_type=="Girls"){
                collectionData[2] =rowData[i].Total;
            }
        }
        this.roundPieChart(divId,[{name:'Co-Ed',y:+collectionData[0],color:'green'},{name:'Boys',y:+collectionData[1],color:'#FF5833'},{name:'Girls',y:+collectionData[2],color:'blue'}],title, location);
      }  
}

  stackChartData(divId,rowData,title, location,id){
    var enableData;
    var disableData;
    var collectionData:any[]=[];
    if(id=='85' || id=='86' || id=='90' || id=='87' || id=='88' || id=='89' || id=='49' || id=='50' || id=='51' || id=='52' || id=='53' || id=='54' || id=='55' || id=='56' || id=='57' || id=='58' || id=='59' || id=='60' || id=='61' || id=='62' || id=='63' || id=='64' || id=='65' || id=='66' || id=='67' || id=='68' || id=='69' || id=='70' || id=='71' || id=='72' || id=='73' || id=='74' || id=='75' || id=='76' || id=='77' || id=='78' || id=='79' || id=='80'){
    for(let i=0;i<rowData.length;i++){
        if(rowData[i].sch_mgmt_name==="Total"){
            enableData =[rowData[i].cat1,rowData[i].cat2,rowData[i].cat3,rowData[i].cat4,rowData[i].cat5,rowData[i].cat6,rowData[i].cat7,rowData[i].cat8,rowData[i].cat10,rowData[i].cat11];
        }else if(rowData[i].sch_mgmt_id=="00"){
            disableData=[+(rowData[i].cat1)-(+enableData[0]),+(rowData[i].cat2)-(+enableData[1]),+(rowData[i].cat3)-(+enableData[2]),+(rowData[i].cat4)-(+enableData[3]),+(rowData[i].cat5)-(+enableData[4]),+(rowData[i].cat6)-(+enableData[5]),+(rowData[i].cat7)-(+enableData[6]),+(rowData[i].cat8)-(+enableData[7]),+(rowData[i].cat10)-(+enableData[8]),+(rowData[i].cat11)-(+enableData[9])];
        }
    }



    if(id=='86'){
    this.stackChart(divId,[{name:'Special School for CWSN',data:enableData,color:'green'},{name:'Other School',data:disableData,color:'#FF5833'}],title, location,id);
    }else if(id=='90'){
        this.stackChart(divId,[{name:'CCE',data:enableData,color:'green'},{name:'Non CCE',data:disableData,color:'#FF5833'}],title, location,id);
    }else if(id=='87'){
        this.stackChart(divId,[{name:'Shift School',data:enableData,color:'green'},{name:'Non Shift School',data:disableData,color:'#FF5833'}],title, location,id);
    }else if(id=='88'){
        this.stackChart(divId,[{name:'Boarding School',data:enableData,color:'green'},{name:'Boarding Facility not Available',data:disableData,color:'#FF5833'}],title, location,id);
    }else if(id=='89'){
        this.stackChart(divId,[{name:'Minority Managed schools',data:enableData,color:'green'},{name:'Non Minority Managed schools',data:disableData,color:'#FF5833'}],"% of School Managed by Minority by School Category", location,id);
    }else if(id=='85'){
        this.stackChart(divId,[{name:'Schools Approachable by All-Weather Roads',data:enableData,color:'green'},{name:'Non Schools Approachable by All-Weather Roads',data:disableData,color:'#FF5833'}],title, location,id);
    } else if(id=='49'){
        this.stackChart(divId,[{name:'schools having Electricity Connection',data:enableData,color:'green'},{name:'Non schools having Electricity Connection',data:disableData,color:'#FF5833'}],title, location,id);
    }
    else if(id=='50'){
        this.stackChart(divId,[{name:'schools having Head Master Room',data:enableData,color:'green'},{name:'Non schools having Head Master Room',data:disableData,color:'#FF5833'}],title, location,id);  
    }
    else if(id=='51'){
        this.stackChart(divId,[{name:'Schools having Land',data:enableData,color:'green'},{name:'Non schools having Land',data:disableData,color:'#FF5833'}],title, location,id);
    }
    else if(id=='52'){
        this.stackChart(divId,[{name:'Schools having Solar Panel',data:enableData,color:'green'},{name:'Non schools having Solar Panel',data:disableData,color:'#FF5833'}],title, location,id);
    }
    else if(id=='53'){
        this.stackChart(divId,[{name:'Schools having Playground',data:enableData,color:'green'},{name:'Non schools having Playground',data:disableData,color:'#FF5833'}],title, location,id);
    }
    else if(id=='54'){
        this.stackChart(divId,[{name:'Schools having Library',data:enableData,color:'green'},{name:'Non schools having Library',data:disableData,color:'#FF5833'}],title, location,id);
    }
    else if(id=='55'){
        this.stackChart(divId,[{name:'Schools having Librarian',data:enableData,color:'green'},{name:'Non schools having Librarian',data:disableData,color:'#FF5833'}],title, location,id);
    }
    else if(id=='56'){
        this.stackChart(divId,[{name:'Schools having Newspaper',data:enableData,color:'green'},{name:'Non schools having Newspaper',data:disableData,color:'#FF5833'}],title, location,id);
    }
    else if(id=='57'){
        this.stackChart(divId,[{name:'Schools having Kitchen Garden',data:enableData,color:'green'},{name:'Non Schools having Kitchen Garden',data:disableData,color:'#FF5833'}],title, location,id);
    }
    else if(id=='58'){
        this.stackChart(divId,[{name:'Schools having Furniture',data:enableData,color:'green'},{name:'Non schools having Furniture',data:disableData,color:'#FF5833'}],title, location,id);
    }
    else if(id=='59'){
        this.stackChart(divId,[{name:'School having boy toilet',data:enableData,color:'green'},{name:'Non school having boy toilet',data:disableData,color:'#FF5833'}],title, location,id);
    }
    else if(id=='60'){
        this.stackChart(divId,[{name:'School having functional boy toilet',data:enableData,color:'green'},{name:'Non school having functional boy toilet',data:disableData,color:'#FF5833'}],title, location,id);
    }
    else if(id=='61'){
        this.stackChart(divId,[{name:'School having girl toilet',data:enableData,color:'green'},{name:'Non school having girl toilet',data:disableData,color:'#FF5833'}],title, location,id);
    }
    else if(id=='62'){
        this.stackChart(divId,[{name:'School having functional girl toilet',data:enableData,color:'green'},{name:'Non school having functional girl toilet',data:disableData,color:'#FF5833'}],title, location,id);
    }
    else if(id=='63'){
        this.stackChart(divId,[{name:'School having toilet facility',data:enableData,color:'green'},{name:'Non school having toilet facility',data:disableData,color:'#FF5833'}],title, location,id);
    }
    else if(id=='64'){
        this.stackChart(divId,[{name:'School having functional toilet facility',data:enableData,color:'green'},{name:'Non school having functional toilet facility',data:disableData,color:'#FF5833'}],title, location,id);
    }
    else if(id=='65'){
        this.stackChart(divId,[{name:'School having functional urinal boy',data:enableData,color:'green'},{name:'Non school having functional urinal boy',data:disableData,color:'#FF5833'}],title, location,id);
    }
    else if(id=='66'){
        this.stackChart(divId,[{name:'School having functional urinal girl',data:enableData,color:'green'},{name:'Non school having functional urinal girl',data:disableData,color:'#FF5833'}],title, location,id);
    } 
    else if(id=='67'){
        this.stackChart(divId,[{name:'School having functional urinal',data:enableData,color:'green'},{name:'Non School having functional urinal',data:disableData,color:'#FF5833'}],title, location,id);
    } 
    else if(id=='68'){
        this.stackChart(divId,[{name:'School having functional toilet urinal',data:enableData,color:'green'},{name:'Non school having functional toilet urinal',data:disableData,color:'#FF5833'}],title, location,id);
    } 
    else if(id=='69'){
        this.stackChart(divId,[{name:'School having Drinking water',data:enableData,color:'green'},{name:'Non school having Drinking water',data:disableData,color:'#FF5833'}],title, location,id);
    } 
    else if(id=='70'){
        this.stackChart(divId,[{name:'School having Water purifier',data:enableData,color:'green'},{name:'Non school having Water purifier',data:disableData,color:'#FF5833'}],title, location,id);
    } 
    else if(id=='71'){
        this.stackChart(divId,[{name:'School having Rain Water Harvesting Facility',data:enableData,color:'green'},{name:'Non school having Rain Water Harvesting Facility',data:disableData,color:'#FF5833'}],title, location,id);
    } 
    else if(id=='72'){
        this.stackChart(divId,[{name:'School having Water testing Facility',data:enableData,color:'green'},{name:'Non school having Water testing Facility',data:disableData,color:'#FF5833'}],title, location,id);
    } 
    else if(id=='73'){
        this.stackChart(divId,[{name:'School having Handwash',data:enableData,color:'green'},{name:'Non  school having Handwash',data:disableData,color:'#FF5833'}],title, location,id);
    } 
    else if(id=='74'){
        this.stackChart(divId,[{name:'School having Incinerator',data:enableData,color:'green'},{name:'Non school having Incinerator',data:disableData,color:'#FF5833'}],title, location,id);
    } 
    else if(id=='75'){
        this.stackChart(divId,[{name:'School having WASH facility',data:enableData,color:'green'},{name:'Non school having WASH facility',data:disableData,color:'#FF5833'}],title, location,id);
    } 
    else if(id=='76'){
        this.stackChart(divId,[{name:'School having Ramps',data:enableData,color:'green'},{name:'Non school having Ramps',data:disableData,color:'#FF5833'}],title, location,id);
    } 
    else if(id=='77'){
        this.stackChart(divId,[{name:'School having Medical Checkup',data:enableData,color:'green'},{name:'Non school having Medical Checkup',data:disableData,color:'#FF5833'}],title, location,id);
    } 
    else if(id=='78'){
        this.stackChart(divId,[{name:'School having complete Medical Checkup',data:enableData,color:'green'},{name:'Non school having complete Medical Checkup',data:disableData,color:'#FF5833'}],title, location,id);
    } 
    else if(id=='79'){
        this.stackChart(divId,[{name:'School having internet',data:enableData,color:'green'},{name:'Non school having internet',data:disableData,color:'#FF5833'}],title, location,id);
    } 
    else if(id=='80'){
        this.stackChart(divId,[{name:'School having computer available',data:enableData,color:'green'},{name:'Non school having computer available',data:disableData,color:'#FF5833'}],title, location,id);
    }    
}else if(id=='91'){
        for(let i=0;i<rowData.length;i++){
            if(rowData[i].loc_name==="Urban"){
                enableData =[rowData[i].cat1,rowData[i].cat2,rowData[i].cat3,rowData[i].cat4,rowData[i].cat5,rowData[i].cat6,rowData[i].cat7,rowData[i].cat8,rowData[i].cat10,rowData[i].cat11];
            }else if(rowData[i].loc_name==="Rural"){
                disableData=[rowData[i].cat1,rowData[i].cat2,rowData[i].cat3,rowData[i].cat4,rowData[i].cat5,rowData[i].cat6,rowData[i].cat7,rowData[i].cat8,rowData[i].cat10,rowData[i].cat11];
            }
        }
        this.stackChart(divId,[{name:'Urban',data:enableData,color:'green'},{name:'Rural',data:disableData,color:'#FF5833'}],title, location,id);
    }else if(id=='92'){
        for(let i=0;i<rowData.length;i++){
            if(rowData[i].school_type==="Co-Ed"){
                collectionData[0] =[rowData[i].cat1,rowData[i].cat2,rowData[i].cat3,rowData[i].cat4,rowData[i].cat5,rowData[i].cat6,rowData[i].cat7,rowData[i].cat8,rowData[i].cat10,rowData[i].cat11];
            }else if(rowData[i].school_type==="Boys"){
                collectionData[1]=[rowData[i].cat1,rowData[i].cat2,rowData[i].cat3,rowData[i].cat4,rowData[i].cat5,rowData[i].cat6,rowData[i].cat7,rowData[i].cat8,rowData[i].cat10,rowData[i].cat11];
            }else if(rowData[i].school_type==="Girls"){
                collectionData[2]=[rowData[i].cat1,rowData[i].cat2,rowData[i].cat3,rowData[i].cat4,rowData[i].cat5,rowData[i].cat6,rowData[i].cat7,rowData[i].cat8,rowData[i].cat10,rowData[i].cat11];
            }
        }
        this.stackChart(divId,[{name:'Co-Ed',data:collectionData[0],color:'green'},{name:'Boys',data:collectionData[1],color:'#FF5833'},{name:'Girls',data:collectionData[2],color:'blue'}],title, location,id);
    }else if(id=='43'){
         enableData=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
        disableData=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
        // console.log(JSON.stringify(rowData))
        // alert(this.enableData[0])
        for(let i=0;i<rowData.length;i++){
            // console.log(rowData[i].c1_b==undefined?0:rowData[i].c1_b+"--------------------------"+enableData[1]);
            enableData=[(+(rowData[i].cpp_b)+(+enableData[0])),(+(rowData[i].c1_b==undefined?0:rowData[i].c1_b)+(+enableData[1])),(+(rowData[i].c2_b==undefined?0:rowData[i].c2_b)+(+enableData[2])),(+(rowData[i].c3_b==undefined?0:rowData[i].c3_b)+(+enableData[3])),(+(rowData[i].c4_b==undefined?0:rowData[i].c4_b)+(+enableData[4])),(+(rowData[i].c5_b==undefined?0:rowData[i].c5_b)+(+enableData[5])),(+(rowData[i].c6_b==undefined?0:rowData[i].c6_b)+(+enableData[6])),(+(rowData[i].c7_b==undefined?0:rowData[i].c7_b)+(+enableData[7])),(+(rowData[i].c8_b==undefined?0:rowData[i].c8_b)+(+enableData[8])),(+(rowData[i].c9_b==undefined?0:rowData[i].c9_b)+(+enableData[9])),(+(rowData[i].c10_b==undefined?0:rowData[i].c10_b)+(+enableData[10])),(+(rowData[i].c11_b==undefined?0:rowData[i].c11_b)+(+enableData[11])),(+(rowData[i].c12_b==undefined?0:rowData[i].c12_b)+(+enableData[12])),(+(rowData[i].primary_b==undefined?0:rowData[i].primary_b)+(+enableData[13])),(+(rowData[i].upper_primary_b==undefined?0:rowData[i].upper_primary_b)+(+enableData[14])),(+(rowData[i].secondary_b==undefined?0:rowData[i].secondary_b)+(+enableData[15])),(+(rowData[i].higher_secondary_b==undefined?0:rowData[i].higher_secondary_b)+(+enableData[16]))];
            disableData=[(+(rowData[i].cpp_g)+(+disableData[0])),(+(rowData[i].c1_g==undefined?0:rowData[i].c1_g)+(+disableData[1])),(+(rowData[i].c2_g==undefined?0:rowData[i].c2_g)+(+disableData[2])),(+(rowData[i].c3_g==undefined?0:rowData[i].c3_g)+(+disableData[3])),(+(rowData[i].c4_g==undefined?0:rowData[i].c4_g)+(+disableData[4])),(+(rowData[i].c5_g==undefined?0:rowData[i].c5_g)+(+disableData[5])),(+(rowData[i].c6_g==undefined?0:rowData[i].c6_g)+(+disableData[6])),(+(rowData[i].c7_g==undefined?0:rowData[i].c7_g)+(+disableData[7])),(+(rowData[i].c8_g==undefined?0:rowData[i].c8_g)+(+disableData[8])),(+(rowData[i].c9_g==undefined?0:rowData[i].c9_g)+(+disableData[9])),(+(rowData[i].c10_g==undefined?0:rowData[i].c10_g)+(+disableData[10])),(+(rowData[i].c11_g==undefined?0:rowData[i].c11_g)+(+disableData[11])),(+(rowData[i].c12_g==undefined?0:rowData[i].c12_g)+(+disableData[12])),(+(rowData[i].primary_g==undefined?0:rowData[i].primary_g)+(+disableData[13])),(+(rowData[i].upper_primary_g==undefined?0:rowData[i].upper_primary_g)+(+disableData[14])),(+(rowData[i].secondary_g==undefined?0:rowData[i].secondary_g)+(+disableData[15])),(+(rowData[i].higher_secondary_g==undefined?0:rowData[i].higher_secondary_g)+(+disableData[16]))];
        }
        // alert(enableData)
        this.stackChart(divId,[{name:'Boys',data:enableData,color:'green'},{name:'Girls',data:disableData,color:'#FF5833'}],title, location,id);
    }else if(id=='97'){
        enableData=[0,0,0,0,0,0,0,0,0,0,0,0];
        disableData=[0,0,0,0,0,0,0,0,0,0,0,0];
        for(let i=0;i<rowData.length;i++){
            // console.log(rowData[i].c1_b==undefined?0:rowData[i].c1_b+"--------------------------"+enableData[1]);
            enableData=[(+(rowData[i].preprimaryonlym)+(+enableData[0])),(+(rowData[i].preprimaryprimarym==undefined?0:rowData[i].preprimaryprimarym)+(+enableData[1])),(+(rowData[i].primaryonlym==undefined?0:rowData[i].primaryonlym)+(+enableData[2])),(+(rowData[i].primaryandupperprimarym==undefined?0:rowData[i].primaryandupperprimarym)+(+enableData[3])),(+(rowData[i].primaryandupperprimarym==undefined?0:rowData[i].primaryandupperprimarym)+(+enableData[4])),(+(rowData[i].upperprimaryonlym==undefined?0:rowData[i].upperprimaryonlym)+(+enableData[5])),(+(rowData[i].upperprimaryandsecondarym==undefined?0:rowData[i].upperprimaryandsecondarym)+(+enableData[6])),(+(rowData[i].upperprimaryandsecondarym==undefined?0:rowData[i].upperprimaryandsecondarym)+(+enableData[7])),(+(rowData[i].secondaryonlym==undefined?0:rowData[i].secondaryonlym)+(+enableData[8])),(+(rowData[i].secondaryandhighersecondarym==undefined?0:rowData[i].secondaryandhighersecondarym)+(+enableData[9])),(+(rowData[i].secondaryandhighersecondarym==undefined?0:rowData[i].secondaryandhighersecondarym)+(+enableData[10])),(+(rowData[i].highersecondaryonlym==undefined?0:rowData[i].highersecondaryonlym)+(+enableData[11]))];
            disableData=[(+(rowData[i].preprimaryonlyf)+(+disableData[0])),(+(rowData[i].preprimaryprimaryf==undefined?0:rowData[i].preprimaryprimaryf)+(+disableData[1])),(+(rowData[i].primaryonlyf==undefined?0:rowData[i].primaryonlyf)+(+disableData[2])),(+(rowData[i].primaryandupperprimaryf==undefined?0:rowData[i].primaryandupperprimaryf)+(+disableData[3])),(+(rowData[i].primaryandupperprimaryf==undefined?0:rowData[i].primaryandupperprimaryf)+(+disableData[4])),(+(rowData[i].upperprimaryonlyf==undefined?0:rowData[i].upperprimaryonlyf)+(+disableData[5])),(+(rowData[i].upperprimaryandsecondaryf==undefined?0:rowData[i].upperprimaryandsecondaryf)+(+disableData[6])),(+(rowData[i].upperprimaryandsecondaryf==undefined?0:rowData[i].upperprimaryandsecondaryf)+(+disableData[7])),(+(rowData[i].secondaryonlyf==undefined?0:rowData[i].secondaryonlyf)+(+disableData[8])),(+(rowData[i].secondaryandhighersecondaryf==undefined?0:rowData[i].secondaryandhighersecondaryf)+(+disableData[9])),(+(rowData[i].secondaryandhighersecondaryf==undefined?0:rowData[i].secondaryandhighersecondaryf)+(+disableData[10])),(+(rowData[i].highersecondaryonlyf==undefined?0:rowData[i].highersecondaryonlyf)+(+disableData[11]))];
        }
        this.stackChart(divId,[{name:'Male',data:enableData,color:'green'},{name:'Female',data:disableData,color:'#FF5833'}],title, location,id);
        // this.areaInverted(divId,[{name:'Male',data:enableData,color:'green'},{name:'Female',data:disableData,color:'#FF5833'}],title, location,id);
    }  
}

stackAreaInverted(divId,rowData,title, location,id){
// 
        var enableData=[0,0,0,0,0,0,0,0,0,0,0,0];
        var disableData=[0,0,0,0,0,0,0,0,0,0,0,0];
        for(let i=0;i<rowData.length;i++){
            // console.log(rowData[i].c1_b==undefined?0:rowData[i].c1_b+"--------------------------"+enableData[1]);
            enableData=[(+(rowData[i].preprimaryonlym)+(+enableData[0])),(+(rowData[i].preprimaryprimarym==undefined?0:rowData[i].preprimaryprimarym)+(+enableData[1])),(+(rowData[i].primaryonlym==undefined?0:rowData[i].primaryonlym)+(+enableData[2])),(+(rowData[i].primaryandupperprimarym==undefined?0:rowData[i].primaryandupperprimarym)+(+enableData[3])),(+(rowData[i].primaryandupperprimarym==undefined?0:rowData[i].primaryandupperprimarym)+(+enableData[4])),(+(rowData[i].upperprimaryonlym==undefined?0:rowData[i].upperprimaryonlym)+(+enableData[5])),(+(rowData[i].upperprimaryandsecondarym==undefined?0:rowData[i].upperprimaryandsecondarym)+(+enableData[6])),(+(rowData[i].upperprimaryandsecondarym==undefined?0:rowData[i].upperprimaryandsecondarym)+(+enableData[7])),(+(rowData[i].secondaryonlym==undefined?0:rowData[i].secondaryonlym)+(+enableData[8])),(+(rowData[i].secondaryandhighersecondarym==undefined?0:rowData[i].secondaryandhighersecondarym)+(+enableData[9])),(+(rowData[i].secondaryandhighersecondarym==undefined?0:rowData[i].secondaryandhighersecondarym)+(+enableData[10])),(+(rowData[i].highersecondaryonlym==undefined?0:rowData[i].highersecondaryonlym)+(+enableData[11]))];
            disableData=[(+(rowData[i].preprimaryonlyf)+(+disableData[0])),(+(rowData[i].preprimaryprimaryf==undefined?0:rowData[i].preprimaryprimaryf)+(+disableData[1])),(+(rowData[i].primaryonlyf==undefined?0:rowData[i].primaryonlyf)+(+disableData[2])),(+(rowData[i].primaryandupperprimaryf==undefined?0:rowData[i].primaryandupperprimaryf)+(+disableData[3])),(+(rowData[i].primaryandupperprimaryf==undefined?0:rowData[i].primaryandupperprimaryf)+(+disableData[4])),(+(rowData[i].upperprimaryonlyf==undefined?0:rowData[i].upperprimaryonlyf)+(+disableData[5])),(+(rowData[i].upperprimaryandsecondaryf==undefined?0:rowData[i].upperprimaryandsecondaryf)+(+disableData[6])),(+(rowData[i].upperprimaryandsecondaryf==undefined?0:rowData[i].upperprimaryandsecondaryf)+(+disableData[7])),(+(rowData[i].secondaryonlyf==undefined?0:rowData[i].secondaryonlyf)+(+disableData[8])),(+(rowData[i].secondaryandhighersecondaryf==undefined?0:rowData[i].secondaryandhighersecondaryf)+(+disableData[9])),(+(rowData[i].secondaryandhighersecondaryf==undefined?0:rowData[i].secondaryandhighersecondaryf)+(+disableData[10])),(+(rowData[i].highersecondaryonlyf==undefined?0:rowData[i].highersecondaryonlyf)+(+disableData[11]))];
        }
        // this.stackChart(divId,[{name:'Male',data:enableData,color:'green'},{name:'Female',data:disableData,color:'#FF5833'}],title, location,id);
        this.areaInverted(divId,[{name:'Male',data:enableData,color:'green'},{name:'Female',data:disableData,color:'#FF5833'}],title, location,id);
    
    
}

  getDataCatTotalData(id,data, rowData,title, location){
    // alert("called");
    
    for (let key in data) {
     // console.log ('key: ' +  key + ',  value: ' + data[key]);
    if(key =="cat1"){
    this.managvscatSeriesData[0]={"name":'PS (I-V)',"y":parseInt(data[key]),"drilldown":key}
    this.managvscatDrilldownSerisData[0]={"name":"PS (I-V)", "id":"cat1","data":this.managvscatDrilldownSerisArrayData[0]}
    }else if(key =="cat2"){
      this.managvscatSeriesData[1]={"name":'UPS (I-VIII)',"y":parseInt(data[key]),"drilldown":key}
      this.managvscatDrilldownSerisData[1]={"name":"UPS (I-VIII)", "id":"cat2","data":this.managvscatDrilldownSerisArrayData[1]}
    }else if(key =="cat3"){
      this.managvscatSeriesData[2]={"name":'HSS (VI-XII)',"y":parseInt(data[key]),"drilldown":key}
      this.managvscatDrilldownSerisData[2]={"name":"HSS (VI-XII)", "id":"cat3","data":this.managvscatDrilldownSerisArrayData[2]}
    }else if(key =="cat4"){
      this.managvscatSeriesData[3]={"name":'SS (I-X)',"y":parseInt(data[key]),"drilldown":key}
      this.managvscatDrilldownSerisData[3]={"name":"SS (I-X)", "id":"cat4","data":this.managvscatDrilldownSerisArrayData[3]}
    }else if(key =="cat5"){
      this.managvscatSeriesData[4]={"name":'HSS (I-XII)',"y":parseInt(data[key]),"drilldown":key}
      this.managvscatDrilldownSerisData[4]={"name":"HSS (I-XII)", "id":"cat5","data":this.managvscatDrilldownSerisArrayData[4]}
    }else if(key =="cat6"){
      this.managvscatSeriesData[5]={"name":'HSS (IX-XII)',"y":parseInt(data[key]),"drilldown":key}
      this.managvscatDrilldownSerisData[5]={"name":"HSS (IX-XII)", "id":"cat6","data":this.managvscatDrilldownSerisArrayData[5]}
    }else if(key =="cat7"){
      this.managvscatSeriesData[6]={"name":'SS (VI-X)',"y":parseInt(data[key]),"drilldown":key}
      this.managvscatDrilldownSerisData[6]={"name":"SS (VI-X)", "id":"cat7","data":this.managvscatDrilldownSerisArrayData[6]}
    }else if(key =="cat8"){
      // alert({"name":'UPS (VI-VIII)',"y":data[key],"drilldown":key});
      this.managvscatSeriesData[7]={"name":'UPS (VI-VIII)',"y":parseInt(data[key]),"drilldown":key}
      this.managvscatDrilldownSerisData[7]={"name":"UPS (VI-VIII)", "id":"cat8","data":this.managvscatDrilldownSerisArrayData[7]}
    }else if(key =="cat10"){
      this.managvscatSeriesData[8]={"name":'HSS (XI-XII)',"y":parseInt(data[key]),"drilldown":key}
      this.managvscatDrilldownSerisData[8]={"name":"HSS (XI-XII)", "id":"cat10","data":this.managvscatDrilldownSerisArrayData[8]}
    }else if(key =="cat11"){
      this.managvscatSeriesData[9]={"name":'SS (IX-X)',"y":parseInt(data[key]),"drilldown":key}
      this.managvscatDrilldownSerisData[9]={"name":"SS (IX-X)", "id":"cat11","data":this.managvscatDrilldownSerisArrayData[9]}
    }
    
    }
    // alert(JSON.stringify(this.managvscatSeriesData));
    
    // this.managvscatDrilldownSerisData
    var mArray=[],mArray1=[],mArray2=[],mArray3=[],mArray4=[],mArray5=[],mArray6=[],mArray7=[],mArray8=[],mArray9=[];
    for(let i=0; i<rowData.length-1;i++){
      if(rowData[i].sch_mgmt_name==undefined)
      {
        mArray[i]=[rowData[i].item,parseInt(rowData[i].cat1)]
        mArray1[i]=[rowData[i].item,parseInt(rowData[i].cat2)]
        mArray2[i]=[rowData[i].item,parseInt(rowData[i].cat3)]
        mArray3[i]=[rowData[i].item,parseInt(rowData[i].cat4)]
        mArray4[i]=[rowData[i].item,parseInt(rowData[i].cat5)]
        mArray5[i]=[rowData[i].item,parseInt(rowData[i].cat6)]
        mArray6[i]=[rowData[i].item,parseInt(rowData[i].cat7)]
        mArray7[i]=[rowData[i].item,parseInt(rowData[i].cat8)]
        mArray8[i]=[rowData[i].item,parseInt(rowData[i].cat10)]
        mArray9[i]=[rowData[i].item,parseInt(rowData[i].cat11)]
      }
      else
      {
        mArray[i]=[rowData[i].sch_mgmt_name,rowData[i].cat1]
        mArray1[i]=[rowData[i].sch_mgmt_name,rowData[i].cat2]
        mArray2[i]=[rowData[i].sch_mgmt_name,rowData[i].cat3]
        mArray3[i]=[rowData[i].sch_mgmt_name,rowData[i].cat4]
        mArray4[i]=[rowData[i].sch_mgmt_name,rowData[i].cat5]
        mArray5[i]=[rowData[i].sch_mgmt_name,rowData[i].cat6]
        mArray6[i]=[rowData[i].sch_mgmt_name,rowData[i].cat7]
        mArray7[i]=[rowData[i].sch_mgmt_name,rowData[i].cat8]
        mArray8[i]=[rowData[i].sch_mgmt_name,rowData[i].cat10]
        mArray9[i]=[rowData[i].sch_mgmt_name,rowData[i].cat11]
      }
    
    }
    
    
    this.managvscatDrilldownSerisData[0]["data"]=mArray;
    this.managvscatDrilldownSerisData[1]["data"]=mArray1;
    this.managvscatDrilldownSerisData[2]["data"]=mArray2;
    this.managvscatDrilldownSerisData[3]["data"]=mArray3;
    this.managvscatDrilldownSerisData[4]["data"]=mArray4;
    this.managvscatDrilldownSerisData[5]["data"]=mArray5;
    this.managvscatDrilldownSerisData[6]["data"]=mArray6;
    this.managvscatDrilldownSerisData[7]["data"]=mArray7;
    this.managvscatDrilldownSerisData[8]["data"]=mArray8;
    this.managvscatDrilldownSerisData[9]["data"]=mArray9;

    this.drilldownColumnChart(id,this.managvscatSeriesData,this.managvscatDrilldownSerisData,title, location);
   
    }

  piechart(id)
  {
    this.highChartsRef=Highcharts.chart(id, this.pieChart);
  }

  
  linechart(id,xAxisData,data,title, location)
  {
    //   alert("in line chart final")
    
    var lineChart: any = 
    { chart: {
        height:800,
    },
    // exporting: {
    //     showTable: true
    // },
      title: {
          text: " "
      },
  
      subtitle: {
          text: ''
      },
  
      yAxis: {
          title: {
              text: ''
          }
      },
  
      xAxis: {
          accessibility: {
              rangeDescription: 'Range: 2012 to 2020'
          },
          categories:xAxisData
      },
  
      legend: {
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'middle'
      },
  
      plotOptions: {
          series: {
              label: {
                  connectorAllowed: false
              },
              pointStart: 2012
          }
      },
  
      series: data,
  
      responsive: {
          rules: [{
              condition: {
                  maxWidth: 500
              },
              chartOptions: {
                  legend: {
                      layout: 'horizontal',
                      align: 'center',
                      verticalAlign: 'bottom'
                  }
              }
          }]
      }
  
  }

  this.highChartsRef=Highcharts.chart(id, lineChart);
  }

    public pieChart: any = 
    {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
    },
    title: {
      text: 'Browser market shares in January, 2018'
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
      point: {
        valueSuffix: '%'
      }
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.percentage:.1f} %'
        }
      }
    },
    series: [{
      name: 'Brands',
      colorByPoint: true,
      data: [{
        name: 'Chrome',
        y: 61.41,
        sliced: true,
        selected: true
      }, {
        name: 'Internet Explorer',
        y: 11.84
      }, {
        name: 'Firefox',
        y: 10.85
      }, {
        name: 'Edge',
        y: 4.67
      }, {
        name: 'Safari',
        y: 4.18
      }, {
        name: 'Sogou Explorer',
        y: 1.64
      }, {
        name: 'Opera',
        y: 1.6
      }, {
        name: 'QQ',
        y: 1.2
      }, {
        name: 'Other',
        y: 2.61
      }]
    }]
  }

  drilldownPieChart(id,data)
  {
    var drillDownPieChart: any =
    {
      chart: {
          type: 'pie'
      },
      title: {
          text: 'Browser market shares. January, 2018'
      },
      subtitle: {
          text: 'Click the slices to view versions. Source: <a href="http://statcounter.com" target="_blank">statcounter.com</a>'
      },
  
      accessibility: {
          announceNewData: {
              enabled: true
          },
          point: {
              valueSuffix: '%'
          }
      },
  
      plotOptions: {
          series: {
              dataLabels: {
                  enabled: true,
                  format: '{point.name}: {point.y:.1f}%'
              }
          }
      },
  
      tooltip: {
          headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
          pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
      },
  
      series: [
          {
              name: "Browsers",
              colorByPoint: true,
              data: [
                  {
                      name: "Chrome",
                      y: 62.74,
                      drilldown: "Chrome"
                  },
                  {
                      name: "Firefox",
                      y: 10.57,
                      drilldown: "Firefox"
                  },
                  {
                      name: "Internet Explorer",
                      y: 7.23,
                      drilldown: "Internet Explorer"
                  },
                  {
                      name: "Safari",
                      y: 5.58,
                      drilldown: "Safari"
                  },
                  {
                      name: "Edge",
                      y: 4.02,
                      drilldown: "Edge"
                  },
                  {
                      name: "Opera",
                      y: 1.92,
                      drilldown: "Opera"
                  },
                  {
                      name: "Other",
                      y: 7.62,
                      drilldown: null
                  }
              ]
          }
      ],
      drilldown: {
          series: [
              {
                  name: "Chrome",
                  id: "Chrome",
                  data: [
                      [
                          "v65.0",
                          0.1
                      ],
                      [
                          "v64.0",
                          1.3
                      ],
                      [
                          "v63.0",
                          53.02
                      ],
                      [
                          "v62.0",
                          1.4
                      ],
                      [
                          "v61.0",
                          0.88
                      ],
                      [
                          "v60.0",
                          0.56
                      ],
                      [
                          "v59.0",
                          0.45
                      ],
                      [
                          "v58.0",
                          0.49
                      ],
                      [
                          "v57.0",
                          0.32
                      ],
                      [
                          "v56.0",
                          0.29
                      ],
                      [
                          "v55.0",
                          0.79
                      ],
                      [
                          "v54.0",
                          0.18
                      ],
                      [
                          "v51.0",
                          0.13
                      ],
                      [
                          "v49.0",
                          2.16
                      ],
                      [
                          "v48.0",
                          0.13
                      ],
                      [
                          "v47.0",
                          0.11
                      ],
                      [
                          "v43.0",
                          0.17
                      ],
                      [
                          "v29.0",
                          0.26
                      ]
                  ]
              },
              {
                  name: "Firefox",
                  id: "Firefox",
                  data: [
                      [
                          "v58.0",
                          1.02
                      ],
                      [
                          "v57.0",
                          7.36
                      ],
                      [
                          "v56.0",
                          0.35
                      ],
                      [
                          "v55.0",
                          0.11
                      ],
                      [
                          "v54.0",
                          0.1
                      ],
                      [
                          "v52.0",
                          0.95
                      ],
                      [
                          "v51.0",
                          0.15
                      ],
                      [
                          "v50.0",
                          0.1
                      ],
                      [
                          "v48.0",
                          0.31
                      ],
                      [
                          "v47.0",
                          0.12
                      ]
                  ]
              },
              {
                  name: "Internet Explorer",
                  id: "Internet Explorer",
                  data: [
                      [
                          "v11.0",
                          6.2
                      ],
                      [
                          "v10.0",
                          0.29
                      ],
                      [
                          "v9.0",
                          0.27
                      ],
                      [
                          "v8.0",
                          0.47
                      ]
                  ]
              },
              {
                  name: "Safari",
                  id: "Safari",
                  data: [
                      [
                          "v11.0",
                          3.39
                      ],
                      [
                          "v10.1",
                          0.96
                      ],
                      [
                          "v10.0",
                          0.36
                      ],
                      [
                          "v9.1",
                          0.54
                      ],
                      [
                          "v9.0",
                          0.13
                      ],
                      [
                          "v5.1",
                          0.2
                      ]
                  ]
              },
              {
                  name: "Edge",
                  id: "Edge",
                  data: [
                      [
                          "v16",
                          2.6
                      ],
                      [
                          "v15",
                          0.92
                      ],
                      [
                          "v14",
                          0.4
                      ],
                      [
                          "v13",
                          0.1
                      ]
                  ]
              },
              {
                  name: "Opera",
                  id: "Opera",
                  data: [
                      [
                          "v50.0",
                          0.96
                      ],
                      [
                          "v49.0",
                          0.82
                      ],
                      [
                          "v12.1",
                          0.14
                      ]
                  ]
              }
          ]
      }
  
  }

  this.highChartsRef=Highcharts.chart(id, drillDownPieChart);

  }


drilldownColumnChart(id,xAxisData,data,title, location)
  {
    
      var DrilldownColumnChart: any =
      {
        chart: {
            type: 'column'
        },
        title: {
            text: title
        },
        subtitle: {
            text: ''
        },
        accessibility: {
            announceNewData: {
                enabled: true
            }
        },
        xAxis: {
            type: 'category'
        },
        yAxis: {
            title: {
                text: ''
            }

        },
        legend: {
            enabled: false
        },
        plotOptions: {
            series: {
                borderWidth: 0,
                dataLabels: {
                    enabled: true,
                    format: '{point.y}'
                }
            }
        },

        tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}</b>'
        },

        series: [
            {
                name: 'A  ',
                colorByPoint: true,
                data: xAxisData
            }
        ],
        drilldown: {
            series: data
        },
        exporting: {
            width: 600
        }
    }

        this.highChartsRef=DrilldownColumnChart;

    var highChartsRef=Highcharts.chart(id, DrilldownColumnChart);
    // highChartsRef.exportChart;
// alert("called")
    

    // Highcharts.exportCharts([highChartsRef], {
    //     type: 'application/pdf'
    //   });
}

multibarChart(id,xAxisData,data,title, location)
{
 
  var multibarchart: any =
{
    colors:['#f9a825','#1bbc9b'],
  chart: {
      type: 'bar',
  },
  title: {
      text: ''
  },
  subtitle: {
      text: ''
  },
  xAxis: {
      categories: xAxisData,
    //   tickInterval: 700000,
      title: {
          text: null
      },
    //   labels:{formatter: function() {
    //     return this.value / 1000000 + 'K';
    //   }}
      
  },
  yAxis: {
      min: 0,
      title: {
          text: '',
          align: 'high'
      },
      labels: {
        formatter: function() {
            return this.value / 1000000 + 'K';},
          
          overflow: 'justify',
          
      }
  },
  tooltip: {
      valueSuffix: ''
  },
  plotOptions: {
      bar: {
          dataLabels: {
              enabled: true
          },
      }
  },
  legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'top',
      x: -40,
      y: 200,
      floating: true,
      borderWidth: 1,
      backgroundColor:
          Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
      shadow: true
  },
  credits: {
      enabled: false
  },
  series: data

}
this.highChartsRef=multibarchart;
this.highChartsRef=Highcharts.chart(id, multibarchart);

}

columnChart(id,xAxisData,data,title, location)
{
  
  var columnchart: any =
  {
  chart: {
      type: 'column'
  },
  title: {
      text: title
  },
  subtitle: {
      text: ''
  },
  xAxis: {
      categories: xAxisData,
      crosshair: true
  },
  yAxis: {
      min: 0,
      title: {
          text: ''
      }
  },
  tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
          '<td style="padding:0"><b>{point.y:.1f} </b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true
  },
  plotOptions: {
      column: {
          pointPadding: 0.2,
          borderWidth: 0
      }
  },
  series: data
}
this.highChartsRef=columnchart;
this.highChartsRef=Highcharts.chart(id, columnchart);
}

bubbleChart(id,data,title, location)
{
  var bubblechart: any =
  {
    chart: {
        type: 'packedbubble',
        height: '50%'
    },
    title: {
        text: title
    },
    tooltip: {
        useHTML: true,
        pointFormat: '<b>{point.name}:</b> {point.value}'
    },
    plotOptions: {
        packedbubble: {
            minSize: '30%',
            maxSize: '170%',
            zMin: 0,
            zMax: 1000,
            layoutAlgorithm: {
                splitSeries: false,
                gravitationalConstant: 0.02
            },
            dataLabels: {
                enabled: true,
                format: '{point.name}',
                filter: {
                    property: 'y',
                    operator: '>',
                    value: 250
                },
                style: {
                    color: 'black',
                    textOutline: 'none',
                    fontWeight: 'normal'
                }
            }
        }
    },
    series: data


}
this.highChartsRef=bubblechart;
this.highChartsRef=Highcharts.chart(id,bubblechart)
}

roundPieChart(id,data,title, location)
{
    var roundpiechart: any =  {
    colors: ['#3f80e0','#4beb50','#fed061','#f8728b'],
    chart: {
        type: 'pie',
        // size:'500px',
        // width:450,
        options3d: {
            enabled: true,
            alpha: 0
        }
    },
    title: {
        text:""
    },
    credits:{
        enabled:false
    },
    subtitle: {
        text: ''
    },
    // tooltip: {
    //     pointFormat: '{series.name}: <b>{series.value:.1f}%</b>'
    // },
    plotOptions: {
        pie: {
            
            size:250,
            innerSize: 100,
            depth: 40,
            dataLabels: {
                distance: '-20%',
                color: '#00000',
                enabled: true,
                connectorWidth:20,
                connector:true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %',
            // connectorColor: 'silver',
            // connectorAllowed:false,
            style: {
                fontSize: '10px',
                textOutline: 0
            }
            },
            showInLegend: true
        }
    },
    series: [{
        name: title,
        data:data
    }]
}
// alert(JSON.stringify(roundpiechart))
this.highChartsRef=roundpiechart;
this.highChartsRef=Highcharts.chart(id,roundpiechart)
}

barChart(id,xAxisData,data,title, location)
{

  var multibarchart: any =
{
  chart: {
      type: 'bar'
  },
  title: {
      text: ''
  },
  
  subtitle: {
      text: ''
  },
  xAxis: {
      categories: xAxisData,
      title: {
          text: null
      }
  },
  yAxis: {
      min: 0,
    //   max:100,
      title: {
          text: '',
          align: 'high'
      },
      labels: {
          overflow: 'justify'
      }
  },
  tooltip: {
      valueSuffix: ''
  },
  plotOptions: {
      bar: {
          dataLabels: {
              enabled: true
          }
      },
  },

  credits: {
      enabled: false
  },
  series: data

}
this.highChartsRef=multibarchart;
Highcharts.chart(id, multibarchart);

}

stackedBarChart(id,xAxisData,data,title,location){

    var stackedBar: any = {
        colors:['#d9438b','#41c0d9'],
        chart: {
            type: 'column',
            // inverted: true
        },
        title: {
            text: ''
        },
        xAxis: {
            categories: xAxisData
        },
        yAxis: {
            min: 0,
            title: {
                text: ''
            }
        },
        credits: {
            enabled: false
        },
        tooltip: {
            pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
            shared: true
        },
        plotOptions: {
            column: {
                stacking: 'percent',
                dataLabels: {
                                    formatter: function () {
                                        return Math.round(100 * this.y / this.total) + '%';
                                    },
                                    enabled: true,
                                    color: 'black',
                                    style: {
                                        textOutline: 0
                                      },
                                },
                                
            },
            animation: {
                duration: 2200
            }
        },
        series: data
    

        
        // chart: {
        //     type: 'column',
        //     rotate: -90
        // },
        // title: {
        //     text: ''
        // },
        // xAxis: {
        //     categories: 
        // },
        // yAxis: {
        //     min: 0,
        //     title: {
        //         text: ''
        //     }
        // },
        // legend: {
        //     reversed: true
        // },
        // tooltip: {
        //         pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
        //         shared: true
        //     },
        // plotOptions: {
        //     series: {
        //         stacking: 'normal',                
        //             dataLabels: {
        //                 formatter: function () {
        //                     return Math.round(100 * this.y / this.total) + '%';
        //                 },
        //                 enabled: true
        //             },
        //     }
        // },
        // series: data,
    }
    this.highChartsRef=stackedBar;
    Highcharts.chart(id, stackedBar);    

}

stackChart(id,data,title, location, uniqueId){
    // alert(JSON.stringify(data))
    var xAxisData;
    if(uniqueId==43){
        xAxisData=[
            'Pre Primary','Class-I','Class-II','Class-III','Class-IV','Class-V','Class-VI','Class-VII','Class-VIII','Class-IX','Class-X','Class-XI','Class-XII','Primary','Upper Primary','Secondary','Higher Secondary'
        ]
    }else if(uniqueId==97){
        xAxisData=[
            'Pre-Primary Only','Pre-Primary & Primary','Primary Only','Primary & Upper Primary','Primary & Upper Primary','Upper Primary','Upper primary & Secondary','Upper primary & Secondary','Secondary only','Secondary & Higher Secondary','Secondary & Higher Secondary','Higher Secondary only'
        ]
    }else{
    xAxisData = [
        'PS (I-V)', 
        'UPS (I-VIII)',
        'HSS (VI-XII)',
        'SS (I-X)',
        'HSS (I-XII)',
        'HSS (IX-XII)',
        'SS (VI-X)',
        'UPS (VI-VIII)',
        'HSS (XI-XII)',
        'SS (IX-X)'];
    }
    // alert(JSON.stringify(data))
    var stackOption:any={
        chart: {
            type: 'column'
        },
        title: {
            text: title
        },
        xAxis: {
            categories:xAxisData 
        },
        yAxis: {
            min: 0,
            title: {
                text: ''
            }
        },
        tooltip: {
            pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
            shared: true
        },
        plotOptions: {
            column: {
                stacking: 'percent'
            }
        },
        series: data
    }
    // setTimeout(() => {
        Highcharts.chart(id,stackOption);
    //   }, 2000)
//    var chart1= 
    
//    Highcharts.exportCharts([chart1]);
}

areaInverted(id,data,title, location, uniqueId){
// 
    var xAxisData=[
        'Pre-Primary Only','Pre-Primary & Primary','Primary Only','Primary & Upper Primary','Primary & Upper Primary','Upper Primary','Upper primary & Secondary','Upper primary & Secondary','Secondary only','Secondary & Higher Secondary','Secondary & Higher Secondary','Higher Secondary only'
    ]

    var testing1:any ={
        chart: {
            type: 'area',
            inverted: true
        },
        title: {
            text: 'Average fruit consumption during one week'
        },
        accessibility: {
            keyboardNavigation: {
                seriesNavigation: {
                    mode: 'serialize'
                }
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: -150,
            y: 100,
            floating: true,
            borderWidth: 1,
            backgroundColor:
                Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF'
        },
        xAxis: {
            categories: xAxisData,
        },
        yAxis: {
            title: {
                text: title
            },
            allowDecimals: false,
            min: 0
        },
        plotOptions: {
            area: {
                fillOpacity: 0.5
            }
        },
        series: data,
    }
    // setTimeout(() => {
        Highcharts.chart(id,testing1);
    //   }, 5000)
   
}

downloadHighChart(){
//  alert("this.highChartsRef data----->"+this.highChartsRef)
    // console.log(JSON.stringify(this.highChartsRef))
    // alert("called download high charts");
    // Highcharts.charts[1].exportChart({
    //     type: 'application/pdf'
    // },this.highChartsRef);

    // Highcharts.charts[0].exportChart({
    //     type: 'application/pdf'
    // },this.highChartsRef);

    Highcharts.charts[Highcharts.charts.length-1].exportChart({
        type: 'application/pdf',
        width:600
    },this.highChartsRef);

    
    // Highcharts.exportCharts([this.highChartsRef], {
    //     type: 'application/pdf'
    // });
}
// $("#my-highcharts-container")
//   .highcharts()                                 // Fetches the Chart instance associated with this container.
//   .exportChartLocal({                           // All attributes are optionals (defaut type is "image/png").
//     type: Highcharts.exporting.MIME_TYPES.JPEG     // For your convenience, MIME_TYPES are stored in an object.
//   });


}







