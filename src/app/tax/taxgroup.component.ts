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
  public serviceGroupList:any =[];

  public taxgroup: any = {
    taxgrouptype: 'ZLTGT11',
    taxgroup:'',
    taxgroupcode: '',
    displayorder:'',
    status: 'ZLS11',   
    createdt: null,
    createby: '',
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
    servicegroupname: '',
  };
  public taxGrpCodeList:any=[];
  public taxGrpTypeList:any=[];
  public statusList:any=[];
  public emptyErrorMsgs = JSON.stringify(this.errorMsgs);
  onGetErrorMsgs(ctrl: any, showToast: any) {
    switch (ctrl) {
      case 'servicegroupname':
        this.errorMsgs.servicegroupname =
          this.taxgroup[ctrl] == '' ||
          this.taxgroup[ctrl] == undefined ||
          this.taxgroup[ctrl] == null
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

  getMasterData(taxGrpId: any) {
    this._service
      .serGetDataobject('getTaxGroup', { _id: taxGrpId })
      .subscribe((dt: any) => {
        console.log('dt', dt);
        this.taxgroup = dt.data[0];
        this.taxgroup['_id'] = this.taxgroup._id;
        this.isShowEditable = !this.isEditable && this.pageMode != 'NEW';
      });
  }

  async onSaveClick() {
    let objectstore = ['servicegroupname'];
    _.forEach(objectstore, (ctrl) => {
      this.onGetErrorMsgs(ctrl, true);
    });

    let errorExist = this._service.showErr(this.errorMsgs);
    // if (errorExist) {
    //   this._messageService.add({
    //     sticky: true,
    //     severity: 'warn',
    //     summary: 'Warn',
    //     detail: 'Please Check the below Errors',
    //   });
    //   return;
    // }

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
