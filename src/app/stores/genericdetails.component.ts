import { Component, ViewChild } from '@angular/core';
import * as _ from 'lodash';
import { HeaderComponent } from '../directives/header.component';
import { MasterserviceService } from '../masterService/masterservice.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { SavingComponent } from '../directives/saving.component';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-genericdetails',
  templateUrl: './genericdetails.component.html',
  styleUrls: ['./genericdetails.component.css'],
})
export class GenericdetailsComponent {
  @ViewChild(HeaderComponent) header: HeaderComponent;
  @ViewChild(SavingComponent) saving: SavingComponent;

  public pageTitle = 'Generic Details';
  public onSubmit: boolean = true;
  public onClear: boolean = true;
  public onEdit: boolean = false;
  public onView: boolean = false;

  public pageMode = 'NEW';
  public isEditable: any = false;
  public isShowEditable: any = true;
  public redirectToGrid: boolean = false;

  public genericDetails: any = {
    genericName: '',
    clasificationName: '',
    subClassificationName: '',
    standrdAdultDose: '',
    status: 'ZLS11',
    crability: '',
    createdt: null,
    createby: '',
    modifydt: null,
    modifyby: '',
  };
  public emptyGenericDetails = JSON.stringify(this.genericDetails);

  public geneticClassificationList: any = [];
  public geneticSubClassificationList: any = [
  ];
  public zeroLevelEntity: any = [];
  public critialityList: any = [];
  public statusList:any= [];

  constructor(
    public _service: MasterserviceService,
    private _activatedRoute: ActivatedRoute,
    private _messageService: MessageService
  ) {}

  public errorMsgs: any = {
    clasificationNameReq: '',
    genericNameReq: '',
  };

  onGetErrorMsgs(ctrl: any, showToast: any) {
    switch (ctrl) {
      case 'clasificationName':
        this.errorMsgs.clasificationNameReq =
          this.genericDetails[ctrl] == '' ||
          this.genericDetails[ctrl] == undefined ||
          this.genericDetails[ctrl] == null
            ? this._service.onGetErrorMsgs(ctrl, true, 'Clasification Name')
            : '';
        break;
      case 'genericName':
        this.errorMsgs.genericNameReq =
          this.genericDetails[ctrl] == '' ||
          this.genericDetails[ctrl] == undefined ||
          this.genericDetails[ctrl] == null
            ? this._service.onGetErrorMsgs(ctrl, true, 'Generic Name')
            : '';
        break;
    }
  }

  async ngOnInit() {
    if (Object.keys(this._service.appConfig).length == 0) {
      await this._service.getConfigData();
    }

    this._activatedRoute.paramMap.subscribe((param: ParamMap) => {
      let params: any = param.get('param');
      if (params != null) {
        params = JSON.parse(atob(params));
        let _id: number = params['_id'];
        this.getMasterData(_id);
        this.pageMode = params['mode'];
      } else {
        this.isEditable = true;
        this.pageMode = 'NEW';
      }
      this.isEditable = this.pageMode != 'VIEW';
    });

    this._service
      .serGetDataobject('getGenericClassificationDetails', { status: 'ZLS11' })
      .subscribe((dt: any) => {
        this.geneticClassificationList=dt.data;        
      });

    this._service
      .serGetDataobject('getGenericSubClassificationDetails', { status: 'ZLS11' })
      .subscribe((dt: any) => {
        this.geneticSubClassificationList=dt.data;
      });

      this._service
      .serGetDataobject('getGeneralMaster', { masterid: 'ZLS1' })
      .subscribe((dt: any) => {
        this.statusList = dt.data[0].subMasterData;
      });
      this._service
      .serGetDataobject('getGeneralMaster', { masterid: 'ZLCra1' })
      .subscribe((dt: any) => {
        this.critialityList = dt.data[0].subMasterData;
      });

    this._service.serGetData('getGeneralMaster').subscribe((dt: any) => {
      this.zeroLevelEntity = dt.data;
      let statusList = _.filter(this.zeroLevelEntity, {
        masterid: 'ZLC9',
      });
      _.forEach(statusList, (ident, index) => {
        this.statusList.push({
          label: ident.mastername,
          value: ident._id,
        });
      });
    });
  }

  getMasterData(genericDetailsId: any) {
    this._service
      .serGetDataobject('getGenericDetails', { _id: genericDetailsId })
      .subscribe((dt: any) => {
        console.log('dt', dt);
        this.genericDetails = dt.data[0];
        this.genericDetails['_id'] = this.genericDetails._id;
        this.isShowEditable = !this.isEditable && this.pageMode != 'NEW';
      });
  }

  onGridClick() {}

  onSaveClick() {
    // let objectstore = ['genericName'];
    // _.forEach(objectstore, (ctrl) => {
    //   this._service.onGetErrorMsgs(this.genericDetails, ctrl, true);
    // });

    let objectstore = ['genericName', 'clasificationName'];
    _.forEach(objectstore, (ctrl) => {
      this.onGetErrorMsgs(ctrl, true);
    });

    let errorExist = this._service.showErr(this.errorMsgs);
    if (errorExist) {
      this._messageService.add({
        sticky: true,
        severity: 'warn',
        summary: 'Warn',
        detail: 'Please Check the below Errors',
      });
      return;
    }

    let savingJson = this.genericDetails;

    this.saving.onSaveJson(this.pageTitle, 'insertGenericDetails', [
      savingJson,
    ]);

    this.onClearClick();
    this.redirectToGrid = this.pageMode == 'NEW' ? false : true;
  }
  onClearClick() {
    this.genericDetails = JSON.parse(this.emptyGenericDetails);
  }
}
