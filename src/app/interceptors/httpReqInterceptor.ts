import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SignatureUtilService } from '../services/signature-util.service';
import { environment } from '../../environments/environment';
import * as CryptoJS from 'crypto-js';



@Injectable()
export class HttpReqInterceptor implements HttpInterceptor {
    constructor(private signatureUtil: SignatureUtilService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // alert('Request Interceptor');

        // const timeStamp = new Date().getTime() + '';
        // let plainCreds = '';
        // // add authorization header with jwt token if available
        // // let currentUser = this.authenticationService.getLoggedIn();
        // if (request.url.includes('/users/')) {
        //     plainCreds = environment.user_service_user + timeStamp + "-" + CryptoJS.AES.encrypt(environment.user_service_pass, environment.encr_pass);
        // }
        // else if (request.url.includes('/locations/')) {
        //     plainCreds = environment.loc_service_user + timeStamp + "-" + CryptoJS.AES.encrypt(environment.loc_service_pass, environment.encr_pass);
        // }
        // else if (request.url.includes('/pgiApp/')) {
        //     plainCreds = environment.pgi_service_user + timeStamp + "-" + CryptoJS.AES.encrypt(environment.pgi_service_pass, environment.encr_pass);
        // }
        
        console.log("intercept url--->"+request.url)
        if(request.url.indexOf('/school/') > -1){
            request = request.clone({
                setHeaders: {               
                    'Content-Type': 'application/json',
                    'Authorization':'Bearer '+JSON.parse(sessionStorage.getItem('currentUser')).token,
                    'userName':JSON.parse(sessionStorage.getItem('currentUser')).username           
    
                }
            });
        }
        
        else{
            // request = request.clone({
            //     setHeaders: {               
            //         'Content-Type': 'application/json',
            //     }
            // });
        }

      
        // request = request.clone({
        //     setHeaders: {
        //         Accept: 'application/json',
        //         'Content-Type': 'application/json',
        //         Authorization: 'Basic ' + btoa(plainCreds),
        //         timestamp: timeStamp,
        //         signature: this.signatureUtil.getSignature(request.body.url, request.body.param, request.body.recordId, request.body.clientIPAddress, timeStamp, request.body)

        //     }
        // });
    //    alert(request);
        return next.handle(request);
    }
}
