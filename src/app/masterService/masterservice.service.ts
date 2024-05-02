import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GloblData } from '../globaldata';
import * as _ from 'lodash';

import { retry, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class MasterserviceService {
  secretKey = 'your-secret-key';
  public errorMsgs: any = { department: '' };
  public appConfig: any = {};
  public apiHostUrl = '';
  public summary: any;
  private counters: Map<string, number> = new Map<string, number>();
  constructor(
    private ht: HttpClient,
    private _globalData: GloblData,
    private _messageService: MessageService
  ) {
    this.getConfigData();
    // Initialize the counter from local storage or default to 0 if not found
    const savedCounters = localStorage.getItem('sequenceCounters');
    if (savedCounters) {
      this.counters = new Map<string, number>(JSON.parse(savedCounters));
    }
  }

  async getConfigData() {
    await this._globalData
      .getConfig()
      .toPromise()
      .then((re) => (this.appConfig = re));
    console.log('apiHostUrl', this.appConfig.apiHostUrl);
  }

  getDateFromServer() {
    return this.ht.get(`https://node-1-bi29.onrender.com/`);
  }
  getDate() {
    return this.getDateFromServer().subscribe((dt: any) => {
      console.log('dtDate', dt);
    });
  }

  getErrorMsgs(error: any) {
    return this.appConfig[error];
  }

  getGridColumns(list: any) {
    return this.appConfig[list];
  }

  onGetErrorMsgs(ctrl: any, showToast: any, ctrlName?: any) {
    return (this.errorMsgs[ctrl] = `${ctrlName} Required`);
  }

  showErr(objError: any) {
    let isError = false;
    this.summary = '';
    this.errorSumary(objError);
    if (this.summary != '') {
      isError = true;
      this._messageService.add({
        sticky: true,
        severity: 'warn',
        summary: '',
        detail: this.summary,
      });
    }
    return isError;
  }
  errorSumary(objError: any) {
    let objKeys = Object.keys(objError);
    _.forEach(objKeys, (key, ind) => {
      console.log('key', objError[key]);
      if (objError[key].constructor === Object) {
        let childObj = objError[key];
        this.errorSumary(childObj);
      } else if (objError[key] != '') {
        this.summary += ` <div> ${objError[key]} </div> `;
      }
    });
  }

  onSaveJson(pageTitle: any, methode: any, masterData: any) {
    this.serpostData(methode, masterData).subscribe((dt: any) => {
      console.log(dt);
      return dt;
      // if (dt.status == '200') {
      //   this._messageService.add({
      //     sticky: true,
      //     severity: 'success',
      //     summary: 'Success',
      //     detail: 'Create Succesfull',
      //   });
      // }
    });
  }

  // getDocPermissions(parameters:any){

  // }

  serGetData(methode: any) {
    return this.ht.get(`https://node-1-bi29.onrender.com/${methode}`);
  }
  serTokenGetData(methode: any, obj: any) {
    let resultData;
    const queryString = Object.keys(obj)
      .map((key) => `${key}=${obj[key].toString()}`)
      .join('&');
    let header = new HttpHeaders({
      authorization: window.localStorage.getItem('UserInfo') || '',
    });
    return this.ht.get(
      `https://node-1-bi29.onrender.com/${methode}?${queryString}`,
      {
        headers: header,
      }
    );
    // .toPromise()
    // .then((res) => {
    //   resultData = res;
    // });
  }

  serpostData(methode: any, obj: any) {
    return this.ht.post(`https://node-1-bi29.onrender.com/${methode}`, obj);
  }
  login(methode: any, obj: any) {
    const queryString = Object.keys(obj)
      .map((key) => `${key}=${obj[key]}`)
      .join('&');

    return this.ht
      .get(`https://node-1-bi29.onrender.com/getNewUsers?${queryString}`, obj)
      .pipe(retry(1), catchError(this.handleError));
  }
  // const encryptedData = AES.encrypt(JSON.stringify(loginJson), this.secretKey).toString();

  serGetDataobject(methode: any, obj: any) {
    //   const queryString = Object.keys(obj)
    // .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`)
    // .join('&');

    const queryString = Object.keys(obj)
      .map((key) => `${key}=${obj[key]}`)
      .join('&');

    //moduleid
    return this.ht.get(
      `https://node-1-bi29.onrender.com/${methode}?${queryString}`,
      obj
    );
  }

  serGetSelectedDataobject(methode: any, obj: any) {
    //moduleid
    return this.ht.get(
      `https://node-1-bi29.onrender.com/${methode}?moduleid=${obj.moduleid}`,
      obj
    );
  }

  getDocPermissions(obj: any) {
    return this.ht.get(
      `https://node-1-bi29.onrender.com/getAssigneByPermissions?moduleid=${obj.moduleid}&documentid=${obj.documentid}`,
      obj
    );
    // return this
    // .serGetData('getAssigneByPermissions',obj)
    // .subscribe((dt: any) => {
    //   console.log(dt);
    //   // this.onSelectSubModuleList(selectModule);
    // });
  }
  getDocPermission(obj: any) {
    this.getDocPermissions(obj).subscribe((dt: any) => {
      console.log('dt', dt);
    });
  }
  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
  isMobileDevice() {
    return window.innerWidth <= 768; // Adjust the threshold as needed
  }

  // Method to get the next sequential number for a specific identifier
  // getNextSequenceNumber(componentId: string): number {
  //   let counter = this.counters.get(componentId) || 0;
  //   counter += 1;
  //   this.counters.set(componentId, counter);
  //   // Save the updated counters to local storage
  //   localStorage.setItem('sequenceCounters', JSON.stringify(Array.from(this.counters.entries())));
  //   // return
  //   // this.ht.get(
  //   //   `https://node-1-bi29.onrender.com/getSequncy`,
  //   //   this.counters.entries()
  //   // );
  //   return counter;
  // }

  // Method to get the next sequential number for a given component
  getNextSequenceNumber(componentId: string): any {
    // return this.http.post<number>(`${this.baseUrl}/${componentId}/next`, {});
    return this.ht.post(
      `https://node-1-bi29.onrender.com/${componentId}/next`,
      {}
    );
  }
  getUserInfo(key: any) {
    let userInfo: any = window.localStorage.getItem('UserInfo');
    let userDet = JSON.parse(userInfo);
    return userDet[0][key];
  }

  getUserVal(key: any) {
    let userKeyVal = this.getUserInfo(key);
    return userKeyVal;
  }

  getKeyFilter(key: any) {
    let keyFilter :any;
    switch (key) {
      case 'alpha' :
       keyFilter = /^[a-zA-Z]+$/;
        break;
      case 'num' :
       keyFilter = /^[0-9]+$/;
        break;
        case 'alphanum' :
       keyFilter = /^[a-zA-Z0-9]+$/;
        break;
    }
    return keyFilter ;
  }
}
