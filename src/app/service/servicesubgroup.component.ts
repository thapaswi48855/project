import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { MasterserviceService } from '../masterService/masterservice.service';
import { MessageService } from 'primeng/api';
import { HeaderComponent } from '../directives/header.component';
import { SavingComponent } from '../directives/saving.component';
import * as _ from 'lodash';

@Component({
  selector: 'app-servicesubgroup',
  templateUrl: './servicesubgroup.component.html',
  // styleUrls: ['./servicesubgroup.component.css']
})
export class ServicesubgroupComponent {
  @ViewChild(HeaderComponent) header: HeaderComponent;
  @ViewChild(SavingComponent) saving: SavingComponent;

  public pageTitle: string = 'Service Sub Group';
  public onSubmit: boolean = true;
  public onClear: boolean = true;
  public onEdit: boolean = false;
  public onView: boolean = false;

  public pageMode = 'NEW';
  public isEditable: any = false;
  public isShowEditable: any = true;
  public redirectToGrid: boolean = false;
  public serviceGroupList:any =[];
  public accountHeadList:any =[];

  public servicesubgroup: any = {
    servicegroupname: '',
    accounthead:'',
    status: 'ZLS11',
    servicesubgroupname:'',
    displayorder: '',   
    code: '',
    createdt: null,
    createby: '',
    modifydt: null,
    modifyby: '',
  };
  public emptyServicesubgroup = JSON.stringify(this.servicesubgroup);

  constructor(
    public _service: MasterserviceService,
    private _activatedRoute: ActivatedRoute,
    private _messageService: MessageService
  ) {}

  public errorMsgs: any = {
    servicegroupname: '',
  };
  public statusList:any=[];
  public emptyErrorMsgs = JSON.stringify(this.errorMsgs);
  onGetErrorMsgs(ctrl: any, showToast: any) {
    switch (ctrl) {
      case 'servicegroupname':
        this.errorMsgs.servicegroupname =
          this.servicesubgroup[ctrl] == '' ||
          this.servicesubgroup[ctrl] == undefined ||
          this.servicesubgroup[ctrl] == null
            ? this._service.onGetErrorMsgs(
                'servicegroupname',
                true,
                'Service Group Name'
              )
            : '';
        break;
    }
  }

  async ngOnInit() {
    if (Object.keys(this._service.appConfig).length == 0) {
      await this._service.getConfigData();
    }
    this._service
    .serGetDataobject('getServiceGroupMaster', { status:'ZLS11' })
    .subscribe((dt: any) => {
      this.serviceGroupList = dt.data;
    });

    this._service
    .serGetDataobject('getGeneralMaster', { masterid: 'ZLS1' })
    .subscribe((dt: any) => {
      this.statusList = dt.data[0].subMasterData;
    });
    this._service
    .serGetDataobject('getGeneralMaster', { masterid: 'ZLAH1' })
    .subscribe((dt: any) => {
      this.accountHeadList = dt.data[0].subMasterData;
    });


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
  }

  getMasterData(serviceSubGrpId: any) {
    this._service
      .serGetDataobject('getServiceSubGroupMaster', { _id: serviceSubGrpId })
      .subscribe((dt: any) => {
        console.log('dt', dt);
        this.servicesubgroup = dt.data[0];
        this.servicesubgroup['_id'] = this.servicesubgroup._id;
        this.isShowEditable = !this.isEditable && this.pageMode != 'NEW';
      });
  }

  async onSaveClick() {
    let objectstore = ['servicegroupname'];
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

    let savingJson = this.servicesubgroup;

    await this.saving.onSaveJson(this.pageTitle, 'insertServiceSubGroupMaster', [
      savingJson,
    ]);

    this.redirectToGrid = this.pageMode == 'NEW' ? false : true;
    this.onClearClick();
  }
  onClearClick() {
    if (this.pageMode == 'NEW') {
      this.servicesubgroup = JSON.parse(this.emptyServicesubgroup);
      this.isEditable = true;
    } else {
      this.isEditable = false;
    }
    this.errorMsgs = JSON.parse(this.emptyErrorMsgs);
  }
}
