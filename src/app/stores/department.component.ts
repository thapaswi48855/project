import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { MasterserviceService } from '../masterService/masterservice.service';
import { MessageService } from 'primeng/api';
import { HeaderComponent } from '../directives/header.component';
import { SavingComponent } from '../directives/saving.component';
import * as _ from 'lodash';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  // styleUrls: ['./department.component.css']
})
export class DepartmentComponent {
  @ViewChild(HeaderComponent) header: HeaderComponent;
  @ViewChild(SavingComponent) saving: SavingComponent;

  public pageTitle = 'Department';
  public onSubmit: boolean = true;
  public onClear: boolean = true;
  public onEdit: boolean = false;
  public onView: boolean = false;

  public pageMode = 'NEW';
  public isEditable: any = false;
  public isShowEditable: any = true;
  public redirectToGrid: boolean = false;

  public department: any = {
    departmentId:0,
    department: '',
    departmentType: '',
    allowedGender: 'ZLG11',
    costCenterCode: '',
    referralDoctorAsOrderingClinician:'ZLAS11',
    status: 'ZLS11',
    createdt: null,
    createby: this._service.getUserVal('userid'),
    modifydt: null,
    modifyby: '',
  };
  public emptyDepartment = JSON.stringify(this.department);

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
    departmentReq: '',
    departmentTypeReq: '',
  };
  public departmentTypeList:any=[];
  public genderList:any=[];
  public referralDoctor:any=[];

  onGetErrorMsgs(ctrl: any, showToast: any) {
    switch (ctrl) {
      case 'department':
        this.errorMsgs.departmentReq =
          this.department[ctrl] == '' ||
          this.department[ctrl] == undefined ||
          this.department[ctrl] == null
            ? this._service.onGetErrorMsgs(ctrl, true, 'Department Name')
            : '';
        break;
        case 'departmentType':
          this.errorMsgs.departmentTypeReq =
            this.department[ctrl] == '' ||
            this.department[ctrl] == undefined ||
            this.department[ctrl] == null
              ? this._service.onGetErrorMsgs(ctrl, true, 'Department Type')
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
        let departmentId: number = params['departmentId'];
        this.getMasterData(departmentId);
        this.pageMode = params['mode'];
      } else {
        this.isEditable = true;
        this.pageMode = 'NEW';
      }
      this.isEditable = this.pageMode != 'VIEW';
    });

   
      this._service
      .serGetDataobject('getGeneralMaster', { masterid: 'ZLS1' })
      .subscribe((dt: any) => {
        this.statusList = dt.data[0].subMasterData;
      });
      this._service
      .serGetDataobject('getGeneralMaster', { masterid: 'ZLDT1' })
      .subscribe((dt: any) => {
        this.departmentTypeList = dt.data[0].subMasterData;
      });
      this._service
      .serGetDataobject('getGeneralMaster', { masterid: 'ZLG1' })
      .subscribe((dt: any) => {
        this.genderList = dt.data[0].subMasterData;
      });
      this._service
      .serGetDataobject('getGeneralMaster', { masterid: '	ZLAS2' })
      .subscribe((dt: any) => {
        this.referralDoctor = dt.data[0].subMasterData;
      });
  }

  getMasterData(departmentId: any) {
    this._service
      .serGetDataobject('getDepartment', { departmentId: departmentId })
      .subscribe((dt: any) => {
        this.department = {
          departmentId:dt.data[0].departmentId,
          department: dt.data[0].department,
          departmentType: dt.data[0].departmentType,
          allowedGender: dt.data[0].allowedGender,
          costCenterCode: dt.data[0].costCenterCode,
          referralDoctorAsOrderingClinician:dt.data[0].referralDoctorAsOrderingClinician,
          status: dt.data[0].status,
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
    // let objectstore = ['genericName'];
    // _.forEach(objectstore, (ctrl) => {
    //   this._service.onGetErrorMsgs(this.genericDetails, ctrl, true);
    // });

    let objectstore = ['department', 'departmentType'];
    _.forEach(objectstore, (ctrl) => {
      // this.onGetErrorMsgs(ctrl, true);
    });

    let errorExist = this._service.showErr(this.errorMsgs);
    if (errorExist) {
      this._messageService.add({
        sticky: true,
        severity: 'warn',
        summary: 'Warn',
        detail: 'Please Check the below Errors',
      });
      // return;
    }

    let savingJson = this.department;

    this.saving.onSaveJson(this.pageTitle, 'insertDepartment', [
      savingJson,
    ]);

    this.onClearClick();
    this.redirectToGrid = this.pageMode == 'NEW' ? false : true;
  }
  onClearClick() {
    this.department = JSON.parse(this.emptyDepartment);
  }
}
