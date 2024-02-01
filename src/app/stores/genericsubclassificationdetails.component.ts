import { Component, ViewChild } from '@angular/core';
import * as _ from 'lodash';
import { HeaderComponent } from '../directives/header.component';
import { MasterserviceService } from '../masterService/masterservice.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { SavingComponent } from '../directives/saving.component';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-genericsubclassificationdetails',
  templateUrl: './genericsubclassificationdetails.component.html',
  styleUrls: ['./genericsubclassificationdetails.component.css'],
})
export class GenericsubclassificationdetailsComponent {
  @ViewChild(HeaderComponent) header: HeaderComponent;
  @ViewChild(SavingComponent) saving: SavingComponent;

  public pageTitle = 'Generic Sub Classification';
  public onSubmit: boolean = true;
  public onClear: boolean = true;
  public onEdit: boolean = false;
  public onView: boolean = false;

  public pageMode = 'NEW';
  public isEditable: any = false;
  public isShowEditable: any = true;
  public redirectToGrid: boolean = false;

  public genericSubClassification: any = {
    clasificationName: '',
    subClasificationName: '',
    subClasificationDesc: '',
    status: 'ZLS11',
    createdt: null,
    createby: '',
    modifydt: null,
    modifyby: '',
  };
  public emptyGenericSubClassification = JSON.stringify(
    this.genericSubClassification
  );
  public geneticClassificationList: any = [];
  public statusList:any = [];
  public zeroLevelEntity:any =[];
  constructor(
    public _service: MasterserviceService,
    private _activatedRoute: ActivatedRoute,
    private _messageService: MessageService
  ) {}

  public errorMsgs: any = {
    clasificationNameReq: '',
    subClasificationNameReq: '',
  };

  onGetErrorMsgs(ctrl: any, showToast: any) {
    switch (ctrl) {
      case 'clasificationName':
        this.errorMsgs.clasificationNameReq =
          this.genericSubClassification[ctrl] == '' ||
          this.genericSubClassification[ctrl] == undefined ||
          this.genericSubClassification[ctrl] == null
            ? this._service.onGetErrorMsgs(ctrl, true, 'Clasification Name')
            : '';
        break;
      case 'subClasificationName':
        this.errorMsgs.subClasificationNameReq =
          this.genericSubClassification[ctrl] == '' ||
          this.genericSubClassification[ctrl] == undefined ||
          this.genericSubClassification[ctrl] == null
            ? this._service.onGetErrorMsgs(ctrl, true, 'Sub Clasification Name')
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

    this._service
      .serGetDataobject('getGenericClassificationDetails', { status: 'ZLS11' })
      .subscribe((dt: any) => {
        this.geneticClassificationList =dt.data ;
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

  getMasterData(genericSubClassificationId: any) {
    this._service
      .serGetDataobject('getGenericSubClassificationDetails', {
        _id: genericSubClassificationId,
      })
      .subscribe((dt: any) => {
        console.log('dt', dt);
        this.genericSubClassification = dt.data[0];
        this.genericSubClassification['_id'] =
          this.genericSubClassification._id;
        this.isShowEditable = !this.isEditable && this.pageMode != 'NEW';
      });
  }


  onSaveClick() {
    // let objectstore = ['subClasificationName'];
    // _.forEach(objectstore, (ctrl) => {
    //   this._service.onGetErrorMsgs(this.genericSubClassification, ctrl, true);
    // });

    let objectstore = ['clasificationName', 'subClasificationName'];
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
    let savingJson = this.genericSubClassification;
    console.log(this.genericSubClassification);
    this.saving.onSaveJson(
      this.pageTitle,
      'insertGenericSubClassificationDetails',
      [savingJson]
    );
    this.redirectToGrid = this.pageMode == 'NEW' ? false : true;
    this.onClearClick();
  }
  onClearClick() {
    this.genericSubClassification = JSON.parse(
      this.emptyGenericSubClassification
    );
  }
}
