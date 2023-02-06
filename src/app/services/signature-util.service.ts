import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class SignatureUtilService {

  strArr: any[];
  data: any = {};
  constructor() { }

  getSignature(inUrl, inParam, inRecordId, inIP, timeStamp, inData) {

    const secret = environment.sign_key;
    if (undefined === inParam) {
      inParam = 'null';
    }
    let detail = inParam + timeStamp;
    let data;

    detail = detail + this.getHashCode(detail);

    if (undefined != inRecordId && null != inRecordId && inRecordId > 0) {
      detail = detail + inRecordId;
    }

    if (undefined != inIP && null != inIP && "" != inIP) {
      detail = detail + inIP;
    }

    if ("" != inUrl)
      this.strArr = [];
    {
      this.strArr = inUrl.split("/");

      if (this.strArr[2] === 'AdminUser') {
        detail += this.getSignatureDetails(inData);
      }
      data = this.strArr[0] + timeStamp + this.strArr[1] + this.strArr[2] + detail;

    }
    var hash = CryptoJS.HmacSHA256(data, secret);
    var hashInBase64 = CryptoJS.enc.Base64.stringify(hash);

    return hashInBase64;
  }

  getHashCode(data) {
    var hash = 0;
    var char;

    if (data.length == 0) return 0;
    for (var i = 0; i < data.length; i++) {
      char = data.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
  }

  getSignatureDetails(inData) {


    var signatureDetail = "";

    if (undefined != inData.userId && null != inData.userId) {
      signatureDetail += inData.userId;
    }
    if (undefined != inData.password && null != inData.password) {
      signatureDetail += inData.password;
    }
    if (undefined != inData.oldPassword && null != inData.oldPassword) {
      signatureDetail += inData.oldPassword;
    }
    if (undefined != inData.newPassword && null != inData.newPassword) {
      signatureDetail += inData.newPassword;
    }
    if (undefined != inData.searchKey && null != inData.searchKey) {
      signatureDetail += inData.searchKey;
    }
    if (undefined != inData.userPojo && null != inData.userPojo) {

      if (undefined != inData.userPojo.userId && null != inData.userPojo.userId) {
        signatureDetail += inData.userPojo.userId;
      }
      if (undefined != inData.userPojo.password && null != inData.userPojo.password) {
        signatureDetail += inData.userPojo.password;
      }
      if (undefined != inData.userPojo.emailId && null != inData.userPojo.emailId) {
        signatureDetail += inData.userPojo.emailId;
      }
      if (undefined != inData.userPojo.mobileNo && null != inData.userPojo.mobileNo) {
        signatureDetail += inData.userPojo.mobileNo;
      }
      if (undefined === inData.userPojo.recordId) {
        signatureDetail += "null";
      }
      else {
        signatureDetail += inData.userPojo.recordId;
      }

      if (undefined != inData.userPojo.pwdSessionKey && null != inData.userPojo.pwdSessionKey) {
        signatureDetail += inData.userPojo.pwdSessionKey;
      }
    }

    return signatureDetail;
  }


}
