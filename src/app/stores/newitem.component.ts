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
  };
  public emptyNewItem = JSON.stringify(this.newItem);
  async ngOnInit() {
    if (Object.keys(this._service.appConfig).length == 0) {
      await this._service.getConfigData();
    }

    this.storeWiseCols = await this._service.getGridColumns('storeWiseCols');
    this.taxCols = await this._service.getGridColumns('taxCols');
    console.log(this.taxlist);
    this.newItem.taxlist.push(JSON.parse(JSON.stringify(this.taxlist)));
    this.newItem.storeWise.push(this.storelist);

    // this._service.serGetData('getGeneralMaster').subscribe((dt: any) => {
    //   this.zeroLevelEntity = dt.data;

    //   let statusList = _.filter(this.zeroLevelEntity, {
    //     masterid: 'ZLC9',
    //   });
    //   _.forEach(statusList, (ident, index) => {
    //     this.statusList.push({
    //       label: ident.mastername,
    //       value: ident._id,
    //     });
    //   });
    // });

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
        this.strengthUnitsList = dt.data[0].subMasterData;
      });
    this._service
      .serGetDataobject('getGeneralMaster', { masterid: 'ZLIF1' })
      .subscribe((dt: any) => {
        this.itemFromList = dt.data[0].subMasterData;
      });
    this._service
      .serGetDataobject('getGeneralMaster', { masterid: 'ZLUU1' })
      .subscribe((dt: any) => {
        this.unitUomList = dt.data[0].subMasterData;
      });

    this._service
      .serGetDataobject('getGeneralMaster', { masterid: 'ZLCU1' })
      .subscribe((dt: any) => {
        this.consumptionUOMList = dt.data[0].subMasterData;
      });

    this._service
      .serGetDataobject('getServiceGroupMaster', { status: 'ZLS11' })
      .subscribe((dt: any) => {
        this.serviceGrpList = dt.data;
      });

    this._service
      .serGetDataobject('getGeneralMaster', { masterid: 'ZLPS1' })
      .subscribe((dt: any) => {
        this.preferredSupplierList = dt.data[0].subMasterData;
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
        this.billingGroupList = dt.data[0].subMasterData;
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
    // this._service
    // .serGetDataobject('getGeneralMaster', { masterid: 'ZLAS1' })
    // .subscribe((dt: any) => {
    //   this.highCostConsumablesList = dt.data[0].subMasterData;
    // });
    // this._service
    // .serGetDataobject('getGeneralMaster', { masterid: 'ZLAZCA1' })
    // .subscribe((dt: any) => {
    //   this.allowZeroCalimAmntList = dt.data[0].subMasterData;
    // });
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
        let _id: number = params['_id'];
        this.getMasterData(_id);
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
      .serGetDataobject('getNewItem', { _id: masterid })
      .subscribe((dt: any) => {
        console.log('dt', dt);
        this.newItem = dt.data[0];
        this.newItem['_id'] = this.newItem._id;
        // this.taxList = this.newItem.taxlist;
        this.storeWiseList = this.newItem.storeWise;
        this.isShowEditable = !this.isEditable && this.pageMode != 'NEW';
      });
  }

  onSaveClick() {
    let objectstore = ['store', 'storeType'];
    _.forEach(objectstore, (ctrl) => {
      this._service.onGetErrorMsgs(this.newItem, ctrl, true);
    });

    // let errorExist = this._service.showErr(this._service.errorMsgs);
    // if (errorExist) {
    //   this._messageService.add({
    //     sticky: true,
    //     severity: 'warn',
    //     summary: 'Warn',
    //     detail: `Please Check the below Errors`,
    //   });
    //   return;
    // }

    // this.newItem.taxlist = this.taxList;
    this.newItem.storeWise = this.storeWiseList;
    let savingJson = this.newItem;
    let Date = this._service.getDate();
    console.log('Date', this._service.getDate());

    this.saving.onSaveJson('New Item', 'insertNewItem', [savingJson]);
    this.onClearClick();
    this.redirectToGrid = this.pageMode == 'NEW' ? false : true;
  }

  onClearClick() {
    this.newItem = JSON.parse(this.emptyNewItem);
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
    let selectTaxGrp = _.filter(this.newItem.taxlist, { taxGrp: taxGrpId });
    if (selectTaxGrp.length > 1) {
      alert('Already');
      taxGrpId = '';
      this.newItem.taxlist[ind].taxGrp = '0';
    }
  }
  onLoopUpAdd(event: any) {
    console.log('event', event);
    this.newItem.manufacture = event.manufacturename;
  }
}
