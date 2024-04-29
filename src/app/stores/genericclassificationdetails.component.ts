import { Component, ViewChild } from '@angular/core';
import * as _ from 'lodash';
import { HeaderComponent } from '../directives/header.component';
import { MasterserviceService } from '../masterService/masterservice.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { SavingComponent } from '../directives/saving.component';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-genericclassificationdetails',
  templateUrl: './genericclassificationdetails.component.html',
  styleUrls: ['./genericclassificationdetails.component.css'],
})
export class GenericclassificationdetailsComponent {
  @ViewChild(HeaderComponent) header: HeaderComponent;
  @ViewChild(SavingComponent) saving: SavingComponent;

  public pageTitle = 'Generic';
  public onSubmit: boolean = true;
  public onClear: boolean = true;
  public onEdit: boolean = false;
  public onView: boolean = false;

  public pageMode = 'NEW';
  public isEditable: any = false;
  public isShowEditable: any = true;
  public redirectToGrid: boolean = false;

  public genericClassification: any = {
    genericClassificationId:0,
    clasificationid:0,
    clasificationName: '',
    clasificationDesc: '',
    status: 'ZLS11',
    createdt: null,
    createby:  this._service.getUserVal('userid'),
    modifydt: null,
    modifyby: '',
    // status: true,
  };
  public emptyGenericClassification = JSON.stringify(
    this.genericClassification
  );
  constructor(
    public _service: MasterserviceService,
    public _activatedRoute: ActivatedRoute,
    public _messageService: MessageService
  ) {}

  public errorMsgs: any = {
    clasificationName: '',
  };
  public emptyErrorMsgs:any =JSON.stringify(this.errorMsgs);
  public statusList: any = [];
  onGetErrorMsgs(ctrl: any, showToast: any) {
    switch (ctrl) {
      case 'clasificationName':
        this.errorMsgs.clasificationName =
          this.genericClassification[ctrl] == '' ||
          this.genericClassification[ctrl] == undefined ||
          this.genericClassification[ctrl] == null
            ? this._service.onGetErrorMsgs(ctrl, true, 'Clasification Name')
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
        let genericClassificationId: number = params['genericClassificationId'];
        this.getMasterData(genericClassificationId);
        this.pageMode = params['mode'];
      } else {
        this.isEditable = true;
        this.pageMode = 'NEW';
      }
      this.isEditable = this.pageMode != 'VIEW';
    });
  }

  getMasterData(genericClassificationId: any) {
    this._service
      .serGetDataobject('getGenericClassificationDetails', {
        genericClassificationId: genericClassificationId,
      })
      .subscribe((dt: any) => {
        console.log('dt', dt);
        // this.genericClassification = dt.data[0];
        // this.genericClassification['_id'] = this.genericClassification._id;
        this.genericClassification= {
          genericClassificationId:dt.data[0].genericClassificationId,
          clasificationid:dt.data[0].clasificationid,
          clasificationName: dt.data[0].clasificationName,
          clasificationDesc: dt.data[0].clasificationDesc,
          status: dt.data[0].status,
          createdt: dt.data[0].createdt,
          createby: dt.data[0].createby,
          modifydt: null,
          modifyby:  this._service.getUserVal('userid'),
        }
        this.isShowEditable = !this.isEditable && this.pageMode != 'NEW';
      });
  }


  onSaveClick() {
    let objectstore = ['clasificationName'];
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
    let savingJson = this.genericClassification;

    // let savingJson =this.store ;
    // savingJson.clasificationid =savingJson.clasificationid ==0 ? this._service.getNextSequenceNumber('Generic Classification Details') :savingJson.clasificationid ;


    console.log(this.genericClassification);
    this.saving.onSaveJson('Generic ClassificationDetails', 'insertGenericClassificationDetails', [
      savingJson,
    ]);
    this.redirectToGrid = this.pageMode == 'NEW' ? false : true;
    this.onClearClick();
  }
  onClearClick() {
    if (this.pageMode == 'NEW') {
      this.genericClassification = JSON.parse(this.emptyGenericClassification);
      this.isEditable = true;
    } else {
      this.isEditable = false;
    }
    this.errorMsgs=JSON.parse(this.emptyErrorMsgs);
  }

 
}
