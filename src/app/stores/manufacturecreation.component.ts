import { Component, ViewChild, inject } from '@angular/core';
import { HeaderComponent } from '../directives/header.component';
import { MasterserviceService } from '../masterService/masterservice.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { SavingComponent } from '../directives/saving.component';
import * as _ from 'lodash';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-manufacturecreation',
  templateUrl: './manufacturecreation.component.html',
  styleUrls: ['./manufacturecreation.component.css'],
})
export class ManufacturecreationComponent {
  @ViewChild(HeaderComponent) header: HeaderComponent;
  @ViewChild(SavingComponent) saving: SavingComponent;
  public pageTitle = 'Manufacture Creation';
  public onSubmit: boolean = true;
  public onClear: boolean = true;
  public onEdit: boolean = false;
  public onView: boolean = false;

  public pageMode = 'NEW';
  public isEditable: any = false;
  public isShowEditable: any = true;
  public redirectToGrid: boolean = false;

  public manufacture: any = {
    manufacureId: 0,
    manufacturename: '',
    status: 'ZLS11',
    manufacturecode: '',
    regioncountry: '',
    regionstate: '',
    regioncity: '',
    contactaddress: '',
    contactphone1: '',
    contactphone2: '',
    contactpostalCode: '',
    contactfax: '',
    contactemail: '',
    contactwebsite: '',
    createdt: null,
    createby: this._service.getUserVal('userid'),
    modifydt: null,
    modifyby: '',
  };

  public emptyManufacture = JSON.stringify(this.manufacture);
  public statusList: any = [];
  public zeroLevelEntity: any = [];
  constructor(
    private _service: MasterserviceService,
    private _activatedRoute: ActivatedRoute,
    private _messageService: MessageService
  ) {}
  // private _messageService =inject(MasterserviceService);

  public errorMsgs: any = {
    manufacturenameReq: '',
    manufacturecodeReq: '',
  };
  public emptyErrorMsgs: any = JSON.stringify(this.errorMsgs);
  onGetErrorMsgs(ctrl: any, showToast: any) {
    switch (ctrl) {
      case 'manufacturename':
        this.errorMsgs.manufacturenameReq =
          this.manufacture[ctrl] == '' ||
          this.manufacture[ctrl] == undefined ||
          this.manufacture[ctrl] == null
            ? this._service.onGetErrorMsgs(ctrl, true, 'Manufacture Name')
            : '';
        break;
        case 'manufacturecode':
        this.errorMsgs.manufacturecodeReq =
          this.manufacture[ctrl] == '' ||
          this.manufacture[ctrl] == undefined ||
          this.manufacture[ctrl] == null
            ? this._service.onGetErrorMsgs(ctrl, true, 'Manufacture Code')
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
        console.log(dt);
        this.statusList = dt.data[0].subMasterData;
        console.log('this.statusList', this.statusList);
      });

    this._activatedRoute.paramMap.subscribe((param: ParamMap) => {
      let params: any = param.get('param');
      if (params != null) {
        params = JSON.parse(atob(params));
        let manufacureId: number = params['manufacureId'];
        this.getMasterData(manufacureId);
        this.pageMode = params['mode'];
      } else {
        this.isEditable = true;
        this.pageMode = 'NEW';
      }
      this.isEditable = this.pageMode != 'VIEW';
    });
  }

  getMasterData(manufacureCreationId: any) {
    this._service
      .serGetDataobject('getManufacureCreation', {
        manufacureId: manufacureCreationId,
      })
      .subscribe((dt: any) => {
        this.manufacture = {
          manufacureId: dt.data[0].manufacureId,
          manufacturename: dt.data[0].manufacturename,
          status: dt.data[0].status,
          manufacturecode: dt.data[0].manufacturecode,
          regioncountry: dt.data[0].regioncountry,
          regionstate: dt.data[0].regionstate,
          regioncity: dt.data[0].regioncity,
          contactaddress: dt.data[0].contactaddress,
          contactphone1: dt.data[0].contactphone1,
          contactphone2: dt.data[0].contactphone2,
          contactpostalCode: dt.data[0].contactpostalCode,
          contactfax: dt.data[0].contactfax,
          contactemail: dt.data[0].contactemail,
          contactwebsite: dt.data[0].contactwebsite,
          createdt: dt.data[0].createdt,
          createby: dt.data[0].createby,
          modifydt: null,
          modifyby: this._service.getUserVal('userid'),
        };
        this.isShowEditable = !this.isEditable && this.pageMode != 'NEW';
      });
  }

  onGridClick() {}

  onSaveClick() {
    let objectstore = ['manufacturename', 'manufacturecode'];
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
    let savingJson = this.manufacture;

    this.saving.onSaveJson(this.pageTitle, 'insertManufacureCreation', [
      savingJson,
    ]);
    this.onClearClick();
    this.redirectToGrid = this.pageMode == 'NEW' ? false : true;
  }
  onClearClick() {
    if (this.pageMode == 'NEW') {
      this.manufacture = JSON.parse(this.emptyManufacture);
      this.isEditable = true;
    } else {
      this.isEditable = false;
    }
  }
}
