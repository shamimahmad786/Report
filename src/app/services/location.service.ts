import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient ,HttpHeaders} from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class LocationService {    
       
    constructor(private http: HttpClient) { }

    getStateList() {
        return this.http.get<any>(environment.user_service_url + "/getState", {});
        // return this.http.get<any>(environment.user_service_url + "/getState", '');
    }

    // getStateList(locationDto) {
    //     locationDto.url = 'locations/list/NpState';
    //     return this.http.post<any>(environment.location_service_url + '/locations/list/NpState', locationDto);
    // }

    getStateById(stateId) {
        return this.http.get<any>(environment.user_service_url + "/getStateById", {params:{"stateId": stateId}});
    }

    getDistrictList(stateId)
    {
        return this.http.get<any>(environment.user_service_url + "/getDistrict", {params:{"stateId": stateId}});
    }

    getBlockList(districtId)
    {
        return this.http.get<any>(environment.user_service_url + "/getBlock", {params:{"districtId": districtId}});
    }

    getStateListByYear(data){
        const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
        return this.http.post<any>(environment.user_service_url + "/getStateListByYear", data,{headers});
    }

}
