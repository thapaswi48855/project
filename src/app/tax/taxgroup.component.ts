import { Component, ViewChild } from '@angular/core';
import { HeaderComponent } from '../directives/header.component';
import { SavingComponent } from '../directives/saving.component';
import { MasterserviceService } from '../masterService/masterservice.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { MessageService } from 'primeng/api';
import * as _ from 'lodash';

@Component({
  selector: 'app-taxgroup',
  templateUrl: './taxgroup.component.html',
  // styleUrls: ['./taxgroup.component.css']
})
export class TaxgroupComponent {
  @ViewChild(HeaderComponent) header: HeaderComponent;
  @ViewChild(SavingComponent) saving: SavingComponent;

  public pageTitle: string = 'Tax Group';
  public onSubmit: boolean = true;
  public onClear: boolean = true;
  public onEdit: boolean = false;
  public onView: boolean = false;

  public pageMode = 'NEW';
  public isEditable: any = false;
  public isShowEditable: any = true;
  public redirectToGrid: boolean = false;
  public serviceGroupList: any = [];

  public taxgroup: any = {
    taxGrpId: 0,
    taxgrouptype: 'ZLTGT11',
    taxgroup: '',
    taxgrpcd: '',
    taxgroupcode: '',
    displayorder: '',
    status: 'ZLS11',
    createdt: null,
    createby: this._service.getUserVal('userid'),
    modifydt: null,
    modifyby: '',
  };
  public emptytaxgroup = JSON.stringify(this.taxgroup);

  constructor(
    public _service: MasterserviceService,
    private _activatedRoute: ActivatedRoute,
    private _messageService: MessageService
  ) {}

  public errorMsgs: any = {
    taxgroupNameReq: '',
    taxgroupcodeNameReq: '',
  };
  public taxGrpCodeList: any = [];
  public taxGrpTypeList: any = [];
  public statusList: any = [];
  public emptyErrorMsgs = JSON.stringify(this.errorMsgs);
  onGetErrorMsgs(ctrl: any, showToast: any) {
    switch (ctrl) {
      case 'taxgroup':
        this.errorMsgs.taxgroupNameReq =
          this.taxgroup[ctrl] == '' ||
          this.taxgroup[ctrl] == undefined ||
          this.taxgroup[ctrl] == null
            ? this._service.onGetErrorMsgs(ctrl, true, 'Tax Group Name')
            : '';
        break;
      case 'taxgroupcode':
        this.errorMsgs.taxgroupcodeNameReq =
          this.taxgroup[ctrl] == '' ||
          this.taxgroup[ctrl] == undefined ||
          this.taxgroup[ctrl] == null
            ? this._service.onGetErrorMsgs(ctrl, true, 'Tax Group Code')
            : '';
        break;
    }
  }

  async ngOnInit() {
    if (Object.keys(this._service.appConfig).length == 0) {
      await this._service.getConfigData();
    }
    //
    this._service
      .serGetDataobject('getGeneralMaster', { masterid: 'ZLTGT1' })
      .subscribe((dt: any) => {
        this.taxGrpTypeList = dt.data[0].subMasterData;
      });
    this._service
      .serGetDataobject('getGeneralMaster', { masterid: 'ZLTGC1' })
      .subscribe((dt: any) => {
        this.taxGrpCodeList = dt.data[0].subMasterData;
      });
    this._service
      .serGetDataobject('getGeneralMaster', { masterid: 'ZLS1' })
      .subscribe((dt: any) => {
        this.statusList = dt.data[0].subMasterData;
      });

    this._activatedRoute.paramMap.subscribe((param: ParamMap) => {
      let params: any = param.get('param');
      if (params != null) {
        params = JSON.parse(atob(params));
        let taxGrpId: number = params['taxGrpId'];
        this.getMasterData(taxGrpId);
        this.pageMode = params['mode'];
      } else {
        this.isEditable = true;
        this.pageMode = 'NEW';
      }
      this.isEditable = this.pageMode != 'VIEW';
    });
  }

  getMasterData(taxGrpId: any) {
    this._service
      .serGetDataobject('getTaxGroup', { taxGrpId: taxGrpId })
      .subscribe((dt: any) => {
        this.taxgroup = {
          taxGrpId: dt.data[0].taxGrpId,
          taxgrouptype: dt.data[0].taxgrouptype,
          taxgroup: dt.data[0].taxgroup,
          taxgrpcd: dt.data[0].taxgrpcd,
          taxgroupcode: dt.data[0].taxgroupcode,
          displayorder: dt.data[0].displayorder,
          status: dt.data[0].status,
          createdt: dt.data[0].createdt,
          createby: dt.data[0].createby,
          modifydt: null,
          modifyby: this._service.getUserVal('userid'),
        };
        this.isShowEditable = !this.isEditable && this.pageMode != 'NEW';
      });
  }

  async onSaveClick() {
    let objectstore = ['taxgroup', 'taxgroupcode'];
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
    this.taxgroup.taxgrpcd = this.taxgroup.taxgroup.toLowerCase();
    let savingJson = this.taxgroup;

    await this.saving.onSaveJson(this.pageTitle, 'insertTaxGroup', [
      savingJson,
    ]);

    this.redirectToGrid = this.pageMode == 'NEW' ? false : true;
    this.onClearClick();
  }
  onClearClick() {
    if (this.pageMode == 'NEW') {
      this.taxgroup = JSON.parse(this.emptytaxgroup);
      this.isEditable = true;
    } else {
      this.isEditable = false;
    }
    this.errorMsgs = JSON.parse(this.emptyErrorMsgs);
  }
}
