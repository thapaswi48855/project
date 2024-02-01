import { Component, ViewChild } from '@angular/core';
import { HeaderComponent } from '../directives/header.component';
import { SavingComponent } from '../directives/saving.component';
import { MasterserviceService } from '../masterService/masterservice.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { MessageService } from 'primeng/api';
import * as _ from 'lodash';

@Component({
  selector: 'app-servicegroup',
  templateUrl: './servicegroup.component.html',
  // styleUrls: ['./servicegroup.component.css']
})
export class ServicegroupComponent {
  @ViewChild(HeaderComponent) header: HeaderComponent;
  @ViewChild(SavingComponent) saving: SavingComponent;

  public pageTitle: string = 'Service Group';
  public onSubmit: boolean = true;
  public onClear: boolean = true;
  public onEdit: boolean = false;
  public onView: boolean = false;

  public pageMode = 'NEW';
  public isEditable: any = false;
  public isShowEditable: any = true;
  public redirectToGrid: boolean = false;

  public servicegroup: any = {
    servicegroupname: '',
    displayorder: '',
    status: 'ZLS11',
    code: '',
    createdt: null,
    createby: '',
    modifydt: null,
    modifyby: '',
  };
  public emptyServicegroup = JSON.stringify(this.servicegroup);

  constructor(
    public _service: MasterserviceService,
    private _activatedRoute: ActivatedRoute,
    private _messageService: MessageService
  ) {}

  public errorMsgs: any = {
    servicegroupname: '',
  };
  public statusList:any =[];
  public emptyErrorMsgs = JSON.stringify(this.errorMsgs);
  onGetErrorMsgs(ctrl: any, showToast: any) {
    switch (ctrl) {
      case 'servicegroupname':
        this.errorMsgs.servicegroupname =
          this.servicegroup[ctrl] == '' ||
          this.servicegroup[ctrl] == undefined ||
          this.servicegroup[ctrl] == null
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
      .serGetDataobject('getGeneralMaster', { masterid: 'ZLS1' })
      .subscribe((dt: any) => {
        this.statusList = dt.data[0].subMasterData;
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

  getMasterData(servicegrpId: any) {
    this._service
      .serGetDataobject('getServiceGroupMaster', { _id: servicegrpId })
      .subscribe((dt: any) => {
        console.log('dt', dt);
        this.servicegroup = dt.data[0];
        this.servicegroup['_id'] = this.servicegroup._id;
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

    let savingJson = this.servicegroup;

    await this.saving.onSaveJson(this.pageTitle, 'insertServiceGroupMaster', [
      savingJson,
    ]);

    this.redirectToGrid = this.pageMode == 'NEW' ? false : true;
    this.onClearClick();
  }
  onClearClick() {
    if (this.pageMode == 'NEW') {
      this.servicegroup = JSON.parse(this.emptyServicegroup);
      this.isEditable = true;
    } else {
      this.isEditable = false;
    }
    this.errorMsgs = JSON.parse(this.emptyErrorMsgs);
  }
}
