import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {
    
   }

   messageString

  login(userDto) {
     return this.http.post<any>(environment.user_service_url + "/sign-in", userDto);
  }

  getRoles()
  {
    return this.http.get<any>(environment.user_service_url + "/getRole")
  }

  register(userDto)
  {
    return this.http.post<any>(environment.user_service_url + "/sign-up", userDto)
  }

  getUsers()
  {
    return this.http.get<any>(environment.user_service_url + "/getUserList", {params:{search : 'A'}});
  }


  
  getUsersbyId(id)
  {
    return this.http.get<any>(environment.user_service_url + "/getUserById", {params:id});
  }

  deleteUser(id)
  {
   return this.http.post<any>(environment.user_service_url + "/delete-user", id)
  
  }
  saveGroup(obj){
    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
    return this.http.post<any>(environment.user_service_url + "/addGroup", obj,{headers});
  }
  // saveGroup(obj){
  //   return this.http.post<any>(environment.user_service_url + "/addGroup", obj);
  // }
  getAllGroup()
  {
    return this.http.post<any>(environment.user_service_url + "/getAllGroup",'');
  }

  groupById(id){
    return this.http.post<any>(environment.user_service_url + "/getGroupDetailsById", id);
  }

  deleteGroup(id)
  {
   return this.http.post<any>(environment.user_service_url + "/deleteGroup", id)
  }



  setMessage(message) {
    this.messageString=message
   }

 }
