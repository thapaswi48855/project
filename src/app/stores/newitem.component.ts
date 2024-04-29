import { Component, ViewChild, inject } from '@angular/core';
import { MasterserviceService } from '../masterService/masterservice.service';
import { MessageService } from 'primeng/api';
import { SavingComponent } from '../directives/saving.component';
import * as _ from 'lodash';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-newitem',
  templateUrl: './newitem.component.html',
  styleUrls: ['./newitem.component.css'],
})
export class NewitemComponent {
  @ViewChild(SavingComponent) saving: SavingComponent;

  public pageTitle = 'Manufacture Creation';
  public onSubmit: boolean = true;
  public onClear: boolean = true;
  public onEdit: boolean = false;
  public onView: boolean = false;

  public pageMode = 'NEW';
  public isEditable: any = true;
  public isShowEditable: any = true;
  public zeroLevelEntity: any = [];
  public redirectToGrid: boolean = false;

  public statusList: any = [{ label: 'Select One', value: '' }];
  public categoryList: any = [{ label: 'Select One', value: '' }];
  public strengthUnitsList: any = [];
  public itemFromList: any = [{ label: 'Select One', value: '' }];
  public valueList: any = [{ label: 'Select One', value: '' }];
  public unitUomList: any = [{ label: 'Select One', value: '' }];
  public packageUomList: any = [{ label: 'Select One', value: '' }];
  public consumptionUOMList: any = [];
  public serviceGrpList: any = [];
  public serviceSubGrpList: any = [];
  public preferredSupplierList: any = [{ label: 'Select One', value: '' }];
  public controlTypeList: any = [{ label: 'Select One', value: '' }];
  public preAuthRequiredList: any = [];
  public billingGroupList: any = [];
  public taxBasisList: any = [];
  public batchNumberApplicableList: any = [];
  public highCostConsumablesList: any = [];
  public allowZeroCalimAmntList: any = [];
  public storeWiseCols: any = [];

  public storelist: any = {
    store: '',
    bin: '',
    danger: '',
    minLevel: '',
    recorderLevel: '',
    maxLevel: '',
  };
  public storeWiseList: any = [];
  public taxlist: any = {
    taxGrpType: 'ZLTGT11',
    taxGrp: '',
    taxSubGrp: '',
    taxgrpcd: '',
  };
  // public taxList: any = [];
  public taxCols: any = [];
  public storeList: any = [];
  public taxGroupList: any = [];
  public taxGrpTypeList: any = [];
  public taxSubGroupList: any = [];
  public allowStatusList: any = [];
  public manufactureList: any = [];

  public _service = inject(MasterserviceService);
  public _messageService = inject(MessageService);
  public _activatedRoute = inject(ActivatedRoute);

  public newItem: any = {
    newItemId: 0,
    itemName: '',
    shortName: '',
    status: 'ZLS11',
    category: '',
    generateItemCode: '',
    customItemCode: '',
    manufacture: '',
    strength: '',
    strengthUnits: '',
    itemFrom: '',
    root: '',
    unitUOM: '',
    packageUOM: '',
    packageSize: '',
    packageType: '',
    consumptionUOM: '',
    consumptionCapacity: '',
    genericName: '',
    serviceGroup: '',
    serviceSubGroup: '',
    maxCostPrice: '',
    supplierName: '',
    preferredSupplier: '',
    invoiceDetails: '',
    controlType: '',
    insurenceCategory: '',
    preAuthRequired: 'ZLPAR11',
    billingGroup: '',
    taxBasis: 'ZLTB11',
    tax: '',
    binRack: '',
    batchNumberApplicable: 'ZLAS11',
    itemSellingPrice: '',
    highCostConsumables: 'ZLAS12',
    allowZeroCalimAmnt: 'ZLAS12',
    storeWise: [],
    taxlist: [],
    createdt: null,
    createby: this._service.getUserVal('userid'),
    modifydt: null,
    modifyby: '',
  };
  public emptyNewItem = JSON.stringify(this.newItem);
  public errorMsgs: any = {
    shortNameReq: '',
    categoryReq: '',
    serviceGroupReq: '',
    serviceSubGroupReq: '',
  };
  public emptyErrorMsgs: any = JSON.stringify(this.errorMsgs);
  onGetErrorMsgs(ctrl: any, showToast: any) {
    switch (ctrl) {
      case 'shortName':
        this.errorMsgs.shortNameReq =
          this.newItem[ctrl] == '' ||
          this.newItem[ctrl] == undefined ||
          this.newItem[ctrl] == null
            ? this._service.onGetErrorMsgs(ctrl, true, 'Short Name')
            : '';
        break;
      case 'category':
        this.errorMsgs.categoryReq =
          this.newItem[ctrl] == '' ||
          this.newItem[ctrl] == undefined ||
          this.newItem[ctrl] == null
            ? this._service.onGetErrorMsgs(ctrl, true, 'Category Name')
            : '';
        break;
      case 'serviceGroup':
        this.errorMsgs.serviceGroupReq =
          this.newItem[ctrl] == '' ||
          this.newItem[ctrl] == undefined ||
          this.newItem[ctrl] == null
            ? this._service.onGetErrorMsgs(ctrl, true, 'Service Group Name')
            : '';
        break;
      case 'serviceSubGroup':
        this.errorMsgs.serviceSubGroupReq =
          this.newItem[ctrl] == '' ||
          this.newItem[ctrl] == undefined ||
          this.newItem[ctrl] == null
            ? this._service.onGetErrorMsgs(ctrl, true, 'Service Sub Group Name')
            : '';
        break;
    }
  }
  async ngOnInit() {
    if (Object.keys(this._service.appConfig).length == 0) {
      await this._service.getConfigData();
    }

    this.storeWiseCols = await this._service.getGridColumns('storeWiseCols');
    this.taxCols = await this._service.getGridColumns('taxCols');
    console.log(this.taxlist);
    this.newItem.taxlist.push(JSON.parse(JSON.stringify(this.taxlist)));
    this.newItem.storeWise.push(JSON.parse(JSON.stringify(this.storelist)));

    this._service
      .serGetDataobject('getGeneralMaster', { masterid: 'ZLS1' })
      .subscribe((dt: any) => {
        this.statusList = dt.data[0].subMasterData;
      });

    this._service
      .serGetDataobject('getAddItemCategory', { status: 'ZLS11' })
      .subscribe((dt: any) => {
        this.categoryList = dt.data;
      });
    this._service
      .serGetDataobject('getGeneralMaster', { masterid: 'ZLStreU1' })
      .subscribe((dt: any) => {
        this.strengthUnitsList = dt.data.length > 0 ? dt.data[0].subMasterData : [];
      });
    this._service
      .serGetDataobject('getGeneralMaster', { masterid: 'ZLIF1' })
      .subscribe((dt: any) => {
        this.itemFromList = dt.data.length > 0 ?dt.data[0].subMasterData : [];
      });
    this._service
      .serGetDataobject('getGeneralMaster', { masterid: 'ZLUU1' })
      .subscribe((dt: any) => {
        this.unitUomList = dt.data[0].subMasterData;
      });

    this._service
      .serGetDataobject('getGeneralMaster', { masterid: 'ZLCU1' })
      .subscribe((dt: any) => {
        this.consumptionUOMList = dt.data.length > 0 ? dt.data[0].subMasterData : [];
      });

    this._service
      .serGetDataobject('getServiceGroupMaster', { status: 'ZLS11' })
      .subscribe((dt: any) => {
        this.serviceGrpList = dt.data;
      });

    this._service
      .serGetDataobject('getGeneralMaster', { masterid: 'ZLPS1' })
      .subscribe((dt: any) => {
        this.preferredSupplierList = dt.data.length > 0 ? dt.data[0].subMasterData : [];
      });
    this._service
      .serGetDataobject('getGeneralMaster', { masterid: 'ZLCT1' })
      .subscribe((dt: any) => {
        this.controlTypeList = dt.data[0].subMasterData;
      });
    this._service
      .serGetDataobject('getGeneralMaster', { masterid: 'ZLPAR1' })
      .subscribe((dt: any) => {
        this.preAuthRequiredList = dt.data[0].subMasterData;
      });
    this._service
      .serGetDataobject('getGeneralMaster', { masterid: 'ZLBG1' })
      .subscribe((dt: any) => {
        this.billingGroupList = dt.data.length > 0 ? dt.data[0].subMasterData : [];
      }); //taxBasisList
    this._service
      .serGetDataobject('getGeneralMaster', { masterid: '	ZLTB1' })
      .subscribe((dt: any) => {
        this.taxBasisList = dt.data[0].subMasterData;
      });
    this._service
      .serGetDataobject('getGeneralMaster', { masterid: 'ZLAS1' })
      .subscribe((dt: any) => {
        this.allowStatusList = dt.data[0].subMasterData;
      });
    this._service
      .serGetDataobject('getManufacureCreation', { status: 'ZLS11' })
      .subscribe((dt: any) => {
        this.manufactureList = dt.data;
      });

    this._service
      .serGetDataobject('getStoreMaster', { status: 'ZLS11' })
      .subscribe((dt: any) => {
        this.storeList = dt.data;
      });

    this._service
      .serGetDataobject('getGeneralMaster', { masterid: 'ZLTGT1' })
      .subscribe((dt: any) => {
        this.taxGrpTypeList = dt.data[0].subMasterData;
      });

    this._service
      .serGetDataobject('getTaxGroup', { status: 'ZLS11' })
      .subscribe((dt: any) => {
        console.log('dt.data', dt.data);
        this.taxGroupList = dt.data;
      });

    this._service
      .serGetDataobject('getTaxSubGroup', { status: 'ZLS11' })
      .subscribe((dt: any) => {
        this.taxSubGroupList = dt.data;
      });

    this._activatedRoute.paramMap.subscribe((param: ParamMap) => {
      let params: any = param.get('param');
      if (params != null) {
        params = JSON.parse(atob(params));
        let newItemId: number = params['newItemId'];
        this.getMasterData(newItemId);
        this.pageMode = params['mode'];
      } else {
        this.isEditable = true;
        this.pageMode = 'NEW';
      }
      this.isEditable = this.pageMode != 'VIEW'; //getGeneralMaster
    });
  }

  getMasterData(masterid: any) {
    this._service
      .serGetDataobject('getNewItem', { newItemId: masterid })
      .subscribe((dt: any) => {
        console.log('dt', dt);
        this.storeWiseList = this.newItem.storeWise;
        this.newItem = {
          newItemId: dt.data[0].newItemId,
          itemName: dt.data[0].itemName,
          shortName: dt.data[0].shortName,
          status: dt.data[0].status,
          category: dt.data[0].category,
          generateItemCode: dt.data[0].generateItemCode,
          customItemCode: dt.data[0].customItemCode,
          manufacture: dt.data[0].manufacture,
          strength: dt.data[0].strength,
          strengthUnits: dt.data[0].strengthUnits,
          itemFrom: dt.data[0].itemFrom,
          root: dt.data[0].root,
          unitUOM: dt.data[0].unitUOM,
          packageUOM: dt.data[0].packageUOM,
          packageSize: dt.data[0].packageSize,
          packageType: dt.data[0].packageType,
          consumptionUOM: dt.data[0].consumptionUOM,
          consumptionCapacity: dt.data[0].consumptionCapacity,
          genericName: dt.data[0].genericName,
          serviceGroup: dt.data[0].serviceGroup,
          serviceSubGroup: dt.data[0].serviceSubGroup,
          maxCostPrice: dt.data[0].maxCostPrice,
          supplierName: dt.data[0].supplierName,
          preferredSupplier: dt.data[0].preferredSupplier,
          invoiceDetails: dt.data[0].invoiceDetails,
          controlType: dt.data[0].controlType,
          insurenceCategory: dt.data[0].insurenceCategory,
          preAuthRequired: dt.data[0].preAuthRequired,
          billingGroup: dt.data[0].billingGroup,
          taxBasis: dt.data[0].taxBasis,
          tax: dt.data[0].tax,
          binRack: dt.data[0].binRack,
          batchNumberApplicable: dt.data[0].batchNumberApplicable,
          itemSellingPrice: dt.data[0].itemSellingPrice,
          highCostConsumables: dt.data[0].highCostConsumables,
          allowZeroCalimAmnt: dt.data[0].allowZeroCalimAmnt,
          storeWise: [],
          taxlist: [],
          createdt: dt.data[0].createdt,
          createby: dt.data[0].createby,
          modifydt: null,
          modifyby: this._service.getUserVal('userid'),
        };
        this.isShowEditable = !this.isEditable && this.pageMode != 'NEW';
      });
  }

  onSaveClick() {
    let objectstore = [
      'shortName',
      'category',
      'serviceGroup',
      'serviceSubGroup',
    ];
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

    // this.newItem.storeWise = this.storeWiseList;
    _.forEach(this.newItem.taxlist, (tax, taxInd) => {
      delete tax.taxSubGroupList;
    });
    let savingJson = this.newItem;
    let Date = this._service.getDate();
    console.log('Date', this._service.getDate());

    this.saving.onSaveJson('New Item', 'insertNewItem', [savingJson]);
    this.onClearClick();
    this.redirectToGrid = this.pageMode == 'NEW' ? false : true;
  }

  onClearClick() {
    this.newItem = JSON.parse(this.emptyNewItem);
    this.newItem.taxlist.push(JSON.parse(JSON.stringify(this.taxlist)));
    this.newItem.storeWise.push(JSON.parse(JSON.stringify(this.storelist)));
  }
  onAddTaxItem() {
    this.newItem.taxlist.push(JSON.parse(JSON.stringify(this.taxlist)));
  }
  onRemoveTaxItem(ind: any) {
    this.newItem.taxlist.splice(ind, 1);
  }
  onAddStoreItem() {
    this.newItem.storeWise.push(JSON.parse(JSON.stringify(this.storelist)));
  }
  onRemoveStoreItem(ind: any) {
    // this.storeWiseList = this.storeWiseList.slice(ind, 1);
    // let array1=JSON.parse(JSON.stringify(this.newItem.storeWise))
    this.newItem.storeWise.splice(ind, 1);
  }
  onSelectPkgUOM(SelectPkgUOM: any) {
    this.newItem.packageSize = _.filter(this.packageUomList, {
      _id: SelectPkgUOM,
    })[0].pkgSize;
  }
  onServiceGrp(serviceGrp: any) {
    this._service
      .serGetDataobject('getServiceSubGroupMaster', {
        status: 'ZLS11',
        servicegroupname: serviceGrp,
      })
      .subscribe((dt: any) => {
        this.serviceSubGrpList = dt.data;
      });
  }
  onSelectUnitUom(unitUom: any) {
    this._service
      .serGetDataobject('getUomCreation', { status: 'ZLS11', unitUom: unitUom })
      .subscribe((dt: any) => {
        this.packageUomList = dt.data;
        console.log('categoryList', this.categoryList);
      });
  }
  onTaxGrp(taxGrpId: any, ind: any) {
    // console.log('this.taxList', this.taxList);
    let selectTaxGrp = _.filter(this.taxSubGroupList, { taxgroup: taxGrpId });
    let getSelectTaxGrp = _.filter(this.newItem.taxlist, { taxGrp: taxGrpId });
    this.newItem.taxlist[ind].taxgrpcd = selectTaxGrp[0].taxgrpcd;
    if (getSelectTaxGrp.length > 1) {
      this.newItem.taxlist[ind].taxGrp = '0';
      return;
    }
    if (selectTaxGrp.length > 0) {
      this.newItem.taxlist[ind].taxSubGroupList = selectTaxGrp;
    }
  }
  onStoreChange(storeId: any, ind: any) {
    let selectStoreitems = _.filter(this.newItem.storeWise, { store: storeId });
    if (selectStoreitems.length > 1) {
      this.newItem.storeWise[ind].store = 0;
      return;
    }
  }
  onLoopUpAdd(event: any) {
    console.log('event', event);
    this.newItem.manufacture = event.manufacturename;
  }
}
