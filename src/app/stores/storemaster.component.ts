import { Component, ViewChild } from '@angular/core';
import * as _ from 'lodash';
import { MessageService } from 'primeng/api';
import { HeaderComponent } from '../directives/header.component';
import { MasterserviceService } from '../masterService/masterservice.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { SavingComponent } from '../directives/saving.component';

@Component({
  selector: 'app-storemaster',
  templateUrl: './storemaster.component.html',
  styleUrls: ['./storemaster.component.css'],
})
export class StoremasterComponent {
  @ViewChild(HeaderComponent) header: HeaderComponent;
  @ViewChild(SavingComponent) saving: SavingComponent;

  public pageTitle: string = 'Store Master';
  public onSubmit: boolean = true;
  public onClear: boolean = true;
  public onEdit: boolean = false;
  public onView: boolean = false;

  public pageMode = 'NEW';
  public isEditable: any = false;
  public isShowEditable: any = true;
  public redirectToGrid:boolean =false;

  public storeMaster: any = {
    storemasterid:0,
    store: '',
    counter: 'ZLC11',
    status: 'ZLS11',
    gstinno: '',
    drugLicenceNo: '',
    autoFillPrecription: 'ZLAS12',
    accountGroup: 'ZLAG11',
    salesAcountPrefix: '',
    purcheseAccountPrefix: '',
    storeType: '',
    isSuperStore: 'ZLAS11',
    salesUnit: 'ZLSU11',
    allowToRiseBill: 'ZLAS12',
    precriptionPrintTemplate: 'ZLPPT11',
    precriptionLabelPrintTemplate: 'ZLPLPT11',
    salesPrintTemplate: 'ZLSPT11',
    isSalesStore: 'ZLAS11',
    autoFillIndent: 'ZLAS12',
    isSterileStore: 'ZLIStS11',
    storesTariff: 'ZLST11',
    useSellingPriceFromItemBatch: 'ZLAS12',
    grnPrintTemplate: 'ZLGrnPT11',
    allowAutoPOGeneration: 'ZLAS12',
    pOGenerationFrequency: '',
    autoCancelPO: 'ZLAS12',
    autoCancelPOFreuency: '',
    salesWebTemplate: 'ZLSWT11',
    salesWebPrinter: 'ZLSWP11',
    batchExpireThesholdForStockTake: '0',
    createdt: null,
    createby: this._service.getUserVal('userid'),
    modifydt: null,
    modifyby: '',
    // status:'A'
  };
  public emptyStoreMaster = JSON.stringify(this.storeMaster);

  public zeroLevelEntity: any = [];
  public storeTypeList: any = [];
  public counterList: any = [];
  public autoFillPrecriptionList: any = [];
  public accountGroupList: any = [];
  public isSuperStoreList: any = [];
  public salesUnitList: any = [];
  public riseBillList: any = [];
  public precriptionPrintTemplateList: any = [];
  public precriptionLabelPrintTemplateList: any = [ ];
  public salesPrintTemplateList: any = [];
  public statusList: any = [];
  public isSalesStoreList: any = [];
  public autoFillIndentList: any = [];
  public isSterileStoreList: any = [];
  public storesTariffList: any = [];
  public sellingPriceItemList: any = [];
  public grnPrintTemplateList: any = [];
  public autoPoGenerationList: any = [];
  public autoCancelPoList: any = [];
  public webtemplateList: any = [];
  public webPrinterList: any = [];
  public allowStatusList:any =[];

  public errorMsgs: any = {
    store: '',
    storeType: '',
  };
  public emptyErrorMsgs=JSON.stringify(this.errorMsgs);

  constructor(
    public _service: MasterserviceService,
    private _messageService: MessageService,
    private _activatedRoute: ActivatedRoute
  ) {}

  onGetErrorMsgs(ctrl: any, showToast: any) {
    switch (ctrl) {
      case 'store':
        this.errorMsgs.store =
          this.storeMaster[ctrl] == '' ||
          this.storeMaster[ctrl] == undefined ||
          this.storeMaster[ctrl] == null
            ? this._service.onGetErrorMsgs('store', true, 'Store Name')
            : '';
        break;
      case 'storeType':
        this.errorMsgs.storeType =
          this.storeMaster[ctrl] == '' ||
          this.storeMaster[ctrl] == undefined ||
          this.storeMaster[ctrl] == null
            ? this._service.onGetErrorMsgs('storeType', true, 'Store Type Name')
            : '';
        break;
    }
  }

  async ngOnInit() {
    if (Object.keys(this._service.appConfig).length == 0) {
      await this._service.getConfigData();
    }

    this._service
      .serGetDataobject('getStoreTypeMaster', { status: 'ZLS11' })
      .subscribe((dt: any) => {
        this.storeTypeList =dt.data ;
      });

      this._service
    .serGetDataobject('getGeneralMaster',{masterid:"ZLS1"})
    .subscribe((dt:any)=>{
      console.log(dt)
      this.statusList=dt.data[0].subMasterData ;
      console.log('this.statusList',this.statusList)
    })
    this._service
    .serGetDataobject('getGeneralMaster',{masterid:"ZLAS1"})
    .subscribe((dt:any)=>{
      this.allowStatusList=dt.data[0].subMasterData ;
    })

    this._service
    .serGetDataobject('getGeneralMaster',{masterid:"ZLC1"})
    .subscribe((dt:any)=>{
      console.log(dt)
      this.counterList=dt.data[0].subMasterData ;
      console.log('this.statusList',this.statusList)
    })

    this._service
    .serGetDataobject('getGeneralMaster',{masterid:"ZLA1"})
    .subscribe((dt:any)=>{
      console.log(dt)
      this.autoFillPrecriptionList=dt.data[0].subMasterData ;
      console.log('this.statusList',this.statusList)
    })

    this._service
    .serGetDataobject('getGeneralMaster',{masterid:"ZLAG1"})
    .subscribe((dt:any)=>{
      console.log(dt)
      this.accountGroupList=dt.data[0].subMasterData ;
    })

    this._service
    .serGetDataobject('getGeneralMaster',{masterid:"ZLISS1"})
    .subscribe((dt:any)=>{
      console.log(dt)
      this.isSuperStoreList=dt.data[0].subMasterData ;
    })
    this._service
    .serGetDataobject('getGeneralMaster',{masterid:"ZLSU1"})
    .subscribe((dt:any)=>{
      console.log(dt)
      this.salesUnitList=dt.data[0].subMasterData ;
    })
    this._service
    .serGetDataobject('getGeneralMaster',{masterid:"ZLATRB1"})
    .subscribe((dt:any)=>{
      console.log(dt)
      this.riseBillList=dt.data[0].subMasterData ;
    })
    this._service
    .serGetDataobject('getGeneralMaster',{masterid:"ZLPPT1"})
    .subscribe((dt:any)=>{
      console.log(dt)
      this.precriptionPrintTemplateList=dt.data[0].subMasterData ;
    })
    this._service
    .serGetDataobject('getGeneralMaster',{masterid:"ZLPLPT1"})
    .subscribe((dt:any)=>{
      console.log(dt)
      this.precriptionLabelPrintTemplateList=dt.data[0].subMasterData ;
    })
    this._service
    .serGetDataobject('getGeneralMaster',{masterid:"ZLSPT1"})
    .subscribe((dt:any)=>{
      console.log(dt)
      this.salesPrintTemplateList=dt.data[0].subMasterData ;
    })
    this._service
    .serGetDataobject('getGeneralMaster',{masterid:"ZLISaS1"})
    .subscribe((dt:any)=>{
      console.log(dt)
      this.isSalesStoreList=dt.data[0].subMasterData ;
    })
    this._service
    .serGetDataobject('getGeneralMaster',{masterid:"ZLAFI1"})
    .subscribe((dt:any)=>{
      console.log(dt)
      this.autoFillIndentList=dt.data[0].subMasterData ;
    })
    this._service
    .serGetDataobject('getGeneralMaster',{masterid:"ZLIStS1"})
    .subscribe((dt:any)=>{
      console.log(dt)
      this.isSterileStoreList=dt.data[0].subMasterData ;
    })
    this._service
    .serGetDataobject('getGeneralMaster',{masterid:"ZLST1"})
    .subscribe((dt:any)=>{
      console.log(dt)
      this.storesTariffList=dt.data[0].subMasterData ;
    })
    this._service
    .serGetDataobject('getGeneralMaster',{masterid:"ZLSPIB1"})
    .subscribe((dt:any)=>{
      console.log(dt)
      this.sellingPriceItemList=dt.data[0].subMasterData ;
    })
    this._service
    .serGetDataobject('getGeneralMaster',{masterid:"ZLGrnPT1"})
    .subscribe((dt:any)=>{
      console.log(dt)
      this.grnPrintTemplateList=dt.data[0].subMasterData ;
    })
    this._service
    .serGetDataobject('getGeneralMaster',{masterid:"ZLAPoG1"})
    .subscribe((dt:any)=>{
      console.log(dt)
      this.autoPoGenerationList=dt.data[0].subMasterData ;
    })
    this._service
    .serGetDataobject('getGeneralMaster',{masterid:"ZLACPo1"})
    .subscribe((dt:any)=>{
      console.log(dt)
      this.autoCancelPoList=dt.data[0].subMasterData ;
    })
    this._service
    .serGetDataobject('getGeneralMaster',{masterid:"ZLSWT1"})
    .subscribe((dt:any)=>{
      console.log(dt)
      this.webtemplateList=dt.data[0].subMasterData ;
    })
    this._service
    .serGetDataobject('getGeneralMaster',{masterid:"ZLSWP1"})
    .subscribe((dt:any)=>{
      console.log(dt)
      this.webPrinterList=dt.data[0].subMasterData ;
    })

    // this._service.serGetData('getGeneralMaster').subscribe((dt: any) => {
    //   this.zeroLevelEntity = dt.data;
    //   let counterList = _.filter(this.zeroLevelEntity, {
    //     masterid: 'ZLC13',
    //   });
    //   _.forEach(counterList, (ident, index) => {
    //     this.counterList.push({
    //       label: ident.mastername,
    //       value: ident._id,
    //     });
    //   });

    //   let autoFillPrecriptionList = _.filter(this.zeroLevelEntity, {
    //     masterid: 'ZLC14',
    //   });
    //   _.forEach(autoFillPrecriptionList, (ident, index) => {
    //     this.autoFillPrecriptionList.push({
    //       label: ident.mastername,
    //       value: ident._id,
    //     });
    //   });
    //   let accountGroupList = _.filter(this.zeroLevelEntity, {
    //     masterid: 'ZLC15',
    //   });
    //   _.forEach(accountGroupList, (ident, index) => {
    //     this.accountGroupList.push({
    //       label: ident.mastername,
    //       value: ident._id,
    //     });
    //   });
    //   let isSuperStoreList = _.filter(this.zeroLevelEntity, {
    //     masterid: 'ZLC16',
    //   });
    //   _.forEach(isSuperStoreList, (ident, index) => {
    //     this.isSuperStoreList.push({
    //       label: ident.mastername,
    //       value: ident._id,
    //     });
    //   });
    //   let salesUnitList = _.filter(this.zeroLevelEntity, {
    //     masterid: 'ZLC17',
    //   });
    //   _.forEach(salesUnitList, (ident, index) => {
    //     this.salesUnitList.push({
    //       label: ident.mastername,
    //       value: ident._id,
    //     });
    //   });
    //   let riseBillList = _.filter(this.zeroLevelEntity, {
    //     masterid: 'ZLC18',
    //   });
    //   _.forEach(riseBillList, (ident, index) => {
    //     this.riseBillList.push({
    //       label: ident.mastername,
    //       value: ident._id,
    //     });
    //   });
    //   let precriptionPrintTemplateList = _.filter(this.zeroLevelEntity, {
    //     masterid: 'ZLC19',
    //   });
    //   _.forEach(precriptionPrintTemplateList, (ident, index) => {
    //     this.precriptionPrintTemplateList.push({
    //       label: ident.mastername,
    //       value: ident._id,
    //     });
    //   });
    //   let precriptionLabelPrintTemplateList = _.filter(this.zeroLevelEntity, {
    //     masterid: 'ZLC20',
    //   });
    //   _.forEach(precriptionLabelPrintTemplateList, (ident, index) => {
    //     this.precriptionLabelPrintTemplateList.push({
    //       label: ident.mastername,
    //       value: ident._id,
    //     });
    //   });
    //   // let statusList = _.filter(this.zeroLevelEntity, {
    //   //   masterid: 'ZLC9',
    //   // });
    //   // _.forEach(statusList, (ident, index) => {
    //   //   this.statusList.push({
    //   //     label: ident.mastername,
    //   //     value: ident._id,
    //   //   });
    //   // });
    //   let isSalesStoreList = _.filter(this.zeroLevelEntity, {
    //     masterid: 'ZLC22',
    //   });
    //   _.forEach(isSalesStoreList, (ident, index) => {
    //     this.isSalesStoreList.push({
    //       label: ident.mastername,
    //       value: ident._id,
    //     });
    //   });

    //   let autoFillIndentList = _.filter(this.zeroLevelEntity, {
    //     masterid: 'ZLC23',
    //   });
    //   _.forEach(autoFillIndentList, (ident, index) => {
    //     this.autoFillIndentList.push({
    //       label: ident.mastername,
    //       value: ident._id,
    //     });
    //   });

    //   let isSterileStoreList = _.filter(this.zeroLevelEntity, {
    //     masterid: 'ZLC31',
    //   });
    //   _.forEach(isSterileStoreList, (ident, index) => {
    //     this.isSterileStoreList.push({
    //       label: ident.mastername,
    //       value: ident._id,
    //     });
    //   });

    //   let storesTariffList = _.filter(this.zeroLevelEntity, {
    //     masterid: 'ZLC24',
    //   });
    //   _.forEach(storesTariffList, (ident, index) => {
    //     this.storesTariffList.push({
    //       label: ident.mastername,
    //       value: ident._id,
    //     });
    //   });

    //   let sellingPriceItemList = _.filter(this.zeroLevelEntity, {
    //     masterid: 'ZLC25',
    //   });
    //   _.forEach(sellingPriceItemList, (ident, index) => {
    //     this.sellingPriceItemList.push({
    //       label: ident.mastername,
    //       value: ident._id,
    //     });
    //   });

    //   let grnPrintTemplateList = _.filter(this.zeroLevelEntity, {
    //     masterid: 'ZLC26',
    //   });
    //   _.forEach(grnPrintTemplateList, (ident, index) => {
    //     this.grnPrintTemplateList.push({
    //       label: ident.mastername,
    //       value: ident._id,
    //     });
    //   });

    //   let autoCancelPoList = _.filter(this.zeroLevelEntity, {
    //     masterid: 'ZLC28',
    //   });
    //   _.forEach(autoCancelPoList, (ident, index) => {
    //     this.autoCancelPoList.push({
    //       label: ident.mastername,
    //       value: ident._id,
    //     });
    //   });

    //   let webtemplateList = _.filter(this.zeroLevelEntity, {
    //     masterid: 'ZLC29',
    //   });
    //   _.forEach(webtemplateList, (ident, index) => {
    //     this.webtemplateList.push({
    //       label: ident.mastername,
    //       value: ident._id,
    //     });
    //   });

    //   let autoPoGenerationList = _.filter(this.zeroLevelEntity, {
    //     masterid: 'ZLC27',
    //   });
    //   _.forEach(autoPoGenerationList, (ident, index) => {
    //     this.autoPoGenerationList.push({
    //       label: ident.mastername,
    //       value: ident._id,
    //     });
    //   });
    //   let webPrinterList = _.filter(this.zeroLevelEntity, {
    //     masterid: 'ZLC30',
    //   });
    //   _.forEach(webPrinterList, (ident, index) => {
    //     this.webPrinterList.push({
    //       label: ident.mastername,
    //       value: ident._id,
    //     });
    //   });

    //   let salesPrintTemplateList = _.filter(this.zeroLevelEntity, {
    //     masterid: 'ZLC21',
    //   });
    //   _.forEach(salesPrintTemplateList, (ident, index) => {
    //     this.salesPrintTemplateList.push({
    //       label: ident.mastername,
    //       value: ident._id,
    //     });
    //   });
    // });

    this._activatedRoute.paramMap.subscribe((param: ParamMap) => {
      let params: any = param.get('param');
      if (params != null) {
        params = JSON.parse(atob(params));
        let storemasterid: number = params['storemasterid'];
        this.getMasterData(storemasterid);
        this.pageMode = params['mode'];
      } else {
        this.isEditable = true;
        this.pageMode = 'NEW';
      }
      this.isEditable = this.pageMode != 'VIEW';
    });
  }
  getMasterData(storeMasterId: any) {
    this._service
      .serGetDataobject('getStoreMaster', { storemasterid: storeMasterId })
      .subscribe((dt: any) => {
        // console.log('dt', dt);
        // this.storeMaster = dt.data[0];
        // this.storeMaster['_id'] = this.storeMaster._id;
        this.storeMaster = {
          storemasterid:dt.data[0].storemasterid,
          store: dt.data[0].store,
          counter: dt.data[0].counter,
          status: dt.data[0].status,
          gstinno: dt.data[0].gstinno,
          drugLicenceNo: dt.data[0].drugLicenceNo,
          autoFillPrecription: dt.data[0].autoFillPrecription,
          accountGroup: dt.data[0].accountGroup,
          salesAcountPrefix: dt.data[0].salesAcountPrefix,
          purcheseAccountPrefix: dt.data[0].purcheseAccountPrefix,
          storeType: dt.data[0].storeType,
          isSuperStore: dt.data[0].isSuperStore,
          salesUnit: dt.data[0].salesUnit,
          allowToRiseBill: dt.data[0].allowToRiseBill,
          precriptionPrintTemplate: dt.data[0].precriptionPrintTemplate,
          precriptionLabelPrintTemplate: dt.data[0].precriptionLabelPrintTemplate,
          salesPrintTemplate: dt.data[0].salesPrintTemplate,
          isSalesStore: dt.data[0].isSalesStore,
          autoFillIndent: dt.data[0].autoFillIndent,
          isSterileStore: dt.data[0].isSterileStore,
          storesTariff: dt.data[0].storesTariff,
          useSellingPriceFromItemBatch: dt.data[0].useSellingPriceFromItemBatch,
          grnPrintTemplate: dt.data[0].grnPrintTemplate,
          allowAutoPOGeneration: dt.data[0].allowAutoPOGeneration,
          pOGenerationFrequency: dt.data[0].pOGenerationFrequency,
          autoCancelPO: dt.data[0].autoCancelPO,
          autoCancelPOFreuency: dt.data[0].autoCancelPOFreuency,
          salesWebTemplate: dt.data[0].salesWebTemplate,
          salesWebPrinter: dt.data[0].salesWebPrinter,
          batchExpireThesholdForStockTake: dt.data[0].batchExpireThesholdForStockTake,
          createdt: null,
          createby: dt.data[0].createby,
          modifydt: null,
          modifyby: this._service.getUserVal('userid'),
        }
        this.isShowEditable = !this.isEditable && this.pageMode != 'NEW';
        console.log('this.isShowEditable', this.isShowEditable);
      });
  }

  onGridClick() {}

  onSaveClick() {
    let objectstore = ['store', 'storeType'];
    _.forEach(objectstore, (ctrl) => {
      this.onGetErrorMsgs(ctrl, true);
    });

    let errorExist = this._service.showErr(this.errorMsgs);
    if (errorExist) {
      this._messageService.add({
        sticky: true,
        severity: 'warn',
        summary: 'Warn',
        detail: `Please Check the below Errors`,
      });
      return;
    }

    let savingJson = this.storeMaster;
    let Date = this._service.getDate();
    console.log('Date', this._service.getDate());

    this.saving.onSaveJson('Store Master', 'insertStoreMaster', [savingJson]);
    this.redirectToGrid = this.pageMode =='NEW'? false:true;
    this.onClearClick();
  }

  onClearClick() {
    this.errorMsgs=JSON.parse(this.emptyErrorMsgs)
    if (this.pageMode == 'NEW') {
      this.storeMaster = JSON.parse(this.emptyStoreMaster);
      this.isEditable = true;
    } else {
      this.isEditable = false;
    }
  }
}
