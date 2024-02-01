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

  constructor(
    private ht: HttpClient,
    private _globalData: GloblData,
    private _messageService: MessageService
  ) {
    this.getConfigData();
  }

  async getConfigData() {
    await this._globalData
      .getConfig()
      .toPromise()
      .then((re) => (this.appConfig = re));
  }

  getDateFromServer() {
    return this.ht.get(`http://localhost:1000/`);
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
    return this.ht.get(`http://localhost:1000/${methode}`);
  }
  serTokenGetData(methode: any, obj: any) {
    let resultData;
    const queryString = Object.keys(obj)
      .map((key) => `${key}=${obj[key]}`)
      .join('&');
    let header = new HttpHeaders({
      authorization: window.localStorage.getItem('UserInfo') || '',
    });
    return this.ht.get(`http://localhost:1000/${methode}?${queryString}`, {
      headers: header,
    });
    // .toPromise()
    // .then((res) => {
    //   resultData = res;
    // });
  }

  serpostData(methode: any, obj: any) {
    return this.ht.post(`http://localhost:1000/${methode}`, obj);
  }
  login(methode: any, obj: any) {
    const queryString = Object.keys(obj)
      .map((key) => `${key}=${obj[key]}`)
      .join('&');

    return this.ht
      .get(`http://localhost:1000/getNewUsers?${queryString}`, obj)
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
    return this.ht.get(`http://localhost:1000/${methode}?${queryString}`, obj);
  }

  serGetSelectedDataobject(methode: any, obj: any) {
    //moduleid
    return this.ht.get(
      `http://localhost:1000/${methode}?moduleid=${obj._id}`,
      obj
    );
  }

  getDocPermissions(obj: any) {
    return this.ht.get(
      `http://localhost:1000/getAssigneByPermissions?moduleid=${obj.moduleid}&documentid=${obj.documentid}`,
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
}
