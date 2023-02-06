import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import {concatMap, tap} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ReportServiceService {

  constructor(private http: HttpClient) { }

  
  getReportName()
  {
   // alert(environment.user_report_url)
    return this.http.get<any>(environment.user_report_url + "/getReportName", {});
  }

  getExecutedData(executeQuery){
return this.http.post<any>(environment.user_report_url + "/getExecutedData", executeQuery);
  }

  getStaticReportMaster(reportType){
    return this.http.post<any>(environment.user_report_url + "/getStaticReportMaster", reportType);
  }

  getTabularData(tabularId){
    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
    return this.http.post<any>(environment.user_report_url + "/getTabularData", tabularId,{headers})
  }


  // getTabularData(tabularId){
  //   return this.http.post<any>(environment.user_report_url + "/getTabularData", tabularId)    
  // }

  getAspirationalData(tabularId){
    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
    // alert("After change--->"+JSON.stringify(tabularId));
    return this.http.post<any>(environment.user_report_url + "/getAspirationalData", tabularId,{headers})
    // .pipe(
    //   tap(res => console.log('First result', res)),
    //   concatMap((res: { timeout: number }) => this.http.post<any>(environment.user_report_url + "/getTabularData", tabularId)),
    //   tap(res => console.log('Second result', res)),
    //   concatMap((res: { timeout: number }) => this.http.post<any>(environment.user_report_url + "/getTabularData", tabularId)),
    //   tap(res => console.log('Third result', res)),
    // )
  }


  getTabularData1(tabularId){
    
    // alert("After change--->"+JSON.stringify(tabularId));
    return this.http.post<any>(environment.user_report_url + "/getTabularData", tabularId)
    // .pipe(
    //   tap(res => console.log('First result', res)),
    //   concatMap((res: { timeout: number }) => this.http.post<any>(environment.user_report_url + "/getTabularData", tabularId)),
    //   tap(res => console.log('Second result', res)),
    //   concatMap((res: { timeout: number }) => this.http.post<any>(environment.user_report_url + "/getTabularData", tabularId)),
    //   tap(res => console.log('Third result', res)),
    // )
  }


  


  getTabularData2(tabularId){
    
    // alert("After change--->"+JSON.stringify(tabularId));
    return this.http.post<any>(environment.user_report_url + "/getTabularData", tabularId)
    // .pipe(
    //   tap(res => console.log('First result', res)),
    //   concatMap((res: { timeout: number }) => this.http.post<any>(environment.user_report_url + "/getTabularData", tabularId)),
    //   tap(res => console.log('Second result', res)),
    //   concatMap((res: { timeout: number }) => this.http.post<any>(environment.user_report_url + "/getTabularData", tabularId)),
    //   tap(res => console.log('Third result', res)),
    // )
  }
  getTabularData3(tabularId){
    
    // alert("After change--->"+JSON.stringify(tabularId));
    return this.http.post<any>(environment.user_report_url + "/getTabularData", tabularId)
    // .pipe(
    //   tap(res => console.log('First result', res)),
    //   concatMap((res: { timeout: number }) => this.http.post<any>(environment.user_report_url + "/getTabularData", tabularId)),
    //   tap(res => console.log('Second result', res)),
    //   concatMap((res: { timeout: number }) => this.http.post<any>(environment.user_report_url + "/getTabularData", tabularId)),
    //   tap(res => console.log('Third result', res)),
    // )
  }
  getTabularData4(tabularId){
    
    // alert("After change--->"+JSON.stringify(tabularId));
    return this.http.post<any>(environment.user_report_url + "/getTabularData", tabularId)
    // .pipe(
    //   tap(res => console.log('First result', res)),
    //   concatMap((res: { timeout: number }) => this.http.post<any>(environment.user_report_url + "/getTabularData", tabularId)),
    //   tap(res => console.log('Second result', res)),
    //   concatMap((res: { timeout: number }) => this.http.post<any>(environment.user_report_url + "/getTabularData", tabularId)),
    //   tap(res => console.log('Third result', res)),
    // )
  }
  getMasterData(msData){
    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
    return this.http.post<any>(environment.user_report_url + "/getMasterData", msData,{headers});
  }
  // getMasterData(msData){
  //   return this.http.post<any>(environment.user_report_url + "/getMasterData", msData);
  // }

  getChartsData(tabularId){
    return this.http.post<any>(environment.user_report_url + "/getChartsData", tabularId);
  }

  getUserReport(groupId){
    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
    return this.http.post<any>(environment.user_report_url + "/getUserReport", groupId, {headers});
  }

  // getUserReport(groupId){
  //   return this.http.post<any>(environment.user_report_url + "/getUserReport", groupId);
  // }  

  getReportbyId(id)
  {
   return this.http.post<any>(environment.user_report_url + "/getReportById", id)
  }
  getReportDomain(){
    return this.http.post<any>(environment.user_report_url + "/getReportDomain", {})
  }

  
  getReportTag(){
    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
    return this.http.post<any>(environment.user_report_url + "/getReportTag", '',{headers})
  }
  // getReportTag(){
  //   return this.http.post<any>(environment.user_report_url + "/getReportTag", {})
  // }

  
  updateDashboard(listObj){
    return this.http.post<any>(environment.user_report_url + "/ReportCategory", listObj)
  }

  updateReport(reportData){
    return this.http.post<any>(environment.user_report_url + "/updateReport", reportData)
  }
  
  getDashboardbyCategory(listObj){
    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
    return this.http.post<any>(environment.user_report_url + "/GetReportByCategory", listObj,{headers})
  }

  getPublicGroupId(){
    return this.http.post<any>(environment.user_report_url + "/getPublicGroupId", '')
  }
  
  getSedashboardData(data){
    // alert("getSedashboardData---"+JSON.stringify(data))
    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
    return this.http.post<any>(environment.user_report_url + "/getSedashboardData", data,{headers})
  }

}
