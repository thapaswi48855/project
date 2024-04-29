import { Component, Inject, ViewChild } from '@angular/core';
import { HeaderComponent } from '../directives/header.component';
import { MasterserviceService } from '../masterService/masterservice.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { SavingComponent } from '../directives/saving.component';
import * as _ from 'lodash';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-supplierdetails',
  templateUrl: './supplierdetails.component.html',
  styleUrls: ['./supplierdetails.component.css'],
})
export class SupplierdetailsComponent {
  @ViewChild(HeaderComponent) header: HeaderComponent;
  @ViewChild(SavingComponent) saving: SavingComponent;

  public pageTitle = 'Supplier Details';
  public onSubmit: boolean = true;
  public onClear: boolean = true;
  public onEdit: boolean = false;
  public onView: boolean = false;

  public pageMode = 'NEW';
  public isEditable: any = false;
  public isShowEditable: any = true;
  public redirectToGrid: boolean = false;

  public supplier: any = {
    supplierDetId:0,
    supplierName: '',
    suppliercode: '',
    status: 'ZLS11',
    registeredsupplier: 'ZLAS11',
    supplierCategory: '',
    supplierGSTINNumber: '',
    suppliercreditPeriod: '',
    supplierdrugLicenseNo: '',
    supplierPANNo: '',
    suppliercorporteIdentificationNumber: '',
    supplierapplyTCSforPOStockEntry: 'ZLAS12',
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
    helpdeskname: '',
    helpdeskphno: '',
    helpdeskemail: '',
    createdt: null,
    createby: this._service.getUserVal('userid'),
    modifydt: null,
    modifyby: '',
  };

  public emptySupplier = JSON.stringify(this.supplier);

  public supplierList: any = [];
  public zeroLevelEntity: any = [];
  public registerSupplierList: any = [];
  public tcsPoStockEntryList: any = [];
  public statusList: any = [];
  public allowStatusList:any =[];

  constructor(
    public _service: MasterserviceService,
    public _activatedRoute: ActivatedRoute,
    private _messageService:MessageService
  ) {}
  // public _messageService:Inject(MessageService)

  public errorMsgs:any={
    supplierNameReq:'',
    registeredsupplierReq:'',
    supplierGSTINNumberReq:''
  };

  onGetErrorMsgs(ctrl: any, showToast: any) {
    switch (ctrl) {
      case 'supplierName':
        this.errorMsgs.supplierNameReq =
          this.supplier[ctrl] == '' ||
          this.supplier[ctrl] == undefined ||
          this.supplier[ctrl] == null
            ? this._service.onGetErrorMsgs(ctrl, true, 'Supplier Name')
            : '';
        break;   
        case 'registeredsupplier':
        this.errorMsgs.registeredsupplierReq =
          this.supplier[ctrl] == '' ||
          this.supplier[ctrl] == undefined ||
          this.supplier[ctrl] == null
            ? this._service.onGetErrorMsgs(ctrl, true, 'Registered Supplier Name')
            : '';
        break;   
        case 'supplierGSTINNumber':
          this.errorMsgs.supplierGSTINNumberReq =
            this.supplier[ctrl] == '' ||
            this.supplier[ctrl] == undefined ||
            this.supplier[ctrl] == null
              ? this._service.onGetErrorMsgs(ctrl, true, 'Supplier GSTIN Number')
              : '';
          break;     
    }
  }

  async ngOnInit() {
    if (Object.keys(this._service.appConfig).length == 0) {
      await this._service.getConfigData();
    }

    this._service
    .serGetDataobject('getGeneralMaster',{masterid:"ZLS1"})
    .subscribe((dt:any)=>{
      this.statusList=dt.data[0].subMasterData ;
    })
    this._service
    .serGetDataobject('getGeneralMaster',{masterid:"ZLAS1"})
    .subscribe((dt:any)=>{
      this.allowStatusList=dt.data[0].subMasterData ;
    })

    // this._service
    // .serGetDataobject('getGeneralMaster',{masterid:"ZLRS1"})
    // .subscribe((dt:any)=>{
    //   this.registerSupplierList=dt.data[0].subMasterData ;
    // })

    // this._service
    // .serGetDataobject('getGeneralMaster',{masterid:"ZLTcsPoSE1"})
    // .subscribe((dt:any)=>{
    //   this.tcsPoStockEntryList=dt.data[0].subMasterData ;
    // })

    this._service
      .serGetDataobject('getSupplierCategory', { status: 'ZLS11' })
      .subscribe((dt: any) => {
        this.supplierList=dt.data;
      });

    this._activatedRoute.paramMap.subscribe((param: ParamMap) => {
      let params: any = param.get('param');
      if (params != null) {
        params = JSON.parse(atob(params));
        let supplierDetId: number = params['supplierDetId'];
        this.getMasterData(supplierDetId);
        this.pageMode = params['mode'];
      } else {
        this.isEditable = true;
        this.pageMode = 'NEW';
      }
      this.isEditable = this.pageMode != 'VIEW';
    });
  }

  getMasterData(supplierDetailsId: any) {
    this._service
      .serGetDataobject('getSupplierDetails', { supplierDetId: supplierDetailsId })
      .subscribe((dt: any) => {
        // console.log('dt', dt);
        // this.supplier = dt.data[0];
        // this.supplier['_id'] = this.supplier._id;
        this.supplier = {
          supplierDetId:dt.data[0].supplierDetId,
          supplierName: dt.data[0].supplierName,
          suppliercode: dt.data[0].suppliercode,
          status: dt.data[0].status,
          registeredsupplier: dt.data[0].registeredsupplier,
          supplierCategory: dt.data[0].supplierCategory,
          supplierGSTINNumber: dt.data[0].supplierGSTINNumber,
          suppliercreditPeriod: dt.data[0].suppliercreditPeriod,
          supplierdrugLicenseNo: dt.data[0].supplierdrugLicenseNo,
          supplierPANNo: dt.data[0].supplierPANNo,
          suppliercorporteIdentificationNumber: dt.data[0].suppliercorporteIdentificationNumber,
          supplierapplyTCSforPOStockEntry: dt.data[0].supplierapplyTCSforPOStockEntry,
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
          helpdeskname: dt.data[0].helpdeskname,
          helpdeskphno: dt.data[0].helpdeskphno,
          helpdeskemail: dt.data[0].helpdeskemail,
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
    // console.log(this.store);
    let objectstore = ['supplierName','registeredsupplier','supplierGSTINNumber'];
    _.forEach(objectstore, (ctrl) => {
      this.onGetErrorMsgs(ctrl,true);
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

    let savingJson = this.supplier;
    this.saving.onSaveJson(this.pageTitle, 'insertSupplierDetails', [
      savingJson,
    ]);
    this.onClearClick();
    this.redirectToGrid = this.pageMode == 'NEW' ? false : true;
  }
  onClearClick() {
    if (this.pageMode == 'NEW') {
      this.supplier = JSON.parse(this.emptySupplier);
      this.isEditable = true;
    } else {
      this.isEditable = false;
    }
  }
}
