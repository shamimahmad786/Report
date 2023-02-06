import { Component, OnInit, ViewChild , ChangeDetectorRef} from '@angular/core';
import { DataService } from 'src/app/services/data-service.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface distData {
  // stateName:string;
  // stateId:Number;
  // districtName:string;
  // districtId:Number;
  columnId: Number;
  columnR1: string;
  columnR2: string;
}

export interface LoData{
  id:Number;
  sessionYear: string;
  stateName: string;
  stateCode: string;
  districtName: string;
  districtCode: string;
  distReportCard: string;
  avgLangScore3: string;
  avgMathScore3: string;
  avgLangScore5: string;
  avgMathScore5: string;
  avgLangScore8: string;
  avgMathScore8: string;
}

export interface finalDPGIData{
    stateName:string;
	  stateCode:string;
	  districtName:string;
	  distCode:string;
	  status:string;
    approveRemarks:string;
    points:number;
}

export interface finalDPGIData1{
  id:number,
  stateName:string;
  stateCode:string;
  districtName:string;
  distCode:string;
  status:string;
  approveRemarks:string;
  points:number;
}

@Component({
  selector: 'app-data-entryform',
  templateUrl: './data-entryform.component.html',
  styleUrls: ['./data-entryform.component.css']
})
export class DataEntryformComponent implements OnInit {

  showOverlay = false;
  dataModel: any = {};
  categories: any = [];
  domains: any = [];
  indicators: any = [];
  currentUser: any;
  cycles: any = [];
  indReqDto: any = {};
  years = [{ key: "2017-18", value: "2017" },
  { key: "2018-19", value: "2018" },
  { key: "2019-20", value: "2019" }
  ];
  districtQuestion:any;
  previewQuestion:any;
  loQuestion:any;
  dlQuestion:any;
  aQuestion:any;
  eQuestion:any;
  gpQuestion:any;
  ifQuestion:any;
loData:any;
dlData:any;
aData:any;
ifData:any;
eData:any;
gpData:any;
loCount:number=0;
dlCount:number=0;
aCount:number=0;
ifCount:number=0;
eCount:number=0;
gpCount:number=0;
tCount:number=0;
QuestionCount:number=0;
couuntData:any=[0,6];
pgiFinalStatus:finalDPGIData;
pgiFinalStatus1:finalDPGIData1;
totalPoints:number=0;
leftQuestios:any;
pgiFinalRespoonse:any;

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  // @ViewChild('firstTab', {static: false}) firstTab: ElementRef;
  displayedColumns: string[] = ['quesSeries', 'quesDesc', 'questionType',];
  districtQuestions = new MatTableDataSource<any>();

  constructor(private dataService: DataService, private ref: ChangeDetectorRef) { }

  ngOnInit() {
    this.currentUser = JSON.parse(sessionStorage.getItem("currentUser"));
// alert(this.currentUser.paramName);
    if (this.currentUser.paramName === 'DLU') {  
      // setTimeout(function () {
        // alert("set time out condition match")
        // this.saveStateIndScore();
        
        this.getAllQuestion();
        this.getDistrictQuestions(0);
        this.getDistrictQuestions(1);
        this.getDistrictQuestions(2);
        this.getDistrictQuestions(3);
        this.getDistrictQuestions(4);
        this.getDistrictQuestions(5);
        this.getFinalPGIStatus();
        // this.updateFlag();
        // this.getLOData(JSON.parse(sessionStorage.getItem('currentUser')).paramValue);
    //  }, 2000);
    }
  }

// updateFlag(){
//    setTimeout(function(){
//      alert("ready to click")
//       let el: HTMLElement = this.firstTab.nativeElement;
//     el.click();
//     },7000);
//   }

  getCycle() {
    this.dataService.getCycle(this.dataModel.year).subscribe(res => {
      this.cycles = res;
    })
  }

  getCategory() {
    this.dataService.getCategory().subscribe(res => {
      this.categories = res;
    })
  }

  getDomain() {
    this.dataService.getDomain(this.dataModel.category).subscribe(res => {
      this.domains = res;
    })
  }

  getIndicator() {
    this.dataService.getStateIndicators(this.dataModel.domain).subscribe(res => {
      this.indicators = res;
    })
  }

  getIndValue() {
    let indReqDto: any = {};
    this.dataModel.crntValue = "";
    indReqDto.year = parseInt(this.dataModel.year) - 1;
    indReqDto.stateId = this.currentUser.paramValue;
    indReqDto.indId = this.dataModel.indicator;
    this.dataService.getStateIndValue(indReqDto).subscribe((res: any) => {
      if (res) {
        this.dataModel.prevValue = res.calcRawValue;
        indReqDto.year = this.dataModel.year;
        this.dataService.getStateIndValue(indReqDto).subscribe((res: any) => {
          if (res) {
            this.dataModel.crntValue = res.calcRawValue;
          }
        })
      }
      else {
        this.dataModel.prevValue = "-";
      }
    })
  }

  saveStateIndScore() {
    // alert("called")
    let indReqDto: any = {};
    let stateIndicatorScore: any = {};
    stateIndicatorScore.stateId = this.currentUser.paramValue;
    stateIndicatorScore.domainId = this.dataModel.domain;
    stateIndicatorScore.indId = this.dataModel.indicator;
    stateIndicatorScore.cycleId = this.dataModel.cycle;
    stateIndicatorScore.year = this.dataModel.year;
    stateIndicatorScore.calcRawValue = this.dataModel.crntValue;
    stateIndicatorScore.createdBy = this.currentUser.username;
    stateIndicatorScore.modifiedBy = this.currentUser.username;
    indReqDto.stateIndicatorScore = stateIndicatorScore;
    this.dataService.SaveStateIndScore(indReqDto).subscribe(res => {

      console.log(res);

    })

  }


  tabSelection(index){
if(index==7){
  this.leftQuestios="";
  this.totalPoints=0;
  for(let i=0;i<this.previewQuestion.length;i++){
    if(this.previewQuestion[i].columnRPS !=null && this.previewQuestion[i].columnRPS !=""){
this.totalPoints =(+this.totalPoints)+(+this.previewQuestion[i].columnRPS);
    }else{
      this.leftQuestios +=this.previewQuestion[i].quesSeries+","
    }
  }
  
  this.totalPoints=Math.round(this.totalPoints * 100) / 100
  
  
}
  }


getAllQuestion(){
  this.dataService.getAllDistrictQuestion().subscribe(res => {
      this.previewQuestion=res;
      this.QuestionCount=res.length;
      // alert(this.QuestionCount);
})
}

  getDistrictQuestions(tabId) {
    

    
    this.dataService.getDistrictQuestion(tabId+1).subscribe(res => {
    //  this.districtQuestion=res;
    // alert(JSON.stringify(res));
      this.districtQuestions = new MatTableDataSource<any>(this.districtQuestion);
      if(tabId==0){
        this.loQuestion=res;
        this.getLOData(JSON.parse(sessionStorage.getItem('currentUser')).paramValue);
      }else if(tabId==1){
        this.dlQuestion=res;
        this.getDLData(JSON.parse(sessionStorage.getItem('currentUser')).paramValue);
      }else if(tabId==2){
        this.aQuestion=res;
        this.getAData(JSON.parse(sessionStorage.getItem('currentUser')).paramValue)
      }else if(tabId==3){
        this.ifQuestion=res;
        this.getIFData(JSON.parse(sessionStorage.getItem('currentUser')).paramValue)
      }else if(tabId==4){
        this.eQuestion=res;
        this.getEData(JSON.parse(sessionStorage.getItem('currentUser')).paramValue)
      }else if(tabId==5){
        this.gpQuestion=res;
        this.getGPData(JSON.parse(sessionStorage.getItem('currentUser')).paramValue)
      }


    })
  
  }

  onItemChange(value,index){
    this.districtQuestion[index].columnR1=value;
  }

  saveData(questionType){
    if(questionType=="LO"){
      if(this.loData.length>0){
    const Lo = {id:this.loData[0].id,sessionYear:'',stateName:JSON.parse(sessionStorage.getItem('currentUser')).stateName,stateCode:JSON.parse(sessionStorage.getItem('currentUser')).stateId,districtName:JSON.parse(sessionStorage.getItem('currentUser')).districtName,districtCode:JSON.parse(sessionStorage.getItem('currentUser')).paramValue,
    distReportCard:this.loQuestion[0].columnR1,
    distReportCardpercent:this.loQuestion[0].columnRPR,
    distReportCardpoint:this.loQuestion[0].columnRPS,
    avgLangScore3:this.loQuestion[1].columnR1,
    avgLangpercetScore3:this.loQuestion[1].columnRPR,
    avgLangpointsScore3:this.loQuestion[1].columnRPS,
    avgMathScore3:this.loQuestion[2].columnR1,
    avgMathpercentScore3:this.loQuestion[2].columnRPR,
    avgMathpointsScore3:this.loQuestion[2].columnRPS,
    avgLangScore5:this.loQuestion[3].columnR1,
    avgLangpercentScore5:this.loQuestion[3].columnRPR,
    avgLangpointsScore5:this.loQuestion[3].columnRPS,
    avgMathScore5:this.loQuestion[4].columnR1,
    avgMathpercentScore5:this.loQuestion[4].columnRPR,
    avgMathpointsScore5:this.loQuestion[4].columnRPS,
    avgLangScore8:this.loQuestion[5].columnR1,
    avgLangpercentScore8:this.loQuestion[5].columnRPR,
    avgLangpointsScore8:this.loQuestion[5].columnRPS,
    avgMathScore8:this.loQuestion[6].columnR1,
    avgMathpercentScore8:this.loQuestion[6].columnRPR,
    avgMathpointsScore8:this.loQuestion[6].columnRPS
  }
   if(this.callServiceToSaveData(Lo,"LO")){
    alert("update Successfully");
   }
      }else{
        const Lo = {sessionYear:'',
        stateName:JSON.parse(sessionStorage.getItem('currentUser')).stateName,stateCode:JSON.parse(sessionStorage.getItem('currentUser')).stateId,districtName:JSON.parse(sessionStorage.getItem('currentUser')).districtName,districtCode:JSON.parse(sessionStorage.getItem('currentUser')).paramValue,
        distReportCard:this.loQuestion[0].columnR1,
        distReportCardpercent:this.loQuestion[0].columnRPR,
        distReportCardpoint:this.loQuestion[0].columnRPS,
        avgLangScore3:this.loQuestion[1].columnR1,
        avgLangpercetScore3:this.loQuestion[1].columnRPR,
        avgLangpointsScore3:this.loQuestion[1].columnRPS,
        avgMathScore3:this.loQuestion[2].columnR1,
        avgMathpercentScore3:this.loQuestion[2].columnRPR,
        avgMathpointsScore3:this.loQuestion[2].columnRPS,
        avgLangScore5:this.loQuestion[3].columnR1,
        avgLangpercentScore5:this.loQuestion[3].columnRPR,
        avgLangpointsScore5:this.loQuestion[3].columnRPS,
        avgMathScore5:this.loQuestion[4].columnR1,
        avgMathpercentScore5:this.loQuestion[4].columnRPR,
        avgMathpointsScore5:this.loQuestion[4].columnRPS,
        avgLangScore8:this.loQuestion[5].columnR1,
        avgLangpercentScore8:this.loQuestion[5].columnRPR,
        avgLangpointsScore8:this.loQuestion[5].columnRPS,
        avgMathScore8:this.loQuestion[6].columnR1,
        avgMathpercentScore8:this.loQuestion[6].columnRPR,
        avgMathpointsScore8:this.loQuestion[6].columnRPS
      }
        if(this.callServiceToSaveData(Lo,"LO")){
        alert("save Successfully");
        }
      }
    }else if(questionType=="DL"){

if(this.dlData.length>0){
 const DL= {id:this.dlData[0].id,sessionYear:'',stateName:JSON.parse(sessionStorage.getItem('currentUser')).stateName,stateCode:JSON.parse(sessionStorage.getItem('currentUser')).stateId,districtName:JSON.parse(sessionStorage.getItem('currentUser')).districtName,
    districtCode:JSON.parse(sessionStorage.getItem('currentUser')).paramValue,
    icafacilityr1:this.dlQuestion[0].columnR1,
    icafacilityr2:this.dlQuestion[0].columnR2,
    icafacilityrpercentage:this.dlQuestion[0].columnRPR,
    icafacilityr2points:this.dlQuestion[0].columnRPS,
    internetAccessr1:this.dlQuestion[1].columnR1,
    internetAccessr2:this.dlQuestion[1].columnR2,
    internetAccessrpercentage:this.dlQuestion[1].columnRPR,
    internetAccessrpoints:this.dlQuestion[1].columnRPS,
    onlineClassesr1:this.dlQuestion[2].columnR1,
    onlineClassesr2:this.dlQuestion[2].columnR2,
    onlineClassesrpercentage:this.dlQuestion[2].columnRPR,
    onlineClassesrpoints:this.dlQuestion[2].columnRPS,
    onlineAttendancer1:this.dlQuestion[3].columnR1,
    onlineAttendancer2:this.dlQuestion[3].columnR2,
    onlineAttendancerpercentage:this.dlQuestion[3].columnRPR,
    onlineAttendancerpoints:this.dlQuestion[3].columnRPS,
    onlineCourcer1:this.dlQuestion[4].columnR1,
    onlineCourcer2:this.dlQuestion[4].columnR2,
    onlineCourcerpercentage:this.dlQuestion[4].columnRPR,
    onlineCourcerpoints:this.dlQuestion[4].columnRPS,
    usedSwamChanelr1:this.dlQuestion[5].columnR1,
    usedSwamChanelr2:this.dlQuestion[5].columnR2,
    usedSwamChanelrpercentage:this.dlQuestion[5].columnRPR,
    usedSwamChanelrpoints:this.dlQuestion[5].columnRPS,
    otherMediar1:this.dlQuestion[6].columnR1,
    otherMediar2:this.dlQuestion[6].columnR2,
    otherMediarpercentage:this.dlQuestion[6].columnRPR,
    otherMediarpoints:this.dlQuestion[6].columnRPS,
    tdititalcontentr1:this.dlQuestion[7].columnR1,
    tdititalcontentr2:this.dlQuestion[7].columnR2,
    tdititalcontentrpercentage:this.dlQuestion[7].columnRPR,
    tdititalcontentrpoints:this.dlQuestion[7].columnRPS,
    contentDeveloperr1:this.dlQuestion[8].columnR1,
    contentDeveloperr2:this.dlQuestion[8].columnR2,
    contentDeveloperrpercentage:this.dlQuestion[8].columnRPR,
    contentDeveloperrpoints:this.dlQuestion[8].columnRPS,
    digitalTeachr1:this.dlQuestion[9].columnR1,
    digitalTeachr2:this.dlQuestion[9].columnR2,
    digitalTeachrpercentage:this.dlQuestion[9].columnRPR,
    digitalTeachrpoints:this.dlQuestion[9].columnRPS,
 };
    console.log("digital Learning -->"+JSON.stringify(DL));
    if(this.callServiceToSaveData(DL,"DL")){
    alert("update Successfully");
    }
    }else{
      const DL= {sessionYear:'',stateName:JSON.parse(sessionStorage.getItem('currentUser')).stateName,stateCode:JSON.parse(sessionStorage.getItem('currentUser')).stateId,districtName:JSON.parse(sessionStorage.getItem('currentUser')).districtName,
      districtCode:JSON.parse(sessionStorage.getItem('currentUser')).paramValue,
      icafacilityr1:this.dlQuestion[0].columnR1,
      icafacilityr2:this.dlQuestion[0].columnR2,
      icafacilityrpercentage:this.dlQuestion[0].columnRPR,
      icafacilityr2points:this.dlQuestion[0].columnRPS,
      internetAccessr1:this.dlQuestion[1].columnR1,
      internetAccessr2:this.dlQuestion[1].columnR2,
      internetAccessrpercentage:this.dlQuestion[1].columnRPR,
      internetAccessrpoints:this.dlQuestion[1].columnRPS,
      onlineClassesr1:this.dlQuestion[2].columnR1,
      onlineClassesr2:this.dlQuestion[2].columnR2,
      onlineClassesrpercentage:this.dlQuestion[2].columnRPR,
      onlineClassesrpoints:this.dlQuestion[2].columnRPS,
      onlineAttendancer1:this.dlQuestion[3].columnR1,
      onlineAttendancer2:this.dlQuestion[3].columnR2,
      onlineAttendancerpercentage:this.dlQuestion[3].columnRPR,
      onlineAttendancerpoints:this.dlQuestion[3].columnRPS,
      onlineCourcer1:this.dlQuestion[4].columnR1,
      onlineCourcer2:this.dlQuestion[4].columnR2,
      onlineCourcerpercentage:this.dlQuestion[4].columnRPR,
      onlineCourcerpoints:this.dlQuestion[4].columnRPS,
      usedSwamChanelr1:this.dlQuestion[5].columnR1,
      usedSwamChanelr2:this.dlQuestion[5].columnR2,
      usedSwamChanelrpercentage:this.dlQuestion[5].columnRPR,
      usedSwamChanelrpoints:this.dlQuestion[5].columnRPS,
      otherMediar1:this.dlQuestion[6].columnR1,
      otherMediar2:this.dlQuestion[6].columnR2,
      otherMediarpercentage:this.dlQuestion[6].columnRPR,
      otherMediarpoints:this.dlQuestion[6].columnRPS,
      tdititalcontentr1:this.dlQuestion[7].columnR1,
      tdititalcontentr2:this.dlQuestion[7].columnR2,
      tdititalcontentrpercentage:this.dlQuestion[7].columnRPR,
      tdititalcontentrpoints:this.dlQuestion[7].columnRPS,
      contentDeveloperr1:this.dlQuestion[8].columnR1,
      contentDeveloperr2:this.dlQuestion[8].columnR2,
      contentDeveloperrpercentage:this.dlQuestion[8].columnRPR,
      contentDeveloperrpoints:this.dlQuestion[8].columnRPS,
      digitalTeachr1:this.dlQuestion[9].columnR1,
      digitalTeachr2:this.dlQuestion[9].columnR2,
      digitalTeachrpercentage:this.dlQuestion[9].columnRPR,
      digitalTeachrpoints:this.dlQuestion[9].columnRPS,
   };
      console.log("digital Learning -->"+JSON.stringify(DL));

      this.callServiceToSaveData(DL,"DL");
      alert("save Successfully");
    }
    }else if(questionType=="A"){
      if(this.aData.length>0){
       const A= {id:this.aData[0].id,sessionYear:'',stateName:JSON.parse(sessionStorage.getItem('currentUser')).stateName,stateCode:JSON.parse(sessionStorage.getItem('currentUser')).stateId,districtName:JSON.parse(sessionStorage.getItem('currentUser')).districtName,districtCode:JSON.parse(sessionStorage.getItem('currentUser')).paramValue,
       tratePtoupperprimaryr1:this.aQuestion[0].columnR1,
       tratePtoupperprimaryr2:this.aQuestion[0].columnR2,
       tratePtoupperprimaryrpercentage:this.aQuestion[0].columnRPR,
       tratePtoupperprimaryrpoints:this.aQuestion[0].columnRPS,
       trateUptosecondaryr1:this.aQuestion[1].columnR1,
       trateUptosecondaryr2:this.aQuestion[1].columnR2,
       trateUptosecondaryrpercentage:this.aQuestion[1].columnRPR,
       trateUptosecondaryrpoints:this.aQuestion[1].columnRPS,
       schoolIdentified:this.aQuestion[2].columnR1,
       schoolIdentifiedpercentage:this.aQuestion[2].columnRPR,
       schoolIdentifiedpoints:this.aQuestion[2].columnRPS,
       rrateElementryr1:this.aQuestion[3].columnR1,
       rrateElementryr2:this.aQuestion[3].columnR2,
       rrateElementryrpercentage:this.aQuestion[3].columnRPR,
       rrateElementryrpoints:this.aQuestion[3].columnRPS,
       rrateSecondaryr1:this.aQuestion[4].columnR1,
       rrateSecondaryr2:this.aQuestion[4].columnR2,
       rrateSecondaryrpercentage:this.aQuestion[4].columnRPR,
       rrateSecondaryrpoints:this.aQuestion[4].columnRPS,
       outofchildCountr1:this.aQuestion[5].columnR1,
       outofchildCountr2:this.aQuestion[5].columnR2,
       outofchildCountrpercentage:this.aQuestion[5].columnRPR,
       outofchildCountrpoints:this.aQuestion[5].columnRPS,
      }
       if(this.callServiceToSaveData(A,"A")){
       alert("update Successfully");
       }
      }else{
        const A= {sessionYear:'',stateName:JSON.parse(sessionStorage.getItem('currentUser')).stateName,stateCode:JSON.parse(sessionStorage.getItem('currentUser')).stateId,districtName:JSON.parse(sessionStorage.getItem('currentUser')).districtName,districtCode:JSON.parse(sessionStorage.getItem('currentUser')).paramValue,
        tratePtoupperprimaryr1:this.aQuestion[0].columnR1,
        tratePtoupperprimaryr2:this.aQuestion[0].columnR2,
        tratePtoupperprimaryrpercentage:this.aQuestion[0].columnRPR,
        tratePtoupperprimaryrpoints:this.aQuestion[0].columnRPS,
        trateUptosecondaryr1:this.aQuestion[1].columnR1,
        trateUptosecondaryr2:this.aQuestion[1].columnR2,
        trateUptosecondaryrpercentage:this.aQuestion[1].columnRPR,
        trateUptosecondaryrpoints:this.aQuestion[1].columnRPS,
        schoolIdentified:this.aQuestion[2].columnR1,
        schoolIdentifiedpercentage:this.aQuestion[2].columnRPR,
        schoolIdentifiedpoints:this.aQuestion[2].columnRPS,
        rrateElementryr1:this.aQuestion[3].columnR1,
        rrateElementryr2:this.aQuestion[3].columnR2,
        rrateElementryrpercentage:this.aQuestion[3].columnRPR,
        rrateElementryrpoints:this.aQuestion[3].columnRPS,
        rrateSecondaryr1:this.aQuestion[4].columnR1,
        rrateSecondaryr2:this.aQuestion[4].columnR2,
        rrateSecondaryrpercentage:this.aQuestion[4].columnRPR,
        rrateSecondaryrpoints:this.aQuestion[4].columnRPS,
        outofchildCountr1:this.aQuestion[5].columnR1,
        outofchildCountr2:this.aQuestion[5].columnR2,
        outofchildCountrpercentage:this.aQuestion[5].columnRPR,
        outofchildCountrpoints:this.aQuestion[5].columnRPS,
       }
      this.callServiceToSaveData(A,"A");
        alert("save Successfully");
        }


    }else if(questionType=="IF"){

      if(this.ifData.length>0){
       const ifs= {id:this.eData[0].id,sessionYear:'',stateName:JSON.parse(sessionStorage.getItem('currentUser')).stateName,stateCode:JSON.parse(sessionStorage.getItem('currentUser')).stateId,districtName:JSON.parse(sessionStorage.getItem('currentUser')).districtName,districtCode:JSON.parse(sessionStorage.getItem('currentUser')).paramValue,
       uploadDatar1:this.ifQuestion[0].columnR1,
       uploadDatar2:this.ifQuestion[0].columnR2,
       uploadDatarpercent:this.ifQuestion[0].columnRPR,
       uploadDatarpoint:this.ifQuestion[0].columnRPS,
       defenceTrainingr1:this.ifQuestion[1].columnR1,
       defenceTrainingr2:this.ifQuestion[1].columnR2,
       defenceTrainingrpercent:this.ifQuestion[1].columnRPR,
       defenceTrainingrpoint:this.ifQuestion[1].columnRPS,
       funcTrainingr1:this.ifQuestion[2].columnR1,
       funcTrainingr2:this.ifQuestion[2].columnR2,
       funcTrainingrpercent:this.ifQuestion[2].columnRPR,
       funcTrainingrpoint:this.ifQuestion[2].columnRPS,
       funcDrinkingwaterr1:this.ifQuestion[3].columnR1,
       funcDrinkingwaterr2:this.ifQuestion[3].columnR2,
       funcDrinkingwaterpercent:this.ifQuestion[3].columnRPR,
       funcDrinkingwaterpoint:this.ifQuestion[3].columnRPS,
       funcElectricityr1:this.ifQuestion[4].columnR1,
       funcElectricityr2:this.ifQuestion[4].columnR2,
       funcElectricityrpercent:this.ifQuestion[4].columnRPR,
       funcElectricityrpoint:this.ifQuestion[4].columnRPS,
       funcGirltoiletr1:this.ifQuestion[5].columnR1,
       funcGirltoiletr2:this.ifQuestion[5].columnR2,
       funcGirltoiletpercent:this.ifQuestion[5].columnRPR,
       funcGirltoiletpoint:this.ifQuestion[5].columnRPS,
       funcBoytoiletr1:this.ifQuestion[6].columnR1,
       funcBoytoiletr2:this.ifQuestion[6].columnR2,
       funcBoytoiletpercent:this.ifQuestion[6].columnRPR,
       funcBoytoiletpoint:this.ifQuestion[6].columnRPS,
       freeTextbookr1:this.ifQuestion[7].columnR1,
       freeTextbookr2:this.ifQuestion[7].columnR2,
       freeTextbookpercent:this.ifQuestion[7].columnRPR,
       freeTextbookpoint:this.ifQuestion[7].columnRPS,
       elementaryUniformr1:this.ifQuestion[8].columnR1,
       elementaryUniformr2:this.ifQuestion[8].columnR2,
       elementaryUniformpercent:this.ifQuestion[8].columnRPR,
       elementaryUniformpoint:this.ifQuestion[8].columnRPS,
       kitchenGardenr1:this.ifQuestion[9].columnR1,
       kitchenGardenr2:this.ifQuestion[9].columnR2,
       kitchenGardenpercent:this.ifQuestion[9].columnRPR,
       kitchenGardenpoint:this.ifQuestion[9].columnRPS
      }
       if(this.callServiceToSaveData(ifs,"IF")){
       alert("Update Successfully");
       }
      }else{
        const ifs= {sessionYear:'',stateName:JSON.parse(sessionStorage.getItem('currentUser')).stateName,stateCode:JSON.parse(sessionStorage.getItem('currentUser')).stateId,districtName:JSON.parse(sessionStorage.getItem('currentUser')).districtName,districtCode:JSON.parse(sessionStorage.getItem('currentUser')).paramValue,
        uploadDatar1:this.ifQuestion[0].columnR1,
        uploadDatar2:this.ifQuestion[0].columnR2,
        uploadDatarpercent:this.ifQuestion[0].columnRPR,
        uploadDatarpoint:this.ifQuestion[0].columnRPS,
        defenceTrainingr1:this.ifQuestion[1].columnR1,
        defenceTrainingr2:this.ifQuestion[1].columnR2,
        defenceTrainingrpercent:this.ifQuestion[1].columnRPR,
        defenceTrainingrpoint:this.ifQuestion[1].columnRPS,
        funcTrainingr1:this.ifQuestion[2].columnR1,
        funcTrainingr2:this.ifQuestion[2].columnR2,
        funcTrainingrpercent:this.ifQuestion[2].columnRPR,
        funcTrainingrpoint:this.ifQuestion[2].columnRPS,
        funcDrinkingwaterr1:this.ifQuestion[3].columnR1,
        funcDrinkingwaterr2:this.ifQuestion[3].columnR2,
        funcDrinkingwaterpercent:this.ifQuestion[3].columnRPR,
        funcDrinkingwaterpoint:this.ifQuestion[3].columnRPS,
        funcElectricityr1:this.ifQuestion[4].columnR1,
        funcElectricityr2:this.ifQuestion[4].columnR2,
        funcElectricityrpercent:this.ifQuestion[4].columnRPR,
        funcElectricityrpoint:this.ifQuestion[4].columnRPS,
        funcGirltoiletr1:this.ifQuestion[5].columnR1,
        funcGirltoiletr2:this.ifQuestion[5].columnR2,
        funcGirltoiletpercent:this.ifQuestion[5].columnRPR,
        funcGirltoiletpoint:this.ifQuestion[5].columnRPS,
        funcBoytoiletr1:this.ifQuestion[6].columnR1,
        funcBoytoiletr2:this.ifQuestion[6].columnR2,
        funcBoytoiletpercent:this.ifQuestion[6].columnRPR,
        funcBoytoiletpoint:this.ifQuestion[6].columnRPS,
        freeTextbookr1:this.ifQuestion[7].columnR1,
        freeTextbookr2:this.ifQuestion[7].columnR2,
        freeTextbookpercent:this.ifQuestion[7].columnRPR,
        freeTextbookpoint:this.ifQuestion[7].columnRPS,
        elementaryUniformr1:this.ifQuestion[8].columnR1,
        elementaryUniformr2:this.ifQuestion[8].columnR2,
        elementaryUniformpercent:this.ifQuestion[8].columnRPR,
        elementaryUniformpoint:this.ifQuestion[8].columnRPS,
        kitchenGardenr1:this.ifQuestion[9].columnR1,
        kitchenGardenr2:this.ifQuestion[9].columnR2,
        kitchenGardenpercent:this.ifQuestion[9].columnRPR,
        kitchenGardenpoint:this.ifQuestion[9].columnRPS
       }
        this.callServiceToSaveData(ifs,"IF");
        alert("Save Successfully");
      }

      
    }else if(questionType=="E"){
      if(this.eData.length>0){
     const e= {id:this.eData[0].id,sessionYear:'',stateName:JSON.parse(sessionStorage.getItem('currentUser')).stateName,stateCode:JSON.parse(sessionStorage.getItem('currentUser')).stateId,districtName:JSON.parse(sessionStorage.getItem('currentUser')).districtName,districtCode:JSON.parse(sessionStorage.getItem('currentUser')).paramValue,
     aidsAppliancesr1:this.eQuestion[0].columnR1,
     aidsAppliancesr2:this.eQuestion[0].columnR2,
     aidsAppliancespercent:this.eQuestion[0].columnRPR,
     aidsAppliancespoint:this.eQuestion[0].columnRPS,
     girlBicycler1:this.eQuestion[1].columnR1,
     girlBicycler2:this.eQuestion[1].columnR2,
     girlBicyclepercent:this.eQuestion[1].columnRPR,
     girlBicyclepoint:this.eQuestion[1].columnRPS,
     femaleLiteracyr1:this.eQuestion[2].columnR1,
     femaleLiteracyr2:this.eQuestion[2].columnR2,
     femaleLiteracypercent:this.eQuestion[2].columnRPR,
     femaleLiteracypoint:this.eQuestion[2].columnRPS
    }
     if(this.callServiceToSaveData(e,"E")){
     alert("Update Successfully");
     }
      }else{
        const e= {sessionYear:'',stateName:JSON.parse(sessionStorage.getItem('currentUser')).stateName,stateCode:JSON.parse(sessionStorage.getItem('currentUser')).stateId,districtName:JSON.parse(sessionStorage.getItem('currentUser')).districtName,districtCode:JSON.parse(sessionStorage.getItem('currentUser')).paramValue,
        aidsAppliancesr1:this.eQuestion[0].columnR1,
        aidsAppliancesr2:this.eQuestion[0].columnR2,
        aidsAppliancespercent:this.eQuestion[0].columnRPR,
        aidsAppliancespoint:this.eQuestion[0].columnRPS,
        girlBicycler1:this.eQuestion[1].columnR1,
        girlBicycler2:this.eQuestion[1].columnR2,
        girlBicyclepercent:this.eQuestion[1].columnRPR,
        girlBicyclepoint:this.eQuestion[1].columnRPS,
        femaleLiteracyr1:this.eQuestion[2].columnR1,
        femaleLiteracyr2:this.eQuestion[2].columnR2,
        femaleLiteracypercent:this.eQuestion[2].columnRPR,
        femaleLiteracypoint:this.eQuestion[2].columnRPS
       }
   
        this.callServiceToSaveData(e,"E");
        alert("Save Successfully");
      }
    }
    else if(questionType=="GP"){
if(this.gpData.length>0){

const gp={id:this.gpData[0].id, sessionYear:'', stateName:JSON.parse(sessionStorage.getItem('currentUser')).stateName,stateCode:JSON.parse(sessionStorage.getItem('currentUser')).stateId,districtName:JSON.parse(sessionStorage.getItem('currentUser')).districtName, districtCode:JSON.parse(sessionStorage.getItem('currentUser')).paramValue,
          isActionplan:this.gpQuestion[0].columnR1,
          isActionplanpercent:this.gpQuestion[0].columnRPR,
          isActionplanpoint:this.gpQuestion[0].columnRPS,
          isPlanstarted:this.gpQuestion[1].columnR1,
          isPlanstartedpercent:this.gpQuestion[1].columnRPR,
          isPlanstartedpoint:this.gpQuestion[1].columnRPS,
          sportsEquipmentsr1:this.gpQuestion[2].columnR1, 
          sportsEquipmentsr2:this.gpQuestion[2].columnR2,
          sportsEquipmentspercent:this.gpQuestion[2].columnRPR,
          sportsEquipmentspoint:this.gpQuestion[2].columnRPS,
          libraryBookr1:this.gpQuestion[3].columnR1, 
          libraryBookr2:this.gpQuestion[3].columnR2,
          libraryBookpercent:this.gpQuestion[3].columnRPR,
          libraryBookpoint:this.gpQuestion[3].columnRPS,
          activityDoner1:this.gpQuestion[4].columnR1,
          activityDoner2:this.gpQuestion[4].columnR2,
          activityDonepercent:this.gpQuestion[4].columnRPR,
          activityDonepoint:this.gpQuestion[4].columnRPS,
          ecoYouthclubr1:this.gpQuestion[5].columnR1,
          ecoYouthclubr2:this.gpQuestion[5].columnR2, 
          ecoYouthclubpercent:this.gpQuestion[5].columnRPR,
          ecoYouthclubpoint:this.gpQuestion[5].columnRPS,
          saftyBoardsr1:this.gpQuestion[6].columnR1, 
          saftyBoardsr2:this.gpQuestion[6].columnR2,
          saftyBoardspercent:this.gpQuestion[6].columnRPR,
          saftyBoardspoint:this.gpQuestion[6].columnRPS,
          boothLevelofficersr1:this.gpQuestion[7].columnR1,
          boothLevelofficersr2 :this.gpQuestion[7].columnR2,
          boothLevelofficerspercent:this.gpQuestion[7].columnRPR,
          boothLevelofficerspoint:this.gpQuestion[7].columnRPS,
          teacherCountinsufficientr1:this.gpQuestion[8].columnR1, 
          teacherCountinsufficientr2:this.gpQuestion[8].columnR2,
          teacherCountinsufficientpercent:this.gpQuestion[8].columnRPR,
          teacherCountinsufficientpoint:this.gpQuestion[8].columnRPS,
          teacherotherDutier1:this.gpQuestion[9].columnR1,
          teacherotherDutier2:this.gpQuestion[9].columnR2,
          teacherotherDutiepercent:this.gpQuestion[9].columnRPR,
          teacherotherDutiepoint:this.gpQuestion[9].columnRPS,
          isplanImproveeducation:this.gpQuestion[10].columnR1,
          isplanImproveeducationpercent:this.gpQuestion[10].columnRPR,
          isplanImproveeducationpoint:this.gpQuestion[10].columnRPS,
          isreviewedplan:this.gpQuestion[11].columnR1,
          isreviewedplanpercent:this.gpQuestion[11].columnRPR,
          isreviewedplanpoint:this.gpQuestion[11].columnRPS,
          isplanReviewed:this.gpQuestion[12].columnR1, 
          isplanReviewedpercent:this.gpQuestion[12].columnRPR,
          isplanReviewedpoint:this.gpQuestion[12].columnRPS,
          isteacherDeployauth:this.gpQuestion[13].columnR1,
          isteacherDeployauthpercent:this.gpQuestion[13].columnRPR,
          isteacherDeployauthpoint:this.gpQuestion[13].columnRPS,
          inspectionReport:this.gpQuestion[14].columnR1,
          inspectionReportpercent:this.gpQuestion[14].columnRPR,
          inspectionReportpoint:this.gpQuestion[14].columnRPS,
          primaryPtr:this.gpQuestion[15].columnR1,
          primaryPtrpercent:this.gpQuestion[15].columnRPR,
          primaryPtrpoint:this.gpQuestion[15].columnRPS,
          upperPtr:this.gpQuestion[16].columnR1,
          upperPtrpercent:this.gpQuestion[16].columnRPR,
          upperPtrpoint:this.gpQuestion[16].columnRPS,
          fitIndiaschool :this.gpQuestion[17].columnR1,
          fitIndiaschoolpercent:this.gpQuestion[17].columnRPR,
          fitIndiaschoolpoint:this.gpQuestion[17].columnRPS,
          holisticReportcard:this.gpQuestion[18].columnR1,
          holisticReportcardpercent:this.gpQuestion[18].columnRPR,
          holisticReportcardpoint:this.gpQuestion[18].columnRPS,
          modelSchool:this.gpQuestion[19].columnR1,
          modelSchoolpercent:this.gpQuestion[19].columnRPR,
          modelSchoolpoint:this.gpQuestion[19].columnRPS


                    
                  }
        if(this.callServiceToSaveData(gp,"GP")){   
         alert("Update Successfully");    
        }
    }else{


      const gp={sessionYear:'', stateName:JSON.parse(sessionStorage.getItem('currentUser')).stateName,stateCode:JSON.parse(sessionStorage.getItem('currentUser')).stateId,districtName:JSON.parse(sessionStorage.getItem('currentUser')).districtName, districtCode:JSON.parse(sessionStorage.getItem('currentUser')).paramValue,
      isActionplan:this.gpQuestion[0].columnR1,
      isActionplanpercent:this.gpQuestion[0].columnRPR,
      isActionplanpoint:this.gpQuestion[0].columnRPS,
      isPlanstarted:this.gpQuestion[1].columnR1,
      isPlanstartedpercent:this.gpQuestion[1].columnRPR,
      isPlanstartedpoint:this.gpQuestion[1].columnRPS,
      sportsEquipmentsr1:this.gpQuestion[2].columnR1, 
      sportsEquipmentsr2:this.gpQuestion[2].columnR2,
      sportsEquipmentspercent:this.gpQuestion[2].columnRPR,
      sportsEquipmentspoint:this.gpQuestion[2].columnRPS,
      libraryBookr1:this.gpQuestion[3].columnR1, 
      libraryBookr2:this.gpQuestion[3].columnR2,
      libraryBookpercent:this.gpQuestion[3].columnRPR,
      libraryBookpoint:this.gpQuestion[3].columnRPS,
      activityDoner1:this.gpQuestion[4].columnR1,
      activityDoner2:this.gpQuestion[4].columnR2,
      activityDonepercent:this.gpQuestion[4].columnRPR,
      activityDonepoint:this.gpQuestion[4].columnRPS,
      ecoYouthclubr1:this.gpQuestion[5].columnR1,
      ecoYouthclubr2:this.gpQuestion[5].columnR2, 
      ecoYouthclubpercent:this.gpQuestion[5].columnRPR,
      ecoYouthclubpoint:this.gpQuestion[5].columnRPS,
      saftyBoardsr1:this.gpQuestion[6].columnR1, 
      saftyBoardsr2:this.gpQuestion[6].columnR2,
      saftyBoardspercent:this.gpQuestion[6].columnRPR,
      saftyBoardspoint:this.gpQuestion[6].columnRPS,
      boothLevelofficersr1:this.gpQuestion[7].columnR1,
      boothLevelofficersr2 :this.gpQuestion[7].columnR2,
      boothLevelofficerspercent:this.gpQuestion[7].columnRPR,
      boothLevelofficerspoint:this.gpQuestion[7].columnRPS,
      teacherCountinsufficientr1:this.gpQuestion[8].columnR1, 
      teacherCountinsufficientr2:this.gpQuestion[8].columnR2,
      teacherCountinsufficientpercent:this.gpQuestion[8].columnRPR,
      teacherCountinsufficientpoint:this.gpQuestion[8].columnRPS,
      teacherotherDutier1:this.gpQuestion[9].columnR1,
      teacherotherDutier2:this.gpQuestion[9].columnR2,
      teacherotherDutiepercent:this.gpQuestion[9].columnRPR,
      teacherotherDutiepoint:this.gpQuestion[9].columnRPS,
      isplanImproveeducation:this.gpQuestion[10].columnR1,
      isplanImproveeducationpercent:this.gpQuestion[10].columnRPR,
      isplanImproveeducationpoint:this.gpQuestion[10].columnRPS,
      isreviewedplan:this.gpQuestion[11].columnR1,
      isreviewedplanpercent:this.gpQuestion[11].columnRPR,
      isreviewedplanpoint:this.gpQuestion[11].columnRPS,
      isplanReviewed:this.gpQuestion[12].columnR1, 
      isplanReviewedpercent:this.gpQuestion[12].columnRPR,
      isplanReviewedpoint:this.gpQuestion[12].columnRPS,
      isteacherDeployauth:this.gpQuestion[13].columnR1,
      isteacherDeployauthpercent:this.gpQuestion[13].columnRPR,
      isteacherDeployauthpoint:this.gpQuestion[13].columnRPS,
      inspectionReport:this.gpQuestion[14].columnR1,
      inspectionReportpercent:this.gpQuestion[14].columnRPR,
      inspectionReportpoint:this.gpQuestion[14].columnRPS,
      primaryPtr:this.gpQuestion[15].columnR1,
      primaryPtrpercent:this.gpQuestion[15].columnRPR,
      primaryPtrpoint:this.gpQuestion[15].columnRPS,
      upperPtr:this.gpQuestion[16].columnR1,
      upperPtrpercent:this.gpQuestion[16].columnRPR,
      upperPtrpoint:this.gpQuestion[16].columnRPS,
      fitIndiaschool :this.gpQuestion[17].columnR1,
      fitIndiaschoolpercent:this.gpQuestion[17].columnRPR,
      fitIndiaschoolpoint:this.gpQuestion[17].columnRPS,
      holisticReportcard:this.gpQuestion[18].columnR1,
      holisticReportcardpercent:this.gpQuestion[18].columnRPR,
      holisticReportcardpoint:this.gpQuestion[18].columnRPS,
      modelSchool:this.gpQuestion[19].columnR1,
      modelSchoolpercent:this.gpQuestion[19].columnRPR,
      modelSchoolpoint:this.gpQuestion[19].columnRPS


                
              }
             this.callServiceToSaveData(gp,"GP");
             alert("Save Successfully");
    }
  }
  }
 callServiceToSaveData(constData,questioType){

if(this.pgiFinalRespoonse==null || this.pgiFinalRespoonse[0].status==="R"){
  this.dataService.saveLOPGI(constData,questioType).subscribe(res => {
      if(questioType=="LO"){
       this.getLOData(JSON.parse(sessionStorage.getItem('currentUser')).paramValue);
      }else if(questioType=="DL"){
       this.getDLData(JSON.parse(sessionStorage.getItem('currentUser')).paramValue);
      }else if(questioType=="A"){
        this.getAData(JSON.parse(sessionStorage.getItem('currentUser')).paramValue);
      }else if(questioType=="IF"){
        this.getIFData(JSON.parse(sessionStorage.getItem('currentUser')).paramValue);
      }else if(questioType=="E"){
        this.getEData(JSON.parse(sessionStorage.getItem('currentUser')).paramValue);
      }else if(questioType=="GP"){
        this.getGPData(JSON.parse(sessionStorage.getItem('currentUser')).paramValue);
      }

      if(this.pgiFinalRespoonse[0].status==="R"){
alert("Preview and Submit once again after complete form");
      }

      return true;
  })
}else{
  alert("Already Initiated for state approval.Not able to edit without rejection of state");
return false;
}

 }


   getLOData(districtId){
     
    this.dataService.getLOPGI(districtId).subscribe(res => {
      this.loData=res;
     
      if(res.length>0){
      


      this.loQuestion[0].columnR1=res[0].distReportCard;
      this.loQuestion[0].columnRPR=res[0].distReportCardpercent;
      this.loQuestion[0].columnRPS=res[0].distReportCardpoint;
      this.loQuestion[1].columnR1=res[0].avgLangScore3;
      this.loQuestion[1].columnRPR=res[0].avgLangpercetScore3;
      this.loQuestion[1].columnRPS=res[0].avgLangpointsScore3;
      this.loQuestion[2].columnR1=res[0].avgMathScore3;
      this.loQuestion[2].columnRPR=res[0].avgMathpercentScore3;
      this.loQuestion[2].columnRPS=res[0].avgMathpointsScore3;
      this.loQuestion[3].columnR1=res[0].avgLangScore5;
      this.loQuestion[3].columnRPR=res[0].avgLangpercentScore5;
      this.loQuestion[3].columnRPS=res[0].avgLangpointsScore5;
      this.loQuestion[4].columnR1=res[0].avgMathScore5;
      this.loQuestion[4].columnRPR=res[0].avgMathpercentScore5;
      this.loQuestion[4].columnRPS=res[0].avgMathpointsScore5;
      this.loQuestion[5].columnR1=res[0].avgLangScore8;
      this.loQuestion[5].columnRPR=res[0].avgLangpercentScore8;
      this.loQuestion[5].columnRPS=res[0].avgLangpointsScore8;
      this.loQuestion[6].columnR1=res[0].avgMathScore8;
      this.loQuestion[6].columnRPR=res[0].avgMathpercentScore8;
      this.loQuestion[6].columnRPS=res[0].avgMathpointsScore8;

      this.previewQuestion[0].columnR1=res[0].distReportCard;
      this.previewQuestion[0].columnRPR=res[0].distReportCardpercent;
      this.previewQuestion[0].columnRPS=res[0].distReportCardpoint;
      this.previewQuestion[1].columnR1=res[0].avgLangScore3;
      this.previewQuestion[1].columnRPR=res[0].avgLangpercetScore3;
      this.previewQuestion[1].columnRPS=res[0].avgLangpointsScore3;
      this.previewQuestion[2].columnR1=res[0].avgMathScore3;
      this.previewQuestion[2].columnRPR=res[0].avgMathpercentScore3;
      this.previewQuestion[2].columnRPS=res[0].avgMathpointsScore3;
      this.previewQuestion[3].columnR1=res[0].avgLangScore5;
      this.previewQuestion[3].columnRPR=res[0].avgLangpercentScore5;
      this.previewQuestion[3].columnRPS=res[0].avgLangpointsScore5;
      this.previewQuestion[4].columnR1=res[0].avgMathScore5;
      this.previewQuestion[4].columnRPR=res[0].avgMathpercentScore5;
      this.previewQuestion[4].columnRPS=res[0].avgMathpointsScore5;
      this.previewQuestion[5].columnR1=res[0].avgLangScore8;
      this.previewQuestion[5].columnRPR=res[0].avgLangpercentScore8;
      this.previewQuestion[5].columnRPS=res[0].avgLangpointsScore8;
      this.previewQuestion[6].columnR1=res[0].avgMathScore8;
      this.previewQuestion[6].columnRPR=res[0].avgMathpercentScore8;
      this.previewQuestion[6].columnRPS=res[0].avgMathpointsScore8;

      this.loCount=0;
      
      for(let i=0;i<this.loQuestion.length;i++){
if(this.loQuestion[i].columnR1 !=null && this.loQuestion[i].columnR1 !=''){
  this.loCount = (this.loCount+1);
}
}
this.previewCount();
}   
 
    })
   
  }

 getDLData(districtId){
  this.dataService.getDLPGI(districtId).subscribe(res => {
    this.dlData=res;
    if(res.length>0){
    
this.dlQuestion[0].columnR1=res[0].icafacilityr1;
this.dlQuestion[0].columnR2=res[0].icafacilityr2;
this.dlQuestion[0].columnRPR=res[0].icafacilityrpercentage;
this.dlQuestion[0].columnRPS=res[0].icafacilityr2points;
this.dlQuestion[1].columnR1=res[0].internetAccessr1;
this.dlQuestion[1].columnR2=res[0].internetAccessr2;
this.dlQuestion[1].columnRPR=res[0].internetAccessrpercentage;
this.dlQuestion[1].columnRPS=res[0].internetAccessrpoints;
this.dlQuestion[2].columnR1=res[0].onlineClassesr1;
this.dlQuestion[2].columnR2=res[0].onlineClassesr2;
this.dlQuestion[2].columnRPR=res[0].onlineClassesrpercentage;
this.dlQuestion[2].columnRPS=res[0].onlineClassesrpoints;
this.dlQuestion[3].columnR1=res[0].onlineAttendancer1;
this.dlQuestion[3].columnR2=res[0].onlineAttendancer2;
this.dlQuestion[3].columnRPR=res[0].onlineAttendancerpercentage;
this.dlQuestion[3].columnRPS=res[0].onlineAttendancerpoints;
this.dlQuestion[4].columnR1=res[0].onlineCourcer1;
this.dlQuestion[4].columnR2=res[0].onlineCourcer2;
this.dlQuestion[4].columnRPR=res[0].onlineCourcerpercentage;
this.dlQuestion[4].columnRPS=res[0].onlineCourcerpoints;
this.dlQuestion[5].columnR1=res[0].usedSwamChanelr1;
this.dlQuestion[5].columnR2=res[0].usedSwamChanelr2;
this.dlQuestion[5].columnRPR=res[0].usedSwamChanelrpercentage;
this.dlQuestion[5].columnRPS=res[0].usedSwamChanelrpoints;
this.dlQuestion[6].columnR1=res[0].otherMediar1;
this.dlQuestion[6].columnR2=res[0].otherMediar2;
this.dlQuestion[6].columnRPR=res[0].otherMediarpercentage;
this.dlQuestion[6].columnRPS=res[0].otherMediarpoints;
this.dlQuestion[7].columnR1=res[0].tdititalcontentr1;
this.dlQuestion[7].columnR2=res[0].tdititalcontentr2;
this.dlQuestion[7].columnRPR=res[0].tdititalcontentrpercentage;
this.dlQuestion[7].columnRPS=res[0].tdititalcontentrpoints;
this.dlQuestion[8].columnR1=res[0].contentDeveloperr1;
this.dlQuestion[8].columnR2=res[0].contentDeveloperr2;
this.dlQuestion[8].columnRPR=res[0].contentDeveloperrpercentage;
this.dlQuestion[8].columnRPS=res[0].contentDeveloperrpoints;
this.dlQuestion[9].columnR1=res[0].digitalTeachr1;
this.dlQuestion[9].columnR2=res[0].digitalTeachr2;
this.dlQuestion[9].columnRPR=res[0].digitalTeachrpercentage;
this.dlQuestion[9].columnRPS=res[0].digitalTeachrpoints;


this.previewQuestion[7].columnR1=res[0].icafacilityr1;
this.previewQuestion[7].columnR2=res[0].icafacilityr2;
this.previewQuestion[7].columnRPR=res[0].icafacilityrpercentage;
this.previewQuestion[7].columnRPS=res[0].icafacilityr2points;
this.previewQuestion[8].columnR1=res[0].internetAccessr1;
this.previewQuestion[8].columnR2=res[0].internetAccessr2;
this.previewQuestion[8].columnRPR=res[0].internetAccessrpercentage;
this.previewQuestion[8].columnRPS=res[0].internetAccessrpoints;
this.previewQuestion[9].columnR1=res[0].onlineClassesr1;
this.previewQuestion[9].columnR2=res[0].onlineClassesr2;
this.previewQuestion[9].columnRPR=res[0].onlineClassesrpercentage;
this.previewQuestion[9].columnRPS=res[0].onlineClassesrpoints;
this.previewQuestion[10].columnR1=res[0].onlineAttendancer1;
this.previewQuestion[10].columnR2=res[0].onlineAttendancer2;
this.previewQuestion[10].columnRPR=res[0].onlineAttendancerpercentage;
this.previewQuestion[10].columnRPS=res[0].onlineAttendancerpoints;
this.previewQuestion[11].columnR1=res[0].onlineCourcer1;
this.previewQuestion[11].columnR2=res[0].onlineCourcer2;
this.previewQuestion[11].columnRPR=res[0].onlineCourcerpercentage;
this.previewQuestion[11].columnRPS=res[0].onlineCourcerpoints;
this.previewQuestion[12].columnR1=res[0].usedSwamChanelr1;
this.previewQuestion[12].columnR2=res[0].usedSwamChanelr2;
this.previewQuestion[12].columnRPR=res[0].usedSwamChanelrpercentage;
this.previewQuestion[12].columnRPS=res[0].usedSwamChanelrpoints;
this.previewQuestion[13].columnR1=res[0].otherMediar1;
this.previewQuestion[13].columnR2=res[0].otherMediar2;
this.previewQuestion[13].columnRPR=res[0].otherMediarpercentage;
this.previewQuestion[13].columnRPS=res[0].otherMediarpoints;
this.previewQuestion[14].columnR1=res[0].tdititalcontentr1;
this.previewQuestion[14].columnR2=res[0].tdititalcontentr2;
this.previewQuestion[14].columnRPR=res[0].tdititalcontentrpercentage;
this.previewQuestion[14].columnRPS=res[0].tdititalcontentrpoints;
this.previewQuestion[15].columnR1=res[0].contentDeveloperr1;
this.previewQuestion[15].columnR2=res[0].contentDeveloperr2;
this.previewQuestion[15].columnRPR=res[0].contentDeveloperrpercentage;
this.previewQuestion[15].columnRPS=res[0].contentDeveloperrpoints;
this.previewQuestion[16].columnR1=res[0].digitalTeachr1;
this.previewQuestion[16].columnR2=res[0].digitalTeachr2;
this.previewQuestion[16].columnRPR=res[0].digitalTeachrpercentage;
this.previewQuestion[16].columnRPS=res[0].digitalTeachrpoints;



      this.dlCount=0;
      for(let i=0;i<this.dlQuestion.length;i++){
if(this.dlQuestion[i].columnR1 !=null){
  this.dlCount = (this.dlCount+1);
}
}
this.previewCount();
}    
  })
 }

 getAData(districtId){
  this.dataService.getAPGI(districtId).subscribe(res => {
    this.aData=res;
    if(res.length>0){
      this.aQuestion[0].columnR1=res[0].tratePtoupperprimaryr1;
      this.aQuestion[0].columnR2=res[0].tratePtoupperprimaryr2;
      this.aQuestion[0].columnRPR=res[0].tratePtoupperprimaryrpercentage;
      this.aQuestion[0].columnRPS=res[0].tratePtoupperprimaryrpoints;
      this.aQuestion[1].columnR1=res[0].trateUptosecondaryr1;
      this.aQuestion[1].columnR2=res[0].trateUptosecondaryr2;
      this.aQuestion[1].columnRPR=res[0].trateUptosecondaryrpercentage;
      this.aQuestion[1].columnRPS=res[0].trateUptosecondaryrpoints;
      this.aQuestion[2].columnR1=res[0].schoolIdentified;
      this.aQuestion[2].columnRPR=res[0].schoolIdentifiedpercentage;
      this.aQuestion[2].columnRPS=res[0].schoolIdentifiedpoints;
      this.aQuestion[3].columnR1=res[0].rrateElementryr1;
      this.aQuestion[3].columnR2=res[0].rrateElementryr2;
      this.aQuestion[3].columnRPR=res[0].rrateElementryrpercentage;
      this.aQuestion[3].columnRPS=res[0].rrateElementryrpoints;
      this.aQuestion[4].columnR1=res[0].rrateSecondaryr1;
      this.aQuestion[4].columnR2=res[0].rrateSecondaryr2;
      this.aQuestion[4].columnRPR=res[0].rrateSecondaryrpercentage;
      this.aQuestion[4].columnRPS=res[0].rrateSecondaryrpoints;
      this.aQuestion[5].columnR1=res[0].outofchildCountr1;
      this.aQuestion[5].columnR2=res[0].outofchildCountr2;
      this.aQuestion[5].columnRPR=res[0].outofchildCountrpercentage;
      this.aQuestion[5].columnRPS=res[0].outofchildCountrpoints;
      
      this.previewQuestion[17].columnR1=res[0].tratePtoupperprimaryr1;
      this.previewQuestion[17].columnR2=res[0].tratePtoupperprimaryr2;
      this.previewQuestion[17].columnRPR=res[0].tratePtoupperprimaryrpercentage;
      this.previewQuestion[17].columnRPS=res[0].tratePtoupperprimaryrpoints;
      this.previewQuestion[18].columnR1=res[0].trateUptosecondaryr1;
      this.previewQuestion[18].columnR2=res[0].trateUptosecondaryr2;
      this.previewQuestion[18].columnRPR=res[0].trateUptosecondaryrpercentage;
      this.previewQuestion[18].columnRPS=res[0].trateUptosecondaryrpoints;
      this.previewQuestion[19].columnR1=res[0].schoolIdentified;
      this.previewQuestion[19].columnRPR=res[0].schoolIdentifiedpercentage;
      this.previewQuestion[19].columnRPS=res[0].schoolIdentifiedpoints;
      this.previewQuestion[20].columnR1=res[0].rrateElementryr1;
      this.previewQuestion[20].columnR2=res[0].rrateElementryr2;
      this.previewQuestion[20].columnRPR=res[0].rrateElementryrpercentage;
      this.previewQuestion[20].columnRPS=res[0].rrateElementryrpoints;
      this.previewQuestion[21].columnR1=res[0].rrateSecondaryr1;
      this.previewQuestion[21].columnR2=res[0].rrateSecondaryr2;
      this.previewQuestion[21].columnRPR=res[0].rrateSecondaryrpercentage;
      this.previewQuestion[21].columnRPS=res[0].rrateSecondaryrpoints;
      this.previewQuestion[22].columnR1=res[0].outofchildCountr1;
      this.previewQuestion[22].columnR2=res[0].outofchildCountr2;
      this.previewQuestion[22].columnRPR=res[0].outofchildCountrpercentage;
      this.previewQuestion[22].columnRPS=res[0].outofchildCountrpoints;

      this.aCount=0;
      for(let i=0;i<this.aQuestion.length;i++){
if(this.aQuestion[i].columnR1 !=null){
  this.aCount = (this.aCount+1);
}
}
this.previewCount();
}    
  })
 }

 getIFData(districtId){
  this.dataService.getIFPGI(districtId).subscribe(res => {
    this.ifData=res;
    if(res.length>0){
      this.ifQuestion[0].columnR1=res[0].uploadDatar1;
      this.ifQuestion[0].columnR2=res[0].uploadDatar2;
      this.ifQuestion[0].columnRPR=res[0].uploadDatarpercent;
      this.ifQuestion[0].columnRPS=res[0].uploadDatarpoint;
      this.ifQuestion[1].columnR1=res[0].defenceTrainingr1;
      this.ifQuestion[1].columnR2=res[0].defenceTrainingr2;
      this.ifQuestion[1].columnRPR=res[0].defenceTrainingrpercent;
      this.ifQuestion[1].columnRPS=res[0].defenceTrainingrpoint;
      this.ifQuestion[2].columnR1=res[0].funcTrainingr1;
      this.ifQuestion[2].columnR2=res[0].funcTrainingr2;
      this.ifQuestion[2].columnRPR=res[0].funcTrainingrpercent;
      this.ifQuestion[2].columnRPS=res[0].funcTrainingrpoint;
      this.ifQuestion[3].columnR1=res[0].funcDrinkingwaterr1;
      this.ifQuestion[3].columnR2=res[0].funcDrinkingwaterr2;
      this.ifQuestion[3].columnRPR=res[0].funcDrinkingwaterpercent;
      this.ifQuestion[3].columnRPS=res[0].funcDrinkingwaterpoint;
      this.ifQuestion[4].columnR1=res[0].funcElectricityr1;
      this.ifQuestion[4].columnR2=res[0].funcElectricityr2;
      this.ifQuestion[4].columnRPR=res[0].funcElectricityrpercent;
      this.ifQuestion[4].columnRPS=res[0].funcElectricityrpoint;
      this.ifQuestion[5].columnR1=res[0].funcGirltoiletr1;
      this.ifQuestion[5].columnR2=res[0].funcGirltoiletr2;
      this.ifQuestion[5].columnRPR=res[0].funcGirltoiletpercent;
      this.ifQuestion[5].columnRPS=res[0].funcGirltoiletpoint;
      this.ifQuestion[6].columnR1=res[0].funcBoytoiletr1;
      this.ifQuestion[6].columnR2=res[0].funcBoytoiletr2;
      this.ifQuestion[6].columnRPR=res[0].funcBoytoiletpercent;
      this.ifQuestion[6].columnRPS=res[0].funcBoytoiletpoint;
      this.ifQuestion[7].columnR1=res[0].freeTextbookr1;
      this.ifQuestion[7].columnR2=res[0].freeTextbookr2;
      this.ifQuestion[7].columnRPR=res[0].freeTextbookpercent;
      this.ifQuestion[7].columnRPS=res[0].freeTextbookpoint;
      this.ifQuestion[8].columnR1=res[0].elementaryUniformr1;
      this.ifQuestion[8].columnR2=res[0].elementaryUniformr2;
      this.ifQuestion[8].columnRPR=res[0].elementaryUniformpercent;
      this.ifQuestion[8].columnRPS=res[0].elementaryUniformpoint;
      this.ifQuestion[9].columnR1=res[0].kitchenGardenr1;
      this.ifQuestion[9].columnR2=res[0].kitchenGardenr2;
      this.ifQuestion[9].columnRPR=res[0].kitchenGardenpercent;
      this.ifQuestion[9].columnRPS=res[0].kitchenGardenpoint;
      
      this.previewQuestion[23].columnR1=res[0].uploadDatar1;
      this.previewQuestion[23].columnR2=res[0].uploadDatar2;
      this.previewQuestion[23].columnRPR=res[0].uploadDatarpercent;
      this.previewQuestion[23].columnRPS=res[0].uploadDatarpoint;
      this.previewQuestion[24].columnR1=res[0].defenceTrainingr1;
      this.previewQuestion[24].columnR2=res[0].defenceTrainingr2;
      this.previewQuestion[24].columnRPR=res[0].defenceTrainingrpercent;
      this.previewQuestion[24].columnRPS=res[0].defenceTrainingrpoint;
      this.previewQuestion[25].columnR1=res[0].funcTrainingr1;
      this.previewQuestion[25].columnR2=res[0].funcTrainingr2;
      this.previewQuestion[25].columnRPR=res[0].funcTrainingrpercent;
      this.previewQuestion[25].columnRPS=res[0].funcTrainingrpoint;
      this.previewQuestion[26].columnR1=res[0].funcDrinkingwaterr1;
      this.previewQuestion[26].columnR2=res[0].funcDrinkingwaterr2;
      this.previewQuestion[26].columnRPR=res[0].funcDrinkingwaterpercent;
      this.previewQuestion[26].columnRPS=res[0].funcDrinkingwaterpoint;
      this.previewQuestion[27].columnR1=res[0].funcElectricityr1;
      this.previewQuestion[27].columnR2=res[0].funcElectricityr2;
      this.previewQuestion[27].columnRPR=res[0].funcElectricityrpercent;
      this.previewQuestion[27].columnRPS=res[0].funcElectricityrpoint;
      this.previewQuestion[28].columnR1=res[0].funcGirltoiletr1;
      this.previewQuestion[28].columnR2=res[0].funcGirltoiletr2;
      this.previewQuestion[28].columnRPR=res[0].funcGirltoiletpercent;
      this.previewQuestion[28].columnRPS=res[0].funcGirltoiletpoint;
      this.previewQuestion[29].columnR1=res[0].funcBoytoiletr1;
      this.previewQuestion[29].columnR2=res[0].funcBoytoiletr2;
      this.previewQuestion[29].columnRPR=res[0].funcBoytoiletpercent;
      this.previewQuestion[29].columnRPS=res[0].funcBoytoiletpoint;
      this.previewQuestion[30].columnR1=res[0].freeTextbookr1;
      this.previewQuestion[30].columnR2=res[0].freeTextbookr2;
      this.previewQuestion[30].columnRPR=res[0].freeTextbookpercent;
      this.previewQuestion[30].columnRPS=res[0].freeTextbookpoint;
      this.previewQuestion[31].columnR1=res[0].elementaryUniformr1;
      this.previewQuestion[31].columnR2=res[0].elementaryUniformr2;
      this.previewQuestion[31].columnRPR=res[0].elementaryUniformpercent;
      this.previewQuestion[31].columnRPS=res[0].elementaryUniformpoint;
      this.previewQuestion[32].columnR1=res[0].kitchenGardenr1;
      this.previewQuestion[32].columnR2=res[0].kitchenGardenr2;
      this.previewQuestion[32].columnRPR=res[0].kitchenGardenpercent;
      this.previewQuestion[32].columnRPS=res[0].kitchenGardenpoint

      this.ifCount=0;
      for(let i=0;i<this.ifQuestion.length;i++){
if(this.ifQuestion[i].columnR1 !=null){
  this.ifCount = (this.ifCount+1);
}
}
this.previewCount();
}    
  })
 }

 getEData(districtId){
   
  this.dataService.getEPGI(districtId).subscribe(res => {
    this.eData=res;
    if(res.length>0){
      this.eQuestion[0].columnR1=res[0].aidsAppliancesr1;
      this.eQuestion[0].columnR2=res[0].aidsAppliancesr2;
      this.eQuestion[0].columnRPR=res[0].aidsAppliancespercent;
      this.eQuestion[0].columnRPS=res[0].aidsAppliancespoint;
      this.eQuestion[1].columnR1=res[0].girlBicycler1;
      this.eQuestion[1].columnR2=res[0].girlBicycler2;
      this.eQuestion[1].columnRPR=res[0].girlBicyclepercent;
      this.eQuestion[1].columnRPS=res[0].girlBicyclepoint;
      this.eQuestion[2].columnR1=res[0].femaleLiteracyr1;
      this.eQuestion[2].columnR2=res[0].femaleLiteracyr2;
      this.eQuestion[2].columnRPR=res[0].femaleLiteracypercent;
      this.eQuestion[2].columnRPS=res[0].femaleLiteracypoint
    
    
    this.previewQuestion[33].columnR1=res[0].aidsAppliancesr1;
      this.previewQuestion[33].columnR2=res[0].aidsAppliancesr2;
      this.previewQuestion[33].columnRPR=res[0].aidsAppliancespercent;
      this.previewQuestion[33].columnRPS=res[0].aidsAppliancespoint;
      this.previewQuestion[34].columnR1=res[0].girlBicycler1;
      this.previewQuestion[34].columnR2=res[0].girlBicycler2;
      this.previewQuestion[34].columnRPR=res[0].girlBicyclepercent;
      this.previewQuestion[34].columnRPS=res[0].girlBicyclepoint;
      this.previewQuestion[35].columnR1=res[0].femaleLiteracyr1;
      this.previewQuestion[35].columnR2=res[0].femaleLiteracyr2;
      this.previewQuestion[35].columnRPR=res[0].femaleLiteracypercent;
      this.previewQuestion[35].columnRPS=res[0].femaleLiteracypoint;

      this.eCount=0;
      for(let i=0;i<this.eQuestion.length;i++){
if(this.eQuestion[i].columnR1 !=null){
  this.eCount = (this.eCount+1);
}
}
this.previewCount();
}    
  })
 }

 getGPData(districtId){
  this.dataService.getGPPGI(districtId).subscribe(res => {
    this.gpData=res;
    if(res.length>0){
      this.gpQuestion[0].columnR1=res[0].isActionplan,
      this.gpQuestion[0].columnRPR=res[0].isActionplanpercent,
      this.gpQuestion[0].columnRPS=res[0].isActionplanpoint,
      this.gpQuestion[1].columnR1=res[0].isPlanstarted,
      this.gpQuestion[1].columnRPR=res[0].isPlanstartedpercent,
      this.gpQuestion[1].columnRPS=res[0].isPlanstartedpoint,
      this.gpQuestion[2].columnR1=res[0].sportsEquipmentsr1, 
      this.gpQuestion[2].columnR2=res[0].sportsEquipmentsr2,
      this.gpQuestion[2].columnRPR=res[0].sportsEquipmentspercent,
      this.gpQuestion[2].columnRPS=res[0].sportsEquipmentspoint,
      this.gpQuestion[3].columnR1=res[0].libraryBookr1, 
      this.gpQuestion[3].columnR2=res[0].libraryBookr2,
      this.gpQuestion[3].columnRPR=res[0].libraryBookpercent,
      this.gpQuestion[3].columnRPS=res[0].libraryBookpoint,
      this.gpQuestion[4].columnR1=res[0].activityDoner1,
      this.gpQuestion[4].columnR2=res[0].activityDoner2,
      this.gpQuestion[4].columnRPR=res[0].activityDonepercent,
      this.gpQuestion[4].columnRPS=res[0].activityDonepoint,
      this.gpQuestion[5].columnR1=res[0].ecoYouthclubr1,
      this.gpQuestion[5].columnR2=res[0].ecoYouthclubr2, 
      this.gpQuestion[5].columnRPR=res[0].ecoYouthclubpercent,
      this.gpQuestion[5].columnRPS=res[0].ecoYouthclubpoint,
      this.gpQuestion[6].columnR1=res[0].saftyBoardsr1, 
      this.gpQuestion[6].columnR2=res[0].saftyBoardsr2,
      this.gpQuestion[6].columnRPR=res[0].saftyBoardspercent,
      this.gpQuestion[6].columnRPS=res[0].saftyBoardspoint,
      this.gpQuestion[7].columnR1=res[0].boothLevelofficersr1,
      this.gpQuestion[7].columnR2=res[0].boothLevelofficersr2,
      this.gpQuestion[7].columnRPR=res[0].boothLevelofficerspercent,
      this.gpQuestion[7].columnRPS=res[0].boothLevelofficerspoint,
      this.gpQuestion[8].columnR1=res[0].teacherCountinsufficientr1, 
      this.gpQuestion[8].columnR2=res[0].teacherCountinsufficientr2,
      this.gpQuestion[8].columnRPR=res[0].teacherCountinsufficientpercent,
      this.gpQuestion[8].columnRPS=res[0].teacherCountinsufficientpoint,
      this.gpQuestion[9].columnR1=res[0].teacherotherDutier1,
      this.gpQuestion[9].columnR2=res[0].teacherotherDutier2,
      this.gpQuestion[9].columnRPR=res[0].teacherotherDutiepercent,
      this.gpQuestion[9].columnRPS=res[0].teacherotherDutiepoint,
      this.gpQuestion[10].columnR1=res[0].isplanImproveeducation,
      this.gpQuestion[10].columnRPR=res[0].isplanImproveeducationpercent,
      this.gpQuestion[10].columnRPS=res[0].isplanImproveeducationpoint,
      this.gpQuestion[11].columnR1=res[0].isreviewedplan,
      this.gpQuestion[11].columnRPR=res[0].isreviewedplanpercent,
      this.gpQuestion[11].columnRPS=res[0].isreviewedplanpoint,
      this.gpQuestion[12].columnR1=res[0].isplanReviewed, 
      this.gpQuestion[12].columnRPR=res[0].isplanReviewedpercent,
      this.gpQuestion[12].columnRPS=res[0].isplanReviewedpoint,
      this.gpQuestion[13].columnR1=res[0].isteacherDeployauth,
      this.gpQuestion[13].columnRPR=res[0].isteacherDeployauthpercent,
      this.gpQuestion[13].columnRPS=res[0].isteacherDeployauthpoint,
      this.gpQuestion[14].columnR1=res[0].inspectionReport,
      this.gpQuestion[14].columnRPR=res[0].inspectionReportpercent,
      this.gpQuestion[14].columnRPS=res[0].inspectionReportpoint,
      this.gpQuestion[15].columnR1=res[0].primaryPtr,
      this.gpQuestion[15].columnRPR=res[0].primaryPtrpercent,
      this.gpQuestion[15].columnRPS=res[0].primaryPtrpoint,
      this.gpQuestion[16].columnR1=res[0].upperPtr,
      this.gpQuestion[16].columnRPR=res[0].upperPtrpercent,
      this.gpQuestion[16].columnRPS=res[0].upperPtrpoint,
      this.gpQuestion[17].columnR1=res[0].fitIndiaschool,
      this.gpQuestion[17].columnRPR=res[0].fitIndiaschoolpercent,
      this.gpQuestion[17].columnRPS=res[0].fitIndiaschoolpoint,
      this.gpQuestion[18].columnR1=res[0].holisticReportcard,
      this.gpQuestion[18].columnRPR=res[0].holisticReportcardpercent,
      this.gpQuestion[18].columnRPS=res[0].holisticReportcardpoint,
      this.gpQuestion[19].columnR1=res[0].modelSchool,
      this.gpQuestion[19].columnRPR=res[0].modelSchoolpercent,
      this.gpQuestion[19].columnRPS=res[0].modelSchoolpoint
  
  this.previewQuestion[36].columnR1=res[0].isActionplan,
      this.previewQuestion[36].columnRPR=res[0].isActionplanpercent,
      this.previewQuestion[36].columnRPS=res[0].isActionplanpoint,
      this.previewQuestion[37].columnR1=res[0].isPlanstarted,
      this.previewQuestion[37].columnRPR=res[0].isPlanstartedpercent,
      this.previewQuestion[37].columnRPS=res[0].isPlanstartedpoint,
      this.previewQuestion[38].columnR1=res[0].sportsEquipmentsr1, 
      this.previewQuestion[38].columnR2=res[0].sportsEquipmentsr2,
      this.previewQuestion[38].columnRPR=res[0].sportsEquipmentspercent,
      this.previewQuestion[38].columnRPS=res[0].sportsEquipmentspoint,
      this.previewQuestion[39].columnR1=res[0].libraryBookr1, 
      this.previewQuestion[39].columnR2=res[0].libraryBookr2,
      this.previewQuestion[39].columnRPR=res[0].libraryBookpercent,
      this.previewQuestion[39].columnRPS=res[0].libraryBookpoint,
      this.previewQuestion[40].columnR1=res[0].activityDoner1,
      this.previewQuestion[40].columnR2=res[0].activityDoner2,
      this.previewQuestion[40].columnRPR=res[0].activityDonepercent,
      this.previewQuestion[40].columnRPS=res[0].activityDonepoint,
      this.previewQuestion[41].columnR1=res[0].ecoYouthclubr1,
      this.previewQuestion[41].columnR2=res[0].ecoYouthclubr2, 
      this.previewQuestion[41].columnRPR=res[0].ecoYouthclubpercent,
      this.previewQuestion[41].columnRPS=res[0].ecoYouthclubpoint,
      this.previewQuestion[42].columnR1=res[0].saftyBoardsr1, 
      this.previewQuestion[42].columnR2=res[0].saftyBoardsr2,
      this.previewQuestion[42].columnRPR=res[0].saftyBoardspercent,
      this.previewQuestion[42].columnRPS=res[0].saftyBoardspoint,
      this.previewQuestion[43].columnR1=res[0].boothLevelofficersr1,
      this.previewQuestion[43].columnR2=res[0].boothLevelofficersr2,
      this.previewQuestion[43].columnRPR=res[0].boothLevelofficerspercent,
      this.previewQuestion[43].columnRPS=res[0].boothLevelofficerspoint,
      this.previewQuestion[44].columnR1=res[0].teacherCountinsufficientr1, 
      this.previewQuestion[44].columnR2=res[0].teacherCountinsufficientr2,
      this.previewQuestion[44].columnRPR=res[0].teacherCountinsufficientpercent,
      this.previewQuestion[44].columnRPS=res[0].teacherCountinsufficientpoint,
      this.previewQuestion[45].columnR1=res[0].teacherotherDutier1,
      this.previewQuestion[45].columnR2=res[0].teacherotherDutier2,
      this.previewQuestion[45].columnRPR=res[0].teacherotherDutiepercent,
      this.previewQuestion[45].columnRPS=res[0].teacherotherDutiepoint,
      this.previewQuestion[46].columnR1=res[0].isplanImproveeducation,
      this.previewQuestion[46].columnRPR=res[0].isplanImproveeducationpercent,
      this.previewQuestion[46].columnRPS=res[0].isplanImproveeducationpoint,
      this.previewQuestion[47].columnR1=res[0].isreviewedplan,
      this.previewQuestion[47].columnRPR=res[0].isreviewedplanpercent,
      this.previewQuestion[47].columnRPS=res[0].isreviewedplanpoint,
      this.previewQuestion[48].columnR1=res[0].isplanReviewed, 
      this.previewQuestion[48].columnRPR=res[0].isplanReviewedpercent,
      this.previewQuestion[48].columnRPS=res[0].isplanReviewedpoint,
      this.previewQuestion[49].columnR1=res[0].isteacherDeployauth,
      this.previewQuestion[49].columnRPR=res[0].isteacherDeployauthpercent,
      this.previewQuestion[49].columnRPS=res[0].isteacherDeployauthpoint,
      this.previewQuestion[50].columnR1=res[0].inspectionReport,
      this.previewQuestion[50].columnRPR=res[0].inspectionReportpercent,
      this.previewQuestion[50].columnRPS=res[0].inspectionReportpoint,
      this.previewQuestion[51].columnR1=res[0].primaryPtr,
      this.previewQuestion[51].columnRPR=res[0].primaryPtrpercent,
      this.previewQuestion[51].columnRPS=res[0].primaryPtrpoint,
      this.previewQuestion[52].columnR1=res[0].upperPtr,
      this.previewQuestion[52].columnRPR=res[0].upperPtrpercent,
      this.previewQuestion[52].columnRPS=res[0].upperPtrpoint,
      this.previewQuestion[53].columnR1=res[0].fitIndiaschool,
      this.previewQuestion[53].columnRPR=res[0].fitIndiaschoolpercent,
      this.previewQuestion[53].columnRPS=res[0].fitIndiaschoolpoint,
      this.previewQuestion[54].columnR1=res[0].holisticReportcard,
      this.previewQuestion[54].columnRPR=res[0].holisticReportcardpercent,
      this.previewQuestion[54].columnRPS=res[0].holisticReportcardpoint,
      this.previewQuestion[55].columnR1=res[0].modelSchool,
      this.previewQuestion[55].columnRPR=res[0].modelSchoolpercent,
      this.previewQuestion[55].columnRPS=res[0].modelSchoolpoint


      this.gpCount=0;
      for(let i=0;i<this.gpQuestion.length;i++){
if(this.gpQuestion[i].columnR1 !=null){
  this.gpCount = (this.gpCount+1);
}
}
this.previewCount();
// alert(this.gpCount);
}    
  })
 }

previewCount(){
  this.tCount=this.loCount+this.dlCount+this.aCount+this.ifCount+this.eCount+this.gpCount;
}

saveFinalDPGIStatus(){
  // alert("called final PGI");
  this.leftQuestios="";
  if(this.leftQuestios ==""){
    if(this.pgiFinalRespoonse==null){
   this.pgiFinalStatus={stateName:JSON.parse(sessionStorage.getItem('currentUser')).stateName,stateCode:JSON.parse(sessionStorage.getItem('currentUser')).stateId,districtName:JSON.parse(sessionStorage.getItem('currentUser')).districtName,distCode:JSON.parse(sessionStorage.getItem('currentUser')).paramValue,status:'I',approveRemarks:'',points:this.totalPoints}
   this.dataService.saveDistPGI(this.pgiFinalStatus).subscribe(res => {
alert("PGI Initiated Sucessfully");
   })
  }else if(this.pgiFinalRespoonse[0].status==="R" || this.pgiFinalRespoonse[0].status==="I"){
    this.pgiFinalStatus1={id:this.pgiFinalRespoonse[0].id,stateName:JSON.parse(sessionStorage.getItem('currentUser')).stateName,stateCode:JSON.parse(sessionStorage.getItem('currentUser')).stateId,districtName:JSON.parse(sessionStorage.getItem('currentUser')).districtName,distCode:JSON.parse(sessionStorage.getItem('currentUser')).paramValue,status:'I',approveRemarks:'',points:this.totalPoints}
    this.dataService.saveDistPGI(this.pgiFinalStatus1).subscribe(res => {
        alert("PGI Initiated Sucessfully");
    })
  }else if(this.pgiFinalRespoonse[0].status==="A"){
alert("Already Approved By State");
  }
  }else{
    alert("Please Fill Question :"+this.leftQuestios);
  }
  this.getFinalPGIStatus()
}

getFinalPGIStatus(){
  this.dataService.getFinalPGIStatus(JSON.parse(sessionStorage.getItem('currentUser')).paramValue).subscribe(res => {
    this.pgiFinalRespoonse=res;
       })
}

calValue(qType,index,value){
  // alert(value);
if(qType=="LO" && index===0){
  if(value=="Y"){
    this.loQuestion[index].columnRPR=100;
    this.loQuestion[index].columnRPS=100;
  }else{
    this.loQuestion[index].columnRPR='';
    this.loQuestion[index].columnRPS='';
  }
}else if(qType=="LO" && index===1){
  this.loQuestion[index].columnRPR=value;
  this.loQuestion[index].columnRPS=this.loQuestion[index].weight*value;
}else if(qType=="LO" && index===2){
  this.loQuestion[index].columnRPR=value;
  this.loQuestion[index].columnRPS=this.loQuestion[index].weight*value;
}else if(qType=="LO" && index===3){
  this.loQuestion[index].columnRPR=value;
  this.loQuestion[index].columnRPS=this.loQuestion[index].weight*value;
}else if(qType=="LO" && index===4){
  this.loQuestion[index].columnRPR=value;
  this.loQuestion[index].columnRPS=this.loQuestion[index].weight*value;
}else if(qType=="LO" && index===5){
  this.loQuestion[index].columnRPR=value;
  this.loQuestion[index].columnRPS=this.loQuestion[index].weight*value;
}else if(qType=="LO" && index===6){
  this.loQuestion[index].columnRPR=value;
  this.loQuestion[index].columnRPS=this.loQuestion[index].weight*value;
}else if(qType=="DL" && index===0){
  this.dlQuestion[index].columnRPR=((+value/+this.dlQuestion[index].columnR2)*100);
  this.dlQuestion[index].columnRPS=((+value/+this.dlQuestion[index].columnR2)*this.dlQuestion[index].weight);
}else if(qType=="DL" && index===1){
  this.dlQuestion[index].columnRPR=((+value/+this.dlQuestion[index].columnR2)*100);
  this.dlQuestion[index].columnRPS=((+value/+this.dlQuestion[index].columnR2)*this.dlQuestion[index].weight);
}else if(qType=="DL" && index===2){
  this.dlQuestion[index].columnRPR=((+value/+this.dlQuestion[index].columnR2)*100);
  this.dlQuestion[index].columnRPS=((+value/+this.dlQuestion[index].columnR2)*this.dlQuestion[index].weight);
}else if(qType=="DL" && index===3){
  this.dlQuestion[index].columnRPR=((+value/+this.dlQuestion[index].columnR2)*100);
  this.dlQuestion[index].columnRPS=((+value/+this.dlQuestion[index].columnR2)*this.dlQuestion[index].weight);
}else if(qType=="DL" && index===4){
  this.dlQuestion[index].columnRPR=((+value/+this.dlQuestion[index].columnR2)*100);
  this.dlQuestion[index].columnRPS=((+value/+this.dlQuestion[index].columnR2)*this.dlQuestion[index].weight);
}else if(qType=="DL" && index===5){
  this.dlQuestion[index].columnRPR=((+value/+this.dlQuestion[index].columnR2)*100);
  this.dlQuestion[index].columnRPS=((+value/+this.dlQuestion[index].columnR2)*this.dlQuestion[index].weight);
}else if(qType=="DL" && index===6){
  this.dlQuestion[index].columnRPR=((+value/+this.dlQuestion[index].columnR2)*100);
  this.dlQuestion[index].columnRPS=((+value/+this.dlQuestion[index].columnR2)*this.dlQuestion[index].weight);
}else if(qType=="DL" && index===7){
  this.dlQuestion[index].columnRPR=((+value/+this.dlQuestion[index].columnR2)*100);
  this.dlQuestion[index].columnRPS=((+value/+this.dlQuestion[index].columnR2)*this.dlQuestion[index].weight);
}else if(qType=="DL" && index===8){
  this.dlQuestion[index].columnRPR=((+value/+this.dlQuestion[index].columnR2)*100);
  this.dlQuestion[index].columnRPS=((+value/+this.dlQuestion[index].columnR2)*this.dlQuestion[index].weight);
}else if(qType=="DL" && index===9){
  this.dlQuestion[index].columnRPR=((+value/+this.dlQuestion[index].columnR2)*100);
  this.dlQuestion[index].columnRPS=((+value/+this.dlQuestion[index].columnR2)*this.dlQuestion[index].weight);
}else if(qType=="A" && index===0){
  this.aQuestion[index].columnRPR=((+value/+this.aQuestion[index].columnR2)*100);
  this.aQuestion[index].columnRPS=((+value/+this.aQuestion[index].columnR2)*this.aQuestion[index].weight);
}else if(qType=="A" && index===1){
  this.aQuestion[index].columnRPR=((+value/+this.aQuestion[index].columnR2)*100);
  this.aQuestion[index].columnRPS=((+value/+this.aQuestion[index].columnR2)*this.aQuestion[index].weight);
}else if(qType=="A" && index===2){
  if(value=="Y"){
    this.aQuestion[index].columnRPR=100;
    this.aQuestion[index].columnRPS=100;
  }else{
    this.aQuestion[index].columnRPR='';
    this.aQuestion[index].columnRPS='';
  }
}else if(qType=="A" && index===3){
  this.aQuestion[index].columnRPR=((+value/+this.aQuestion[index].columnR2)*100);
  this.aQuestion[index].columnRPS=((+value/+this.aQuestion[index].columnR2)*this.aQuestion[index].weight);
}else if(qType=="A" && index===4){
  this.aQuestion[index].columnRPR=((+value/+this.aQuestion[index].columnR2)*100);
  this.aQuestion[index].columnRPS=((+value/+this.aQuestion[index].columnR2)*this.aQuestion[index].weight);
}else if(qType=="A" && index===5){
  this.aQuestion[index].columnRPR=((+value/+this.aQuestion[index].columnR2)*100);
  this.aQuestion[index].columnRPS=((+value/+this.aQuestion[index].columnR2)*this.aQuestion[index].weight);
}else if(qType=="IF" && index===0){
  this.ifQuestion[index].columnRPR=((+value/+this.ifQuestion[index].columnR2)*100);
  this.ifQuestion[index].columnRPS=((+value/+this.ifQuestion[index].columnR2)*this.ifQuestion[index].weight);
}else if(qType=="IF" && index===1){
  this.ifQuestion[index].columnRPR=((+value/+this.ifQuestion[index].columnR2)*100);
  this.ifQuestion[index].columnRPS=((+value/+this.ifQuestion[index].columnR2)*this.ifQuestion[index].weight);
}else if(qType=="IF" && index===2){
  this.ifQuestion[index].columnRPR=((+value/+this.ifQuestion[index].columnR2)*100);
  this.ifQuestion[index].columnRPS=((+value/+this.ifQuestion[index].columnR2)*this.ifQuestion[index].weight);
}else if(qType=="IF" && index===3){
  this.ifQuestion[index].columnRPR=((+value/+this.ifQuestion[index].columnR2)*100);
  this.ifQuestion[index].columnRPS=((+value/+this.ifQuestion[index].columnR2)*this.ifQuestion[index].weight);
}else if(qType=="IF" && index===4){
  this.ifQuestion[index].columnRPR=((+value/+this.ifQuestion[index].columnR2)*100);
  this.ifQuestion[index].columnRPS=((+value/+this.ifQuestion[index].columnR2)*this.ifQuestion[index].weight);
}else if(qType=="IF" && index===5){
  this.ifQuestion[index].columnRPR=((+value/+this.ifQuestion[index].columnR2)*100);
  this.ifQuestion[index].columnRPS=((+value/+this.ifQuestion[index].columnR2)*this.ifQuestion[index].weight);
}else if(qType=="IF" && index===6){
  this.ifQuestion[index].columnRPR=((+value/+this.ifQuestion[index].columnR2)*100);
  this.ifQuestion[index].columnRPS=((+value/+this.ifQuestion[index].columnR2)*this.ifQuestion[index].weight);
}else if(qType=="IF" && index===7){
  this.ifQuestion[index].columnRPR=((+value/+this.ifQuestion[index].columnR2)*100);
  this.ifQuestion[index].columnRPS=((+value/+this.ifQuestion[index].columnR2)*this.ifQuestion[index].weight);
}else if(qType=="IF" && index===8){
  this.ifQuestion[index].columnRPR=((+value/+this.ifQuestion[index].columnR2)*100);
  this.ifQuestion[index].columnRPS=((+value/+this.ifQuestion[index].columnR2)*this.ifQuestion[index].weight);
}else if(qType=="IF" && index===9){
  this.ifQuestion[index].columnRPR=((+value/+this.ifQuestion[index].columnR2)*100);
  this.ifQuestion[index].columnRPS=((+value/+this.ifQuestion[index].columnR2)*this.ifQuestion[index].weight);
}else if(qType=="E" && index===0){
  this.eQuestion[index].columnRPR=((+value/+this.eQuestion[index].columnR2)*100);
  this.eQuestion[index].columnRPS=((+value/+this.eQuestion[index].columnR2)*this.eQuestion[index].weight);
}else if(qType=="E" && index===1){
  this.eQuestion[index].columnRPR=((+value/+this.eQuestion[index].columnR2)*100);
  this.eQuestion[index].columnRPS=((+value/+this.eQuestion[index].columnR2)*this.eQuestion[index].weight);
}else if(qType=="E" && index===2){
  this.eQuestion[index].columnRPR=((+value/+this.eQuestion[index].columnR2)*100);
  this.eQuestion[index].columnRPS=((+value/+this.eQuestion[index].columnR2)*this.eQuestion[index].weight);
}else if(qType=="GP" && index===0){
  if(value=="Y"){
    this.gpQuestion[index].columnRPR=100;
    this.gpQuestion[index].columnRPS=100;
  }else{
    this.gpQuestion[index].columnRPR='';
    this.gpQuestion[index].columnRPS='';
  }
}else if(qType=="GP" && index===1){
  if(value=="Y"){
    this.gpQuestion[index].columnRPR=100;
    this.gpQuestion[index].columnRPS=100;
  }else{
    this.gpQuestion[index].columnRPR='';
    this.gpQuestion[index].columnRPS='';
  }
}else if(qType=="GP" && index===2){
  this.gpQuestion[index].columnRPR=((+value/+this.gpQuestion[index].columnR2)*100);
  this.gpQuestion[index].columnRPS=((+value/+this.gpQuestion[index].columnR2)*this.gpQuestion[index].weight);
}else if(qType=="GP" && index===3){
  this.gpQuestion[index].columnRPR=((+value/+this.gpQuestion[index].columnR2)*100);
  this.gpQuestion[index].columnRPS=((+value/+this.gpQuestion[index].columnR2)*this.gpQuestion[index].weight);
}else if(qType=="GP" && index===4){
  this.gpQuestion[index].columnRPR=((+value/+this.gpQuestion[index].columnR2)*100);
  this.gpQuestion[index].columnRPS=((+value/+this.gpQuestion[index].columnR2)*this.gpQuestion[index].weight);
}else if(qType=="GP" && index===5){
  this.gpQuestion[index].columnRPR=((+value/+this.gpQuestion[index].columnR2)*100);
  this.gpQuestion[index].columnRPS=((+value/+this.gpQuestion[index].columnR2)*this.gpQuestion[index].weight);
}else if(qType=="GP" && index===6){
  this.gpQuestion[index].columnRPR=((+value/+this.gpQuestion[index].columnR2)*100);
  this.gpQuestion[index].columnRPS=((+value/+this.gpQuestion[index].columnR2)*this.gpQuestion[index].weight);
}else if(qType=="GP" && index===7){
  this.gpQuestion[index].columnRPR=((+value/+this.gpQuestion[index].columnR2)*100);
  this.gpQuestion[index].columnRPS=((+value/+this.gpQuestion[index].columnR2)*this.gpQuestion[index].weight);
}else if(qType=="GP" && index===8){
  this.gpQuestion[index].columnRPR=((+value/+this.gpQuestion[index].columnR2)*100);
  this.gpQuestion[index].columnRPS=((+value/+this.gpQuestion[index].columnR2)*this.gpQuestion[index].weight);
}else if(qType=="GP" && index===9){
  if(value=="Y"){
    this.gpQuestion[index].columnRPR=100;
    this.gpQuestion[index].columnRPS=100;
  }else{
    this.gpQuestion[index].columnRPR='';
    this.gpQuestion[index].columnRPS='';
  }
}else if(qType=="GP" && index===10){
  if(value=="Y"){
    this.gpQuestion[index].columnRPR=100;
    this.gpQuestion[index].columnRPS=100;
  }else{
    this.gpQuestion[index].columnRPR='';
    this.gpQuestion[index].columnRPS='';
  }
}else if(qType=="GP" && index===11){
  if(value=="Y"){
  this.gpQuestion[index].columnRPR=100;
  this.gpQuestion[index].columnRPS=100;
}else{
  this.gpQuestion[index].columnRPR='';
  this.gpQuestion[index].columnRPS='';
}
}else if(qType=="GP" && index===12){
  this.gpQuestion[index].columnRPR=((+value/+this.gpQuestion[index].columnR2)*100);
  this.gpQuestion[index].columnRPS=((+value/+this.gpQuestion[index].columnR2)*this.gpQuestion[index].weight);
}else if(qType=="GP" && index===13){
  if(value=="Y"){
    this.gpQuestion[index].columnRPR=100;
    this.gpQuestion[index].columnRPS=100;
  }else{
    this.gpQuestion[index].columnRPR='';
    this.gpQuestion[index].columnRPS='';
  }
}else if(qType=="GP" && index===14){
  this.gpQuestion[index].columnRPR=value;
  this.gpQuestion[index].columnRPS=this.gpQuestion[index].weight*value;
}else if(qType=="GP" && index===15){
  this.gpQuestion[index].columnRPR=value;
  this.gpQuestion[index].columnRPS=this.gpQuestion[index].weight*value;
}else if(qType=="GP" && index===16){
  this.gpQuestion[index].columnRPR=value;
  this.gpQuestion[index].columnRPS=this.gpQuestion[index].weight*value;
}else if(qType=="GP" && index===17){
  this.gpQuestion[index].columnRPR=value;
  this.gpQuestion[index].columnRPS=this.gpQuestion[index].weight*value;
}else if(qType=="GP" && index===18){
  this.gpQuestion[index].columnRPR=value;
  this.gpQuestion[index].columnRPS=this.gpQuestion[index].weight*value;
}else if(qType=="GP" && index===19){
  this.gpQuestion[index].columnRPR=value;
  this.gpQuestion[index].columnRPS=this.gpQuestion[index].weight*value;
}
}


}
