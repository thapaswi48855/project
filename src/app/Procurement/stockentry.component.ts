import { Component, ViewChild } from '@angular/core';
import { HeaderComponent } from '../directives/header.component';
import { SavingComponent } from '../directives/saving.component';
import { MasterserviceService } from '../masterService/masterservice.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import * as _ from 'lodash';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-stockentry',
  templateUrl: './stockentry.component.html',
  styleUrls: ['./stockentry.component.css'],
})
export class StockentryComponent {
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

  public stockEntry: any = {
    store: '',
    ponumber: '',
    quantityUom: '',
    supplier: '',
    supplieraddress: '',
    invoiceNo: '',
    invoiceDte: '',
    dueDate: '',
    status: '',
    stockType: '',
    cashPurchase: '',
    poReference: '',
    itemDiscountType: '',
    itemDiscountValue: '',
    remarks: '',
    paymentRemarks: '',
    uploadInvoiceCopy: '',
    purposeOfPurchase: '',
    companyname: '',
    meansTransport: '',
    consignmentNo: '',
    consignmentDate: '',
    seletedItemList: [],
    totalItemSchDiscount: '',
    cgst: '',
    sgst: '',
    gst: '',
    taxAmount: '',
    invDiscountType: '',
    invDiscountValue: '',
    transportCharges: 0,
    invDiscountAmount: '',
    otherCharges: 0,
    roundOff: '',
    debitAmount: '',
    invoiceTotal: '',
    createdt: null,
    createby: '',
    modifydt: null,
    modifyby: '',
    totalcgst: '',
    totalsgst: '',
    tataltaxAmt: '',
    totalItemDiscount: '',
    totalItemAmount: '',
    sgsttaxrate: '',
    cgsttaxRate: '',
    InvDiscountType: '',
    InvDiscountValue: '',
    InvDiscontAmount: '',
    debitAmt: '',
    InvTotal: '',
  };
  public emptyStockEntry = JSON.stringify(this.stockEntry);
  public checked: boolean = false;

  // public storeList: any = [{ label: 'Select one', value: '' }];
  public UOMList: any = [{ label: 'Select one', value: '' }];
  public zeroLevelEntity: any = [];
  public stockTypeList: any = [{ label: 'Select one', value: '' }];
  public discountTypeList: any = [{ label: 'Select one', value: '' }];
  public gridCols = [];
  public newItemList: any = [];
  public storeList: any = [];
  public poDiscountTypeList: any = [];
  public visible = false;
  public purchaseList: any = [];

  public errorMsgs: any = {
    supplierReq: '',
    invoiceNoReq: '',
    invoiceDteReq: '',
    dueDateReq:'',
    itemNameReq: '',
    mrpReq: '',
    rateReq: '',
    qtyReq: '',
  };

  constructor(
    private _service: MasterserviceService,
    private _activatedRoute: ActivatedRoute,
    public _messageService: MessageService
  ) {}

  onGetErrorMsgs(ctrl: any, showToast: any) {
    switch (ctrl) {
      case 'supplier':
        this.errorMsgs.supplierReq =
          this.stockEntry[ctrl] == '' ||
          this.stockEntry[ctrl] == undefined ||
          this.stockEntry[ctrl] == null
            ? this._service.onGetErrorMsgs(ctrl, true, 'Supplier')
            : '';
        break;
      case 'invoiceNo':
        this.errorMsgs.invoiceNoReq =
          this.stockEntry[ctrl] == '' ||
          this.stockEntry[ctrl] == undefined ||
          this.stockEntry[ctrl] == null
            ? this._service.onGetErrorMsgs(ctrl, true, 'Invoice no')
            : '';
        break;
      case 'invoiceDte':
        this.errorMsgs.invoiceDteReq =
          this.stockEntry[ctrl] == '' ||
          this.stockEntry[ctrl] == undefined ||
          this.stockEntry[ctrl] == null
            ? this._service.onGetErrorMsgs(ctrl, true, 'invoice date')
            : '';
        break;
        case 'dueDate':
        this.errorMsgs.dueDateReq =
          this.stockEntry[ctrl] == '' ||
          this.stockEntry[ctrl] == undefined ||
          this.stockEntry[ctrl] == null
            ? this._service.onGetErrorMsgs(ctrl, true, 'due date')
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

    this.gridCols = this._service.getGridColumns('purchaseItemListCols');

    this._service.serGetDataobject('getNewItem', {}).subscribe((dt: any) => {
      console.log(dt);
      this.newItemList = dt.data;
      _.forEach(this.newItemList, (item, ind) => {
        item['selected'] = false;
      });
    });

    this._service
      .serGetDataobject('getStoreMaster', { status: 'ZLS11' })
      .subscribe((dt: any) => {
        this.storeList = dt.data;
      });
    this._service
      .serGetDataobject('getRasiePurchaseOrderMaster', {})
      .subscribe((dt: any) => {
        this.purchaseList = dt.data;
      });

    this._service
      .serGetDataobject('getGeneralMaster', { masterid: 'ZLPoDT' })
      .subscribe((dt: any) => {
        this.poDiscountTypeList = dt.data[0].subMasterData;
      });

    this._service
      .serGetDataobject('getUomCreation', { status: 'A' })
      .subscribe((dt: any) => {
        console.log(dt);
        _.forEach(dt.data, (type, index) => {
          this.UOMList.push({
            label: type.packageUom,
            value: type._id,
          });
        });
      });

    this._service.serGetData('getGeneralMaster').subscribe((dt: any) => {
      this.zeroLevelEntity = dt.data;
      let stockTypeList = _.filter(this.zeroLevelEntity, {
        masterid: 'ZLC32',
      });
      _.forEach(stockTypeList, (ident, index) => {
        this.stockTypeList.push({
          label: ident.mastername,
          value: ident._id,
        });
      });

      let discountTypeList = _.filter(this.zeroLevelEntity, {
        masterid: 'ZLC33',
      });
      _.forEach(discountTypeList, (ident, index) => {
        this.discountTypeList.push({
          label: ident.mastername,
          value: ident._id,
        });
      });
    });

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
  public taxGrpTypeList: any = [];
  public taxSubGrpList: any = [];
  public sgstList: any = [];
  public igstList: any = [];
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

  getMasterData(storeMasterId: any) {
    this._service
      .serGetDataobject('getStockEntryMaster', { _id: storeMasterId })
      .subscribe((dt: any) => {
        console.log('dt', dt);
        this.stockEntry = dt.data[0];
        this.stockEntry['_id'] = this.stockEntry._id;
        this.newItemsList = this.stockEntry.seletedItemList;
        // let aaa = this.stockEntry.seletedItemList.split(',');
        // console.log('aaa', aaa);
        // _.forEach(aaa, (a) => {
        //   let b = _.filter(this.newItemList, { _id: a });
        //   b[0].selected = true;
        // });

        this.isShowEditable = !this.isEditable && this.pageMode != 'NEW';
        console.log('stockEntry', this.stockEntry);
      });
  }

  onBasicUploadAuto(event: any) {
    console.log('event', event);
  }

  onSaveClick() {
    let objectstore = ['supplier','invoiceNo','invoiceDte','dueDate'];
    _.forEach(objectstore, (ctrl) => {
      this.onGetErrorMsgs(ctrl, true);
    });

    console.log('newItemList', this.newItemList);

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
    this.stockEntry.seletedItemList = this.newItemsList;
    let savingJson = this.stockEntry;
    console.log(this.stockEntry);
    this.saving.onSaveJson('Store', 'insertStockEntryMaster', [savingJson]);
    this.pageMode == 'NEW';
    this.onClearClick();
  }
  onClearClick() {
    if (this.pageMode == 'NEW') {
      this.stockEntry = JSON.parse(this.emptyStockEntry);
      this.isEditable = true;
    } else {
      this.isEditable = false;
    }
  }

  onNewItemSelect(event: any) {
    if (event.selected) {
      let a = event._id;
      this.stockEntry.seletedItemList =
        this.stockEntry.seletedItemList == '' ? a : a + ',';
    }
    // this.stockEntry.seletedItemList.push(event._id)
  }
  public centerTaxRate: any = '0';
  // public raisePurchaseOrder: any = {
  //   store: '',
  //   department: '',
  //   quantityUom: 'ZLQU11',
  //   supplier: '',
  //   supplierAdderss: '',
  //   poallowedTo: '',
  //   poDate: '',
  //   enquiryNo: '',
  //   enuiryDate: '',
  //   quotationNo: '',
  //   quotationDate: '',
  //   Reference: '',
  //   creditPeriod: '',
  //   purposeOfPurchase: '',
  //   uploadDocumment: '',
  //   expectedDeliveryDate: '',
  //   remarks: '',
  //   seletedItemList: [],
  //   cgst: 0,
  //   sgst: 0,
  //   gst: 0,
  //   taotaltaxAmt: 0,
  //   totalItemDiscount: 0,
  //   totalItemAmount: 0,
  //   poDiscountType: '',
  //   poDiscountValue: 0,
  //   poDiscontAmount: 0,
  //   roundOff: '',
  //   transportationCharges: 0,
  //   InvTotal: 0,
  //   status: '',
  //   createdt: null,
  //   createby: '',
  //   modifydt: null,
  //   modifyby: '',
  // };
  public itemDetails: any = {
    itemName: '',
    batch: '',
    expiry: '',
    store: '',
    pckSize: '',
    pckUOM: '',
    unitUOM: '',
    mrp: '',
    adjMrp: '',
    rate: '',
    qty: 0,
    bouns: 0,
    discountPer: '',
    discount: '',
    disAmt: 0,
    schDiscountPer: '',
    schDiscount: 0,
    status: '',
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
  // public emptyRaisePurchaseOrder = JSON.stringify(this.raisePurchaseOrder);
  public cgstList: any = [];
  onCgstTaxAmt(cgst: any) {
    let cgstAmt = _.filter(this.cgstList, { _id: cgst });
    if (this.itemDetails.cgstTaxRate != '') {
      this.itemDetails.taxRate -= this.itemDetails.cgstTaxRate;
    }
    this.itemDetails.cgstTaxRate = parseFloat(cgstAmt[0].taxrate);
    this.itemDetails.taxRate += this.itemDetails.cgstTaxRate;
  }
  public stateTaxRate: any = '0';
  onSgstTaxAmt(sgst: any) {
    let sgstAmt = _.filter(this.cgstList, { _id: sgst });
    if (this.itemDetails.sgstTaxRte != '') {
      this.itemDetails.taxRate -= this.itemDetails.sgstTaxRte;
    }
    this.itemDetails.sgstTaxRte = parseFloat(sgstAmt[0].taxrate);
    this.itemDetails.taxRate += this.itemDetails.sgstTaxRte;
  }
  onChangeMrpAmt(mrp: any) {
    this.itemDetails.adjMrp =
      this.itemDetails.mrp - mrp * (this.itemDetails.taxRate / 100);
  }
  // onDiscountAmt(discount: any) {
  //   this.itemDetails.taxAmt = discount / 100;
  //   this.itemDetails.disAmt = -(parseFloat(discount) + discount / 100);
  // }
  // onSchDiscountAmt(schDis: any) {
  //   // this.itemDetails.disAmt
  //   // this.itemDetails.schDiscount
  //   let Amt =
  //     parseFloat(this.itemDetails.rate) -
  //     (parseFloat(this.itemDetails.disAmt) +
  //       parseFloat(this.itemDetails.schDiscount));
  //   // this.itemDetails.taxAmt += schDis / 100;
  //   // this.itemDetails.disAmt += -(parseFloat(schDis) + schDis / 100);
  //   this.itemDetails.taxAmt = Amt * (this.itemDetails.taxRate / 100);
  // }
  public newItemsList: any = [];
  onAddItem(item: any) {
       console.log(item);
    item['totalAmt'] =
      parseFloat(this.itemDetails.qty) * parseFloat(this.itemDetails.rate) -
      this.itemDetails.disAmt +
      item.taxAmt;
    this.newItemsList.push(item);
    // this.raisePurchaseOrder.cgst = 0;
    // this.raisePurchaseOrder.sgst = 0;
    // this.raisePurchaseOrder.taotaltaxAmt = 0;
    // this.raisePurchaseOrder.totalItemDiscount = 0;
    // this.raisePurchaseOrder.totalItemAmount = 0;
    // _.forEach(this.newItemsList, (item, ind) => {
    //   this.raisePurchaseOrder.cgst += item.cgsttaxAmt;
    //   this.raisePurchaseOrder.sgst += item.sgsttaxAmt;
    //   this.raisePurchaseOrder.taotaltaxAmt += item.taxAmt;
    //   this.raisePurchaseOrder.totalItemDiscount += item.disAmt;
    //   this.raisePurchaseOrder.totalItemAmount += item.totalAmt;
    // });
    this.itemDetails = JSON.parse(this.emptyItemDetails);
  }
  // onRateWiseTaxAmt(qty: any) {
  //   this.itemDetails.taxAmt =
  //     ((parseFloat(qty) * parseFloat(this.itemDetails.rate) -
  //       this.itemDetails.disAmt) *
  //       this.itemDetails.mrp) /
  //     100;
  // }

  onPoTotalAmt(poValue: any) {
    // this.raisePurchaseOrder.poDiscontAmount=0;
    // console.log('poValue', poValue);
    // if (poValue == 'ZLPoDT1') {
    //   this.raisePurchaseOrder.poDiscountValue=parseFloat(this.raisePurchaseOrder.totalItemAmount)*(parseFloat(this.raisePurchaseOrder.poDiscountValue)/100)
    //   this.raisePurchaseOrder.poDiscontAmount=this.raisePurchaseOrder.poDiscountValue;
    //   this.raisePurchaseOrder.poTotal=parseFloat(this.raisePurchaseOrder.totalItemAmount)-parseFloat(this.raisePurchaseOrder.poDiscountValue)
    // }else{
    //   this.raisePurchaseOrder.poDiscontAmount=this.raisePurchaseOrder.poDiscountValue
    //   this.raisePurchaseOrder.poTotal=parseFloat(this.raisePurchaseOrder.totalItemAmount)-parseFloat(this.raisePurchaseOrder.poDiscontAmount)
    // }
  }
  onSelectPoNum(poNum: any) {
    let stockDet = _.filter(this.purchaseList, { _id: poNum });
    console.log('stockDet', stockDet);
    this.newItemsList = stockDet[0].purchuseItems;
    this.stockEntry.quantityUom = stockDet[0].quantityUom;
    this.stockEntry.supplier = stockDet[0].supplier;
    this.stockEntry.supplieraddress = stockDet[0].supplierAdderss ;

    //  this.raisePurchaseOrder=stockDet[0];
    //  this.raisePurchaseOrder.cgst = 0;
    //   this.raisePurchaseOrder.sgst = 0;
    //   this.raisePurchaseOrder.taotaltaxAmt = 0;
    //   this.raisePurchaseOrder.totalItemDiscount = 0;
    //   this.raisePurchaseOrder.totalItemAmount = 0;
    //  _.forEach(this.newItemsList, (item, ind) => {
    //   this.raisePurchaseOrder.cgst += item.cgsttaxAmt;
    //   this.raisePurchaseOrder.sgst += item.sgsttaxAmt;
    //   this.raisePurchaseOrder.taotaltaxAmt += item.taxAmt;
    //   this.raisePurchaseOrder.totalItemDiscount += item.disAmt;
    //   this.raisePurchaseOrder.totalItemAmount += item.totalAmt;
    // });
    // console.log(item);
    // item['totalAmt'] =
    //   parseFloat(this.itemDetails.qty) * parseFloat(this.itemDetails.rate) -
    //   this.itemDetails.disAmt +
    //   item.taxAmt;

    // item.itemName = this.itemName;
    // this.newItemsList.push(item);
    this.stockEntry.totalcgst = 0;
    this.stockEntry.totalsgst = 0;
    this.stockEntry.tataltaxAmt = 0;
    this.stockEntry.totalItemDiscount = 0;
    this.stockEntry.totalItemAmount = 0;
    this.stockEntry.sgsttaxrate = 0;
    this.stockEntry.cgsttaxRate = 0;

    _.forEach(this.newItemsList, (item, ind) => {
      item['itemId'] = ind + 1;
      this.stockEntry.totalcgst += item.cgsttaxAmt;
      this.stockEntry.totalsgst += item.sgsttaxAmt;
      this.stockEntry.tataltaxAmt += item.taxAmt;
      this.stockEntry.totalItemDiscount += item.disAmt;
      this.stockEntry.totalItemAmount += parseFloat(item.totalAmt);
      this.stockEntry.sgsttaxrate += item.sgsttaxrate;
      this.stockEntry.cgsttaxRate += item.cgsttaxRate;
    });
  }

  onInvDisAmt(poValue: any) {
    this.stockEntry.InvDiscontAmount = 0;
    console.log('poValue', poValue);
    if (poValue == 'ZLPoDT1') {
      this.stockEntry.InvDiscountValue =
        parseFloat(this.stockEntry.totalItemAmount) *
        (parseFloat(this.stockEntry.InvDiscountValue) / 100);
      this.stockEntry.InvDiscontAmount = this.stockEntry.InvDiscountValue;
      this.stockEntry.InvTotal =
        parseFloat(this.stockEntry.totalItemAmount) -
        parseFloat(this.stockEntry.InvDiscountValue);
    } else {
      this.stockEntry.InvDiscontAmount = this.stockEntry.InvDiscountValue;
      this.stockEntry.InvTotal =
        parseFloat(this.stockEntry.totalItemAmount) -
        parseFloat(this.stockEntry.InvDiscontAmount);
    }
  }
  onEditSelect(ind: any, row: any) {
    row['rowInd'] = ind;
    this.visible = true;
    this.itemDetails = row;
  }
  async onSaveApproveClick() {
    this.stockEntry.approvalStatus = 'ZLARS11';
    this.onSaveClick();
  }


  


  onSavePrintClick() {}
  onAddItemClick(item: any) {
    let objectstore = ['qty', 'rate', 'mrp', 'itemName'];
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
    // item.itemName = this.itemName;
    item.totalAmt =
      parseFloat(item.rate) -
      (parseFloat(item.schDiscount) + parseFloat(item.disAmt)) +
      parseFloat(item.taxAmt);
    item.itemName = this.itemName;
    if (item['rowInd'] == undefined) {
      this.newItemsList.push(item);
    } else {
      this.newItemsList['rowInd'] = item;
    }

    this.stockEntry.totalcgst = 0;
    this.stockEntry.totalsgst = 0;
    this.stockEntry.tataltaxAmt = 0;
    this.stockEntry.totalItemDiscount = 0;
    this.stockEntry.totalItemAmount = 0;
    this.stockEntry.sgsttaxrate = 0;
    this.stockEntry.cgsttaxRate = 0;

    _.forEach(this.newItemsList, (item, ind) => {
      item['itemId'] = ind + 1;
      this.stockEntry.totalcgst += item.cgsttaxAmt;
      this.stockEntry.totalsgst += item.sgsttaxAmt;
      this.stockEntry.tataltaxAmt += item.taxAmt;
      this.stockEntry.totalItemDiscount += item.disAmt;
      this.stockEntry.totalItemAmount += parseFloat(item.totalAmt);
      this.stockEntry.sgsttaxrate += item.sgsttaxrate;
      this.stockEntry.cgsttaxRate += item.cgsttaxRate;
    });
  }
  onTransportCharges() {
    this.stockEntry.InvTotal =
      parseFloat(this.stockEntry.InvTotal) +
      parseFloat(this.stockEntry.transportCharges);
  }
  onOtherCharges() {
    this.stockEntry.InvTotal =
      parseFloat(this.stockEntry.InvTotal) +
      parseFloat(this.stockEntry.otherCharges);
  }
  onRateWiseTaxAmt(qty: any) {
    if (this.itemDetails.disAmt !== '') {
      this.itemDetails.taxAmt =
        ((parseFloat(this.itemDetails.rate) * parseFloat(qty) -
          (parseFloat(this.itemDetails.disAmt) +
            parseFloat(this.itemDetails.schDiscount))) *
          this.itemDetails.taxRate) /
        100;
    }
    this.itemDetails.cgsttaxAmt =
      (parseFloat(this.itemDetails.rate) * this.itemDetails.cgstTaxRate) / 100;
    this.itemDetails.sgsttaxAmt =
      (parseFloat(this.itemDetails.rate) * this.itemDetails.sgstTaxRte) / 100;
  }

  onDiscountAmt(discount: any) {
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
    if (
      this.itemDetails.rate != '' &&
      this.itemDetails.qty != '' &&
      this.itemDetails.schDiscountPer != ''
    ) {
      this.itemDetails.disAmt =
        (parseFloat(this.itemDetails.rate) *
          parseFloat(this.itemDetails.qty) *
          parseFloat(schDis)) /
        100;
    } else {
      this.itemDetails.schDiscount = 0;
    }
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

  onSchDisPer(Amt: any) {
    if (this.itemDetails.schDiscount !== '') {
      this.itemDetails.schDiscountPer =
        (parseFloat(this.itemDetails.schDiscount) /
          parseFloat(this.itemDetails.rate)) *
        100;
    } else {
      this.itemDetails.schDiscountPer = '';
      this.itemDetails.schDiscount = 0;
    }
  }
  public itemName: any = '';
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
}
