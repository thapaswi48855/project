import { Component, ViewChild } from '@angular/core';
import { HeaderComponent } from '../directives/header.component';
import { SavingComponent } from '../directives/saving.component';
import { MasterserviceService } from '../masterService/masterservice.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { MessageService } from 'primeng/api';
import * as _ from 'lodash';
@Component({
  selector: 'app-taxsubgroup',
  templateUrl: './taxsubgroup.component.html',
  // styleUrls: ['./taxsubgroup.component.css']
})
export class TaxsubgroupComponent {
  @ViewChild(HeaderComponent) header: HeaderComponent;
  @ViewChild(SavingComponent) saving: SavingComponent;

  public pageTitle: string = 'Tax Sub Group';
  public onSubmit: boolean = true;
  public onClear: boolean = true;
  public onEdit: boolean = false;
  public onView: boolean = false;

  public pageMode = 'NEW';
  public isEditable: any = false;
  public isShowEditable: any = true;
  public redirectToGrid: boolean = false;
  public serviceGroupList:any =[];
  public statusList:any=[];
  public taxGroupList:any=[];

  public taxsubgroup: any = {
    taxgroup: '',
    taxsubgroup:'',
    status: 'ZLS11',
    displayorder:'',
    taxrate:'',  
    validityStartDt:null,
    validityEndDt:null,
    taxrateexpression:'', 
    createdt: null,
    createby: '',
    modifydt: null,
    modifyby: '',
  };
  public emptytaxsubgroup = JSON.stringify(this.taxsubgroup);

  constructor(
    public _service: MasterserviceService,
    private _activatedRoute: ActivatedRoute,
    private _messageService: MessageService
  ) {}

  public errorMsgs: any = {
    servicegroupname: '',
  };
  public emptyErrorMsgs = JSON.stringify(this.errorMsgs);
  onGetErrorMsgs(ctrl: any, showToast: any) {
    switch (ctrl) {
      case 'servicegroupname':
        this.errorMsgs.servicegroupname =
          this.taxsubgroup[ctrl] == '' ||
          this.taxsubgroup[ctrl] == undefined ||
          this.taxsubgroup[ctrl] == null
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
    .serGetDataobject('getTaxGroup', { status:'ZLS11' })
    .subscribe((dt: any) => {
      this.taxGroupList = dt.data;
      console.log('categoryList', this.serviceGroupList);
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

  getMasterData(taxSubGrpId: any) {
    this._service
      .serGetDataobject('getTaxSubGroup', { _id: taxSubGrpId })
      .subscribe((dt: any) => {
        console.log('dt', dt);
        this.taxsubgroup = dt.data[0];
        this.taxsubgroup['_id'] = this.taxsubgroup._id;
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

    let savingJson = this.taxsubgroup;

    await this.saving.onSaveJson(this.pageTitle, 'insertTaxSubGroup', [
      savingJson,
    ]);

    this.redirectToGrid = this.pageMode == 'NEW' ? false : true;
    this.onClearClick();
  }
  onClearClick() {
    if (this.pageMode == 'NEW') {
      this.taxsubgroup = JSON.parse(this.emptytaxsubgroup);
      this.isEditable = true;
    } else {
      this.isEditable = false;
    }
    this.errorMsgs = JSON.parse(this.emptyErrorMsgs);
  }
}
