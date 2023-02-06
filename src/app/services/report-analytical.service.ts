import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ReportAnalyticalService {

  constructor(private http: HttpClient) { }
  tableList() {
    return this.http.post<any>(environment.user_anlytical_url + "/tableList", {});
  }
  columnList(tableId) {
    return this.http.post<any>(environment.user_anlytical_url + "/columnList", tableId);
  }

  dependTable(tableId) {
    return this.http.post<any>(environment.user_anlytical_url + "/dependTable", tableId);
  }

  getSearchQuery(queryLists){
    return this.http.post<any>(environment.user_anlytical_url + "/getSearchQuery", queryLists);
  }

  getOperator(){
    return this.http.post<any>(environment.user_anlytical_url + "/getOperator", {});
  }

  getSummarized(){
    return this.http.post<any>(environment.user_anlytical_url + "/getSummarized", {});
  }

  getMasterData(columnId){
    return this.http.post<any>(environment.user_anlytical_url + "/getMasterData", columnId);
  }


}
