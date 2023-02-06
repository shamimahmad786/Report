import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor(private http: HttpClient) { }


  getStateScore(indReqDto) {
    return this.http.post<any>(environment.user_service_url + "/getStateIndScore", indReqDto);
  }

  getCycle(year) {
    return this.http.get<any>(environment.user_service_url + "/getCycle", { params: { "year": year } });
  }

  getCategory() {
    return this.http.get<any>(environment.user_service_url + "/getCategory", {});
  }

  getDomain(catId) {
    return this.http.get<any>(environment.user_service_url + "/getDomain", { params: { "categoryId": catId } });
  }

  getStateIndicators(domId) {
    return this.http.get<any>(environment.user_service_url + "/getStateIndicator", { params: { "domainId": domId } });
  }

  getStateIndValue(indReqDto) {
    return this.http.post<any>(environment.user_service_url + "/getIndValueById", indReqDto);
  }

  SaveStateIndScore(indReqDto) {
    return this.http.post<any>(environment.user_service_url + "/saveStateIndScore", indReqDto);
  }

  getDistrictQuestion(domainId) {
    return this.http.post<any>(environment.user_service_url + "/getDistrictQuestion",domainId);
  }

  getAllDistrictQuestion(){
    
    return this.http.get<any>(environment.user_service_url + "/getAllDistrictQuestion",{});
  }
  


  getAllTables(tableId)
  {
    return this.http.get<any>(environment.user_service_url + "/getTables", { params: { "tableId": tableId } });
  }

  getTableFields(tableId)
  {
    return this.http.get<any>(environment.user_service_url + "/getTableField", { params: { "tableId": tableId } });
  }

  getResultSet(indReqDto)
  {
    return this.http.post<any>(environment.user_service_url + "/getQueryResult", indReqDto);
  }

  getJoinDetails(tableId)
  {
    return this.http.get<any>(environment.user_service_url + "/getJoinDetails", { params: { "tableId": tableId } });
  }

  getJoinResultSet(indReqDto)
  {
    return this.http.post<any>(environment.user_service_url + "/getJoinResult", indReqDto);
  }

  saveLOPGI(data,questType){
    if(questType==="LO"){
    return this.http.post<any>(environment.user_service_url + "/saveDistLoQuestion", data);
    }else if(questType==="DL"){
      return this.http.post<any>(environment.user_service_url + "/saveDistDLQuestion", data);
    }else if(questType==="A"){
      return this.http.post<any>(environment.user_service_url + "/saveDistAQuestion", data);
    }else if(questType==="IF"){
      return this.http.post<any>(environment.user_service_url + "/saveDistIFQuestion", data);
    }else if(questType==="E"){
      return this.http.post<any>(environment.user_service_url + "/saveDistEQuestion", data);
    }else if(questType==="GP"){
      return this.http.post<any>(environment.user_service_url + "/saveDistGPQuestion", data);
    }
  }
  getLOPGI(districtId){
    return this.http.post<any>(environment.user_service_url + "/getLOPGI", districtId);
  }

  getDLPGI(districtId){
    return this.http.post<any>(environment.user_service_url + "/getDLPGI", districtId);
  }
  getAPGI(districtId){
    return this.http.post<any>(environment.user_service_url + "/getAPGI", districtId);
  }
  getIFPGI(districtId){
    return this.http.post<any>(environment.user_service_url + "/getIFPGI", districtId);
  }
  getEPGI(districtId){
    return this.http.post<any>(environment.user_service_url + "/getEPGI", districtId);
  }
  getGPPGI(districtId){
    return this.http.post<any>(environment.user_service_url + "/getGPPGI", districtId);
  }
  getDistrictPGI(stateId){
    return this.http.post<any>(environment.user_service_url + "/getDistrictPGI", stateId);
  }
  saveDistPGI(districtData){
    return this.http.post<any>(environment.user_service_url + "/saveDistPGI", districtData);
  }
  getFinalPGIStatus(distCode){
    return this.http.post<any>(environment.user_service_url + "/getFinalPGIStatus", distCode);
  }
}
