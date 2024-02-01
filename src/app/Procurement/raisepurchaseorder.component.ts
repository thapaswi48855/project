import { Component, ViewChild } from '@angular/core';
import { HeaderComponent } from '../directives/header.component';
import { SavingComponent } from '../directives/saving.component';
import { MasterserviceService } from '../masterService/masterservice.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { MessageService } from 'primeng/api';
import * as _ from 'lodash';

@Component({
  selector: 'app-raisepurchaseorder',
  templateUrl: './raisepurchaseorder.component.html',
  styleUrls: ['./raisepurchaseorder.component.css'],
})
export class RaisepurchaseorderComponent {
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

  public raisePurchaseOrder: any = {
    store: '',
    department: '',
    quantityUom: 'ZLQU11',
    supplier: '',
    supplierAdderss: '',
    poallowedTo: '',
    poDate: new Date(),
    enquiryNo: '',
    enuiryDate: '',
    quotationNo: '',
    quotationDate: '',
    Reference: '',
    creditPeriod: '',
    purposeOfPurchase: '',
    uploadDocumment: '',
    expectedDeliveryDate: '',
    remarks: '',
    seletedItemList: '',
    purchuseItems: [],
    cgst: 0,
    sgst: 0,
    gst: 0,
    totalcgst: 0,
    toatalsgst: 0,
    tataltaxAmt: 0,
    totalItemDiscount: 0,
    totalItemAmount: 0,
    poDiscountType: '',
    poDiscountValue: 0,
    poDiscontAmount: 0,
    roundOff: '',
    transportationCharges: 0,
    poTotal: 0,
    status: 'ZLS11',
    approvalStatus:'',
    createdt: null,
    createby: '',
    modifydt: null,
    modifyby: '',

  };
  public emptyRaisePurchaseOrder = JSON.stringify(this.raisePurchaseOrder);
  public newItemList: any = [];
  public gridCols = [];
  public storeList: any = [];
  public departmentList: any = [];
  public quantityUomList: any = [];
  public poallowedToList: any = [];
  public poDiscountTypeList: any = [];
  public supplierList: any = [];
  public approveStatusList:any =[];
  public errorMsgs:any={
    'storeReq':'',
    'supplierReq':'',
    'poallowedToReq':'',
    'itemNameReq':'',
    'mrpReq':'',
    'rateReq':'',
    'qtyReq':''
  }

  constructor(
    public _service: MasterserviceService,
    public _activatedRoute: ActivatedRoute,
    public _messageService: MessageService
  ) {}

  onGetErrorMsgs(ctrl: any, showToast: any) {
    switch (ctrl) {
      case 'store':
        this.errorMsgs.storeReq =
          this.raisePurchaseOrder[ctrl] == '' ||
          this.raisePurchaseOrder[ctrl] == undefined ||
          this.raisePurchaseOrder[ctrl] == null
            ? this._service.onGetErrorMsgs(ctrl, true, 'Store')
            : '';
        break;
        case 'supplier':
        this.errorMsgs.supplierReq =
          this.raisePurchaseOrder[ctrl] == '' ||
          this.raisePurchaseOrder[ctrl] == undefined ||
          this.raisePurchaseOrder[ctrl] == null
            ? this._service.onGetErrorMsgs(ctrl, true, 'Supplier')
            : '';
        break;
        case 'poallowedTo':
          this.errorMsgs.poallowedToReq =
            this.raisePurchaseOrder[ctrl] == '' ||
            this.raisePurchaseOrder[ctrl] == undefined ||
            this.raisePurchaseOrder[ctrl] == null
              ? this._service.onGetErrorMsgs(ctrl, true, 'Po allowed to')
              : '';
          break;
          case 'itemName':
            this.errorMsgs.itemNameReq =
              this.itemDetails[ctrl] == '' ||
              this.itemDetails[ctrl] == undefined ||
              this.itemDetails[ctrl] == null
                ? this._service.onGetErrorMsgs(ctrl, true, 'Item name')
                : '';
            break;
            case 'mrp':
              this.errorMsgs.mrpReq =
                this.itemDetails[ctrl] == '' ||
                this.itemDetails[ctrl] == undefined ||
                this.itemDetails[ctrl] == null
                  ? this._service.onGetErrorMsgs(ctrl, true, 'Mrp')
                  : '';
              break;
              case 'rate':
              this.errorMsgs.rateReq =
                this.itemDetails[ctrl] == '' ||
                this.itemDetails[ctrl] == undefined ||
                this.itemDetails[ctrl] == null
                  ? this._service.onGetErrorMsgs(ctrl, true, 'Rate')
                  : '';
              break;
              case 'qty':
                this.errorMsgs.qtyReq =
                  this.itemDetails[ctrl] == '' ||
                  this.itemDetails[ctrl] == undefined ||
                  this.itemDetails[ctrl] == null
                    ? this._service.onGetErrorMsgs(ctrl, true, 'Qty')
                    : '';
                break;
    }
  }

  async ngOnInit() {
    if (Object.keys(this._service.appConfig).length == 0) {
      await this._service.getConfigData();
    }

    this._service
      .serGetDataobject('getStoreMaster', { status: 'ZLS11' })
      .subscribe((dt: any) => {
        this.storeList = dt.data;
        console.log('categoryList', this.storeList);
      });
    this._service
      .serGetDataobject('getSupplierDetails', { status: 'ZLS11' })
      .subscribe((dt: any) => {
        this.supplierList = dt.data;
        console.log('categoryList', this.storeList);
      });

    this._service
      .serGetDataobject('getDepartment', { status: 'ZLS11' })
      .subscribe((dt: any) => {
        this.departmentList = dt.data;
      });
    this._service
      .serGetDataobject('getGeneralMaster', { masterid: 'ZLQU1' })
      .subscribe((dt: any) => {
        this.quantityUomList = dt.data[0].subMasterData;
      });

      this._service
      .serGetDataobject('getGeneralMaster', { masterid: 'ZLARS1' })
      .subscribe((dt: any) => {
        this.approveStatusList = dt.data[0].subMasterData;
      });

    this._service
      .serGetDataobject('getGeneralMaster', { masterid: 'ZLPoDT' })
      .subscribe((dt: any) => {
        this.poDiscountTypeList = dt.data[0].subMasterData;
      });

    this.gridCols = this._service.getGridColumns('newItemListCols');
    this._service.serGetDataobject('getNewItem', {}).subscribe((dt: any) => {
      console.log(dt);
      this.newItemList = dt.data;
      // _.forEach(this.newItemList, (item, ind) => {
      //   item['selected'] = false;
      // });
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

  getMasterData(itemCategoryId: any) {
    this._service
      .serGetDataobject('getRasiePurchaseOrderMaster', { _id: itemCategoryId })
      .subscribe((dt: any) => {
        console.log('dt', dt);
        this.raisePurchaseOrder = dt.data[0];
        // this.raisePurchaseOrder.validateExpireDate=new Date(this.raisePurchaseOrder.validateExpireDate)
        this.raisePurchaseOrder['_id'] = this.raisePurchaseOrder._id;
        this.newItemsList = this.raisePurchaseOrder.purchuseItems;

        // let aaa = this.raisePurchaseOrder.seletedItemList.split(',');
        // console.log('aaa', aaa);
        // _.forEach(aaa, (a) => {
        //   let b = _.filter(this.newItemList, { _id: a });
        //   b[0].selected = true;
        // });

        this.isShowEditable = !this.isEditable && this.pageMode != 'NEW';
      });
  }

  onGridClick() {}
  onBasicUploadAuto(fileUpload: any) {
    console.log('fileUpload', fileUpload);
  }

  onSaveClick() {
    let objectstore = ['store', 'supplier','poallowedTo'];
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
    this.raisePurchaseOrder.purchuseItems = this.newItemsList;
    let savingJson = this.raisePurchaseOrder;
    console.log(this.raisePurchaseOrder);
    this.saving.onSaveJson('Purchase Order', 'insertRasiePurchaseOrderMaster', [
      savingJson,
    ]);
    this.pageMode == 'NEW';
    this.onClearClick();
  }
  onClearClick() {
    if (this.pageMode == 'NEW') {
      this.raisePurchaseOrder = JSON.parse(this.emptyRaisePurchaseOrder);
      this.isEditable = true;
    } else {
      this.isEditable = false;
    }
  }

  public visible = false;
  public itemName = '';
  public taxSubGrpList: any = [];
  public cgstList: any = [];
  public sgstList: any = [];
  public igstList: any = [];
  public itemDetails: any = {
    itemName: '',
    batch: '',
    expiry: '',
    manufacture: '',
    stock: '',
    allStoreStock: '',
    store: '',
    pckSize: '',
    pckUOM: '',
    unitUOM: '',
    mrp: '',
    adjMrp: '',
    rate: '',
    qty: '',
    bouns: '',
    discountPer: '',
    discount: '',
    disAmt: 0,
    schDiscountPer: '',
    schDiscount: '',
    status: 'ZLS11',
    remarks: '',
    taxBasis: 'ZLTGT11',
    taxRate: 0,
    taxAmt: 0,
    cgst: '',
    sgst: '',
    igst: '',
    cgstTaxRate: '',
    sgstTaxRte: '',
    totalAmt: '',
  };
  public emptyItemDetails: any = JSON.stringify(this.itemDetails);
  public taxGrpTypeList: any = [];
  onItemClick() {
    this.visible = true;
    this._service
      .serGetDataobject('getTaxSubGroup', { status: 'ZLS11' })
      .subscribe((dt: any) => {
        this.taxSubGrpList = dt.data;
        this.cgstList = this.taxSubGrpList; //_.filter(this.taxSubGrpList);
        this.sgstList = this.taxSubGrpList; //_.filter(this.taxSubGrpList);
        this.igstList = this.taxSubGrpList; //_.filter(this.taxSubGrpList)
      });

    this._service
      .serGetDataobject('getGeneralMaster', { masterid: 'ZLTGT1' })
      .subscribe((dt: any) => {
        this.taxGrpTypeList = dt.data[0].subMasterData;
      });
  }
  public centerTaxRate: any = '0';
  onCgstTaxAmt(cgst: any) {
    let cgstAmt = _.filter(this.cgstList, { _id: cgst });
    if (this.itemDetails.cgstTaxRate != '') {
      this.itemDetails.taxRate -= this.itemDetails.cgstTaxRate;
    }
    this.itemDetails.cgstTaxRate = parseFloat(cgstAmt[0].taxrate);
    // this.itemDetails.taxRate-=this.itemDetails.cgstTaxRate
    this.itemDetails.taxRate += this.itemDetails.cgstTaxRate;
    // this.itemDetails.taxAmt =this.itemDetails.taxRate/100 ;
  }
  public stateTaxRate: any = '0';
  onSgstTaxAmt(sgst: any) {
    let sgstAmt = _.filter(this.cgstList, { _id: sgst });
    if (this.itemDetails.sgstTaxRte != '') {
      this.itemDetails.taxRate -= this.itemDetails.sgstTaxRte;
    }
    this.itemDetails.sgstTaxRte = parseFloat(sgstAmt[0].taxrate);
    this.itemDetails.taxRate += this.itemDetails.sgstTaxRte;
    // this.itemDetails.taxAmt =this.itemDetails.taxRate/100 ;
  }
  onChangeMrpAmt(mrp: any) {
    this.itemDetails.adjMrp =
      this.itemDetails.mrp - mrp * (this.itemDetails.taxRate / 100);
  }
  onDiscountAmt(discount: any) {
    // this.itemDetails.taxAmt = discount / 100;
    // this.itemDetails.disAmt = -(parseFloat(discount) + discount / 100);
    if (
      this.itemDetails.rate != '' &&
      this.itemDetails.qty != '' &&
      this.itemDetails.discountPer != ''
    ) {
      this.itemDetails.disAmt =
        (parseFloat(this.itemDetails.rate) *
          parseFloat(this.itemDetails.qty) *
          parseFloat(discount)) /
        100;
    } else {
      this.itemDetails.disAmt = 0;
    }
  }
  onSchDiscountAmt(schDis: any) {
    this.itemDetails.taxAmt += schDis / 100;
    this.itemDetails.disAmt += -(parseFloat(schDis) + schDis / 100);
  }
  public newItemsList: any = [];
  onAddItem(item: any) {
    // console.log(item);
    // item['totalAmt'] =
    //   parseFloat(this.itemDetails.qty) * parseFloat(this.itemDetails.rate) -
    //   this.itemDetails.disAmt +
    //   item.taxAmt;

    let objectstore = ['qty', 'rate','mrp','itemName'];
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

    this.itemDetails.totalAmt =
      parseFloat(item.rate) - parseFloat(item.disAmt) + parseFloat(item.taxAmt);

    item.itemName = this.itemName;
    if (item['rowInd'] == undefined) {
      this.newItemsList.push(item);
    } else {
      this.newItemsList['rowInd'] = item;
    }

    this.raisePurchaseOrder.totalcgst = 0;
    this.raisePurchaseOrder.totalsgst = 0;
    this.raisePurchaseOrder.tataltaxAmt = 0;
    this.raisePurchaseOrder.totalItemDiscount = 0;
    this.raisePurchaseOrder.totalItemAmount = 0;
    this.raisePurchaseOrder.sgsttaxrate = 0;
    this.raisePurchaseOrder.cgsttaxRate = 0;

    _.forEach(this.newItemsList, (item, ind) => {
      item['itemId'] = ind + 1;
      this.raisePurchaseOrder.totalcgst += item.cgsttaxAmt;
      this.raisePurchaseOrder.totalsgst += item.sgsttaxAmt;
      this.raisePurchaseOrder.tataltaxAmt += item.taxAmt;
      this.raisePurchaseOrder.totalItemDiscount += item.disAmt;
      this.raisePurchaseOrder.totalItemAmount += parseFloat(item.totalAmt);
      this.raisePurchaseOrder.sgsttaxrate += item.sgsttaxrate;
      this.raisePurchaseOrder.cgsttaxRate += item.cgsttaxRate;
    });
    this.itemDetails = JSON.parse(this.emptyItemDetails);
    this.raisePurchaseOrder.poTotal = this.raisePurchaseOrder.totalItemAmount;
  }
  onRateWiseTaxAmt(qty: any) {
   
    if (this.itemDetails.disAmt !== '') {
      this.itemDetails.taxAmt =
        ((parseFloat(this.itemDetails.rate) * parseFloat(qty) -
          parseFloat(this.itemDetails.disAmt)) *
          this.itemDetails.taxRate) /
        100;
    }
    this.itemDetails.cgsttaxAmt =
      (parseFloat(this.itemDetails.rate) * this.itemDetails.cgstTaxRate) / 100;
    this.itemDetails.sgsttaxAmt =
      (parseFloat(this.itemDetails.rate) * this.itemDetails.sgstTaxRte) / 100;
  }

  onPoTotalAmt(poValue: any) {
    this.raisePurchaseOrder.poDiscontAmount = 0;
    console.log('poValue', poValue);

    if (poValue == 'ZLPoDT1') {
      this.raisePurchaseOrder.poDiscountValue =
        parseFloat(this.raisePurchaseOrder.totalItemAmount) *
        (parseFloat(this.raisePurchaseOrder.poDiscountValue) / 100);
      this.raisePurchaseOrder.poDiscontAmount =
        this.raisePurchaseOrder.poDiscountValue;
      this.raisePurchaseOrder.poTotal =
        parseFloat(this.raisePurchaseOrder.totalItemAmount) -
        parseFloat(this.raisePurchaseOrder.poDiscountValue);
    } else {
      this.raisePurchaseOrder.poDiscontAmount =
        this.raisePurchaseOrder.poDiscountValue;
      this.raisePurchaseOrder.poTotal =
        parseFloat(this.raisePurchaseOrder.totalItemAmount) -
        parseFloat(this.raisePurchaseOrder.poDiscontAmount);
    }
  }
  onLoopUp(event: any) {
    console.log('onLoopUp', event);
    this.itemName = event.itemName;
    this.itemDetails.pckUOM = event.packageUOM;
    this.itemDetails.unitUOM = event.unitUOM;
    this.itemDetails.pckSize = event.packageSize;
    this.itemDetails.manufacture = event.manufacture;
    this.itemDetails.stock = event.stock;
    this.itemDetails.allStoreStock = event.allStoreStock;
  }
  onEditSelect(ind: any, row: any) {
    row['rowInd'] = ind;
    this.visible = true;
    this.itemDetails = row;
  }
  onLoopUpAdd(event: any) {
    console.log('event', event);
    this.raisePurchaseOrder.supplier = event.regionstate;
    this.raisePurchaseOrder.supplierAdderss = event.contactaddress;
  }
  onDisPer(Amt: any) {
    if (this.itemDetails.disAmt !== '') {
      this.itemDetails.discountPer =
        (parseFloat(this.itemDetails.disAmt) /
          parseFloat(this.itemDetails.rate)) *
        100;
    } else {
      this.itemDetails.discountPer = '';
      this.itemDetails.disAmt = 0;
    }
  }
  onTransportCharges(ransportCharge: any) {
    // this.raisePurchaseOrder.poTotal="";
    if (ransportCharge == '') {
      this.raisePurchaseOrder.transportationCharges = 0;
    }
    // let disTotal =JSON.parse(JSON.stringify(this.raisePurchaseOrder.poTotal)) ;
    // this.raisePurchaseOrder.poTotal= parseFloat(this.raisePurchaseOrder.poTotal) +parseFloat(ransportCharge) ;
    this.raisePurchaseOrder.poTotal =
      parseFloat(this.raisePurchaseOrder.totalItemAmount) -
      parseFloat(this.raisePurchaseOrder.poDiscontAmount) +
      parseFloat(this.raisePurchaseOrder.transportationCharges);
  }
  async onSaveApproveClick() {
    this.raisePurchaseOrder.approvalStatus='ZLARS11';
    this.onSaveClick();
  }
  onSavePrintClick() {}
}
