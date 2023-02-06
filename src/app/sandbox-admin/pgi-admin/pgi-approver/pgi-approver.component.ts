import { Component, OnInit, ViewChild , ChangeDetectorRef,TemplateRef} from '@angular/core';
import { DataService } from 'src/app/services/data-service.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


export interface finalDPGIData1{
  id:number;
  stateName:string;
  stateCode:string;
  districtName:string;
  distCode:string;
  status:string;
  approveRemarks:string;
  points:number;
}
@Component({
  selector: 'app-pgi-approver',
  templateUrl: './pgi-approver.component.html',
  styleUrls: ['./pgi-approver.component.css']
})



export class PgiApproverComponent implements OnInit {
  previewQuestion:any;
  pgiFinalStatus:finalDPGIData1;
  @ViewChild('districtQuestions', { static: true }) districtQuestions: TemplateRef<any>;
  constructor(private  dataService:DataService,private modalService: NgbModal) { }
districtPgi:any;
  ngOnInit() {
    this.getDistrictPGI(JSON.parse(sessionStorage.getItem('currentUser')).paramValue);
    this.getAllQuestion()
  }

  getDistrictPGI(stateId){
    this.dataService.getDistrictPGI(stateId).subscribe(res => {
    // alert(JSON.stringify(res));
    this.districtPgi=res;
    })
  }
  

  prevQuest(distObj,index){
this.modalService.open(this.districtQuestions, { size: 'xl' });
this.getLOData(distObj.distCode);
this.getDLData(distObj.distCode);
this.getAData(distObj.distCode);
this.getIFData(distObj.distCode);
this.getEData(distObj.distCode);
this.getGPData(distObj.distCode);
  }

  getAllQuestion(){
    this.dataService.getAllDistrictQuestion().subscribe(res => {
        this.previewQuestion=res;
        // this.QuestionCount=res.length;
  })
  }


  
  getLOData(districtId){
    this.dataService.getLOPGI(districtId).subscribe(res => {
      if(res.length>0){
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
}   
    })  
  }

 getDLData(districtId){
  this.dataService.getDLPGI(districtId).subscribe(res => {
    if(res.length>0){
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
}    
  })
 }

 getAData(districtId){
  this.dataService.getAPGI(districtId).subscribe(res => {
    if(res.length>0){
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
}    
  })
 }

 getIFData(districtId){
  this.dataService.getIFPGI(districtId).subscribe(res => {
    if(res.length>0){
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
}    
  })
 }

 getEData(districtId){
  this.dataService.getEPGI(districtId).subscribe(res => {
    if(res.length>0){
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
}    
  })
 }

 getGPData(districtId){
  this.dataService.getGPPGI(districtId).subscribe(res => {
    if(res.length>0){
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
}    
  })
 }


 statusUpdate(distObj,status){
this.pgiFinalStatus={id:distObj.id,stateName:distObj.stateName,stateCode:distObj.stateCode,districtName:distObj.districtName,distCode:distObj.distCode,status:status,approveRemarks:'',points:distObj.points}
this.dataService.saveDistPGI(this.pgiFinalStatus).subscribe(res => {
    if(status==="A"){
      alert("Status Approved Successfully");
    }else if(status=="R"){
      alert("Status Reject Successfully");
    }
    this.getDistrictPGI(JSON.parse(sessionStorage.getItem('currentUser')).paramValue);
  })
 }
}
