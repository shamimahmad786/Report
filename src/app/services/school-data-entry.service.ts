import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
// import {Http, ResponseContentType} from '@angular/http';



@Injectable({
  providedIn: 'root'
})
export class SchoolDataEntryService {

  constructor(private http: HttpClient) { }
  schoolDataEntry(schoolData) {
    return this.http.post<any>(environment.school_dataEntry_url + "/schoolDataEntry", JSON.stringify(schoolData));
  }

  getSchoolDetails(schoolId) {
    // alert(schoolId);
    return this.http.post<any>(environment.school_dataEntry_url + "/getSchoolDetails", schoolId);
  }

  studentCount(schoolCountData) {
    return this.http.post<any>(environment.school_dataEntry_url + "/schoolStudentCount", JSON.stringify(schoolCountData));
  }

  getStudentCount(inputData) {
    // alert("inputData--->"+JSON.stringify(inputData));
    return this.http.post<any>(environment.school_dataEntry_url + "/getSchoolStudentCount", inputData);
  }

  academicResults(academicResultsData) {
    return this.http.post<any>(environment.school_dataEntry_url + "/academicResults", JSON.stringify(academicResultsData));
  }
  getAcademicResults(inputData) {
    return this.http.post<any>(environment.school_dataEntry_url + "/getAcademicResults", inputData);
  }
  uploadDocument(formData) {
    return this.http.post<any>(environment.school_dataEntry_url + "/uploadDocument", formData);
  }

  getDocument(folderName) {
    return this.http.post<any>(environment.school_dataEntry_url + "/getDocumentName", folderName);
  }

  downloadDocument(requestParam) {
    // alert("requestParam--->"+requestParam)

    return this.http.get<HttpResponse<Blob>>(environment.school_dataEntry_url + "/downloadDocument", { params: requestParam });
  }

  achivmentSurvey(surveyData) {
    return this.http.post<any>(environment.school_dataEntry_url + "/achivmentSurvey", JSON.stringify(surveyData));
  }

  getAchivmentSurvey() {
    return this.http.post<any>(environment.school_dataEntry_url + "/getAchivmentSurvey", {});
  }

  ncertBookDetails(ncertBookData) {
    // alert(JSON.stringify(ncertBookData))
    return this.http.post<any>(environment.school_dataEntry_url + "/ncertBookDetails", JSON.stringify(ncertBookData));
  }

  getNcertBookDetails() {
    return this.http.post<any>(environment.school_dataEntry_url + "/getNcertBookDetails", {});
  }

  anualFinance(financeData) {
    return this.http.post<any>(environment.school_dataEntry_url + "/anualFinance", JSON.stringify(financeData));
  }
  
  getAnualFinance(autonomusType) {
    return this.http.post<any>(environment.school_dataEntry_url + "/getAnualFinance", autonomusType);
  }

}
